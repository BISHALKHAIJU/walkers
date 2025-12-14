import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Fitronix from "../../public/images/Fitronix.png";
import jobhive from "../../public/images/jobhive.png";
import Smart from "../../public/images/SmartEnrolls.png";
import linkIcon from "../../public/link.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Products = () => {
  return (
    <section id="products">
      <div className="max-w-[1020px] mx-auto px-4 md:px-0 mt-12">
        <div className="flex flex-col gap-5.5">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-semibold text-[#1976D2] uppercase">
              PRODUCTS
            </span>

            <h1 className="font-medium text-2xl md:text-[40px] leading-10">
              Our <span className="text-[#1976D2]">Products</span>
            </h1>

            <p className="text-[#7a7a7a] text-sm mt-4">
              Projects we have worked on so far
            </p>
          </motion.div>

          {/* SLIDER */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-button-next",
                prevEl: ".custom-button-prev",
              }}
              loop
              className="w-full"
            >
              {[
                {
                  img: Fitronix,
                  link: "https://www.fitronix.com",
                  text: "www.fitronix.com",
                },
                {
                  img: jobhive,
                  link: "https://www.jobhive.com",
                  text: "www.jobhive.com",
                },
                {
                  img: Smart,
                  link: "https://www.SmarEnrolls.com",
                  text: "www.smartenrolls.com",
                },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -5 }}
                    className="border border-gray-200 px-4 py-6 rounded-xl"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-auto object-contain"
                    />

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#1976D2] underline font-medium"
                    >
                      <img src={linkIcon} alt="" className="inline-flex mr-1" />
                      {item.text}
                    </a>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* NAV BUTTONS */}
            <div className="custom-button-prev absolute top-1/2 -left-3 z-10 bg-gray-200 h-7 w-7 flex items-center justify-center rounded-full cursor-pointer">
              ◀
            </div>
            <div className="custom-button-next absolute top-1/2 -right-3 z-10 bg-gray-200 h-7 w-7 flex items-center justify-center rounded-full cursor-pointer">
              ▶
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
