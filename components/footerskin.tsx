import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footerskin() {
  return (
    <>
     <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
    <footer className="py-16 max-[470px]:py-8 bg-gradient-to-br from-[#0d0d0d] via-gray-900 to-[#0d0d0d] relative overflow-hidden"style={{fontFamily: "'Outfit', sans-serif"}}>
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c99500]/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c99500]/5 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 max-[470px]:gap-4 gap-8 lg:gap-12 text-white">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
                <img  className="w-[200px] h-[60px] max-[768px]:w-[150px] max-[768px]:h-[50px] max-[480px]:w-[120px] max-[480px]:h-[40px]" src="bglogo.png" alt="logo" />
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
               Bangalore’s most trusted destination for advanced skin, beauty, and hair treatments — expert care with visible, lasting results.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-black text-xl text-[#c99500]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#c99500]/20 rounded-full flex items-center justify-center group-hover:bg-[#c99500]/30 transition-colors duration-300 flex-shrink-0 mt-1">
                  <Phone size={18} className="text-[#c99500]" />
                </div>
                <span className="text-base lg:text-lg">+91 6361417399</span>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#c99500]/20 rounded-full flex items-center justify-center group-hover:bg-[#c99500]/30 transition-colors duration-300 flex-shrink-0 mt-1">
                  <Mail size={18} className="text-[#c99500]" />
                </div>
                <span className="text-base lg:text-lg break-all">sculptmaxillo.clinic@gmail.com</span>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#c99500]/20 rounded-full flex items-center justify-center group-hover:bg-[#c99500]/30 transition-colors duration-300 flex-shrink-0 mt-1">
                  <MapPin size={18} className="text-[#c99500]" />
                </div>
                <span className="text-base lg:text-lg">
                  315, Sapthagiri 60 Feet, Health Layout, Chandrashekhara Layout, 
                  Annapurneshwari Nagar, Bengaluru, Karnataka 560091, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-black text-xl text-[#c99500]">Quick Links</h4>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Dr. Priyanka", href: "#doctor" },
                { name: "Skin treatments", href: "#treatment" },
                { name: "Patient Stories", href: "#testimonials" }
              ].map((link, index) => (
                <div key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-[#c99500] transition-colors duration-300 text-base font-medium hover:translate-x-2 transform transition-transform duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 max-[470px]:mt-6 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left text-sm lg:text-base">
              &copy; 2025 Sculpt Maxillofacial Clinic. All rights reserved. Restoring confidence through expert care.
            </p>
            <div className="flex space-x-4 lg:space-x-6 max-[470px]:pb-[40px]">
              <a href="/privacypolicy-skintreatment" className="text-gray-400 hover:text-[#c99500] transition-colors duration-300 text-sm lg:text-base">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#c99500] transition-colors duration-300 text-sm lg:text-base">Terms of Service</a>
            </div>
          </div>
        </div>
        
        {/* Mobile Call-to-Action Buttons */}
        <div className="lg:hidden flex fixed bottom-0 left-0 right-0 z-50 h-[50px] w-full">
          <a 
            href="tel:+916361417399" 
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#c99500] text-white font-bold text-sm transition-all duration-300 hover:bg-[#b28500] active:translate-y-px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            Call Now
          </a>

          <a 
            href="#skinform" 
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white font-bold text-sm transition-all duration-300 hover:bg-gray-800 active:translate-y-px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
            </svg>
            Book Now
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}