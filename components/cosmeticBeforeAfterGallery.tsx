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

const CosmeticBeforeAfterGallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data - replace with your actual images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      beforeImage: "one.jpg",
      afterImage: "",
      alt: "Crown Restoration"
    },
    {
      id: 2,
      beforeImage: "two.jpg",
      afterImage: "",
      alt: "Hairline Transformation"
    },
    {
      id: 3,
      beforeImage: "three.jpg",
      afterImage: "",
      alt: "Mid-scalp Restoration"
    },
    {
      id: 4,
      beforeImage: "four.jpg",
      afterImage: "",
      alt: "Beard Restoration"
    },
  ];

  const stats = [
    { number: "1,000+", label: "Successful Cosmetic Surgeries" },
    { number: "4.9★", label: "Google Rated Clinic" }
  ];

  useEffect(() => {
    // Initial card animations
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

      // Hover animations
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

    // Cleanup
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
    if (typeof window === "undefined") return 3;
    return window.innerWidth < 768 ? 1 : 3;
  };

  const getVisibleImages = () => {
    const visibleCount = getVisibleCards();
    let images = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      images.push(galleryImages[index]);
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
            Liposuction, Rhinoplasty, Gynecomastia, Blepharoplasty
          </p>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
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
            {/* Navigation Buttons */}
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

            {/* Carousel */}
            <div
              ref={carouselRef}
              className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 px-8 sm:px-12"
            >
              {getVisibleImages().map((image, index) => (
                <div
                  key={`${image.id}-${currentIndex + index}`}
                  ref={addToRefs}
                  className="flex-shrink-0 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl transform transition-all duration-300 bg-[#180109] border border-[#7b5f43]"
                  style={{
                    width: getVisibleCards() === 1 ? '280px' : '280px',
                    flex: getVisibleCards() === 1 ? '0 0 auto' : '1',
                    maxWidth: getVisibleCards() === 1 ? '280px' : '320px',
                  }}
                >
                  {/* Before Image */}
                  <div className="relative group">
                    <img
                      src={image.beforeImage}
                      alt={`Before - ${image.alt}`}
                      className="w-full h-48 sm:h-64 lg:h-80 max-[470px]:h-[300px] object-cover"
                    />
                    {/* Overlay Label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#180109] to-transparent p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[#f7deba] font-semibold text-sm sm:text-base">Before</span>
                        <div className="w-2 h-2 rounded-full bg-[#7b5f43] animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
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
          </div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#cosmeticform">
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

export default CosmeticBeforeAfterGallery;