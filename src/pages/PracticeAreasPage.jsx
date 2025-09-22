import React from "react";
import { motion } from "framer-motion";
import {
  TbArrowRight,
  TbBuildingBank,
  TbCloverFilled,
  TbReceiptTax,
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
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GiHandcuffs } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";

const PracticeAreasPage = () => {
  const practiceAreas = [
    {
      id: "civil",
      title: "Civil Law",
      icon: FaBalanceScale,
      description:
        "Comprehensive civil litigation services including contract disputes, personal injury claims, and property rights protection with decades of courtroom experience.",
    },
    {
      id: "tax",
      title: "Tax Law",
      icon: TbReceiptTax,
      description:
        "Expert tax planning, compliance, and dispute resolution for individuals and businesses, ensuring optimal tax strategies and legal compliance.",
    },
    {
      id: "property",
      title: "Property & Land Law",
      icon: FaHome,
      description:
        "Specialized real estate legal services covering property transactions, land disputes, zoning issues, and comprehensive property rights advocacy.",
    },
    {
      id: "employment",
      title: "Employment & Labour",
      icon: FaBriefcase,
      description:
        "Employment law expertise including workplace discrimination, wrongful termination, labor disputes, and employee rights protection.",
    },
    {
      id: "corporate",
      title: "Corporate & Commercial Law",
      icon: FaBuilding,
      description:
        "Full-service corporate legal support including business formation, mergers & acquisitions, corporate governance, and commercial litigation.",
    },
    {
      id: "banking",
      title: "Banking & Financial Law",
      icon: TbBuildingBank,
      description:
        "Banking and finance law expertise including loan agreements, credit facilities, and financial transactions with a focus on securing favorable terms and protecting client interests.",
    },
    {
      id: "criminal",
      title: "Criminal Law",
      icon: GiHandcuffs,
      description:
        "Criminal defense representation with strategic legal counsel, evidence analysis, and courtroom advocacy for all criminal proceedings.",
    },
    {
      id: "family",
      icon: MdOutlineFamilyRestroom,
      title: "Family Law",
      description:
        "Comprehensive family law services including divorce, child custody, and property division with a focus on preserving family relationships and minimizing conflict.",
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
                LEGAL EXPERTISE
              </span>
              <div className="h-1 w-16 bg-secondary-700 rounded-full ml-4"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 lg:mb-6 leading-tight">
              Practice Areas
            </h1>

            <p className="text-lg lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We offer a diverse range of practice areas to cater to all of our
              clients' legal needs. Our lawyers specialize in family law,
              corporate law, criminal law, immigration, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-100 lg:from-slate-200 to-slate-200 lg:to-slate-300 relative">
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
          {/* Practice Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={`/practice-areas/${area.id}`}
                    className="block h-full"
                  >
                    <div className="border-2 border-burgundy-900 hover:bg-primary-700 hover:border-primary-600 transition-all duration-500 overflow-hidden h-full py-8 px-4 md:p-6 lg:p-7 text-center group/card flex flex-col">
                      {/* Icon */}
                      <div className="mb-6">
                        <IconComponent className="w-12 h-12 text-secondary-700 group-hover/card:text-secondary-500 transition-colors duration-500 mx-auto" />
                      </div>

                      {/* Title */}
                      <h3 className="group-hover/card:text-white text-secondary-700 transition-all duration-500 font-bold text-lg uppercase mb-4">
                        {area.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-800 group-hover/card:text-white transition-all duration-500 text-[1.1rem] lg:text-[1.15rem] leading-relaxed mb-6 flex-1">
                        {area.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center justify-center gap-2 text-burgundy font-bold underline underline-offset-4 text-sm uppercase tracking-wider group-hover/card:text-secondary-500 transition-colors duration-500">
                        <span>Learn More</span>
                        <TbArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform duration-500" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="pt-16 md:pt-20 lg:pt-24 max-w-screen-2xl mx-auto px-6 lg:px-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="pt-8 md:pt-12 ">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-700 mb-4">
                Ready to Begin?
              </h3>
              <p className="text-slate-800 text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
                Don't face legal challenges alone. Our experienced lawyers are
                here to provide the guidance and representation you need to
                achieve the best possible outcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                  <span className="flex items-center justify-center gap-3">
                    <span>Schedule Consultation</span>
                    <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                <Link to="/legal-team">
                  <button className="bg-transparent border-2 border-burgundy-900 text-burgundy-900 hover:bg-burgundy-900/10 px-8 py-3 font-semibold text-lg transition-all duration-300">
                    View Our Legal Team
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticeAreasPage;
