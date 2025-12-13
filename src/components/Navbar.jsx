import React, { useState } from "react";
// adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full z-50 sticky top-0 bg-white">
      <div className="max-w-[1000px] mx-auto ">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-3 font-[Outfit] md:shadow-none shadow-sm px-3 md:px-0 bg-white">
          {/* Hamburger */}
          <button onClick={() => setIsOpen(true)} className="md:hidden mr-14">
            <i className="ri-menu-line text-xl"></i>
          </button>

          {/* Logo */}
          <div>
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <ul className="gap-8 text-[#666666] text-xs ml-0 md:ml-12 hidden md:flex">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#products">Product</a>
            </li>
            <li>
              <a href="#connect">Connect</a>
            </li>
          </ul>

          {/* CTA */}
          <div className="bg-[#cc0000] text-white px-4 py-1.5 rounded-sm font-medium text-xs cursor-pointer">
            Contact Us
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-3/4 bg-white z-50 transform transition-transform duration-300 md:hidden shadow-lg ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <span className="font-bold text-sm font-[Outfit]">Redis</span>
            <button onClick={() => setIsOpen(false)} className="text-xl">
              <i className="ri-close-fill"></i>
            </button>
          </div>

          <ul className="flex flex-col items-center gap-4 p-4 text-[#444] text-sm font-medium font-[Outfit] mt-6">
            <li>
              <a onClick={() => setIsOpen(false)} href="#about">
                About Us
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href="#services">
                Services
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href="#products">
                Product
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href="#connect">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
