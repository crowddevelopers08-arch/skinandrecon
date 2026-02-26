import React from "react";
import { Button, Card } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const ComparisonSectionhair: React.FC = () => {
  const comparisonData = [
    {
      category: "Technology",
      sculpt: "State-of-the-art microsurgical tools for maximum graft survival",
      others: "Basic tools with higher graft wastage",
      icon: "lucide:microscope"
    },
    {
      category: "Graft Survival",
      sculpt: "High survival rate with precision handling",
      others: "Lower survival rates, uneven hair density",
      icon: "lucide:sprout"
    },
    {
      category: "Aesthetic Focus",
      sculpt: "Artistic hairline design that matches your age, features, and style",
      others: "Mechanical placement with no aesthetic eye",
      icon: "lucide:paintbrush"
    },
    {
      category: "Scalp Health",
      sculpt: "Treatments also improve scalp condition and future growth",
      others: "Focus only on transplant, neglect scalp",
      icon: "lucide:heart-pulse"
    },
    {
      category: "Patient Comfort",
      sculpt: "Relaxed, clinic-like experience with minimal downtime",
      others: "Stressful, longer healing period",
      icon: "lucide:smile"
    },
    {
      category: "Safety Protocols",
      sculpt: "International hygiene standards and strict surgical protocols",
      others: "Compromised safety, inconsistent hygiene",
      icon: "lucide:shield-check"
    }
  ];

  const [activeTab, setActiveTab] = React.useState(0);
  const categories = ["All Features", "Technology", "Patient Experience", "Results"];
  
  const filteredData = React.useMemo(() => {
    if (activeTab === 0) return comparisonData;
    
    const categoryMap: Record<string, string[]> = {
      "Technology": ["Technology", "Safety Protocols"],
      "Patient Experience": ["Patient Comfort", "Scalp Health"],
      "Results": ["Graft Survival", "Aesthetic Focus"]
    };
    
    return comparisonData.filter(item => 
      categoryMap[categories[activeTab]]?.includes(item.category)
    );
  }, [activeTab]);

  return (
    <>
      <section id="services" className="py-10 bg-[#0d0d0d] text-white relative overflow-hidden" style={{fontFamily: "'Outfit', sans-serif"}}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(201, 149, 0, 0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(201, 149, 0, 0.3) 0%, transparent 50%)`,
            backgroundSize: '100% 100%',
            animation: 'pulse 8s infinite alternate'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
          
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">The <span className="text-[#c99500]">Smartest Choice</span> You'll Ever Make for Your Hair</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
              See how our approach to hair transplantation stands out from the rest
            </p>
          </motion.div>
          
          {/* Mobile horizontal scroll container */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex space-x-4" style={{ minWidth: 'max-content' }}>
              {comparisonData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="w-80 flex-shrink-0 bg-[#1a1a1a] rounded-xl border border-[#c99500]/30 p-5 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#c99500]/10 flex items-center justify-center">
                      <Icon icon={item.icon} className="text-[#c99500]" width={18} />
                    </div>
                    <span className="font-medium text-white text-lg">{item.category}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-[#c99500] to-[#daa520] text-black font-semibold py-2 px-4 rounded-lg text-center">
                      Sculpt Clinic
                    </div>
                    
                    <div className="flex items-start gap-2 bg-[#2a2a2a] p-4 rounded-lg">
                      <Icon icon="lucide:check" className="text-[#c99500] mt-0.5 flex-shrink-0" width={16} />
                      <span className="text-white text-sm">{item.sculpt}</span>
                    </div>
                    
                    <div className="bg-gradient-to-r from-[#555] to-[#333] text-white font-semibold py-2 px-4 rounded-lg text-center">
                      Other Clinics
                    </div>
                    
                    <div className="flex items-start gap-2 bg-[#2a2a2a] p-4 rounded-lg">
                      <Icon icon="lucide:x" className="text-red-400 mt-0.5 flex-shrink-0" width={16} />
                      <span className="text-gray-300 text-sm">{item.others}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Desktop table */}
          <Card className="hidden md:block overflow-hidden bg-[#1a1a1a] border border-[#c99500]/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-3 bg-gradient-to-r from-[#c99500] to-[#daa520] text-black py-5">
              <div className="px-6 font-medium text-center md:text-left">Category</div>
              <div className="px-6 font-medium text-center md:text-left">Sculpt The Maxillofacial Clinic</div>
              <div className="px-6 font-medium text-center md:text-left">Other Clinics</div>
            </div>
            
            {comparisonData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`grid grid-cols-3 py-6 ${index % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#222222]'}`}
              >
                <div className="col-span-1 px-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c99500]/10 flex items-center justify-center">
                    <Icon icon={item.icon} className="text-[#c99500]" width={18} />
                  </div>
                  <span className="font-medium text-white">{item.category}</span>
                </div>
                
                <div className="col-span-1 px-6 text-white flex items-center">
                  <div className="flex items-start gap-2">
                    <Icon icon="lucide:check" className="text-[#c99500] mt-1 flex-shrink-0" width={16} />
                    <span>{item.sculpt}</span>
                  </div>
                </div>
                
                <div className="col-span-1 px-6 text-gray-300 flex items-center">
                  <div className="flex items-start gap-2">
                    <Icon icon="lucide:x" className="text-red-400 mt-1 flex-shrink-0" width={16} />
                    <span>{item.others}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Card>

          <div className="text-center mt-8 md:mt-14 lg:mt-16">
            <div className="relative inline-flex items-center justify-center group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#c99500] to-[#e6bc4e] group-hover:shadow-lg group-hover:shadow-[#c99500]/50"></div>
              <a href="#hairform" className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full">
                Make the Smart Move Today
              </a>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        `}</style>

        <style jsx>{`
          @keyframes pulse {
            0% { opacity: 0.2; }
            50% { opacity: 0.3; }
            100% { opacity: 0.2; }
          }
          
          /* Custom scrollbar for mobile */
          .md\\:hidden::-webkit-scrollbar {
            height: 6px;
          }
          
          .md\\:hidden::-webkit-scrollbar-track {
            background: #2a2a2a;
            border-radius: 10px;
          }
          
          .md\\:hidden::-webkit-scrollbar-thumb {
            background: #c99500;
            border-radius: 10px;
          }
          
          .md\\:hidden::-webkit-scrollbar-thumb:hover {
            background: #daa520;
          }
        `}</style>
      </section>
    </>
  );
};