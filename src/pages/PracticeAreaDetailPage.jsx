import React from "react";
import { motion } from "framer-motion";
import {
  TbArrowRight,
  TbCloverFilled,
  TbPhoneCall,
  TbBuildingBank,
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
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GiHandcuffs } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";

const PracticeAreaDetailPage = () => {
  const { areaId } = useParams();

  const practiceAreas = {
    civil: {
      id: "civil",
      title: "Civil Law",
      icon: FaBalanceScale,
      description:
        "Comprehensive civil litigation services including contract disputes, personal injury claims, and property rights protection with decades of courtroom experience.",
      detailedDescription:
        "Our civil law practice encompasses a wide range of legal matters including contract disputes, personal injury claims, property rights protection, and civil litigation. We provide expert representation to protect your rights and interests in civil matters.",
      services: [
        "Contract Disputes",
        "Personal Injury Claims",
        "Property Rights Protection",
        "Civil Litigation",
        "Tort Claims",
        "Breach of Contract",
        "Negligence Cases",
        "Property Disputes",
        "Civil Appeals",
        "Mediation & Arbitration",
      ],
      keyFeatures: [
        "Expert courtroom representation",
        "Comprehensive case investigation",
        "Strategic litigation planning",
        "Alternative dispute resolution",
      ],
      whyChooseUs: [
        "25+ years of civil law experience",
        "500+ successful civil cases",
        "98% success rate in litigation",
        "Expert knowledge of civil procedures",
      ],
      image: "/courtroom.jpg",
    },
    tax: {
      id: "tax",
      title: "Tax Law",
      icon: TbReceiptTax,
      description:
        "Expert tax planning, compliance, and dispute resolution for individuals and businesses, ensuring optimal tax strategies and legal compliance.",
      detailedDescription:
        "Our tax law practice provides comprehensive tax planning, compliance, and dispute resolution services for individuals and businesses. We help clients navigate complex tax regulations and optimize their tax strategies.",
      services: [
        "Tax Planning",
        "Tax Compliance",
        "Tax Dispute Resolution",
        "IRS Audits",
        "Tax Appeals",
        "Estate Tax Planning",
        "Business Tax Strategy",
        "International Tax",
        "Tax Litigation",
        "Tax Advisory Services",
      ],
      keyFeatures: [
        "Strategic tax planning and optimization",
        "Expert representation in tax disputes",
        "Comprehensive compliance services",
        "Proactive tax risk management",
      ],
      whyChooseUs: [
        "Expert knowledge of tax regulations",
        "Successfully resolved 100+ tax disputes",
        "Proven track record in tax planning",
        "Strong relationships with tax authorities",
      ],
      image: "/documents2.jpg",
    },
    property: {
      id: "property",
      title: "Property & Land Law",
      icon: FaHome,
      description:
        "Specialized real estate legal services covering property transactions, land disputes, zoning issues, and comprehensive property rights advocacy.",
      detailedDescription:
        "Our property and land law practice covers all aspects of real estate law, from property transactions to complex land disputes. We ensure smooth property transfers and protect your real estate investments.",
      services: [
        "Property Transactions",
        "Land Disputes",
        "Zoning Issues",
        "Property Rights Advocacy",
        "Title Searches",
        "Property Development",
        "Commercial Leasing",
        "Property Finance",
        "Land Use Planning",
        "Property Litigation",
      ],
      keyFeatures: [
        "End-to-end property transaction support",
        "Expert handling of complex land disputes",
        "Comprehensive due diligence services",
        "Strategic property development planning",
      ],
      whyChooseUs: [
        "300+ successful property transactions",
        "Specialized expertise in land law",
        "Strong relationships with local authorities",
        "Proven success in property disputes",
      ],
      image: "/courtroom4.jpg",
    },
    employment: {
      id: "employment",
      title: "Employment & Labour",
      icon: FaBriefcase,
      description:
        "Employment law expertise including workplace discrimination, wrongful termination, labor disputes, and employee rights protection.",
      detailedDescription:
        "We provide comprehensive employment law services for both employees and employers, ensuring fair treatment and compliance with labor regulations. Our expertise covers all aspects of workplace law.",
      services: [
        "Workplace Discrimination",
        "Wrongful Termination",
        "Labor Disputes",
        "Employee Rights Protection",
        "Employment Contracts",
        "HR Compliance",
        "Workplace Safety",
        "Employee Benefits",
        "Workplace Investigations",
        "Employment Litigation",
      ],
      keyFeatures: [
        "Comprehensive workplace policy development",
        "Expert representation in employment disputes",
        "Proactive compliance and risk management",
        "Strategic HR consulting and training",
      ],
      whyChooseUs: [
        "100+ successful employment cases",
        "Expert knowledge of labor regulations",
        "Proven track record in workplace disputes",
        "Comprehensive HR compliance solutions",
      ],
      image: "/lawyer.jpg",
    },
    corporate: {
      id: "corporate",
      title: "Corporate & Commercial Law",
      icon: FaBuilding,
      description:
        "Full-service corporate legal support including business formation, mergers & acquisitions, corporate governance, and commercial litigation.",
      detailedDescription:
        "Our corporate law practice encompasses mergers and acquisitions, corporate governance, commercial transactions, and business formation. We help businesses navigate complex regulatory environments and achieve their strategic objectives.",
      services: [
        "Business Formation",
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Commercial Litigation",
        "Commercial Contracts",
        "Joint Ventures",
        "Corporate Restructuring",
        "Securities Law",
        "Compliance & Regulatory",
        "Corporate Finance",
      ],
      keyFeatures: [
        "Strategic business planning and legal structure optimization",
        "Comprehensive due diligence for transactions",
        "Regulatory compliance and risk management",
        "Dispute resolution and litigation support",
      ],
      whyChooseUs: [
        "25+ years of corporate law experience",
        "Successfully handled 200+ M&A transactions",
        "Deep understanding of local and international regulations",
        "Proven track record in complex commercial disputes",
      ],
      image: "/documents2.jpg",
    },
    banking: {
      id: "banking",
      title: "Banking & Financial Law",
      icon: TbBuildingBank,
      description:
        "Banking and finance law expertise including loan agreements, credit facilities, and financial transactions with a focus on securing favorable terms and protecting client interests.",
      detailedDescription:
        "Our banking and financial law practice helps clients navigate complex financial regulations and banking transactions with expertise and precision, ensuring compliance and protecting financial interests.",
      services: [
        "Loan Agreements",
        "Credit Facilities",
        "Financial Transactions",
        "Banking Regulations",
        "Securities Compliance",
        "Financial Disputes",
        "Regulatory Compliance",
        "Investment Law",
        "Banking Litigation",
        "Fintech Law",
      ],
      keyFeatures: [
        "Expert knowledge of financial regulations",
        "Comprehensive transaction documentation",
        "Strategic compliance planning",
        "Expert representation in financial disputes",
      ],
      whyChooseUs: [
        "80+ successful financial cases",
        "Deep expertise in banking regulations",
        "Strong relationships with financial institutions",
        "Proven success in complex financial disputes",
      ],
      image: "/documents.png",
    },
    criminal: {
      id: "criminal",
      title: "Criminal Law",
      icon: GiHandcuffs,
      description:
        "Criminal defense representation with strategic legal counsel, evidence analysis, and courtroom advocacy for all criminal proceedings.",
      detailedDescription:
        "Our criminal defense team provides vigorous representation for individuals facing criminal charges, ensuring your rights are protected throughout the legal process with strategic defense tactics.",
      services: [
        "Criminal Defense",
        "Strategic Legal Counsel",
        "Evidence Analysis",
        "Courtroom Advocacy",
        "DUI/DWI Cases",
        "White Collar Crimes",
        "Traffic Violations",
        "Appeals",
        "Plea Negotiations",
        "Bail Hearings",
      ],
      keyFeatures: [
        "Aggressive defense strategies",
        "Expert knowledge of criminal procedures",
        "Strong relationships with prosecutors",
        "Comprehensive case investigation",
      ],
      whyChooseUs: [
        "95% case success rate",
        "200+ criminal cases defended",
        "Expert knowledge of criminal law",
        "Proven track record in complex cases",
      ],
      image: "/courtroom.jpg",
    },
    family: {
      id: "family",
      title: "Family Law",
      icon: MdOutlineFamilyRestroom,
      description:
        "Comprehensive family law services including divorce, child custody, and property division with a focus on preserving family relationships and minimizing conflict.",
      detailedDescription:
        "Our family law practice provides sensitive and comprehensive legal services for personal matters, ensuring your family's interests are protected during difficult times with empathy and expertise.",
      services: [
        "Divorce & Separation",
        "Child Custody",
        "Property Division",
        "Family Mediation",
        "Adoption",
        "Estate Planning",
        "Will & Trusts",
        "Domestic Violence",
        "Prenuptial Agreements",
        "Guardianship",
      ],
      keyFeatures: [
        "Sensitive handling of family matters",
        "Comprehensive estate planning services",
        "Expert mediation and dispute resolution",
        "Protective measures for vulnerable family members",
      ],
      whyChooseUs: [
        "150+ successful family law cases",
        "Specialized training in family mediation",
        "Compassionate approach to sensitive matters",
        "Comprehensive estate planning expertise",
      ],
      image: "/hero6.jpg",
    },
  };

  const currentArea = practiceAreas[areaId];

  if (!currentArea) {
    return (
      <div className="w-full overflow-x-hidden">
        <Header />
        <div className="pt-[5.5rem] min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Practice Area Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The requested practice area could not be found.
            </p>
            <Link
              to="/practice-areas"
              className="bg-burgundy text-white px-6 py-3 rounded-lg hover:bg-burgundy/80 transition-colors"
            >
              Back to Practice Areas
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = currentArea.icon;

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
              backgroundImage: `url(${currentArea.image})`,
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

            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-secondary-600 to-secondary-700 text-white">
                <IconComponent className="w-10 h-10" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 lg:mb-6 leading-tight">
              {currentArea.title}
            </h1>

            <p className="text-lg lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {currentArea.detailedDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-100 to-slate-200 relative">
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
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-16 bg-secondary-700 rounded-full mr-4"></div>
              <span className="text-[0.8rem] md:text-sm lg:text-base font-bold uppercase tracking-wider text-secondary-500">
                OUR SERVICES
              </span>
              <div className="h-1 w-16 bg-secondary-700 rounded-full ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Comprehensive Legal Services
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide a full range of legal services in{" "}
              {currentArea.title.toLowerCase()}, ensuring comprehensive coverage
              for all your legal needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentArea.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 hover:border-secondary-300 transition-all duration-300 p-6 text-center group"
              >
                <div className="flex items-center justify-center mb-4">
                  <TbCloverFilled className="w-6 h-6 text-secondary-500 group-hover:text-secondary-600 transition-colors duration-300" />
                </div>
                <span className="text-slate-700 font-medium text-sm">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-16 bg-secondary-700 rounded-full mr-4"></div>
              <span className="text-[0.8rem] md:text-sm lg:text-base font-bold uppercase tracking-wider text-secondary-500">
                WHY CHOOSE US
              </span>
              <div className="h-1 w-16 bg-secondary-700 rounded-full ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Why Choose Our {currentArea.title}
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Our approach combines deep legal expertise with practical
              solutions tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <span className="text-[0.8rem] md:text-sm lg:text-base font-extrabold uppercase tracking-wider text-secondary-700">
                  KEY FEATURES
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mt-4 mb-6">
                  What Sets Us Apart
                </h3>
              </div>
              <div className="space-y-4">
                {currentArea.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <TbCloverFilled className="w-5 h-5 text-secondary-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-[1.1rem] leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="text-[0.8rem] md:text-sm lg:text-base font-extrabold uppercase tracking-wider text-primary-600">
                  OUR TRACK RECORD
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mt-4 mb-6">
                  Proven Results
                </h3>
              </div>
              <div className="space-y-4">
                {currentArea.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <TbCloverFilled className="w-5 h-5 text-secondary-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-[1.1rem] leading-relaxed">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
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

        <div className="max-w-screen-2xl mx-auto px-6 lg:px-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-secondary-700/30 to-secondary-600/30 backdrop-blur-sm p-8 md:p-12 border border-secondary-500/20">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Need {currentArea.title} Services?
              </h3>
              <p className="text-slate-300 text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
                Contact our experienced attorneys for expert legal guidance and
                representation in {currentArea.title.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-burgundy hover:bg-burgundy/80 text-white px-8 py-3 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                  <span className="flex items-center justify-center gap-3">
                    <TbPhoneCall className="w-5 h-5" />
                    <span>Schedule Consultation</span>
                    <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                <Link to="/practice-areas">
                  <button className="bg-transparent border-2 border-secondary-500 text-secondary-400 hover:bg-secondary-500/10 px-8 py-3 font-semibold text-lg transition-all duration-300">
                    View All Practice Areas
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

export default PracticeAreaDetailPage;
