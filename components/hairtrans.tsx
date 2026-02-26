"use client";
import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const TransformationSectionhair: React.FC = () => {
  const benefits = [
    { 
      title: "Dual-Specialist Advantage", 
      description: "Dermatologist + Plastic Surgeon ensure accurate diagnosis + surgical precision.",
      icon: "lucide:users" 
    },
    { 
      title: "Over 90% Graft-Survival Rate", 
      description: "Advanced preservation & implantation techniques boost density and long-term growth.",
      icon: "lucide:trending-up" 
    },
    { 
      title: "Natural Hairline Designing", 
      description: "Each hairline is customised to your facial proportions for undetectable results.",
      icon: "lucide:ruler" 
    },
    { 
      title: "Minimally Invasive FUE & DHI", 
      description: "No stitches, minimal scarring, fast recovery.",
      icon: "lucide:scissors" 
    },
    { 
      title: "Dedicated Hair Transplant Theatre", 
      description: "Sterile environment, controlled lighting, premium instruments.",
      icon: "lucide:shield-check" 
    },
    { 
      title: "End-to-End Care", 
      description: "Pre-op evaluation, procedure, growth boosters & long-term follow-up included.",
      icon: "lucide:heart-handshake" 
    }
  ];

  return (
    <>
     <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
    <section id="benefits" className="section-padding relative overflow-hidden bg-white" style={{fontFamily: "'Outfit', sans-serif"}}>
      {/* Enhanced Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fefaf5] to-[#f9f5f0]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f8f8f8] to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_center,rgba(123,95,67,0.07),transparent_70%)]"></div>
      
      {/* Floating abstract shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#7b5f43]/5 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-[#a78c6d]/10 rounded-full blur-lg"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#7b5f43]/8 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-[#a78c6d]/15 rounded-full blur-lg"></div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #7b5f43 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-0 left-0 w-16 h-1 bg-[#7b5f43]/20"></div>
        <div className="absolute top-0 left-0 w-1 h-16 bg-[#7b5f43]/20"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-0 right-0 w-16 h-1 bg-[#a78c6d]/20"></div>
        <div className="absolute bottom-0 right-0 w-1 h-16 bg-[#a78c6d]/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 md:mb-8"
        >
          <h2 className="text-[40px] max-[470px]:text-[22px] font-black mb-4 md:mb-6 leading-tight">
            Why Choose Skin & Recon for <br className="hidden sm:block" />
            <span className="text-[#7b5f43] bg-clip-text">
              Hair Transplant?
            </span>
          </h2>
        </motion.div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#7b5f43]/20 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              {/* Card background accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#7b5f43]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-12 h-12 rounded-full bg-[#7b5f43]/10 flex items-center justify-center mb-4 group-hover:bg-[#7b5f43]/20 transition-colors duration-300">
                <Icon icon={benefit.icon} className="text-[#7b5f43] w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#7b5f43] transition-colors duration-300">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10 md:mt-8 lg:mt-10 max-[470px]:mt-5">
          <motion.div 
            className="relative inline-flex items-center justify-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#7b5f43] to-[#a78c6d] group-hover:shadow-lg group-hover:shadow-[#7b5f43]/50"></div>
            <a href="#hairform">
              <Button
                className="
                  relative inline-flex items-center justify-center
                  w-full px-8 py-3 text-base font-normal
                  text-white bg-[#7b5f43] border-transparent rounded-full
                  hover:bg-[#6a5138] transition-colors duration-300
                "
                endContent={<Icon icon="lucide:calendar" width={18} />}
              >
                Book Consultation
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};