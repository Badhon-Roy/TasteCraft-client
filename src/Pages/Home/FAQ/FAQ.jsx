import { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const FAQ = () => {
  // State to manage the active accordion item
  const [activeIndex, setActiveIndex] = useState(null);

  // Data for FAQs
  const faqs = [
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      question: "What is your delivery policy?",
      answer: "We deliver to all locations within the city. Orders are usually delivered within 30-45 minutes."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes, we have a variety of vegetarian and vegan dishes on our menu."
    }
  ];

  const toggleAccordion = (index) => {
    // Toggle the clicked item, close if it's already open
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <SectionTitle subHeading="Find answers to some of the most common questions" heading="Frequently Asked Questions" />

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden transition-all bg-white shadow-lg rounded-xl">
            {/* Accordion Trigger: Question */}
            <div
              className={`cursor-pointer p-6 text-lg font-semibold text-gray-800 flex justify-between items-center backdrop-blur-lg bg-white/30 border-b-2 border-gray-300 hover:bg-[#fd930b]/10 transition-all duration-300 ease-in-out rounded-t-xl ${
                activeIndex === index ? "bg-[#fd930b]/20" : "bg-white/30"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              {/* Arrow Icon */}
              <span
                className={`transform transition-transform duration-300 ease-in-out ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            {/* Accordion Content: Answer */}
            {activeIndex === index && (
              <div className="p-6 text-gray-600 backdrop-blur-lg bg-white/30 rounded-b-xl">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
