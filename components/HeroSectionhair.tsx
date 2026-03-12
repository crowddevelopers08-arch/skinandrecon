import React, { useRef, useEffect } from 'react';

const HeroSectionhair = () => {        
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
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl w-full py-12 lg:py-12 max-[470px]:py-8 xl:py-12">
            <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className='text-center lg:text-left'>
                    {/* Badge */}
                    <div className="inline-flex items-center px-3 py-1.5 mb-4 bg-[#7b5f43] rounded-full max-w-md mx-auto lg:mx-0 lg:max-w-full">
                        <span className="text-xs font-normal text-white sm:text-sm md:text-base leading-tight">
                            Over 90% Graft-Survival Rate | Advanced FUE & DHI | Performed by Dual Specialists 
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-2xl font-normal text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                        Regain a Fuller, Natural Hairline with Bangalore's Trusted Hair Transplant Experts
                    </h1>
                    
                    {/* Video Section - Mobile (under 470px) */}
                    <div className="relative max-[470px]:block hidden my-6">
                        <div className="relative w-full rounded-xl overflow-hidden max-w-md mx-auto shadow-lg">
                            <video
                                ref={videoRef}
                                className="w-full h-[380px] object-cover rounded-xl"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                poster="/video-poster1.jpg"
                            >
                                <source src="https://ik.imagekit.io/nlpkmjblv/public/public/hero2.mp4?tr=orig" type="video/mp4" />
                                <source src="https://ik.imagekit.io/nlpkmjblv/public/public/hero2.mp4?tr=orig" type="video/quicktime" />
                                <source src="https://ik.imagekit.io/nlpkmjblv/public/public/hero2.mp4?tr=orig" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    
                    <div className="mt-6 sm:mt-8 lg:mt-8">
                        <div className="relative inline-flex items-center justify-center group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-[#7b5f43] group-hover:shadow-lg group-hover:shadow-[#7b5f43]/50"></div>
                            <a href="#hairform" className="relative inline-flex items-center justify-center px-6 py-3 text-base font-normal text-white bg-[#7b5f43] border border-transparent rounded-full sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl" role="button"> 
                                Book Consultation 
                            </a>
                        </div>
                    </div>
                </div>

                {/* Video Section - Desktop (above 470px) */}
                <div className="relative order-first lg:order-last max-[470px]:hidden">
                    <div className="relative w-full rounded-xl overflow-hidden max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto shadow-2xl">
                        <video
                            ref={videoRef}
                            className="w-full h-[500px] object-cover rounded-xl"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster="/video-poster1.jpg"
                        >
                            <source src="https://ik.imagekit.io/nlpkmjblv/public/public/hero2.mp4?tr=orig" type="video/mp4" />
                            <source src="https://ik.imagekit.io/nlpkmjblv/public/public/hero2.mp4?tr=orig" type="video/quicktime" />
                            <source src="https://ik.imagekit.io/nlpkmjblv/public/public/hero2.mp4?tr=orig" type="video/webm" />
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
export default HeroSectionhair;