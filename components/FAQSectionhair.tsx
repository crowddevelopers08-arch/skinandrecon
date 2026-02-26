import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HairFAQ = () => {
  const faqs = [
    {
      question: "How long does the hair transplant procedure take?",
      answer: "Usually 4–8 hours depending on graft count."
    },
    {
      question: "When will I see new hair growth?",
      answer: "Visible growth starts at 3 months; full results between 8–12 months."
    },
    {
      question: "Is the procedure painful?",
      answer: "Local anaesthesia ensures minimal discomfort."
    },
    {
      question: "What is the difference between FUE and DHI?",
      answer: "Both are minimally invasive; DHI offers direct implantation for precise placement."
    },
    {
      question: "How much does a hair transplant cost?",
      answer: "Pricing depends on grafts and technique. A transparent quote is given after evaluation."
    },
    {
      question: "Will the results look natural?",
      answer: "Yes—hairlines are uniquely designed based on age, face shape and donor quality."
    },
    {
      question: "Do you offer post-care support?",
      answer: "Yes, complete follow-up + growth booster therapies are included."
    }
  ];

  // Calculate split point for even distribution (first 6 items in two columns, last item centered)
  const firstColumnFaqs = faqs.slice(0, 3); // First 3 items
  const secondColumnFaqs = faqs.slice(3, 6); // Next 3 items
  const lastFaq = faqs[6]; // Last item

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
   
      <section 
        className="py-8 xs:py-10 sm:py-12 md:py-12 lg:py-12 xl:py-12 bg-gradient-to-b from-[#f8f5f2] to-background"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 max-w-4xl xl:max-w-7xl">
          <div className="max-w-3xl mx-auto lg:max-w-none">
            {/* Header Section */}
            <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14">
              <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3 xs:mb-4 text-foreground leading-tight">
                Common Questions Answered
              </h2>
            </div>

            {/* FAQ Accordion - 2 columns on large screens */}
            <div className="max-w-3xl mx-auto lg:max-w-none">
              {/* First two columns for first 6 items */}
              <div className="lg:flex lg:flex-wrap lg:gap-4 md:gap-5 lg:gap-6 xl:gap-8 lg:mb-4 md:mb-5 lg:mb-6">
                {/* First Column */}
                <Accordion 
                  type="single" 
                  collapsible 
                  className="space-y-2 xs:space-y-3 sm:space-y-3 md:space-y-4 lg:space-y-0 lg:flex-1 lg:min-w-0"
                >
                  {firstColumnFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-[#e8e0d8] rounded-lg sm:rounded-xl px-3 xs:px-4 sm:px-5 md:px-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#7b5f43]/30 lg:mb-4 md:mb-5 lg:mb-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-[#7b5f43] py-3 xs:py-4 sm:py-4 md:py-5 text-sm sm:text-base lg:text-lg transition-colors duration-200">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-3 xs:pb-4 sm:pb-4 md:pb-5 text-sm sm:text-base lg:text-lg">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Second Column */}
                <Accordion 
                  type="single" 
                  collapsible 
                  className="space-y-2 xs:space-y-3 sm:space-y-3 md:space-y-4 lg:space-y-0 lg:flex-1 lg:min-w-0 mt-2 xs:mt-3 sm:mt-3 md:mt-4 lg:mt-0"
                >
                  {secondColumnFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index + 3} 
                      value={`item-${index + 3}`}
                      className="border border-[#e8e0d8] rounded-lg sm:rounded-xl px-3 xs:px-4 sm:px-5 md:px-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#7b5f43]/30 lg:mb-4 md:mb-5 lg:mb-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-[#7b5f43] py-3 xs:py-4 sm:py-4 md:py-5 text-sm sm:text-base lg:text-lg transition-colors duration-200">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-3 xs:pb-4 sm:pb-4 md:pb-5 text-sm sm:text-base lg:text-lg">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Centered last card */}
              <div className="flex justify-center mt-2 xs:mt-3 sm:mt-3 md:mt-4 lg:mt-0">
                <div className="w-full lg:w-1/2">
                  <Accordion type="single" collapsible>
                    <AccordionItem 
                      value={`item-6`}
                      className="border border-[#e8e0d8] rounded-lg sm:rounded-xl px-3 xs:px-4 sm:px-5 md:px-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#7b5f43]/30"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-[#7b5f43] py-3 xs:py-4 sm:py-4 md:py-5 text-sm sm:text-base lg:text-lg transition-colors duration-200">
                        {lastFaq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-3 xs:pb-4 sm:pb-4 md:pb-5 text-sm sm:text-base lg:text-lg">
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

export default HairFAQ;