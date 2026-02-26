"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

interface GalleryImage {
  id: number;
  beforeImage: string;
  afterImage: string;
  alt: string;
}

const HairBeforeAfterGallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages: GalleryImage[] = [
        {
      id: 3,
      beforeImage: "d99d1d2c-9b97-47be-8e3c-0244feee1290.jpg",
      afterImage: "",
      alt: "Mid-scalp Restoration"
    },
    {
      id: 1,
      beforeImage: "1on.png",
      afterImage: "",
      alt: "Crown Restoration"
    },

   
    {
      id: 5,
      beforeImage: "4.png",
      afterImage: "",
      alt: "Hair Growth Results"
    },
     {
      id: 4,
      beforeImage: "fourth.jpg",
      afterImage: "",
      alt: "Beard Restoration"
    },
  ];

  const stats = [
    { number: "1,000+", label: "Successful Hair Transplants" },
    { number: "5,000+", label: "Hair Patients Treated" },
    { number: "4.9★", label: "Google Rated Clinic" }
  ];

  useEffect(() => {
    // Animation code (same as before)
    if (cardRefs.current.length > 0) {
      gsap.fromTo(
        cardRefs.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      cardRefs.current.forEach((card) => {
        if (card) {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -8,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });
    }

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mouseenter", () => {});
          card.removeEventListener("mouseleave", () => {});
        }
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + getVisibleCards() >= galleryImages.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - getVisibleCards() : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3; // Default to 3
    if (window.innerWidth < 640) return 1; // Mobile: 1 image
    if (window.innerWidth < 1024) return 2; // Tablet: 2 images
    return 3; // Desktop/Large screens: 3 images
  };

  const getVisibleImages = () => {
    const visibleCount = getVisibleCards();
    let images = [];
    
    // If we have more images than visible count, use carousel logic
    if (galleryImages.length > visibleCount) {
      for (let i = 0; i < visibleCount; i++) {
        const index = (currentIndex + i) % galleryImages.length;
        images.push(galleryImages[index]);
      }
    } else {
      // If we have 3 or fewer images, show all of them
      images = [...galleryImages];
    }
    
    return images;
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>
      <div
        style={{ backgroundColor: "white", fontFamily: "'Outfit', sans-serif" }}
        className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h2 
            className="text-4xl max-[470px]:text-[30px] max-[325px]:text-[25px] font-bold text-center mb-4 text-[#180109] relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
          >
            <span className="relative inline-block">
              High-quality Before & After Gallery
            </span>
          </motion.h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#180109] text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4">
            Crown, Hairline, Mid-scalp, Beard Restoration
          </p>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-[#7b5f43]/5 to-[#a78c6d]/10 border border-[#7b5f43]/20"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#7b5f43] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-[#180109] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons - Only show if we have more images than visible */}
            {galleryImages.length > getVisibleCards() && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#7b5f43]/80 hover:bg-[#7b5f43] text-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-[#7b5f43]"
                  aria-label="Previous images"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#7b5f43]/80 hover:bg-[#7b5f43] text-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-[#7b5f43]"
                  aria-label="Next images"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Carousel - Adjusted for 3 images */}
            <div
              ref={carouselRef}
              className={`flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 px-8 sm:px-12 ${
                galleryImages.length <= getVisibleCards() ? 'justify-center' : ''
              }`}
            >
              {getVisibleImages().map((image, index) => (
                <div
                  key={`${image.id}-${currentIndex + index}`}
                  ref={addToRefs}
                  className="flex-shrink-0 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl transform transition-all duration-300 bg-[#180109] border border-[#7b5f43]"
                  style={{
                    width: '100%',
                    flex: `0 0 ${
                      getVisibleCards() === 1 ? '280px' : 
                      getVisibleCards() === 2 ? 'calc(50% - 0.5rem)' : 
                      'calc(33.333% - 0.666rem)'
                    }`,
                    maxWidth: getVisibleCards() === 1 ? '280px' : 
                              getVisibleCards() === 2 ? '500px' : 
                              '400px',
                    height: 'auto',
                  }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-full">
                    <img
                      src={image.beforeImage}
                      alt={`Before - ${image.alt}`}
                      className="w-full h-full object-cover"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator - Only show if we have more images than visible */}
            {galleryImages.length > getVisibleCards() && (
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {Array.from({ length: Math.ceil(galleryImages.length / getVisibleCards()) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * getVisibleCards())}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / getVisibleCards()) === index 
                        ? 'bg-[#7b5f43] scale-125' 
                        : 'bg-[#a78c6d] opacity-50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#hairform">
              <button className="bg-[#7b5f43] cursor-pointer hover:bg-[#6b4f33] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book Consultation
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HairBeforeAfterGallery;