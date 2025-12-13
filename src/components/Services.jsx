import React from "react";

const Services = () => {
  return (
    <>
      <div>
        <section
          id="services"
          class="border-t border-b border-[#e21e3c]/20 border-dashed mt-16"
        >
          <div class="max-w-[1000px] mx-auto px-4 md:px-0">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 animate-fadeInUp">
              <div class="animate-slideFromLeft">
                <span class="text-[10px] font-[Outfit] font-semibold text-[#1976D2] uppercase">
                  SERVICES
                </span>
                <h1 class="font-medium text-2xl md:text-[40px] font-[Outfit] leading-10 md:leading-12">
                  The digital <span class="text-[#1976D2]">advantage</span>
                </h1>
                <p class="text-[#7a7a7a] text-sm font-[Outfit] mt-4">
                  We blend human insight with technical excellence to deliver
                  impactful digital products.
                </p>
              </div>

              <div class="grid grid-cols-2 gap-3 md:gap-5 animate-cards overflow-hidden">
                <div class="relative overflow-hidden rounded-lg card border border-gray-200 py-3 px-2 md:px-4 hover:bg-[#fef2f3] hover:border-[#1976D2]">
                  <span class="inline-block bg-[url('vectorCircle.svg')] bg-center bg-no-repeat py-2 px-4 rounded-full">
                    <i class="ri-code-line text-[#1976D2] text-xl"></i>
                  </span>

                  <div class="mt-4 space-y-2">
                    <h3 class="font-semibold text-[#3d3d3d] font-[Outfit]">
                      Software Development
                    </h3>
                    <p class="text-[#666666] text-sm font-[Outfit]">
                      Enterprise-grade, scalable, and secure software.
                    </p>
                    <a
                      href="#"
                      class="text-xs text-[#1976D2] font-[Outfit] underline"
                    >
                      Learn More
                    </a>
                  </div>
                  {/* 
          <BorderBeam
            client:visible
            duration={4}
            size={300}
            reverse
            className="from-transparent via-[#e21e3c] to-transparent"
          /> */}
                </div>

                <div class="relative overflow-hidden rounded-lg card border border-gray-200 py-3 px-2 md:px-4 hover:bg-[#fef2f3] hover:border-[#1976D2]">
                  <span class="inline-block bg-[url('vectorCircle.svg')] bg-center bg-no-repeat py-2 px-4 rounded-full">
                    <i class="ri-code-ai-line text-[#1976D2] text-xl"></i>
                  </span>

                  <div class="mt-4 space-y-2">
                    <h3 class="font-semibold text-[#3d3d3d] font-[Outfit]">
                      AI & Automation
                    </h3>
                    <p class="text-[#666666] text-sm font-[Outfit]">
                      From machine learning models to intelligent workflows.
                    </p>
                    <a
                      href="#"
                      class="text-xs text-[#1976D2] font-[Outfit] underline"
                    >
                      Learn More
                    </a>
                  </div>
                  {/* 
          <BorderBeam
            client:visible
            duration={4}
            size={300}
            reverse
            className="from-transparent via-[#e21e3c] to-transparent"
          /> */}
                </div>

                <div class="relative overflow-hidden rounded-lg card border border-gray-200 py-3 px-2 md:px-4 hover:bg-[#fef2f3] hover:border-[#1976D2]">
                  <span class="inline-block bg-[url('vectorCircle.svg')] bg-center bg-no-repeat py-2 px-4 rounded-full">
                    <i class="ri-cloud-line text-[#1976D2] text-xl"></i>
                  </span>

                  <div class="mt-4 space-y-2">
                    <h3 class="font-semibold text-[#3d3d3d] font-[Outfit]">
                      Cloud Infrastructure
                    </h3>
                    <p class="text-[#666666] text-sm font-[Outfit]">
                      High-performance, scalable cloud architecture.
                    </p>
                    <a
                      href="#"
                      class="text-xs text-[#1976D2] font-[Outfit] underline"
                    >
                      Learn More
                    </a>
                  </div>

                  {/* <BorderBeam
            client:visible
            duration={4}
            size={300}
            reverse
            className="from-transparent via-[#e21e3c] to-transparent"
          /> */}
                </div>

                <div class="relative overflow-hidden rounded-lg card border border-gray-200 py-3 px-2 md:px-4 hover:bg-[#fef2f3] hover:border-[#1976D2]">
                  <span class="inline-block bg-[url('vectorCircle.svg')] bg-center bg-no-repeat py-2 px-4 rounded-full">
                    <i class="ri-settings-6-line text-[#1976D2] text-xl"></i>
                  </span>

                  <div class="mt-4 space-y-2">
                    <h3 class="font-semibold text-[#3d3d3d] font-[Outfit]">
                      Digital Transformation
                    </h3>
                    <p class="text-[#666666] text-sm font-[Outfit]">
                      Modernize legacy systems and workflows.
                    </p>
                    <a
                      href="#"
                      class="text-xs text-[#1976D2] font-[Outfit] underline"
                    >
                      Learn More
                    </a>
                  </div>

                  {/* <BorderBeam
            client:visible
            duration={4}
            size={300}
            reverse
            className="from-transparent via-[#e21e3c] to-transparent"
          /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
