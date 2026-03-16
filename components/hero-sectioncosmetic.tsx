"use client";
import React, { useRef, useEffect } from 'react';

const HeroSectioncosmetic = () => {        
    const videoRef = useRef(null);

    // Auto-play the video on mount
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
      <>
       <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
        <div style={{fontFamily: "'Outfit', sans-serif"}}>
    
    <section className="relative flex items-center overflow-hidden bg-black w-full">
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl w-full py-8 lg:py-12 xl:py-12">
            <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
                <div className='text-center lg:text-left'>
                    {/* Badge - Enhanced Design */}
                    <div className="inline-flex items-center px-3 py-1.5 mb-4 bg-gradient-to-r from-[#7b5f43] to-[#9d7e5a] rounded-full shadow-lg max-w-md mx-auto lg:mx-0 lg:max-w-full border border-[#9d7e5a]">
                        <div className="flex items-center space-x-1.5">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-white sm:text-sm leading-tight">
                                5,000+ Transformations | US-FDA Approved Tools
                            </span>
                        </div>
                    </div>

                    {/* Headline - Enhanced Typography */}
                    <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Refine Your Face & Body with Bangalore's <span className="text-transparent bg-gradient-to-r from-[#7b5f43] to-[#d4b896] bg-clip-text">Leading</span> Cosmetic Surgery Specialists
                    </h1>
                    
                    {/* Video Section - Mobile (under 470px) */}
                    <div className="relative lg:hidden my-6">
                        <div className="relative w-full rounded-xl overflow-hidden max-w-md mx-auto shadow-lg">
                            <video
                                ref={videoRef}
                                className="w-full h-[380px] object-cover rounded-xl"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                poster="/video-poster2.jpg"
                            >
                                <source src="https://ik.imagekit.io/sa0fw9cfy/skinandreconethree.mp4" type="video/mp4" />
                                <source src="https://ik.imagekit.io/sa0fw9cfy/skinandreconethree.mp4" type="video/quicktime" />
                                <source src="https://ik.imagekit.io/sa0fw9cfy/skinandreconethree.mp4" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    
                    {/* Subheadline - Enhanced Design */}
                    <div className="mt-4 lg:mt-6 max-w-2xl mx-auto lg:mx-0">
                        <p className="text-base text-gray-200 sm:text-lg md:text-xl lg:text-lg leading-relaxed font-light">
                            Transform your <span className="font-semibold text-white">nose, chest, eyelids</span> or <span className="font-semibold text-white">body contours</span> with safe, precise and natural-looking results
                        </p>
                        
                        {/* Features List */}
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-center lg:justify-start">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-4 h-4 text-[#7b5f43]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-300 text-sm">Dual-expert Dermatology & Plastic Surgery</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-4 h-4 text-[#7b5f43]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-300 text-sm">Fully Equipped Surgical Theatre</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-4 h-4 text-[#7b5f43]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-300 text-sm">Natural-looking & Safe Results</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* CTA Section - Enhanced */}
                    <div className="mt-6 sm:mt-8 lg:mt-8">
                        <div className="relative inline-flex items-center justify-center group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-[#7b5f43] group-hover:shadow-lg group-hover:shadow-[#7b5f43]/50"></div>
                            <a href="#cosmeticform" className="relative inline-flex items-center justify-center px-6 py-3 text-base font-normal text-white bg-[#7b5f43] border border-transparent rounded-full sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl" role="button"> 
                                Book Consultation 
                            </a>
                        </div>
                    </div>
                </div>

                {/* Video Section - Desktop (above 470px) */}
                <div className="relative order-first lg:order-last hidden lg:block">
                    <div className="relative w-full rounded-xl overflow-hidden max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto shadow-2xl">
                        <video
                            ref={videoRef}
                            className="w-full h-[500px] object-cover rounded-xl"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster="/video-poster2.jpg"
                        >
                            <source src="https://ik.imagekit.io/sa0fw9cfy/skinandreconethree.mp4" type="video/mp4" />
                            <source src="https://ik.imagekit.io/sa0fw9cfy/skinandreconethree.mp4" type="video/quicktime" />
                            <source src="https://ik.imagekit.io/sa0fw9cfy/skinandreconethree.mp4" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</>
    )
}
export default HeroSectioncosmetic;