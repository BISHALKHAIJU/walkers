import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="border-t border-t-gray-200 mt-12 relative overflow-hidden">
        <div class="max-w-[1000px] mx-auto px-4 md:px-0 py-6">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
            <div class="max-w-[400px] animate-slideFromRight">
              <img src="Logo 1.svg" alt="" class="pb-4 md:pb-0" />

              <p class="text-sm font-[Outfit] text-[#666666] mt-0 md:mt-4">
                Join us for a seamless experience from invitation to celebration
                delivered right to you
              </p>

              <div class="mt-6">
                <a
                  href="https://www.linkedin.com/company/walkershivetech/?originalSubdomain=np"
                  target="_blank"
                >
                  <span class="text-xl text-[#cccccc]">
                    <i class="ri-linkedin-fill"></i>
                  </span>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=9779801066279&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <span class="text-xl text-[#cccccc]">
                    <i class="ri-whatsapp-fill"></i>
                  </span>
                </a>
                <a href="https://www.facebook.com/whiveitpro/" target="_blank">
                  <span class="text-xl text-[#cccccc]">
                    <i class="ri-facebook-fill"></i>
                  </span>
                </a>
              </div>
            </div>

            <div class="flex justify-between items-end animate-slideFromLeft">
              <div>
                <span class="text-sm font-semibold font-[Outfit] text-[#525252]">
                  COMPANY
                </span>
                <ul class="text-[#A3A3A3] text-sm font-[Outfit] space-y-2.5 mt-3">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>

              <div class="border border-gray-200 text-xs rounded-2xl h-8 w-24 md:hidden flex justify-center items-center">
                <a href="#top" class="text-[#A3A3A3] font-[Outfit]">
                  Back to Top<i class="ri-arrow-up-fill ml-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="text-[#A3A3A3] text-xs flex justify-between py-3 mt-6 md:border-t md:border-t-gray-100 pb-12 md:pb-20 relative animate-fadeInDown">
            <div class="space-x-3 font-[Outfit] mt-1">
              <span>©️ WalkersHive 2025. All rights reserved.</span>
              <a href="" class="underline">
                Terms of Use
              </a>
              <a href="" class="underline">
                Privacy Policy
              </a>
            </div>

            <div class="border border-gray-200 text-xs rounded-2xl px-2 py-1 hidden md:block relative z-20">
              <a href="#top" class="text-[#A3A3A3] font-[Outfit]">
                Back to Top<i class="ri-arrow-up-fill ml-1"></i>
              </a>
            </div>
            <img
              src="walkers.svg
              "
              alt=""
              class="absolute -bottom-[20px] -left-1/2 translate-x-1/2 md:bottom-[-50px] animate-fadeInUp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
