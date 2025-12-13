import React from "react";

const Connect = () => {
  return (
    <div>
      <section id="connect">
        <div className="max-w-[1000px] mx-auto py-20 relative bg-[#1976D2] rounded-lg overflow-hidden mt-12 ">
          <div className="relative z-[20] flex flex-col justify-end items-end">
            <div className="flex flex-col px-20">
              <span className="font-medium font-[Outfit] text-2xl md:text-[40px] text-white">
                Let's get in touch
              </span>
              <span className="text-white font-[Outfit] text-sm">
                Book a free call and let’s have a chat about your ideas.
              </span>
              <button className="bg-white text-[#1976D2] px-4 py-2.5 rounded-lg font-medium text-sm font-[Outfit] mt-3 md:mt-6 w-29 h-8 md:h-10">
                Connect now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
