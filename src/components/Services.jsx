import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Services = () => {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-b border-[#e21e3c]/20 border-dashed mt-16"
    >
      <div className="max-w-[1000px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {/* LEFT CONTENT */}
          <motion.div variants={slideLeft}>
            <span className="text-[10px] font-[Outfit] font-semibold text-[#1976D2] uppercase">
              SERVICES
            </span>

            <h1 className="font-medium text-2xl md:text-[40px] font-[Outfit] leading-10 md:leading-12">
              The digital <span className="text-[#1976D2]">advantage</span>
            </h1>

            <p className="text-[#7a7a7a] text-sm font-[Outfit] mt-4">
              We blend human insight with technical excellence to deliver
              impactful digital products.
            </p>
          </motion.div>

          {/* CARDS */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 gap-3 md:gap-5 overflow-hidden"
          >
            {[
              {
                icon: "ri-code-line",
                title: "Software Development",
                desc: "Enterprise-grade, scalable, and secure software.",
              },
              {
                icon: "ri-code-ai-line",
                title: "AI & Automation",
                desc: "From machine learning models to intelligent workflows.",
              },
              {
                icon: "ri-cloud-line",
                title: "Cloud Infrastructure",
                desc: "High-performance, scalable cloud architecture.",
              },
              {
                icon: "ri-settings-6-line",
                title: "Digital Transformation",
                desc: "Modernize legacy systems and workflows.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative overflow-hidden rounded-lg border border-gray-200 py-3 px-2 md:px-4 hover:bg-[#fef2f3] hover:border-[#1976D2]"
              >
                <span className="inline-block bg-[url('vectorCircle.svg')] bg-center bg-no-repeat py-2 px-4 rounded-full">
                  <i className={`${service.icon} text-[#1976D2] text-xl`} />
                </span>

                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold text-[#3d3d3d] font-[Outfit]">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] text-sm font-[Outfit]">
                    {service.desc}
                  </p>
                  <a
                    href="#"
                    className="text-xs text-[#1976D2] font-[Outfit] underline"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
