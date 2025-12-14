import React from "react";
import { motion } from "framer-motion";

const Connect = () => {
  return (
    <motion.section
      id="connect"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1000px] mx-auto py-20 relative bg-[#1976D2] rounded-lg overflow-hidden mt-12">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-[20] flex flex-col justify-end items-end"
        >
          <div className="flex flex-col px-20">
            <span className="font-medium font-[Outfit] text-2xl md:text-[40px] text-white">
              Let's get in touch
            </span>

            <span className="text-white font-[Outfit] text-sm">
              Book a free call and let’s have a chat about your ideas.
            </span>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1976D2] px-4 py-2.5 rounded-lg font-medium text-sm font-[Outfit] mt-3 md:mt-6 w-29 h-8 md:h-10"
            >
              Connect now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Connect;
