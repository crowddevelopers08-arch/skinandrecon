"use client";
import { useState, useEffect } from 'react';

const Hairdoctor = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const initTooltips = () => {
      console.log('Tooltips initialized');
    };
    
    initTooltips();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div 
      className={`font-sans antialiased leading-normal tracking-wide bg-cover transition-colors duration-300 ${
        isDarkMode ? 'text-gray-100 bg-gray-900' : 'text-gray-900 bg-white'
      }`}
      style={{ backgroundColor: "#f4f4f4", fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          
          {/* Main Content Card */}
          <div 
            className={`w-full lg:w-3/5 rounded-xl shadow-xl backdrop-blur-sm bg-opacity-95 transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              
              {/* Mobile Image - Hidden on desktop */}
              <div className="block lg:hidden flex justify-center mb-8">
                <div className="relative w-full max-w-[400px] h-[360px] sm:h-[420px] rounded-lg overflow-hidden shadow-lg border-2 border-[#7b5f43]">
                  <img 
                    src="both-doctors.jpg" 
                    alt="Dr. Shruthi Chikkaiah and Dr. Rakesh Koudki - Hair Transplant Specialists"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Header Section - Left aligned for mobile */}
              <div className="text-left mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7b5f43] mb-3 leading-tight">
                  Meet the Experts Behind Your Hair Transformation
                </h1>
                <div className="w-20 h-0.5 bg-[#7b5f43] opacity-80"></div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className={`text-base sm:text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  At Skin & Recon, your hair restoration journey is guided by two leading specialists: <strong>Dr. Shruthi Chikkaiah</strong>, a Hair transplant specialist with deep expertise in medical and surgical treatments, and <strong>Dr. Rakesh Koudki</strong>, a double board-certified plastic surgeon specializing in advanced hair transplant techniques. Together, they bring comprehensive care that addresses both medical and surgical aspects of hair loss.
                </p>
              </div>

              {/* Doctors Profile Section */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                  {/* Dr. Shruthi */}
                  <div className="flex-1 text-left">
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#7b5f43] mb-2">
                        Dr. Shruthi Chikkaiah
                      </h3>
                      <p className={`text-sm sm:text-base font-semibold ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-800'
                      }`}>
                        MBBS, MD, FRGUHS
                      </p>
                      <p className={`text-sm sm:text-base font-medium mt-1 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Hair transplant specialist
                      </p>
                    </div>
                  </div>
                  
                  {/* Dr. Rakesh */}
                  <div className="flex-1 text-left">
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#7b5f43] mb-2">
                        Dr. Rakesh Koudki
                      </h3>
                      <p className={`text-sm sm:text-base font-semibold ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-800'
                      }`}>
                        MBBS, MS, MCh, FACS
                      </p>
                      <p className={`text-sm sm:text-base font-medium mt-1 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Consultant Plastic, Cosmetic & Reconstructive Surgeon
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience Badge - Left aligned for mobile */}
                <div className="text-left mb-6">
                  <div className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-amber-100 border border-amber-200 max-w-md">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <p className={`text-base sm:text-lg font-bold ${
                        isDarkMode ? 'text-gray-800' : 'text-gray-800'
                      }`}>
                        20+ Years Combined Experience
                      </p>
                      <p className={`text-xs sm:text-sm ${
                        isDarkMode ? 'text-gray-700' : 'text-gray-600'
                      }`}>
                        International training in aesthetic medicine & micro-surgical techniques
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Image Section */}
          <div className="hidden lg:flex w-full lg:w-2/5 justify-center items-center">
            <div className="relative w-full h-[380px] lg:h-[450px] xl:h-[500px] rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="both-doctors.jpg" 
                alt="Dr. Shruthi Chikkaiah and Dr. Rakesh Koudki - Hair Transplant Specialists"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hairdoctor;