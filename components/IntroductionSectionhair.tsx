import React from 'react';

const HairNavbar = () => {
    return (
        <header className="py-4 bg-white sm:py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="shrink-0">
                        <a href="#" className="flex">
                            <img
                                src="/skinandreconlogo.png"
                                alt="Brand Logo"
                                className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-18 object-contain"
                            />
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Book Consultation Button - Hidden on mobile */}
                        <div className="relative hidden md:inline-flex group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-[#7b5f43] group-hover:shadow-lg group-hover:shadow-[#7b5f43]/50"></div>
                            <a href="#hairform" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-[#7b5f43] border border-transparent rounded-full" role="button"> 
                                Book Consultation
                            </a>
                        </div>

                        {/* Call Button - Always visible */}
                        <div className="relative md:items-center md:justify-center md:inline-flex group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-[#7b5f43] group-hover:shadow-lg group-hover:shadow-[#7b5f43]/50"></div>
                            <a href="tel:6361417399" className="relative inline-flex items-center justify-center px-6 py-2 text-base max-[470px]:text-[15px] font-normal text-white bg-[#7b5f43] border border-transparent rounded-full" role="button"> 
                                +91 6361417399 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HairNavbar;