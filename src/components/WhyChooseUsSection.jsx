import React, { useState } from "react";
import { TbMinus, TbPlus } from "react-icons/tb";

const WhyChooseUsSection = () => {
  const [openSection, setOpenSection] = useState(0);

  const sections = [
    {
      title: "We Are People First",
      content:
        "We prioritize our clients and their needs above everything else. Our attorneys take the time to understand the unique circumstances of each case and provide personalized strategies that cater to our clients' specific objectives. We believe that building strong relationships with our clients leads to better outcomes and lasting trust.",
      icon: "👥",
    },
    {
      title: "We Are Committed To Results",
      content:
        "Our track record speaks for itself. We don't just promise results – we deliver them. Our team of experienced attorneys has successfully resolved complex legal matters across Kenya, consistently achieving favorable outcomes for our clients through strategic thinking and relentless advocacy.",
      icon: "🎯",
    },
    {
      title: "We Are Strong Negotiators",
      content:
        "Negotiation is an art, and our attorneys are masters of it. Whether in boardrooms, courtrooms, or settlement discussions, we leverage our deep understanding of Kenyan law and business practices to secure the best possible terms for our clients. Our negotiation skills often lead to favorable settlements without the need for lengthy litigation.",
      icon: "🤝",
    },
    {
      title: "We Are Always Trial-Ready",
      content:
        "While we excel at negotiation and settlement, we're always prepared to go to trial when necessary. Our litigation team has extensive courtroom experience and a proven track record of success in Kenyan courts. When your case requires aggressive representation, we're ready to fight for your rights with unwavering determination.",
      icon: "⚖️",
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? -1 : index);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary-700  relative">
      {/* Subtle background image overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/scales.jpg)",
            filter: "blur(2px)",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            {/* Top Label */}
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-secondary-300">
                A LAW FIRM YOU CAN TRUST
              </span>
            </div>

            {/* Main Heading */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-1 h-16 bg-secondary-500"></div>
              <h2 className="text-4xl font-bold text-white leading-tight pl-8">
                What Makes Us Different?
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-base text-slate-200 leading-relaxed">
              <p>
                Our goal is to uphold the principles of justice and fairness
                while advocating for the best interests of those we represent.
                With a focus on integrity, professionalism, and personalized
                attention, we strive to be a trusted partner in guiding our
                clients through their legal challenges.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded font-semibold text-base transition-colors duration-200 shadow-lg hover:shadow-xl">
                TALK TO A LAWYER
              </button>
            </div>
          </div>

          {/* Right Column - Expandable Sections */}
          <div className="space-y-0">
            {sections.map((section, index) => (
              <div
                key={index}
                className="border-b border-slate-300/30 last:border-b-0 bg-white/5 rounded-lg mb-2"
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full py-4 px-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-400 rotate-45"></div>
                    <h3 className="text-base font-semibold text-white">
                      {section.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openSection === index ? (
                      <TbMinus className="w-5 h-5 text-secondary-400" />
                    ) : (
                      <TbPlus className="w-5 h-5 text-secondary-400" />
                    )}
                  </div>
                </button>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSection === index
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4 pl-5 px-4">
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
