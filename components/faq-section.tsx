import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CosmeticFAQ = () => {
  const faqs = [
    {
      question: "What is the recovery time?",
      answer: "Liposuction: 3–7 days | Rhinoplasty: 7–10 days for swelling reduction | Gynecomastia: 5–10 days | Blepharoplasty: 5–7 days"
    },
    {
      question: "Will the results look natural?",
      answer: "Yes. Every procedure is designed to enhance your natural features, not change them drastically. Our dual-specialist approach ensures results that complement your facial and body proportions."
    },
    {
      question: "Is the surgery painful?",
      answer: "Local or general anaesthesia ensures comfort during the procedure. Any postoperative discomfort is manageable with medication and typically subsides within a few days."
    },
    {
      question: "Are the results permanent?",
      answer: "Surgical results are long-lasting. Liposuction, rhinoplasty, gynecomastia correction, and blepharoplasty provide permanent improvements, though natural aging and lifestyle factors may influence long-term appearance."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes—we offer flexible payment plans and No Cost EMI options. Ask during your consultation for detailed financing information tailored to your needs."
    }
  ];

  // Calculate split point - first 4 items in two columns, last item centered
  const firstColumnFaqs = faqs.slice(0, 2); // First 2 items
  const secondColumnFaqs = faqs.slice(2, 4); // Next 2 items
  const lastFaq = faqs[4]; // Last item

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
   
      <section 
        className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-[#f8f5f2] to-background"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="w-full">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
                Common Questions – Answered
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Everything you need to know about cosmetic surgery procedures
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="w-full">
              {/* First two columns for first 4 items */}
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-4 sm:mb-5 md:mb-6">
                {/* First Column */}
                <Accordion 
                  type="single" 
                  collapsible 
                  className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 lg:flex-1"
                >
                  {firstColumnFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-[#e8e0d8] rounded-lg sm:rounded-xl px-4 sm:px-5 md:px-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#7b5f43]/30"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-[#7b5f43] py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl transition-colors duration-200">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-3 sm:pb-4 md:pb-5 text-sm sm:text-base md:text-lg">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Second Column */}
                <Accordion 
                  type="single" 
                  collapsible 
                  className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 lg:flex-1 mt-0 lg:mt-0"
                >
                  {secondColumnFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index + 2} 
                      value={`item-${index + 2}`}
                      className="border border-[#e8e0d8] rounded-lg sm:rounded-xl px-4 sm:px-5 md:px-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#7b5f43]/30"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-[#7b5f43] py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl transition-colors duration-200">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-3 sm:pb-4 md:pb-5 text-sm sm:text-base md:text-lg">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Centered last card */}
              <div className="flex justify-center">
                <div className="w-full lg:w-2/3 xl:w-1/2">
                  <Accordion type="single" collapsible>
                    <AccordionItem 
                      value={`item-4`}
                      className="border border-[#e8e0d8] rounded-lg sm:rounded-xl px-4 sm:px-5 md:px-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#7b5f43]/30"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-[#7b5f43] py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl transition-colors duration-200">
                        {lastFaq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-3 sm:pb-4 md:pb-5 text-sm sm:text-base md:text-lg">
                        {lastFaq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CosmeticFAQ;