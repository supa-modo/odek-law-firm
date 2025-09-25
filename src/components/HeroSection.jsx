import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbArrowRight, TbPhoneCall } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  // Carousel data with images and matching content
  const carouselData = [
    {
      id: 1,
      mobileImage: "/hero6.jpg",
      desktopImage: "/hero6.jpg",
      title: "Your Professional Legal Partner",
      subtitle: "Innovative Trusted Advice",
      highlight: "Delivering Justice with Excellence.",
      description:
        "Experience unparalleled legal representation with our seasoned team of lawyers leveraging decades of expertise and innovative approaches to secure the best outcomes for our clients.",
    },
    {
      id: 2,
      mobileImage: "/court3.jpg",
      desktopImage: "/court3.jpg",
      title: "Expert Courtroom Advocacy",
      subtitle: "Proven Trial Excellence",
      highlight: "Defending Your Rights with Precision.",
      description:
        "Our experienced trial lawyers bring commanding courtroom presence and strategic litigation expertise to protect your interests and achieve favorable outcomes in even the most complex cases.",
    },
    {
      id: 3,
      mobileImage: "/documents2.jpg",
      desktopImage: "/documents2.jpg",
      title: "Comprehensive Legal Documentation",
      subtitle: "Meticulous Contract Excellence",
      highlight: "Securing Your Future with Precision.",
      description:
        "From complex business contracts to personal legal agreements, our detail-oriented approach ensures every document is crafted with precision to protect your interests and minimize legal risks.",
    },
    {
      id: 4,
      mobileImage: "/lawyer.jpg",
      desktopImage: "/lawyer.jpg",
      title: "Passionate Legal Advocacy",
      subtitle: "Dedicated Client Representation",
      highlight: "Fighting for Justice Every Step.",
      description:
        "Our committed advocates bring passion and dedication to every case, ensuring your voice is heard and your rights are protected throughout the entire legal process with unwavering determination.",
    },
  ];

  // Carousel state management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [carouselData.length, isAutoPlaying]);

  // Get current slide data
  const currentData = carouselData[currentSlide];

  // Preload next image for seamless transitions
  const nextSlideIndex = (currentSlide + 1) % carouselData.length;
  const nextData = carouselData[nextSlideIndex];

  // Touch gesture handlers for mobile
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    e.currentTarget.touchStartX = touchStart;
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const touchStart = e.currentTarget.touchStartX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      // Minimum swipe distance
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
      } else {
        // Swipe right - previous slide
        setCurrentSlide(
          (prev) => (prev - 1 + carouselData.length) % carouselData.length
        );
      }
    }

    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setCurrentSlide(
        (prev) => (prev - 1 + carouselData.length) % carouselData.length
      );
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 3000);
    } else if (e.key === "ArrowRight") {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 3000);
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [carouselData.length]);

  return (
    <section
      id="home"
      className="relative h-[75vh] md:h-[82vh] flex items-center overflow-hidden pt-[4.6rem]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with CSS Transitions - No Gaps */}
      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed md:hidden transition-all duration-2000 ease-in-out"
        style={{
          backgroundImage: `url(${currentData.mobileImage})`,
        }}
      />

      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed hidden md:block transition-all duration-2000 ease-in-out"
        style={{
          backgroundImage: `url(${currentData.desktopImage})`,
        }}
      />

      {/* Hidden Preload Elements */}
      <div className="hidden">
        <img src={nextData.mobileImage} alt="" />
        <img src={nextData.desktopImage} alt="" />
      </div>

      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/70 lg:to-slate-900/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

      {/* Right Side Geometric Pattern Overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        {/* Large Abstract Geometric Shapes - Enhanced */}
        <div className="absolute top-20 right-20 w-64 h-64 border-3 border-secondary-600/40 rounded-full opacity-50 shadow-lg"></div>
        <div className="absolute top-32 right-32 w-48 h-48 border-2 border-secondary-500/30 rounded-full opacity-40 shadow-md"></div>

        {/* Additional Layered Circles for Depth */}
        <div className="absolute top-28 right-28 w-56 h-56 border border-secondary-400/15 rounded-full opacity-30"></div>
        <div className="absolute top-36 right-36 w-40 h-40 border border-secondary-300/20 rounded-full opacity-25"></div>

        {/* Diagonal Lines Pattern - Thicker and more pronounced */}
        <div className="absolute top-60 right-40 w-96 h-1 bg-gradient-to-l from-secondary-600/40 to-transparent transform rotate-45 origin-left shadow-sm"></div>
        <div className="absolute top-80 right-20 w-80 h-1 bg-gradient-to-l from-secondary-500/30 to-transparent transform rotate-45 origin-left shadow-sm"></div>
        <div className="absolute top-80 right-70 w-64 h-1 bg-gradient-to-l from-secondary-400/20 to-transparent transform rotate-45 origin-left shadow-sm"></div>

        {/* Vertical Accent Lines - Thicker and more visible */}
        <div className="absolute top-0 right-32 w-1 h-96 bg-gradient-to-b from-secondary-600/70 to-transparent shadow-sm"></div>
        {/* <div className="absolute top-20 right-48 w-1 h-80 bg-gradient-to-b from-secondary-500/60 to-transparent shadow-sm"></div> */}
        <div className="absolute top-40 right-48 w-1 h-64 bg-gradient-to-b from-secondary-400/20 to-transparent shadow-sm"></div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary-500/60 rounded-full animate-pulse shadow-sm"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-secondary-400/50 rounded-full animate-pulse delay-1000 shadow-sm"></div>
        {/* <div className="absolute top-2/3 right-1/2 w-4 h-4 bg-secondary-600/40 rounded-full animate-pulse delay-500 shadow-sm"></div> */}

        {/* Additional Geometric Accents */}
        <div className="absolute top-16 right-40 w-2 h-2 bg-secondary-400/50 rounded-full"></div>
        <div className="absolute top-56 right-56 w-1.5 h-1.5 bg-secondary-500/60 rounded-full"></div>
        <div className="absolute top-88 right-32 w-2.5 h-2.5 bg-secondary-600/50 rounded-full"></div>

        {/* Subtle Corner Accents */}
        <div className="absolute top-8 right-8 w-16 h-16 border border-secondary-500/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 right-8 w-12 h-12 border border-secondary-400/25 rounded-full opacity-25"></div>

        {/* Angular Design Elements */}
        <div className="absolute top-32 right-8 w-0 h-0 border-l-[8px] border-l-transparent border-b-[8px] border-b-secondary-500/30 border-r-[8px] border-r-transparent"></div>
        <div className="absolute top-64 right-16 w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-secondary-400/25 border-r-[6px] border-r-transparent"></div>
        <div className="absolute top-96 right-24 w-0 h-0 border-l-[10px] border-l-transparent border-b-[10px] border-b-secondary-600/20 border-r-[10px] border-r-transparent"></div>

        {/* Large Professional Scale Symbol (Replacing the plus) */}
        <div className="absolute bottom-16 right-20 opacity-25">
          <div className="w-40 h-40 relative">
            {/* Scale Bowls - Larger and more prominent */}
            <div className="absolute top-0 -left-3 w-20 h-8 bg-gradient-to-br from-secondary-600/60 to-secondary-500/80 rounded-full transform rotate-[25deg] shadow-lg"></div>
            <div className="absolute top-0 -right-3 w-20 h-8 bg-gradient-to-br from-secondary-600/60 to-secondary-500/80 rounded-full transform -rotate-[25deg] shadow-lg"></div>

            {/* Scale Bar - Thicker and more visible */}
            <div className="absolute top-4 left-1/2 w-1.5 h-32 bg-gradient-to-b from-secondary-600/60 to-secondary-400/40 transform -translate-x-1/2 shadow-md"></div>

            {/* Scale Stand - Wider base */}
            <div className="absolute bottom-0 left-1/2 w-20 h-1.5 bg-gradient-to-r from-secondary-600/30 to-secondary-400/20 transform -translate-x-1/2"></div>

            {/* Center Balance Point */}
            <div className="absolute top-2 left-1/2 w-3 h-3 bg-secondary-500/60 rounded-full transform -translate-x-1/2 shadow-sm"></div>
          </div>
        </div>

        {/* Enhanced Grid Pattern with More Structure */}
        <div className="absolute inset-0 opacity-12">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Subtle Connecting Lines for Unity */}
        <div className="absolute top-1/4 right-1/3 w-32 h-px bg-gradient-to-r from-secondary-500/20 to-transparent"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-px bg-gradient-to-r from-secondary-400/15 to-transparent"></div>

        {/* Corner Flourish Elements */}
        <div className="absolute top-12 right-12 w-8 h-8 border-r-2 border-b-2 border-secondary-500/25 rounded-br-lg"></div>
        <div className="absolute bottom-20 right-12 w-6 h-6 border-r border-b border-secondary-400/20 rounded-br-md"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[95%] lg:max-w-[85%] mx-auto md:px-6 lg:px-10 w-full">
        <div className=" h-full py-12">
          {/* Left Side - Text Content with Smooth Transitions */}
          <div className="text-left">
            {/* Decorative Line with Progress */}
            <div className="h-1 w-[12rem] lg:w-[30rem] bg-secondary-700 rounded-full mb-6 md:mb-7 lg:mb-8 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-secondary-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                key={currentSlide}
                transition={{ duration: 8, ease: "linear" }}
              />
            </div>

            {/* Animated Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {currentData.title}
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200 mb-6 md:mb-7 lg:mb-8 leading-relaxed">
                  {currentData.subtitle}
                  <br />
                  <span className="text-secondary-300 font-medium">
                    {currentData.highlight}
                  </span>
                </h2>

                {/* Description */}
                <p className="text-lg lg:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
                  {currentData.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Call-to-Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  navigate("/practice-areas");
                }}
                className="border-2 border-white/30 hover:border-primary-500 text-white hover:text-primary-400 px-12 md:px-14 py-2.5 md:py-3 text-base md:text-lg lg:text-xl font-semibold transition-all hover:cursor-pointer duration-300 transform backdrop-blur-sm"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <span className="flex items-center justify-center gap-3">
                  <span className="">Explore Our Services</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators with Droplet Animation */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2 md:space-x-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000); // Resume auto-play after 3 seconds
              }}
              className="relative group focus:outline-none"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Simple Indicator */}
              <motion.div
                className={` rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? "bg-secondary-500 scale-125 shadow-lg w-4 md:w-5 h-1.5 md:h-2.5"
                    : "bg-white/30 backdrop-blur-sm border border-white/20 w-2 md:w-3 h-2 md:h-3"
                }`}
              />

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/10 opacity-0"
                whileHover={{ opacity: 1, scale: 1.3 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
