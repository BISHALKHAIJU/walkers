import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Fitronix from "../../public/images/Fitronix.png";
import jobhive from "../../public/images/jobhive.png";
import Smart from "../../public/images/SmartEnrolls.png";
import loadingGif from "../../public/Loading.gif";
import linkIcon from "../../public/link.svg";

const Products = () => {
  return (
    <section id="products">
      <div className="max-w-[1020px] mx-auto px-4 md:px-0 mt-12">
        <div className="flex flex-col gap-5.5">
          {/* Left Content */}
          <div>
            <span className="text-[10px] font-semibold text-[#1976D2] uppercase">
              PRODUCTS
            </span>
            <h1 className="font-medium text-2xl md:text-[40px] leading-10">
              Our <span className="text-[#1976D2]">Products</span>
            </h1>
            <p className="text-[#7a7a7a] text-sm mt-4">
              Projects we have worked on so far
            </p>
          </div>

          {/* Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-button-next",
                prevEl: ".custom-button-prev",
              }}
              loop={true}
              className="w-full"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="border border-gray-200 px-4 py-6 rounded-xl">
                  <img
                    src={Fitronix}
                    alt="KJ Adventure"
                    className="w-full h-auto max-w-full object-contain"
                  />
                  <a
                    href="https://www.fitronix.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#1976D2] underline font-medium"
                  >
                    <img
                      src={linkIcon}
                      alt=""
                      className="object-cover inline-flex mr-1"
                    />
                    www.fitronix.com
                  </a>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="border border-gray-200 px-4 py-6 rounded-xl">
                  <img
                    src={jobhive}
                    alt="KJ Adventure"
                    className="w-full h-auto max-w-full object-contain"
                  />
                  <a
                    href="https://www.jobhive.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#1976D2] underline font-medium"
                  >
                    <img
                      src={linkIcon}
                      alt=""
                      className="object-cover inline-flex mr-1"
                    />
                    www.jobhive.com
                  </a>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="border border-gray-200 px-4 py-6 rounded-xl">
                  <img
                    src={Smart}
                    alt="Manna Bakery"
                    className="w-full h-auto max-w-full object-contain "
                  />
                  <a
                    href="https://www.SmarEnrolls.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#1976D2] underline font-medium"
                  >
                    <img src={linkIcon} alt="" className=" inline-flex mr-1" />
                    www.mannabakery.com
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Custom Navigation */}
            <div className="custom-button-prev absolute top-1/2 -left-3 z-10 bg-gray-200 h-7 w-7 flex items-center justify-center rounded-full cursor-pointer">
              ◀
            </div>
            <div className="custom-button-next absolute top-1/2 -right-3 z-10 bg-gray-200 h-7 w-7 flex items-center justify-center rounded-full cursor-pointer">
              ▶
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
