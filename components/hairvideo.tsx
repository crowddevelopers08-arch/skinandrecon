import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const Results = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const videos = [
    {
      title: "Patient Experiences",
      src: "/mobvideofour.mp4",
      thumbnail: "/thumbnails/patient-thumbnail.jpg"
    },
    {
      title: "Recovery Journeys",
      src: "/mobvideofour.mp4",
      thumbnail: "/thumbnails/recovery-thumbnail.jpg"
    },
    {
      title: "Graft Density Explanations",
      src: "/mobvideofour.mp4",
      thumbnail: "/thumbnails/graft-thumbnail.jpg"
    },
    {
      title: "Doctor Interaction Clips",
      src: "/mobvideofour.mp4",
      thumbnail: "/thumbnails/doctor-thumbnail.jpg"
    }
  ];

  return (
    <>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    <section className="py-12 md:py-12 lg:py-12 max-[470px]:py-6 bg-background"style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center max-[470px]:mb-6 mb-10 md:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Real Patients. Real Transformations. Real Confidence.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
            From receding hairlines and thinning crowns to patchy beards, our patients trust Skin & Recon for natural-looking restorations that blend seamlessly with their existing hair. Each transformation is the result of expert diagnosis, precise graft placement, and personalised aftercare—giving patients thicker density, youthful framing, and confidence they thought was lost.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 max-[470px]:mb-6 md:mb-16">
          {videos.map((video, index) => (
            <ClickVideoCard 
              key={index}
              video={video}
              index={index}
            />
          ))}
        </div>

        <div className="text-center px-4 sm:px-0">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-[#7b5f43] hover:bg-[#6a5138] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            Start Your Transformation
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};

// Global state to track currently playing video
let currentlyPlayingIndex: number | null = null;
const videoRefs: (HTMLVideoElement | null)[] = [];

// Click Video Card Component - Only one video plays at a time
const ClickVideoCard = ({ video, index }: { video: { title: string; src: string; thumbnail: string }, index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Store video reference globally
  if (videoRef.current && !videoRefs.includes(videoRef.current)) {
    videoRefs[index] = videoRef.current;
  }

  const stopAllOtherVideos = (currentIndex: number) => {
    videoRefs.forEach((ref, i) => {
      if (ref && i !== currentIndex) {
        ref.pause();
        ref.currentTime = 0;
        
        // Dispatch custom event to notify other components to update their state
        const event = new CustomEvent('videoStopped', { detail: { index: i } });
        document.dispatchEvent(event);
      }
    });
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        // Pause current video
        videoRef.current.pause();
        setIsPlaying(false);
        currentlyPlayingIndex = null;
      } else {
        // Stop all other videos first
        stopAllOtherVideos(index);
        
        // Play current video
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          currentlyPlayingIndex = index;
        }).catch(error => {
          console.log("Video play failed:", error);
        });
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    currentlyPlayingIndex = null;
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Listen for video stopped events from other components
  useState(() => {
    const handleVideoStopped = (event: CustomEvent) => {
      if (event.detail.index === index) {
        setIsPlaying(false);
      }
    };

    document.addEventListener('videoStopped', handleVideoStopped as EventListener);
    
    return () => {
      document.removeEventListener('videoStopped', handleVideoStopped as EventListener);
    };
  });

  return (
    <Card 
      className="group relative overflow-hidden cursor-pointer border-border hover:shadow-xl transition-all duration-300 bg-transparent"
    >
      {/* Video Container */}
      <div className="relative aspect-[4/5] sm:aspect-[4/5] md:aspect-[4/5] bg-transparent">
        {/* Video Element - Clean background */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover bg-transparent"
          poster={video.thumbnail}
          muted
          loop={false}
          onEnded={handleVideoEnd}
          preload="metadata"
          onClick={togglePlay}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Overlay - Shows when not playing */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-transparent cursor-pointer"
            onClick={togglePlay}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-3 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-center px-2 text-white bg-black/50 backdrop-blur-sm rounded-lg py-1">
              {video.title}
            </p>
          </div>
        )}

        {/* Pause Button - Shows when playing */}
        {isPlaying && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-transparent cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
            onClick={togglePlay}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white" />
            </div>
          </div>
        )}

        {/* Play/Pause Indicator */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
          {isPlaying ? "Playing" : "Click to play"}
        </div>
      </div>
    </Card>
  );
};

export default Results;