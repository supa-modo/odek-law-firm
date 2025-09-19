import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TbFileText,
  TbCalculator,
  TbQuestionMark,
  TbDownload,
  TbArrowRight,
  TbBook,
  TbScale,
  TbShield,
  TbClock,
  TbUsers,
} from "react-icons/tb";

const LegalResourcesSection = () => {
  const [activeResource, setActiveResource] = useState(0);

  const resources = [
    {
      id: 1,
      title: "Legal Document Templates",
      description:
        "Access our comprehensive library of professionally drafted legal document templates for various business and personal needs.",
      icon: TbFileText,
      features: [
        "Contract Templates",
        "Legal Forms",
        "Agreement Samples",
        "Compliance Documents",
      ],
      color: "bg-blue-500",
      count: "50+ Templates",
    },
    {
      id: 2,
      title: "Legal Calculators",
      description:
        "Use our specialized calculators to estimate legal costs, settlement amounts, and other legal calculations.",
      icon: TbCalculator,
      features: [
        "Cost Estimators",
        "Settlement Calculators",
        "Tax Calculators",
        "Fee Estimators",
      ],
      color: "bg-green-500",
      count: "12 Calculators",
    },
    {
      id: 3,
      title: "Legal FAQ Database",
      description:
        "Find answers to frequently asked legal questions across all practice areas with expert explanations.",
      icon: TbQuestionMark,
      features: [
        "Practice Area FAQs",
        "Legal Procedures",
        "Rights & Obligations",
        "Compliance Questions",
      ],
      color: "bg-purple-500",
      count: "200+ FAQs",
    },
    {
      id: 4,
      title: "Legal Guides & eBooks",
      description:
        "Download our comprehensive legal guides and eBooks covering various legal topics and procedures.",
      icon: TbBook,
      features: [
        "Legal Procedures",
        "Compliance Guides",
        "Industry Reports",
        "Case Studies",
      ],
      color: "bg-orange-500",
      count: "25+ Guides",
    },
  ];

  const quickTools = [
    {
      title: "Legal Consultation Booking",
      description: "Schedule a consultation with our legal experts",
      icon: TbUsers,
      action: "Book Now",
    },
    {
      title: "Document Review Service",
      description: "Get your legal documents reviewed by experts",
      icon: TbFileText,
      action: "Submit Document",
    },
    {
      title: "Legal Emergency Hotline",
      description: "24/7 emergency legal assistance",
      icon: TbShield,
      action: "Call Now",
    },
    {
      title: "Case Status Checker",
      description: "Track your case progress online",
      icon: TbClock,
      action: "Check Status",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/documents2.jpg)",
            filter: "blur(2px)",
          }}
        ></div>
      </div>

      <div className="max-w-[95%] mx-auto md:px-6 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <div className="h-1 w-16 bg-secondary-700 rounded-full mr-4"></div>
            <span className="text-sm md:text-base font-bold uppercase tracking-wider text-secondary-700">
              LEGAL RESOURCES
            </span>
            <div className="h-1 w-16 bg-secondary-700 rounded-full ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Tools & Resources for Your Legal Needs
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of legal tools, templates, and
            resources designed to help you navigate legal challenges with
            confidence and clarity.
          </p>
        </div>

        {/* Main Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200/50 p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setActiveResource(index)}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <resource.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-4 leading-relaxed">
                {resource.description}
              </p>

              {/* Count */}
              <div className="text-sm font-semibold text-secondary-700 mb-4">
                {resource.count}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {resource.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary-700 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className="w-full bg-secondary-700 hover:bg-secondary-800 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <span>Access Resources</span>
                  <TbArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Quick Tools Section */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200/50 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 relative">
              <span className="relative">
                Quick Legal Tools
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary-700 rounded-full"></div>
              </span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Get instant access to essential legal services and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200/50 p-6 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-secondary-700/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary-700/20 transition-colors">
                  <tool.icon className="w-6 h-6 text-secondary-700" />
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-slate-800 mb-2">
                  {tool.title}
                </h4>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                {/* Action Button */}
                <button className="w-full bg-secondary-700 hover:bg-secondary-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300">
                  {tool.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200/50 p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <TbDownload className="w-8 h-8 text-secondary-700 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">
                Download Our Legal Resource Pack
              </h3>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Get instant access to our complete collection of legal templates,
              guides, and resources. Perfect for businesses and individuals
              looking to handle legal matters with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary-700 hover:bg-secondary-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span className="flex items-center justify-center gap-3">
                  <TbDownload className="w-5 h-5" />
                  <span>Download Resource Pack</span>
                </span>
              </button>
              <button className="border-2 border-secondary-700 text-secondary-700 hover:bg-secondary-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                View Sample Documents
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalResourcesSection;
