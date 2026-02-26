const HairWhyPatientsTrustUs = () => {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 py-16 px-4 overflow-hidden">
      {/* Background Image with Scrolling Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#7b5f43] mb-4">
            Why Patients Trust Us
          </h2>
          <div className="w-24 h-1 bg-[#7b5f43] mx-auto"></div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-serif text-[#7b5f43] mb-6 leading-tight">
              Trusted by Thousands for Safe, Natural & Long-Lasting Results
            </h3>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Patients choose Skin & Recon because of our precision-driven approach and personalised care. 
                From advanced technology to sterile surgical setups, we prioritise safety at every step.
              </p>
              
              <p className="text-lg leading-relaxed">
                Transparent pricing, clear communication, and consistent follow-up make us one of Bangalore's 
                most trusted centres for hair restoration.
              </p>
            </div>
          </div>
          
          {/* Right Side Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="skinand1.jpg" 
                  alt="Patient consultation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#7b5f43] rounded-full flex items-center justify-center text-white shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-[#7b5f43] shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 cursor-pointer text-center">
          <a href="#hairform">
          <button className="bg-[#7b5f43] cursor-pointer hover:bg-[#6a5138] text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
            Schedule a Consultation
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HairWhyPatientsTrustUs;