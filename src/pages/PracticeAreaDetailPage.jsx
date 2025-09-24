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
import { PiBuildingsBold, PiBuildingsDuotone } from "react-icons/pi";

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
        {
          name: "Contract Disputes",
          description:
            "Expert resolution of contract disagreements, including breach of contract claims, interpretation disputes, and enforcement actions.",
        },
        {
          name: "Personal Injury Claims",
          description:
            "Comprehensive representation for accident victims, including car accidents, slip and falls, and workplace injuries.",
        },
        {
          name: "Property Rights Protection",
          description:
            "Safeguarding your property interests through legal action, including trespass, nuisance, and property damage claims.",
        },
        {
          name: "Civil Litigation",
          description:
            "Full-service civil litigation representation from case initiation through trial and appeal proceedings.",
        },
        {
          name: "Tort Claims",
          description:
            "Legal action for civil wrongs including negligence, intentional torts, and strict liability cases.",
        },
        {
          name: "Breach of Contract",
          description:
            "Enforcement of contractual obligations and recovery of damages for contract violations.",
        },
        {
          name: "Negligence Cases",
          description:
            "Representation in negligence claims where duty of care was breached, resulting in harm or damages.",
        },
        {
          name: "Property Disputes",
          description:
            "Resolution of property-related conflicts including boundary disputes, easements, and property ownership issues.",
        },
        {
          name: "Civil Appeals",
          description:
            "Appellate representation to challenge unfavorable civil court decisions and seek justice.",
        },
        {
          name: "Mediation & Arbitration",
          description:
            "Alternative dispute resolution services to resolve conflicts efficiently outside of court.",
        },
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
        {
          name: "Tax Planning",
          description:
            "Strategic tax planning to minimize tax liability while ensuring full compliance with tax laws and regulations.",
        },
        {
          name: "Tax Compliance",
          description:
            "Comprehensive tax compliance services including preparation, filing, and ongoing tax obligation management.",
        },
        {
          name: "Tax Dispute Resolution",
          description:
            "Expert representation in tax disputes with tax authorities, including negotiations and settlement agreements.",
        },
        {
          name: "IRS Audits",
          description:
            "Professional representation during IRS audits, examinations, and investigations to protect your interests.",
        },
        {
          name: "Tax Appeals",
          description:
            "Appellate representation to challenge unfavorable tax decisions and seek fair resolution of tax matters.",
        },
        {
          name: "Estate Tax Planning",
          description:
            "Strategic estate planning to minimize estate taxes and ensure efficient wealth transfer to beneficiaries.",
        },
        {
          name: "Business Tax Strategy",
          description:
            "Comprehensive business tax planning including entity selection, tax-efficient business structures, and ongoing optimization.",
        },
        {
          name: "International Tax",
          description:
            "Expert guidance on international tax matters including cross-border transactions and foreign tax compliance.",
        },
        {
          name: "Tax Litigation",
          description:
            "Aggressive representation in tax court proceedings and complex tax litigation matters.",
        },
        {
          name: "Tax Advisory Services",
          description:
            "Ongoing tax advisory services to help businesses and individuals make informed tax decisions.",
        },
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
        {
          name: "Property Transactions",
          description:
            "Comprehensive legal support for property purchases, sales, and transfers including due diligence and documentation.",
        },
        {
          name: "Land Disputes",
          description:
            "Expert resolution of land ownership disputes, boundary conflicts, and property rights issues.",
        },
        {
          name: "Zoning Issues",
          description:
            "Legal assistance with zoning applications, variances, and compliance with local land use regulations.",
        },
        {
          name: "Property Rights Advocacy",
          description:
            "Protection and enforcement of property rights including easements, covenants, and property restrictions.",
        },
        {
          name: "Title Searches",
          description:
            "Thorough title examination and clearance services to ensure clear property ownership and identify potential issues.",
        },
        {
          name: "Property Development",
          description:
            "Legal guidance for property development projects including permits, approvals, and regulatory compliance.",
        },
        {
          name: "Commercial Leasing",
          description:
            "Drafting and negotiation of commercial lease agreements to protect your interests as landlord or tenant.",
        },
        {
          name: "Property Finance",
          description:
            "Legal support for property financing including mortgage documentation and loan restructuring.",
        },
        {
          name: "Land Use Planning",
          description:
            "Strategic land use planning and development approval processes for optimal property utilization.",
        },
        {
          name: "Property Litigation",
          description:
            "Aggressive representation in property-related lawsuits and disputes to protect your real estate interests.",
        },
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
        {
          name: "Workplace Discrimination",
          description:
            "Legal representation for employees facing discrimination based on race, gender, age, disability, or other protected characteristics.",
        },
        {
          name: "Wrongful Termination",
          description:
            "Protection against unlawful termination including breach of contract, retaliation, and violation of employment rights.",
        },
        {
          name: "Labor Disputes",
          description:
            "Resolution of workplace conflicts including wage disputes, working conditions, and collective bargaining issues.",
        },
        {
          name: "Employee Rights Protection",
          description:
            "Comprehensive protection of employee rights including fair treatment, privacy, and workplace dignity.",
        },
        {
          name: "Employment Contracts",
          description:
            "Drafting and negotiation of employment agreements, non-compete clauses, and severance packages.",
        },
        {
          name: "HR Compliance",
          description:
            "Ensuring workplace policies and practices comply with employment laws and regulations.",
        },
        {
          name: "Workplace Safety",
          description:
            "Legal guidance on workplace safety requirements and representation in safety violation cases.",
        },
        {
          name: "Employee Benefits",
          description:
            "Legal assistance with employee benefit programs, ERISA compliance, and benefit disputes.",
        },
        {
          name: "Workplace Investigations",
          description:
            "Professional workplace investigations for harassment, misconduct, and policy violations.",
        },
        {
          name: "Employment Litigation",
          description:
            "Aggressive representation in employment-related lawsuits and administrative proceedings.",
        },
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
      icon: PiBuildingsBold,
      description:
        "Full-service corporate legal support including business formation, mergers & acquisitions, corporate governance, and commercial litigation.",
      detailedDescription:
        "Our corporate law practice encompasses mergers and acquisitions, corporate governance, commercial transactions, and business formation. We help businesses navigate complex regulatory environments and achieve their strategic objectives.",
      services: [
        {
          name: "Business Formation",
          description:
            "Complete business formation services including entity selection, registration, and initial corporate governance setup.",
        },
        {
          name: "Mergers & Acquisitions",
          description:
            "Expert guidance through complex M&A transactions including due diligence, negotiations, and transaction structuring.",
        },
        {
          name: "Corporate Governance",
          description:
            "Comprehensive corporate governance services including board management, compliance, and best practices implementation.",
        },
        {
          name: "Commercial Litigation",
          description:
            "Aggressive representation in commercial disputes including contract breaches, business torts, and complex litigation.",
        },
        {
          name: "Commercial Contracts",
          description:
            "Drafting and negotiation of commercial agreements including supply contracts, distribution agreements, and service contracts.",
        },
        {
          name: "Joint Ventures",
          description:
            "Legal structuring and documentation of joint venture agreements and strategic business partnerships.",
        },
        {
          name: "Corporate Restructuring",
          description:
            "Strategic corporate restructuring including reorganizations, spin-offs, and business transformation initiatives.",
        },
        {
          name: "Securities Law",
          description:
            "Comprehensive securities law services including compliance, reporting, and regulatory guidance.",
        },
        {
          name: "Compliance & Regulatory",
          description:
            "Ongoing regulatory compliance services to ensure adherence to applicable laws and regulations.",
        },
        {
          name: "Corporate Finance",
          description:
            "Legal support for corporate financing including debt and equity transactions, and capital raising activities.",
        },
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
        {
          name: "Loan Agreements",
          description:
            "Drafting and negotiation of loan documentation including commercial loans, mortgages, and credit facilities.",
        },
        {
          name: "Credit Facilities",
          description:
            "Legal structuring of credit facilities including revolving credit, term loans, and working capital financing.",
        },
        {
          name: "Financial Transactions",
          description:
            "Comprehensive legal support for complex financial transactions including derivatives and structured products.",
        },
        {
          name: "Banking Regulations",
          description:
            "Expert guidance on banking regulations, compliance requirements, and regulatory reporting obligations.",
        },
        {
          name: "Securities Compliance",
          description:
            "Securities law compliance including registration, reporting, and ongoing regulatory obligations.",
        },
        {
          name: "Financial Disputes",
          description:
            "Resolution of financial disputes including loan defaults, payment disputes, and financial contract breaches.",
        },
        {
          name: "Regulatory Compliance",
          description:
            "Ongoing regulatory compliance services for financial institutions and financial service providers.",
        },
        {
          name: "Investment Law",
          description:
            "Legal guidance on investment activities including fund formation, investment management, and regulatory compliance.",
        },
        {
          name: "Banking Litigation",
          description:
            "Aggressive representation in banking-related litigation and regulatory enforcement actions.",
        },
        {
          name: "Fintech Law",
          description:
            "Specialized legal services for financial technology companies including regulatory compliance and innovation support.",
        },
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
        {
          name: "Criminal Defense",
          description:
            "Comprehensive criminal defense representation for all types of criminal charges with aggressive legal strategies.",
        },
        {
          name: "Strategic Legal Counsel",
          description:
            "Strategic legal advice and case planning to develop the strongest possible defense strategy for your case.",
        },
        {
          name: "Evidence Analysis",
          description:
            "Thorough analysis of evidence, witness statements, and case materials to identify weaknesses in the prosecution's case.",
        },
        {
          name: "Courtroom Advocacy",
          description:
            "Expert courtroom representation including trial advocacy, cross-examination, and persuasive argumentation.",
        },
        {
          name: "DUI/DWI Cases",
          description:
            "Specialized defense for driving under the influence cases including breathalyzer challenges and procedural defenses.",
        },
        {
          name: "White Collar Crimes",
          description:
            "Expert defense for white-collar criminal charges including fraud, embezzlement, and financial crimes.",
        },
        {
          name: "Traffic Violations",
          description:
            "Legal representation for traffic violations and moving violations to minimize penalties and protect your driving record.",
        },
        {
          name: "Appeals",
          description:
            "Appellate representation to challenge criminal convictions and seek justice through the appeals process.",
        },
        {
          name: "Plea Negotiations",
          description:
            "Strategic plea negotiations to achieve the best possible outcome and minimize penalties when appropriate.",
        },
        {
          name: "Bail Hearings",
          description:
            "Representation at bail hearings to secure release from custody and protect your freedom during legal proceedings.",
        },
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
        {
          name: "Divorce & Separation",
          description:
            "Compassionate legal guidance through divorce and separation proceedings with focus on fair resolution and family preservation.",
        },
        {
          name: "Child Custody",
          description:
            "Expert representation in child custody matters to ensure the best interests of children are protected and maintained.",
        },
        {
          name: "Property Division",
          description:
            "Fair and equitable division of marital property and assets during divorce proceedings with comprehensive asset evaluation.",
        },
        {
          name: "Family Mediation",
          description:
            "Professional mediation services to resolve family disputes amicably and avoid costly litigation when possible.",
        },
        {
          name: "Adoption",
          description:
            "Comprehensive legal support for adoption proceedings including domestic and international adoption processes.",
        },
        {
          name: "Estate Planning",
          description:
            "Strategic estate planning services to protect family wealth and ensure proper distribution of assets.",
        },
        {
          name: "Will & Trusts",
          description:
            "Drafting and management of wills, trusts, and estate planning documents to secure your family's future.",
        },
        {
          name: "Domestic Violence",
          description:
            "Protective legal services for victims of domestic violence including restraining orders and safety planning.",
        },
        {
          name: "Prenuptial Agreements",
          description:
            "Drafting and negotiation of prenuptial agreements to protect assets and clarify financial expectations.",
        },
        {
          name: "Guardianship",
          description:
            "Legal assistance with guardianship proceedings for minors and incapacitated adults requiring protection.",
        },
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
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 lg:w-20 h-16 lg:h-20 rounded-full bg-white text-secondary-800">
                <IconComponent className="w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-secondary-300 mb-3 md:mb-4 lg:mb-6 leading-tight">
              {currentArea.title}
            </h1>
            <p className="text-lg lg:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
              {currentArea.detailedDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 md:py-8 lg:py-24 bg-gradient-to-br from-slate-100 to-slate-200 relative">
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

        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-14 relative z-10">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {currentArea.services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 hover:border-primary-500 transition-all duration-500 p-6 text-left group hover:shadow-lg"
              >
                <div className="flex items-center gap-4 lg:gap-6 mb-2.5 lg:mb-3">
                  <div className="flex items-center justify-center">
                    <TbCloverFilled className="w-6 h-6 text-primary-500 group-hover:text-primary-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-slate-800 font-bold text-lg lg:text-[1.2rem]  group-hover:text-primary-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
                <p className="text-slate-800 text-[1.1rem] lg:text-[1.2rem] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-10 lg:py-16 bg-white relative">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-10 lg:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 md:mb-4">
              Why Choose Our {currentArea.title}
            </h2>
            <p className="text-[1.15rem] md:text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto">
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
              className="space-y-3 md:space-y-4 lg:space-y-5"
            >
              <div>
                <span className="text-[0.8rem] md:text-sm lg:text-base font-extrabold uppercase tracking-wider text-burgundy">
                  KEY FEATURES
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mt-4 mb-2 md:mb-4 lg:mb-6">
                  What Sets Us Apart
                </h3>
              </div>
              <div className="space-y-2 md:space-y-3">
                {currentArea.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <TbCloverFilled className="w-5 h-5 text-primary-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-[1.15rem] lg:text-[1.3rem] leading-relaxed">
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
              className="space-y-3 md:space-y-4 lg:space-y-5"
            >
              <div>
                <span className="text-[0.8rem] md:text-sm lg:text-base font-extrabold uppercase tracking-wider text-secondary-600">
                  OUR TRACK RECORD
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mt-4 mb-2 md:mb-4 lg:mb-6">
                  Proven Results
                </h3>
              </div>
              <div className="space-y-2 md:space-y-3">
                {currentArea.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <TbCloverFilled className="w-5 h-5 text-primary-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-[1.15rem] lg:text-[1.3rem] leading-relaxed">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Bottom CTA Section */}
          <div className="pt-16 md:pt-20 lg:pt-24 max-w-screen-2xl mx-auto  relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="pt-8 md:pt-10 ">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 mb-4">
                  Need {currentArea.title} Services?
                </h3>
                <p className="text-slate-700 text-[1.2rem] md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
                  Don't face legal challenges alone. Our experienced lawyers are
                  here to provide the guidance and representation you need to
                  achieve the best possible outcome.
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 lg:gap-4 justify-center">
                  <button className="w-full md:w-auto bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                    <span className="flex items-center justify-center gap-3">
                      <span>Schedule Consultation</span>
                      <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  <Link to="/practice-areas">
                    <button className="w-full md:w-auto bg-transparent border-2 border-secondary-600 text-secondary-700 hover:bg-secondary-900/10 px-8 py-3 font-bold text-lg transition-all duration-300">
                      View All Practice Areas
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticeAreaDetailPage;
