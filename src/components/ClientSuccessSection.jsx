import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbQuote,
  TbStar,
  TbArrowRight,
  TbTrophy,
  TbScale,
  TbShield,
} from "react-icons/tb";

const ClientSuccessSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const successStories = [
    {
      id: 1,
      category: "Corporate Law",
      title: "Multi-Million Dollar Merger Success",
      description:
        "Successfully facilitated a complex merger between two major Kenyan corporations, navigating intricate regulatory requirements and ensuring seamless transition for all stakeholders.",
      result: "KSh 2.5B Merger Completed",
      client: "Leading Manufacturing Company",
      testimonial:
        "Their expertise in corporate law and attention to detail made our merger process smooth and efficient. We couldn't have done it without their guidance.",
      clientName: "Sarah Mwangi, CEO",
      icon: TbTrophy,
      stats: "98% Success Rate",
    },
    {
      id: 2,
      category: "Criminal Defense",
      title: "High-Profile Criminal Case Victory",
      description:
        "Successfully defended a client in a complex white-collar crime case, utilizing strategic legal arguments and comprehensive evidence analysis to secure a favorable outcome.",
      result: "Case Dismissed",
      client: "Business Executive",
      testimonial:
        "When I was facing serious charges, they stood by me every step of the way. Their dedication and legal expertise gave me hope and ultimately secured my freedom.",
      clientName: "John Kamau, Business Owner",
      icon: TbShield,
      stats: "95% Case Success",
    },
    {
      id: 3,
      category: "Property Law",
      title: "Land Dispute Resolution",
      description:
        "Resolved a decades-old land dispute involving multiple parties and complex inheritance issues, achieving a fair settlement that satisfied all stakeholders.",
      result: "KSh 50M Settlement",
      client: "Family Estate",
      testimonial:
        "They helped us resolve a family dispute that had been going on for years. Their mediation skills and legal knowledge brought peace to our family.",
      clientName: "Grace Wanjiku, Family Representative",
      icon: TbScale,
      stats: "100% Client Satisfaction",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Michael Otieno",
      position: "Medical Director",
      company: "Nairobi Medical Center",
      rating: 5,
      text: "Outstanding legal representation! They handled our medical malpractice case with exceptional professionalism and secured a favorable settlement that protected our practice.",
    },
    {
      id: 2,
      name: "Elizabeth Njeri",
      position: "Managing Director",
      company: "Tech Solutions Ltd",
      rating: 5,
      text: "Their expertise in employment law helped us navigate complex labor disputes and implement policies that protect both our company and employees. Highly recommended!",
    },
    {
      id: 3,
      name: "Peter Mwangi",
      position: "Real Estate Developer",
      company: "Prime Properties",
      rating: 5,
      text: "From property acquisitions to zoning issues, they've been our trusted legal partners. Their attention to detail and strategic thinking saved us significant time and money.",
    },
    {
      id: 4,
      name: "Mary Wanjiku",
      position: "Family Representative",
      company: "Wanjiku Family Trust",
      rating: 5,
      text: "During our family's most difficult time, they provided compassionate yet strong legal guidance. Their expertise in family law helped us reach a fair resolution.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Cases Won", icon: TbTrophy },
    { number: "98%", label: "Success Rate", icon: TbStar },
    { number: "15+", label: "Years Experience", icon: TbScale },
    { number: "100%", label: "Client Satisfaction", icon: TbShield },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-100 to-slate-200 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/courtroom.jpg)",
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
              CLIENT SUCCESS
            </span>
            <div className="h-1 w-16 bg-secondary-700 rounded-full ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Proven Results & Client Satisfaction
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. Discover how we've helped
            clients achieve successful outcomes across various legal matters
            with dedication and expertise.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-secondary-700/10 rounded-lg flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-secondary-700" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">
                {achievement.number}
              </div>
              <div className="text-sm md:text-base text-slate-600 font-medium">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center relative">
            <span className="relative">
              Success Stories
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary-700 rounded-full"></div>
            </span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200/50 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-secondary-700 bg-secondary-700/10 px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                  <div className="w-10 h-10 bg-secondary-700/10 rounded-lg flex items-center justify-center group-hover:bg-secondary-700/20 transition-colors">
                    <story.icon className="w-5 h-5 text-secondary-700" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-3 leading-tight">
                  {story.title}
                </h4>

                {/* Description */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {story.description}
                </p>

                {/* Result */}
                <div className="bg-secondary-700/10 rounded-lg p-3 mb-4">
                  <div className="text-sm font-semibold text-secondary-700 mb-1">
                    Result
                  </div>
                  <div className="text-lg font-bold text-slate-800">
                    {story.result}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border-l-4 border-secondary-700 pl-4 mb-4">
                  <TbQuote className="w-6 h-6 text-secondary-700 mb-2" />
                  <p className="text-slate-600 italic leading-relaxed">
                    "{story.testimonial}"
                  </p>
                  <div className="mt-2 text-sm font-semibold text-slate-800">
                    - {story.clientName}
                  </div>
                </div>

                {/* Stats */}
                <div className="text-center">
                  <div className="text-sm font-semibold text-secondary-700">
                    {story.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200/50 p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center relative">
            <span className="relative">
              What Our Clients Say
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary-700 rounded-full"></div>
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200/50 p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <TbStar
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button className="bg-secondary-700 hover:bg-secondary-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
              <span className="flex items-center justify-center gap-3">
                <span>Start Your Success Story</span>
                <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
