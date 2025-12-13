import React, { useState } from "react";

const features = [
  {
    question: "Do you offer end-to-end software development?",
    answer:
      "Yes. From product strategy and design to development, deployment, and post-launch support — we handle the full lifecycle.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in React, Next.js, Node.js, Tailwind CSS, and scalable cloud solutions.",
  },
  {
    question: "How do you ensure the quality of your code and products?",
    answer:
      "We follow best practices like code reviews, automated testing, and CI/CD pipelines.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer continuous monitoring, maintenance, and feature upgrades.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1000px] mx-auto mt-8 py-12 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {/* Left Content */}
        <div className="pr-2 animate-slideFromLeft">
          <span className="text-[10px] font-semibold text-[#1976D2] uppercase tracking-wider">
            FAQ
          </span>
          <h1 className="font-medium text-2xl md:text-[40px] leading-10">
            Frequently Asked <span className="text-[#1976D2]">Questions</span>
          </h1>
          <p className="text-[#7a7a7a] text-sm mt-4">
            We blend human insight with technical excellence to deliver
            impactful digital products.
          </p>
        </div>

        {/* FAQ List */}
        <div className="font-[Outfit] text-sm space-y-6 mt-4 md:mt-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="py-2 px-4 border-t border-b border-gray-200 border-l-2 border-l-[#1976D2] animate-popIn"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-[#7a7a7a]">{feature.question}</h1>

                <button
                  onClick={() => toggleFaq(index)}
                  className="text-xl text-[#1976D2]"
                >
                  {openIndex === index ? "−" : "+"}
                </button>
              </div>

              {openIndex === index && (
                <p className="text-[#a3a3a3] mt-2">{feature.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
