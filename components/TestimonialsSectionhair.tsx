import { Card } from "@/components/ui/card";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const HairTestimonials = () => {
  const testimonials = [
    {
      text: "Excellent experience.I underwent a hair transplant here, and the entire process was flawless. Dr. Shruthi and Dr. Rakesh were highly professional, meticulous, and reassuring throughout. The procedure was smooth and I am extremely happy with the service i recieved and the results have been outstanding. Highly recommended.",
      author: "Ihjas Ismail."
    },
    {
      text: "After some research, I decided to get a hair treatment done here.I was advised by Dr. Shruthi, who gave me helpful suggestions, style advice, and clear expectations about the timeline. So, I went ahead with the plan.All the staff here are extremely knowledgeable and very friendly.I'm very happy with the results. Highly recommended! +1",
      author: "koushik."
    },
    {
      text: "I had my hair transplantation about a year ago and the results are amazing. Dr Shruti has done a wonderful job and made me feel very comfortable and explained everything very well.",
      author: "Yashas Manjunath."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Determine how many cards to show based on screen size
  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3; // lg screens
    if (window.innerWidth >= 640) return 2;  // sm screens
    return 1; // xs screens
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prepare infinite testimonials - add clones at both ends
  const infiniteTestimonials = [
    ...testimonials.slice(-cardsToShow), // Add last items at beginning
    ...testimonials,
    ...testimonials.slice(0, cardsToShow), // Add first items at end
  ];

  const totalSlides = infiniteTestimonials.length;

  // Handle jump to clone position without animation
  useEffect(() => {
    if (currentIndex === 0) {
      // Jump to real position (in the middle) without animation
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(testimonials.length);
      }, 50);
    }
    if (currentIndex === totalSlides - cardsToShow) {
      // Jump to real position (in the middle) without animation
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(cardsToShow);
      }, 50);
    }
  }, [currentIndex, testimonials.length, totalSlides, cardsToShow]);

  // Re-enable transition after jump
  useEffect(() => {
    if (!transitionEnabled) {
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
    }
  }, [transitionEnabled]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsToShow]);

  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1);
  };

  const goToSlide = (index: number) => {
    // Map the dot index to the real position in infinite array
    const realIndex = index + cardsToShow;
    setCurrentIndex(realIndex);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      
      <section 
        className="py-12 md:py-12 lg:py-12 max-[470px]:py-6 bg-background relative overflow-hidden"
        style={{fontFamily: "'Outfit', sans-serif"}}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-12 max-[470px]:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
              What Our Patients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-[#7b5f43] text-[#7b5f43]" 
                />
              ))}
            </div>
            <p className="text-muted-foreground text-sm sm:text-base">
              4.9 out of 5 based on 500+ reviews
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-white/80 hover:bg-white border border-[#7b5f43]/20 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#7b5f43] group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-white/80 hover:bg-white border border-[#7b5f43]/20 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#7b5f43] group-hover:scale-110 transition-transform" />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                  transition: transitionEnabled ? 'transform 500ms ease-in-out' : 'none'
                }}
              >
                {infiniteTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${100 / cardsToShow}%` }}
                  >
                    <Card 
                      className="p-4 sm:p-6 border-border bg-card hover:shadow-lg transition-all duration-300 relative group h-full"
                    >
                      <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#7b5f43]/30 mb-3 sm:mb-4 group-hover:text-[#7b5f43]/50 transition-colors" />
                      <p className="text-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <p className="text-sm font-semibold text-[#7b5f43]">
                        — {testimonial.author}
                      </p>
                      <div className="flex gap-0.5 sm:gap-1 mt-2 sm:mt-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-3 h-3 sm:w-4 sm:h-4 fill-[#7b5f43] text-[#7b5f43]" 
                          />
                        ))}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator - Only for real testimonials */}
          <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  ((currentIndex - cardsToShow) % testimonials.length) === index
                    ? 'bg-[#7b5f43] scale-125' 
                    : 'bg-[#7b5f43]/30 hover:bg-[#7b5f43]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HairTestimonials;