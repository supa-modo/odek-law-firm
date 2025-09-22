import React from "react";
import { motion } from "framer-motion";
import { TbArrowRight, TbCloverFilled } from "react-icons/tb";
import {
  FaBalanceScale,
  FaHandshake,
  FaGavel,
  FaUserTie,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaClover } from "react-icons/fa6";

const LegalTeamPage = () => {
  const attorneys = [
    {
      id: 1,
      name: "Thomas Obel",
      position: "Senior Partner & Managing Director",
      // specialization: "Corporate & Commercial Law",
      experience: "25+ Years",
      image: "/lawyer.jpg",
      description:
        "Leading our firm with over two decades of experience in corporate law, mergers & acquisitions, and commercial litigation. Mr. Obel has successfully handled multi-million shillingstransactions and complex legal disputes.",
      achievements: [
        "500+ Cases Won",
        "98% Success Rate",
        "15+ Years Experience",
      ],
      education: "LLB (Hons) - University of Nairobi, LLM - Harvard Law School",
      languages: ["English", "Kiswahili", "French"],
      icon: FaUserTie,
    },
    {
      id: 2,
      name: "Sarah Wanjiku",
      position: "Partner - Criminal Defense",
      specialization: "Criminal Law & Litigation",
      experience: "18+ Years",
      image: "/court3.jpg",
      description:
        "A formidable criminal defense attorney with an exceptional track record in high-profile cases. Sarah's strategic approach and courtroom expertise have secured favorable outcomes for countless clients.",
      achievements: [
        "95% Case Success",
        "200+ Cases Defended",
        "Expert Negotiator",
      ],
      education:
        "LLB - University of Nairobi, Certificate in Criminal Law - Kenya School of Law",
      languages: ["English", "Kiswahili"],
      icon: FaGavel,
    },
    {
      id: 3,
      name: "Michael Otieno",
      position: "Partner - Property & Real Estate",
      specialization: "Property & Land Law",
      experience: "20+ Years",
      image: "/documents2.jpg",
      description:
        "Specializing in property law, land disputes, and real estate transactions helping clients navigate complex land ownership issues.",
      achievements: [
        "100% Client Satisfaction",
        "300+ Property Cases",
        "Land Expert",
      ],
      education:
        "LLB - University of Nairobi, Diploma in Land Law - Kenya School of Law",
      languages: ["English", "Kiswahili", "Luo"],
      icon: FaBalanceScale,
    },
    {
      id: 4,
      name: "Grace Njeri",
      position: "Senior Associate - Family Law",
      specialization: "Family Law & Succession",
      experience: "15+ Years",
      image: "/scales.jpg",
      description:
        "Compassionate and skilled in family law matters including divorce, custody, and succession planning bringing empathy and legal expertise to sensitive family situations.",
      achievements: [
        "Family Law Specialist",
        "150+ Family Cases",
        "Mediation Expert",
      ],
      education:
        "LLB - University of Nairobi, Certificate in Family Law - Kenya School of Law",
      languages: ["English", "Kiswahili", "Kikuyu"],
      icon: FaHandshake,
    },
    {
      id: 5,
      name: "Peter Kamau",
      position: "Associate - Employment Law",
      specialization: "Employment & Labour Law",
      experience: "12+ Years",
      image: "/hero2.jpg",
      description:
        "Expert in employment law, workplace disputes, and labor relations. Peter helps both employers and employees navigate complex employment issues with practical solutions.",
      achievements: [
        "Employment Expert",
        "100+ Workplace Cases",
        "HR Consultant",
      ],
      education:
        "LLB - University of Nairobi, Certificate in Employment Law - Kenya School of Law",
      languages: ["English", "Kiswahili"],
      icon: FaUserTie,
    },
    {
      id: 6,
      name: "Mary Akinyi",
      position: "Associate - Banking & Finance",
      specialization: "Banking & Financial Law",
      experience: "10+ Years",
      image: "/hammer2.jpg",
      description:
        "Specializing in banking regulations, financial transactions, and commercial banking law. Mary's expertise helps clients navigate the complex world of financial services.",
      achievements: [
        "Banking Law Expert",
        "80+ Financial Cases",
        "Regulatory Specialist",
      ],
      education:
        "LLB - University of Nairobi, Certificate in Banking Law - Kenya School of Law",
      languages: ["English", "Kiswahili", "Luo"],
      icon: FaBalanceScale,
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-[5.5rem] lg:pt-[8rem] pb-10 md:pb-16 lg:pb-30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/court3.jpg)",
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
                MEET THE PROS
              </span>
              <div className="h-1 w-16 bg-secondary-700 rounded-full ml-4"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 lg:mb-6 leading-tight">
              Our Attorneys
            </h1>

            <p className="text-lg lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              With a wealth of experience across a wide range of practice areas,
              our expert attorneys are passionate about advocating for your
              rights and delivering exceptional legal solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Attorneys Section */}
      <section className="md:py-20 lg:py-24 bg-gradient-to-br from-slate-100 to-slate-200 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/hammer.jpg)",
              filter: "blur(2px)",
            }}
          ></div>
        </div>

        <div className="max-w-screen-2xl mx-auto md:px-6 lg:px-14 relative z-10">
          {/* Top Row */}
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 items-center">
            {/* Two Attorneys */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-14">
              {/* Attorney 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center sm:text-left"
              >
                <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <img
                    src={attorneys[0].image}
                    alt={attorneys[0].name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-700/90 text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      {attorneys[0].specialization}
                    </span>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-800 uppercase tracking-wide">
                  {attorneys[0].name}
                </h3>
                <p className="text-burgundy font-semibold text-[1.1rem] mt-1">
                  {attorneys[0].position}
                </p>
                <p className="text-slate-600 text-[1.1rem] lg:text-[1.15rem] mt-3">
                  {attorneys[0].description.substring(0, 220)}...
                </p>
              </motion.div>

              {/* Attorney 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center sm:text-left"
              >
                <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <img
                    src={attorneys[1].image}
                    alt={attorneys[1].name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-700/90 text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      {attorneys[1].specialization}
                    </span>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-800 uppercase tracking-wide">
                  {attorneys[1].name}
                </h3>
                <p className="text-burgundy font-semibold text-[1.1rem] mt-1">
                  {attorneys[1].position}
                </p>
                <p className="text-slate-600 text-[1.1rem] lg:text-[1.15rem] mt-3">
                  {attorneys[1].description.substring(0, 220)}...
                </p>
              </motion.div>
            </div>

            {/* Text Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:block space-y-4 md:space-y-5  lg:col-span-2"
            >
              <div>
                <span className="text-[0.8rem] md:text-sm lg:text-base font-extrabold uppercase tracking-wider text-primary-600">
                  EXPERTISE & EXPERIENCE
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                Decades of Legal Excellence
              </h2>
              <p className="text-slate-600 text-[1.1rem] lg:text-xl leading-relaxed">
                Our attorneys combine deep legal knowledge with practical
                experience to deliver results that exceed expectations. From
                complex corporate transactions to personal injury cases, we
                bring the expertise you need.
              </p>
              <div className="space-y-4 text-[1.1rem] lg:text-xl">
                <div className="flex items-center space-x-3">
                  <TbCloverFilled className=" text-secondary-700 w-4 h-4" />
                  <span className="text-slate-700 font-semibold">
                    25+ Years Combined Experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <TbCloverFilled className=" text-secondary-700 w-4 h-4" />
                  <span className="text-slate-700 font-semibold">
                    98% Success Rate
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <TbCloverFilled className=" text-secondary-700 w-4 h-4" />
                  <span className="text-slate-700 font-semibold">
                    500+ Cases Won
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-20 items-start mt-10">
            {/* Text Block */}
            <motion.div className="hidden md:block lg:col-span-2 lg:pt-10">
              <div className="relative z-10">
                <span className="text-[0.8rem] md:text-sm lg:text-base font-extrabold uppercase tracking-wider text-secondary-700">
                  GET LEGAL HELP
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-burgundy mt-4 mb-6">
                  Ready to Get Started?
                </h3>
                <p className="text-slate-800 font-medium text-[1.1rem] lg:text-xl leading-relaxed mb-8">
                  Don't face legal challenges alone. Our experienced attorneys
                  are here to provide the guidance and representation you need
                  to achieve the best possible outcome.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="w-full bg-burgundy hover:bg-burgundy/80 text-white px-6 py-4 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                    <span className="flex items-center justify-center gap-3">
                      <span>Talk To A Legal Expert</span>
                      <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  <button className="w-full bg-transparent border-2 border-secondary-700 text-secondary-800 text-lg hover:bg-white/10 px-6 py-3 font-semibold transition-all duration-300">
                    About Our Firm
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Two Attorneys */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-14">
              {/* Attorney 3 */}
              <motion.div className="text-center sm:text-left">
                <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <img
                    src={attorneys[2].image}
                    alt={attorneys[2].name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-700/90 text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      {attorneys[2].specialization}
                    </span>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-800 uppercase tracking-wide">
                  {attorneys[2].name}
                </h3>
                <p className="text-burgundy font-semibold text-[1.1rem] mt-1">
                  {attorneys[2].position}
                </p>
                <p className="text-slate-600 text-[1.1rem] lg:text-[1.15rem] mt-3">
                  {attorneys[2].description.substring(0, 220)}...
                </p>
              </motion.div>

              {/* Attorney 4 */}
              <motion.div className="text-center sm:text-left">
                <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <img
                    src={attorneys[3].image}
                    alt={attorneys[3].name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-700/90 text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      {attorneys[3].specialization}
                    </span>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-800 uppercase tracking-wide">
                  {attorneys[3].name}
                </h3>
                <p className="text-burgundy font-semibold text-[1.1rem] mt-1">
                  {attorneys[3].position}
                </p>
                <p className="text-slate-600 text-[1.1rem] lg:text-[1.15rem] mt-3">
                  {attorneys[3].description.substring(0, 220)}...
                </p>
              </motion.div>
            </div>

              {/* Text Block */}
              <motion.div className="md:hidden block lg:col-span-2 py-10">
              <div className="relative z-10">
                <span className="text-[0.8rem] md:text-sm lg:text-base font-extrabold uppercase tracking-wider text-secondary-700">
                  GET LEGAL HELP
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-burgundy mt-4 mb-6">
                  Ready to Get Started?
                </h3>
                <p className="text-slate-800 font-medium text-[1.1rem] lg:text-xl leading-relaxed mb-8">
                  Don't face legal challenges alone. Our experienced attorneys
                  are here to provide the guidance and representation you need
                  to achieve the best possible outcome.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="w-full bg-burgundy hover:bg-burgundy/80 text-white px-6 py-4 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                    <span className="flex items-center justify-center gap-3">
                      <span>Talk To A Legal Expert</span>
                      <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  <button className="w-full bg-transparent border-2 border-secondary-700 text-secondary-800 text-lg hover:bg-white/10 px-6 py-3 font-semibold transition-all duration-300">
                    About Our Firm
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Our Firm Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/scales.jpg)",
              filter: "blur(2px)",
            }}
          ></div>
        </div>

        <div className="max-w-[95%] mx-auto md:px-6 lg:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - About Content */}
            <div className="space-y-6">
              <div>
                <span className="text-sm md:text-base font-bold uppercase tracking-wider text-secondary-500">
                  ABOUT OUR FIRM
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                We're one of the leading law firms in Kenya
              </h2>

              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                With a solid reputation built on years of successful cases and
                satisfied clients, our firm has established itself as a trusted
                name in the legal industry. Our commitment to excellence,
                integrity, and client satisfaction drives everything we do.
              </p>

              <div className="pt-4">
                <button className="bg-secondary-700 hover:bg-secondary-800 text-white px-8 py-3 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                  <span className="flex items-center gap-3">
                    <span>ABOUT OUR FIRM</span>
                    <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Cases Won", icon: FaGavel },
                { number: "98%", label: "Success Rate", icon: FaBalanceScale },
                { number: "25+", label: "Years Experience", icon: FaUserTie },
                {
                  number: "100%",
                  label: "Client Satisfaction",
                  icon: FaHandshake,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-secondary-700/20 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-secondary-400" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalTeamPage;
