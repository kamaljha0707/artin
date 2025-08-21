import React, { useState, useEffect } from 'react'
import { LuHouse } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { HiMiniPercentBadge } from "react-icons/hi2";
import { IoPricetag } from "react-icons/io5";
import { MdPets } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { motion } from 'framer-motion';
import bg from '../assets/bg.jpg'

function HeroSection() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholderTexts = [
    "spacious two bedroom apartment downtown Vancouver",
    "luxury apartment with stunning ocean view balcony",
    "cozy studio apartment near central park area",
    "modern pet-friendly condo with parking included",
    "elegant luxury penthouse suite city center",
    "affordable one bedroom unit near transit station",
    "renovated basement suite utilities included price",
    "brand new condo building gym pool",
    "quiet neighborhood house backyard parking available"
  ];

  const filters = [
    { label: "All Rentals", icon: <MdOutlineBedroomParent /> },
    { label: "Available Today", icon: <SlCalender /> },
    { label: "Budget Friendly", icon: <HiMiniPercentBadge /> },
    { label: "Last Minute Deals", icon: <IoPricetag /> },
    { label: "New Listings", icon: <MdAddToPhotos /> },
    { label: "Pet Friendly", icon: <MdPets /> },
    { label: "Work Ready", icon: <FaLaptop /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F4FDF8] flex items-center justify-center px-2 sm:px-4 md:px-8 py-4">
      <div
        className="relative w-full max-w-[1800px] h-[90vh] sm:h-[95vh] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>

        {/* Navigation */}
        <nav className="relative z-20 flex justify-between items-center px-3 sm:px-6 lg:px-12 py-4 md:py-6">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white">
            Premier Stay
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className=" sm:block bg-[#021E0E] text-[#DCDAD9] hover:bg-[#023010d8] px-3 sm:px-4 py-2 sm:py-2.5 rounded-3xl text-xs sm:text-sm lg:text-[15px] font-medium transition-colors">
              List with us
            </button>
            <button className=" sm:block bg-[#021E0E] text-[#DCDAD9] hover:bg-[#023010d8] px-3 sm:px-4 py-2 sm:py-2.5 rounded-3xl text-xs sm:text-sm lg:text-[15px] font-medium transition-colors">
              Log in
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full text-center px-2 sm:px-4 md:px-8">
          
          {/* Title */}
          <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Rentals Made Easy <br className="hidden sm:block"/> Every Time
          </h1>

          {/* Search box */}
          <div className="mt-6 sm:mt-8 w-full max-w-md sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white shadow-xl rounded-full flex items-center justify-between px-3 sm:px-6 lg:px-8 py-2 sm:py-3">
            <div className="flex items-center w-full overflow-hidden">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mr-2 sm:mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg flex items-center truncate">
                Try typing, "
                <motion.span
                  key={placeholderIndex}
                  className="inline-block align-middle overflow-hidden"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {placeholderTexts[placeholderIndex]}
                  <motion.span
                    className="ml-0.5 inline-block h-3 sm:h-4 w-0.5 bg-gray-400 align-middle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  />
                </motion.span>
                ..."
              </span>
            </div>
            <button className="ml-2 sm:ml-4 bg-[#021E0E] text-[#DCDAD9] px-4 sm:px-6 lg:px-8 py-2.5 rounded-full font-medium hover:bg-green-900 transition text-xs sm:text-sm md:text-base whitespace-nowrap">
              Find Property
            </button>
          </div>

          {/* Duration Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {["Short Term", "Month to Month", "Long Term"].map((text, i) => (
              <button
                key={text}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base transition ${i === 0
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                <LuHouse className="text-xs sm:text-base" />
                {text}
              </button>
            ))}
          </div>

          {/* Filter Buttons */}
          <div className="mt-16 sm:mt-28 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-[95%]">
            {filters.map((item, i) => (
              <button
                key={item.label}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base transition ${i === 0
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-white/20 border text-white hover:bg-white/30"
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection
