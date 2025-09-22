import React from "react";
import { FaBalanceScale, FaHome } from "react-icons/fa";
import { GiHandcuffs } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { PiBuildingsDuotone } from "react-icons/pi";
import {
  TbScale,
  TbReceiptTax,
  TbHome,
  TbBriefcase,
  TbBuilding,
  TbShield,
  TbBuildingBank,
} from "react-icons/tb";

const AboutSection = () => {
  const practiceAreas = [
    {
      icon: FaBalanceScale,
      title: "Civil Law",
      description:
        "Comprehensive civil litigation services including contract disputes, personal injury claims, and property rights protection with decades of courtroom experience.",
    },
    {
      icon: TbReceiptTax,
      title: "Tax Law",
      description:
        "Expert tax planning, compliance, and dispute resolution for individuals and businesses, ensuring optimal tax strategies and legal compliance.",
    },
    {
      icon: FaHome,
      title: "Property & Land Law",
      description:
        "Specialized real estate legal services covering property transactions, land disputes, zoning issues, and comprehensive property rights advocacy.",
    },
    {
      icon: TbBriefcase,
      title: "Employment & Labour",
      description:
        "Employment law expertise including workplace discrimination, wrongful termination, labor disputes, and employee rights protection.",
    },
    {
      icon: PiBuildingsDuotone,
      title: "Commercial & Corporate Law",
      description:
        "Full-service corporate legal support including business formation, mergers & acquisitions, corporate governance, and commercial litigation.",
    },
    {
      icon: TbBuildingBank,
      title: "Banking & Financial Law",
      description:
        "Banking and finance law expertise including loan agreements, credit facilities, and financial transactions with a focus on securing favorable terms and protecting client interests.",
    },
    {
      icon: GiHandcuffs,
      title: "Criminal Law",
      description:
        "Criminal defense representation with strategic legal counsel, evidence analysis, and courtroom advocacy for all criminal proceedings.",
    },
    {
      icon: MdOutlineFamilyRestroom,
      title: "Family Law",
      description:
        "Comprehensive family law services including divorce, child custody, and property division with a focus on preserving family relationships and minimizing conflict.",
    },
  ];

  return (
    <section
      id="about"
      className="py-6 md:py-8 lg:py-14 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="max-w-[95%] mx-auto md:px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Side - Section Title */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 md:mb-3 lg:mb-4 leading-tight">
                Practice Areas
              </h2>
              <div className="h-1 w-20 bg-secondary-700 mb-4 lg:mb-6"></div>
              <p className="text-lg lg:text-2xl text-slate-600 font-medium">
                Comprehensive legal expertise across all major practice areas,
                delivering innovative solutions and trusted advice for our
                clients.
              </p>
              <a
                href="/practice-areas"
                className="inline-flex items-center text-secondary-700 uppercase hover:text-red-700 font-bold text-[0.9rem] lg:text-base mt-4 lg:mt-6 group transition-colors duration-300"
              >
                <span className="underline underline-offset-4">Learn More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Practice Areas Grid */}
          <div className="lg:col-span-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 space-y-7 lg:space-y-14 space-x-2 md:space-x-3 lg:space-x-10">
              {practiceAreas.map((area, index) => {
                // Create alternating border styles for smaller screens
                const isEven = index % 2 === 0;
                const borderClasses = isEven
                  ? "border-l-4 border-l-burgundy "
                  : "border-r-4 border-r-secondary-700 ";

                return (
                  <div
                    key={index}
                    className={`group relative p-4 lg:p-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 backdrop-blur-sm  lg:bg-transparent lg:backdrop-blur-none ${borderClasses} lg:border-r-2 lg:border-r-slate-200/50 lg:border-l-0 lg:border-t-0 lg:border-b-0`}
                  >
                    {/* Connecting line for mobile (except last item) */}
                    {index < practiceAreas.length - 1 && (
                      <div className="absolute -bottom-3.5 left-1/2 transform -translate-x-1/2 w-0.5 h-7 bg-gradient-to-b from-slate-300 to-transparent lg:hidden"></div>
                    )}

                    {/* Icon and Title Row */}
                    <div className="flex items-center space-x-3 md:space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`p-2 rounded-full ${
                            isEven ? "bg-burgundy/10" : "bg-secondary-700/10"
                          } lg:bg-transparent`}
                        >
                          <area.icon className="w-10 h-10 md:w-10 md:h-10 text-secondary-700" />
                        </div>
                      </div>
                      <h3 className="text-[1.35rem] md:text-2xl font-extrabold text-burgundy leading-tight line-clamp-2">
                        {area.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-lg lg:text-[1.35rem]">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
