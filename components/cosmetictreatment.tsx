"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CosmeticTreatments() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const treatments = [
    {
      id: 1,
      title: "Liposuction",
      image: "https://ik.imagekit.io/nlpkmjblv/public/public/liposuction.jpg",
      description: "Sculpt and contour stubborn fat areas such as abdomen, flanks, thighs, arms and chin. Achieve a more defined and proportionate shape with minimal downtime.",
      serviceValue: "liposuction"
    },
    {
      id: 2,
      title: "Rhinoplasty",
      image: "https://ik.imagekit.io/nlpkmjblv/public/public/rihno.jpg",
      description: "Refine or reshape your nose to improve symmetry, balance and breathing. Get natural-looking results that enhance your overall facial harmony.",
      serviceValue: "rhinoplasty"
    },
    {
      id: 3,
      title: "Gynecomastia Surgery",
      image: "https://ik.imagekit.io/nlpkmjblv/public/public/gynecomastia.jpg",
      description: "Correct enlarged male breast tissue for a flatter, firmer, more masculine chest. A safe and effective solution with long-lasting results.",
      serviceValue: "gynecomastia"
    },
    {
      id: 4,
      title: "Blepharoplasty",
      image: "https://ik.imagekit.io/nlpkmjblv/public/public/depositphotos.jpg",
      description: "Lift drooping eyelids or remove under-eye bags for a fresher, youthful, well-rested appearance—without changing your natural expression.",
      serviceValue: "blepharoplasty"
    }
  ];

  const handleBookClick = (serviceValue = "") => {
    setSelectedService(serviceValue);
    setIsFormOpen(true);
  };

  const handleCallClick = () => {
    window.open('tel:+916361417399', '_self');
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedService("");
  };

  // Function to highlight important words in descriptions
  const highlightDescription = (description) => {
    const importantWords = [
      // Liposuction
      "sculpt and contour", "stubborn fat areas", "abdomen", "flanks", "thighs", "arms", "chin", "defined", "proportionate shape", "minimal downtime",
      // Rhinoplasty
      "refine or reshape", "improve symmetry", "balance", "breathing", "natural-looking results", "facial harmony",
      // Gynecomastia
      "correct enlarged male breast tissue", "flatter", "firmer", "masculine chest", "safe and effective", "long-lasting results",
      // Blepharoplasty
      "lift drooping eyelids", "remove under-eye bags", "fresher", "youthful", "well-rested appearance", "natural expression"
    ];

    let highlightedDescription = description;
    
    importantWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      highlightedDescription = highlightedDescription.replace(
        regex, 
        `<span class="font-semibold text-[#7b5f43]">${word}</span>`
      );
    });

    return { __html: highlightedDescription };
  };

  return (
    <>
     <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <section className="bg-[#f4f4f4] py-12 max-[470px]:py-8 px-4 max-[470px]:mb-5 mb-10 sm:px-6"style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">
            Face & Body Transformations <span className="text-[#7b5f43]">Tailored to You</span>
          </h2>

          {/* 2 cards per row on all screen sizes with reduced width */}
          <div className="mt-12 max-[470px]:mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatments.map((treatment) => (
              <div key={treatment.id} className="bg-white rounded-xl shadow-sm border border-[#fee685] overflow-hidden flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:border-[#7b5f43] h-full">
                {/* Fixed height for images */}
                <div className="w-full h-48 sm:h-56 md:h-64 flex-shrink-0">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    width={350}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content section */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow w-full">
                  <h3 className="text-xl font-bold text-[#7b5f43] mb-4">
                    {treatment.title}
                  </h3>

                  <p 
                    className="text-gray-700 text-base leading-relaxed flex-grow mb-6"
                    dangerouslySetInnerHTML={highlightDescription(treatment.description)}
                  />

                  <div className="mt-auto space-y-3">
                    <div className="flex justify-center gap-3 flex-wrap">
                      <a 
                        href="tel:+916361417399"
                        className="border border-[#7b5f43] text-[#7b5f43] px-4 py-2 rounded-lg hover:bg-[#7b5f43] hover:text-white transition-all duration-300 text-base no-underline flex-1 min-w-[100px]"
                        onClick={handleCallClick}
                      >
                        Call Us
                      </a>
                      <a href="#cosmeticform">
                      <button 
                        className="bg-[#7b5f43] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#6a5138] transition-all duration-300 text-base flex-1 min-w-[100px]"
                        onClick={() => handleBookClick(treatment.serviceValue)}
                      >
                        Book Now
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}