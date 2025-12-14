import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-3"
    >
      <div className="relative max-w-[1000px] mx-auto text-center py-4 mt-20 bg-[#FFF8F8] rounded-2xl">
        <img
          src="aboutBg.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-[10] opacity-60 rounded-2xl"
        />

        <div className="relative px-4 z-10 py-10 md:py-12 text-left md:text-center">
          <span className="font-[Outfit] font-medium text-[10px] text-[#1976D2]">
            ABOUT US
          </span>

          <h1 className="font-[Outfit] font-medium text-[40px] text-[#3d3d3d]">
        Walkers Hive
          </h1>

          <p className="text-sm font-[Outfit] text-[#666666] max-w-[300px] md:max-w-[596px] md:mx-auto mt-4 leading-6">
        Walkers Hive is a next-gen software company built at the intersection
        of technology, creativity, and impact. We're a team of engineers,
        designers, data scientists, and problem-solvers obsessed with building
        software that scales, systems that think, and experiences that inspire.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
