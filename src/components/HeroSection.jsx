import React, { useState, useEffect } from 'react'
import MarqueeExample from './Marqee'
import bg from '../assets/bg.jpg'
import { LuHouse } from "react-icons/lu";
import { motion } from 'framer-motion';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <MarqueeExample />
      
      <section className="w-full bg-[#F4FDF8] pb-4 flex flex-col">
        {/* Navigation */}
        <nav className="flex justify-between items-center px-4 lg:px-12 py-5 md:py-6">
          <div className="text-2xl lg:text-3xl font-medium text-black">Artin</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {['Home', 'About us', 'Agents', 'Services', 'Listings'].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-[#000000] font-medium hover:text-[#212121] transition-colors text-sm xl:text-base`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Search Bar - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:relative md:flex ml-4">
            <input
              type="text"
              placeholder='Search...'
              className="px-4 py-2 text-start pl-6 rounded-full bg-[#EAF2ED] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EAF2ED] focus:border-transparent w-48 lg:w-60 xl:w-72"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* List with us Button - Hidden on mobile */}
          <button className="hidden lg:block bg-[#021E0E] text-[#DCDAD9] hover:bg-[#023010d8] px-4 py-2.5 rounded-3xl text-sm xl:text-[15px] font-medium transition-colors">
            List with us
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative w-full px-4 lg:px-6 mt-4">
          {/* Background Image */}
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[95vh] rounded-2xl lg:rounded-3xl overflow-hidden">
            <img
              src={bg}
              alt="Modern House"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
          </div>

          {/* Overlay text */}
          <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight md:leading-loose mt-28 md:mt-36 lg:mt-44 font-medium text-center drop-shadow-lg px-4">
              Rentals Made Easy <br /> Every Time
            </h1>
          </div>

          {/* Three buttons - Responsive positioning and sizing */}
          <div className="absolute top-1/2 sm:top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 sm:mt-12 md:mt-20 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4">
            {['Short Term', 'Month to Month', 'Long Term'].map((text, index) => (
              <button
                key={text}
                className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-medium transition text-sm sm:text-base ${
                  index === 0 
                    ? 'bg-white/90 text-black hover:bg-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <LuHouse className="text-sm sm:text-base" />
                {text}
              </button>
            ))}
          </div>

          {/* Search box - Responsive positioning and sizing */}
          <div className="absolute bottom-1/4 sm:bottom-1/3 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] bg-white rounded-2xl lg:rounded-full shadow-xl px-4 sm:px-6 md:px-8 py-3 sm:py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 sm:gap-0">
              {/* Search input with icon */}
              <div className="flex items-center w-full relative">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mr-3 sm:mr-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  className="w-full text-base sm:text-lg text-gray-600 focus:outline-none bg-transparent relative z-10 placeholder-transparent"
                  placeholder=" "
                />
                
                {/* Animated placeholder text */}
                <div className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 pointer-events-none w-[calc(100%-2.5rem)] sm:w-[calc(100%-3rem)]">
                  <span className="text-gray-400 text-sm sm:text-base lg:text-lg flex items-center">
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
                        className="ml-0.5 inline-block h-4 sm:h-5 w-0.5 bg-gray-400 align-middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                      />
                    </motion.span>
                    ..."
                  </span>
                </div>
              </div>

              {/* Button - Stack on mobile, inline on larger screens */}
              <button className="bg-[#021E0E] text-[#DCDAD9] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-green-900 transition whitespace-nowrap w-full sm:w-auto text-sm sm:text-base">
                Find Property
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection