import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  TbArrowRight,
  TbCloverFilled,
  TbBuilding,
  TbUsers,
  TbAward,
  TbTarget,
  TbMinus,
  TbPlus,
} from "react-icons/tb";
import {
  FaBalanceScale,
  FaHandshake,
  FaGavel,
  FaUserTie,
  FaBuilding,
  FaHome,
  FaBriefcase,
  FaCreditCard,
  FaHeart,
  FaBook,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [openSection, setOpenSection] = useState(0);

  const sections = [
    {
      title: "We Are People First",
      content:
        "We prioritize our clients and their needs above everything else. Our lawyers take the time to understand the unique circumstances of each case and provide personalized strategies that cater to our clients' specific objectives. We believe that building strong relationships with our clients leads to better outcomes and lasting trust.",
      icon: "👥",
    },
    {
      title: "We Are Committed To Results",
      content:
        "Our track record speaks for itself. We don't just promise results – we deliver them. Our team of experienced lawyers has successfully resolved complex legal matters across Kenya, consistently achieving favorable outcomes for our clients through strategic thinking and relentless advocacy.",
      icon: "🎯",
    },
    {
      title: "We Are Strong Negotiators",
      content:
        "Negotiation is an art, and our lawyers are masters of it. Whether in boardrooms, courtrooms, or settlement discussions, we leverage our deep understanding of Kenyan law and business practices to secure the best possible terms for our clients. Our negotiation skills often lead to favorable settlements without the need for lengthy litigation.",
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
  const values = [
    {
      icon: FaBalanceScale,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our legal practices, ensuring transparency and honesty in every client interaction.",
    },
    {
      icon: FaHandshake,
      title: "Excellence",
      description:
        "Our commitment to delivering exceptional legal services drives us to continuously improve and exceed client expectations.",
    },
    {
      icon: FaGavel,
      title: "Justice",
      description:
        "We are dedicated to fighting for justice and protecting the rights of our clients with unwavering determination and expertise.",
    },
    {
      icon: FaUserTie,
      title: "Client Focus",
      description:
        "Every decision we make is centered around achieving the best possible outcome for our clients and their unique needs.",
    },
  ];

  const achievements = [
    {
      number: "25+",
      label: "Years of Experience",
      description: "Decades of legal expertise",
    },
    {
      number: "500+",
      label: "Cases Won",
      description: "Successful outcomes",
    },
    {
      number: "98%",
      label: "Success Rate",
      description: "Client satisfaction",
    },
    {
      number: "1000+",
      label: "Happy Clients",
      description: "Trusted relationships",
    },
  ];

  const teamHighlights = [
    {
      icon: TbBuilding,
      title: "Expert Legal Team",
      description:
        "Our diverse team of experienced lawyers brings specialized knowledge across multiple practice areas.",
    },
    {
      icon: TbUsers,
      title: "Client-Centered Approach",
      description:
        "We prioritize understanding your unique situation and crafting personalized legal strategies.",
    },
    {
      icon: TbAward,
      title: "Proven Track Record",
      description:
        "Our consistent success in complex legal matters demonstrates our commitment to excellence.",
    },
    {
      icon: TbTarget,
      title: "Strategic Solutions",
      description:
        "We develop innovative legal strategies tailored to achieve your specific goals and objectives.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-[5.5rem] lg:pt-[8rem] pb-10 md:pb-16 lg:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/courtroom.jpg)",
              filter: "blur(1px)",
            }}
          ></div>
        </div>

        {/* Geometric Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border border-secondary-500/20 rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 border border-secondary-600/15 rounded-full"></div>
        </div>

        <div className="max-w-[95%] mx-auto md:px-6 lg:px-14 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-16 bg-secondary-700 rounded-full mr-4"></div>
              <span className="text-[0.8rem] md:text-sm lg:text-base font-bold uppercase tracking-wider text-secondary-500">
                ABOUT OUR FIRM
              </span>
              <div className="h-1 w-16 bg-secondary-700 rounded-full ml-4"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 lg:mb-6 leading-tight">
              Obel & Company Associates
            </h1>

            <p className="text-lg lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              For over two decades, we have been providing exceptional legal
              services with integrity, expertise, and unwavering commitment to
              our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-slate-200 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/lawyer.jpg)",
              filter: "blur(2px)",
            }}
          ></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 lg:px-14 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <span className="text-[0.8rem] md:text-sm lg:text-base font-bold uppercase tracking-wider text-primary-600">
                  OUR STORY
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-4 mb-6 leading-tight">
                  Building Trust Through Excellence
                </h2>
              </div>

              <p className="text-slate-700 text-[1.1rem] md:text-[1.15rem] lg:text-xl leading-relaxed">
                Founded with a vision to provide accessible, high-quality legal
                services, Obel & Company Associates has grown into one of
                Kenya's most respected law firms. Our journey began with a
                simple commitment: to deliver justice and protect our clients'
                rights.
              </p>

              <p className="text-slate-700 text-[1.1rem] md:text-[1.15rem] lg:text-xl leading-relaxed">
                Over the years, we have built a reputation for excellence
                through our unwavering dedication to our clients, our deep
                understanding of the law, and our innovative approach to legal
                challenges. We believe that every client deserves personalized
                attention and the highest quality representation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TbCloverFilled className="text-secondary-700 w-5 h-5" />
                  <span className="text-slate-700 font-semibold text-[1.1rem]">
                    Committed to Client Success
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <TbCloverFilled className="text-secondary-700 w-5 h-5" />
                  <span className="text-slate-700 font-semibold text-[1.1rem]">
                    Innovative Legal Solutions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <TbCloverFilled className="text-secondary-700 w-5 h-5" />
                  <span className="text-slate-700 font-semibold text-[1.1rem]">
                    Community-Focused Approach
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/courtroom4.jpg"
                  alt="Our Legal Team"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Excellence in Every Case
                  </h3>
                  <p className="text-white/90 text-lg">
                    Our commitment to delivering exceptional results
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20  bg-secondary-900  relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Column - Main Content */}
            <div className="lg:max-w-[43%] space-y-6">
              {/* Top Label */}
              <div>
                <span className="text-sm md:text-[0.9rem] lg:text-[1.1rem] font-medium uppercase tracking-wider text-secondary-300">
                  A LAW FIRM YOU CAN TRUST
                </span>
              </div>

              {/* Main Heading */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-12 bg-secondary-500"></div>
                <h2 className="text-3xl md:text-4xl lg:text-[2.7rem] font-bold text-white leading-tight pl-8">
                  What Makes Us Different?
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-4 text-lg lg:text-xl text-slate-200 leading-relaxed">
                <p>
                  Our goal is to uphold the principles of justice and fairness
                  while advocating for the best interests of those we
                  represent.cl With a focus on integrity, professionalism, and
                  personalized attention, we strive to be a trusted partner in
                  guiding our clients through their legal challenges.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button className="w-full hover:cursor-pointer bg-secondary-600 hover:bg-secondary-600 text-burgundy px-6 py-2.5 font-bold text-lg lg:text-[1.2rem] transition-colors duration-200 shadow-lg hover:shadow-xl">
                  <div className="flex items-center justify-center gap-2">
                    <span>Talk To A Legal Expert</span>
                    <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column - Expandable Sections */}
            <div className="flex-1 space-y-0">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="border-b border-slate-300/30 last:border-b-0 bg-white/5 rounded-lg mb-2"
                >
                  {/* Section Header */}
                  <motion.button
                    onClick={() => toggleSection(index)}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-4 text-left flex items-center justify-between rounded-lg accordion-item-hover"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary-400 rotate-45"></div>
                      <h3 className="text-lg lg:text-xl font-semibold text-white">
                        {section.title}
                      </h3>
                    </div>

                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: openSection === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {openSection === index ? (
                          <TbMinus className="w-5 h-5 text-secondary-400" />
                        ) : (
                          <TbPlus className="w-5 h-5 text-secondary-400" />
                        )}
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* Expandable Content */}
                  <AnimatePresence mode="wait">
                    {openSection === index && (
                      <motion.div
                        key={index}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.4, ease: "easeInOut" },
                          opacity: { duration: 0.3, ease: "easeInOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pl-5 px-4">
                          <p className="text-[1.1rem] lg:text-[1.2rem] text-slate-200 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-slate-900 relative">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-16"
          >
            <div className="mb-4">
              <span className="text-[0.8rem] md:text-sm lg:text-base font-bold uppercase tracking-wider text-slate-400">
                OUR CORE VALUES
              </span>
            </div>
            <div className="flex items-center mb-6">
              <div className="w-1 h-12 bg-secondary-500 mr-4"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                What We Stand For
              </h2>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl leading-relaxed">
              At Obel & Company Associates, we understand that choosing the
              right legal representation is crucial for achieving successful
              outcomes in your legal matters. We firmly believe that our firm
              stands out from the rest for the following reasons.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 h-full">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white uppercase">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default AboutPage;
