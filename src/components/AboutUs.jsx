import React from 'react'

const AboutUs = () => {
  return (
    <>
      <section id="about" class="px-3 animate-fadeInUp">
  <div
    class="relative max-w-[1000px] mx-auto text-center py-4 mt-20 bg-[#FFF8F8]"
  >
    <img
      src="aboutBg.jpg"
      alt=""
      class="absolute top-0 left-0 w-full h-full object-cover z-[10] opacity-60 rounded-2xl"
    />

    <div class="relative px-4 z-10 py-10 md:py-12 text-left md:text-center">
      <span class="font-[Outfit] font-medium text-[10px] text-[#1976D2]">
        ABOUT US
      </span>
      <h1 class="font-[Outfit] font-medium text-[40px] text-[#3d3d3d]">
        Wearedis
      </h1>
      {/* <MorphingText texts={["Hello", "Wearedis"]} client:load /> */}
      <p
        class="text-sm font-[Outfit] text-[#666666] max-w-[300px] md:max-w-[596px] md:mx-auto mt-4 leading-6"
      >
        Redis Digital is a next-gen software company built at the intersection
        of technology, creativity, and impact. We're a team of engineers,
        designers, data scientists, and problem-solvers obsessed with building
        software that scales, systems that think, and experiences that inspire.
      </p>
    </div>
  </div>
</section>
    </>
  )
}

export default AboutUs
