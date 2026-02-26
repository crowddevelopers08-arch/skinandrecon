"use client";
import { Card } from "@/components/ui/card";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const CosmeticTestimonials = () => {
  const testimonials = [
    {
      text: "I approached Dr. Rakesh for my mother's lipoma surgery. He patiently explained every detail, addressed all our concerns, and instilled confidence in us before the surgery. The entire medical team was caring and attentive both before and after the procedure. Dr. Rakesh is extremely friendly, approachable, and professional. Thank you, doctor — I highly recommend him.",
      author: "Devendra Reddy."
    },
    {
      text: "I had a wonderful experience at Skin & Recon. The team was very attentive, explained every step in detail, and made me feel comfortable. The results of my treatment were better than expected. Highly recommended for anyone looking for cosmetic care",
      author: "Divya B.G."
    },
    {
      text: "Dr.Shruthi C is one of the experienced doctors in Bangalore. Who has incredible knowledge in her field of expertise. I had severe acne and doctor Shruthi has treated me very well. Doctor's Very kind , very professional. I highly recommend Skin & Recon for anyone with any skin related issues.",
      author: "pruthvi john."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Create exact replicas for infinite loop
  const clonedTestimonials = [
    ...testimonials.slice(-cardsToShow), // Last cards
    ...testimonials,                     // Original array
    ...testimonials,                     // Copy for seamless scroll
    ...testimonials.slice(0, cardsToShow) // First cards
  ];

  const totalSlides = clonedTestimonials.length;

  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3; // lg screens
    if (window.innerWidth >= 640) return 2;  // sm screens
    return 1; // xs screens
  };

  useEffect(() => {
    const handleResize = () => {
      const newCardsToShow = getCardsToShow();
      setCardsToShow(newCardsToShow);
      // Reset to middle of original testimonials when resizing
      setCurrentIndex(testimonials.length);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, [testimonials.length]);

  // Initialize current index to middle section
  useEffect(() => {
    setCurrentIndex(testimonials.length);
  }, [testimonials.length]);

  // Handle infinite loop
  useEffect(() => {
    if (currentIndex === 0) {
      // Jump to the middle section (without animation) when at start
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(testimonials.length);
      }, 500);
    } else if (currentIndex >= testimonials.length * 2) {
      // Jump to the middle section (without animation) when at end
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(testimonials.length);
      }, 500);
    } else {
      setTransitionEnabled(true);
    }
  }, [currentIndex, testimonials.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index + testimonials.length);
  };

  // Calculate which original slide is currently displayed
  const getActualSlideIndex = () => {
    if (currentIndex < testimonials.length) {
      return currentIndex;
    } else if (currentIndex >= testimonials.length * 2) {
      return currentIndex - testimonials.length * 2;
    }
    return currentIndex - testimonials.length;
  };

  const actualSlideIndex = getActualSlideIndex();

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
          <div className="relative" ref={carouselRef}>
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
                {clonedTestimonials.map((testimonial, index) => (
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

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  actualSlideIndex === index
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

export default CosmeticTestimonials;