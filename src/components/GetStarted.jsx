import React from "react";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto text-center mt-12"
    >
      <div className="inline-flex items-center gap-1 px-2 py-1 border bg-white border-[#d3d0d0] rounded-full">
        <span className="text-[10px] text-[#8f8f8f] font-[Outfit]">
          Walkers Agency
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-[Outfit] font-medium text-[#3d3d3d] px-16 leading-10 md:leading-15 mt-5">
        <span className="bg-gradient-to-r from-white to-[#1976D2]/20 border-l-2 border-l-[#1976D2] px-1">
          Accelerate
        </span>{" "}
        Your Digital Future
      </h1>

      <p className="text-sm text-[#7a7a7a] font-[Outfit] px-6 py-7">
        At WalkersHive, we specialize in building scalable, customizable tech
        solutions tailored for startups and early-stage products. Whether you're
        launching an MVP or expanding your digital platform, we bring the
        technical expertise and flexibility you need to grow with confidence.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#1976D2] text-white px-4 py-2.5 rounded-lg font-medium text-sm font-[Outfit]"
      >
        Get started
      </motion.button>
    </motion.div>
  );
};

export default GetStarted;
