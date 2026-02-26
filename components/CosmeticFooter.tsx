import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const CosmeticFooter = () => {
  return (
    <>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    <footer className="bg-[#7b5f43] text-white"style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand with Logo */}
          <div className="text-left">
            {/* Logo Section */}
            <div className="mb-4 sm:mb-5 flex justify-start">
              <img 
                src="/skinandreconlogo.png"
                alt="Skin & Recon Logo"
                className="h-16 sm:h-20 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-2xl sm:text-3xl font-bold text-white';
                  fallback.textContent = 'Skin & Recon';
                  e.target.parentNode.appendChild(fallback);
                }}
              />
            </div>
            <p className="text-white/80 mb-5 text-base sm:text-lg leading-relaxed">
              Bangalore's trusted cosmetic surgery specialists with 5,000+ transformations and natural-looking results.
            </p>
                     <div className="flex justify-start gap-4 sm:gap-5">
              <a href="#" className="hover:text-amber-200 transition-colors duration-300">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors duration-300">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors duration-300">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors duration-300">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="font-semibold mb-4 sm:mb-5 text-lg sm:text-xl">
              Quick Links
            </h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors duration-300 text-base sm:text-lg block py-1.5">
                  About Us
                </a>
              </li>
              <li>
                <a href="#cosdoctor" className="hover:text-amber-200 transition-colors duration-300 text-base sm:text-lg block py-1.5">
                  Our Surgeons
                </a>
              </li>
              <li>
                <a href="#procedures" className="hover:text-amber-200 transition-colors duration-300 text-base sm:text-lg block py-1.5">
                  Procedures
                </a>
              </li>
              <li>
                <a href="#cosbeforeafter" className="hover:text-amber-200 transition-colors duration-300 text-base sm:text-lg block py-1.5">
                  Before & After
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-left">
            <h4 className="font-semibold mb-4 sm:mb-5 text-lg sm:text-xl">
              Treatments
            </h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors duration-300 text-base sm:text-lg block py-1.5">
                  Liposuction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors duration-300 text-base sm:text-lg block py-1.5">
                  Rhinoplasty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors duration-300 text-base sm:text-lg block py-1.5">
                  Gynecomastia Surgery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors duration-300 text-base sm:text-lg block py-1.5">
                  Blepharoplasty
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h4 className="font-semibold mb-4 sm:mb-5 text-lg sm:text-xl">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-white/80">
              <li className="flex items-start justify-start gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-left">
                  Bangalore, Karnataka
                </span>
              </li>
              <li className="flex items-center justify-start gap-3">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base">+91 6361417399</span>
              </li>
              <li className="flex items-center justify-start gap-3">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base">skinandreconrakesh@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t max-[470px]:pb-[50px] border-white/20 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-5 text-sm sm:text-base text-white/80">
            <p className="text-left mb-3 sm:mb-0">
              © 2024 Skin & Recon. All rights reserved.
            </p>
            <div className="flex gap-5 sm:gap-7">
              <a href="/privacypolicy-CosmeticSurgery" className="hover:text-amber-200 transition-colors duration-300 text-sm sm:text-base">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors duration-300 text-sm sm:text-base">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Call to Action Buttons */}
      <div className="lg:hidden max-[470px]:flex fixed bottom-0 left-0 right-0 z-50 w-full">
        <a href="tel:+6361417399" className="flex-1 flex items-center justify-center gap-2 py-4 bg-black text-white font-bold text-base transition-all duration-300 hover:bg-gray-800 active:translate-y-px">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          Call Now
        </a>

        <a href="#cosmeticform" className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#fee685] text-black font-bold text-base transition-all duration-300 hover:bg-gray-200 active:translate-y-px">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="black">
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
          </svg>
          Book Now
        </a>
      </div>
    </footer>
    </>
  );
};

export default CosmeticFooter;