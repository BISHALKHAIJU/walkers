import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    question: "What technologies do you work with?",
    answer:
      "We work across modern stacks including React, Node.js, Python, Flutter, and more—based on what suits your project best.",
  },
  {
    question: "Do you provide post-launch support",
    answer:
      "Yes, we offer ongoing maintenance, feature updates, and scaling support after launch.",
  },
  {
    question: "How do you ensure the quality of your code and products?",
    answer:
      "We follow best practices like code reviews, automated testing, and CI/CD pipelines.",
  },
  {
    question: "Can i get a dedicated team for my project",
    answer:
      "Absolutely. We assign dedicated developers, designers, and tech leads based on your project’s specific needs.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1000px] mx-auto mt-8 py-12 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pr-2"
        >
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
        </motion.div>

        {/* FAQ LIST */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-[Outfit] text-sm space-y-6 mt-4 md:mt-0"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="py-2 px-4 border-t border-b border-gray-200 border-l-2 border-l-[#1976D2]"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h1 className="text-[#7a7a7a]">{feature.question}</h1>

                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl text-[#1976D2]"
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-[#a3a3a3] mt-2 overflow-hidden"
                  >
                    {feature.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
