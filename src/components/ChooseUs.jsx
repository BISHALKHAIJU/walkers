import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

const ChooseUs = () => {
  return (
    <div>
      <div className="max-w-[1000px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT CONTENT (slide from left) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-[10px] font-semibold font-[Outfit] text-[#1976D2]">
              WHY CHOOSE US
            </span>

            <h1 className="text-2xl md:text-[40px] font-medium font-[Outfit] text-[#3d3d3d] pr-6 leading-8 md:leading-12 mt-0 md:mt-4">
              Built for <span className="text-[#1976D2]">Visionaries</span>{" "}
              Backed by Experts.
            </h1>

            <p className="text-[#7a7a7a] text-sm font-[Outfit]">
              We blend human insight with technical excellence to deliver
              impactful digital products.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base font-[Outfit] text-[#3d3d3d] mt-6 md:mt-0"
          >
            <div className="space-y-4 md:ml-20 ml-0">
              {[
                "10 + Years of Software Excellence",
                "Agile & Transparent Workflow",
                "Deep AI & Automation Expertise",
                "100% Delivery Success Rate",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 items-center"
                >
                  <span className="w-11 h-10 bg-[url('vectorCircle.svg')] bg-cover flex justify-center items-center">
                    <i className="ri-check-double-line text-[#1976D2] text-xl"></i>
                  </span>
                  <span className="whitespace-nowrap font-semibold">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
