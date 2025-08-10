import React from "react";
import { TbArrowRight, TbPhoneCall } from "react-icons/tb";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-[80vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover md:bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url(/hammer.jpg)",
        }}
      ></div>

      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className=" h-full py-12">
          {/* Left Side - Text Content */}
          <div className="text-left">
            {/* Decorative Line */}
            <div className="h-1 w-[15rem] lg:w-[30rem] bg-secondary-700 mb-8"></div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Your Professional Legal Partner
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200 mb-8 leading-relaxed">
              Innovative Trusted Advice
              <br />
              <span className="text-secondary-300 font-medium">
                Delivering Justice with Excellence. 
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              Experience unparalleled legal representation with our seasoned
              team of attorneys leveraging decades of expertise and innovative
              approaches to secure the best outcomes for our clients.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary-700 hover:bg-secondary-800 group text-white px-8 py-4 text-lg lg:text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-secondary-600/30">
                <span className="flex items-center justify-center gap-3">
                  <TbPhoneCall className="w-5 h-5" />
                  <span className="">Book An Appointment</span>
                  <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="border-2 border-white/30 hover:border-primary-500 text-white hover:text-primary-400 px-8 py-4 text-lg lg:text-xl font-semibold transition-all duration-300 transform backdrop-blur-sm">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
