import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbQuote,
  TbStar,
  TbArrowRight,
  TbTrophy,
  TbScale,
  TbShield,
  TbChevronLeft,
  TbChevronRight,
} from "react-icons/tb";
import { PiBuildingsDuotone } from "react-icons/pi";
import { GiHandcuffs } from "react-icons/gi";
import { FaBalanceScale, FaHandshake, FaHome } from "react-icons/fa";

const ClientSuccessSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
      icon: PiBuildingsDuotone,
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
      icon: GiHandcuffs,
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
      icon: FaHome,
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
    {
      id: 5,
      name: "Jane Doe",
      position: "Legal Assistant",
      company: "Legal Aid Foundation",
      rating: 5,
      text: "Their legal team provided exceptional support in our corporate restructuring. Their expertise and professionalism were instrumental in our successful transition.",
    },
    {
      id: 6,
      name: "Eve Shikanda",
      position: "Managing Director",
      company: "Eve's Enterprises",
      rating: 5,
      text: "They handled our property dispute with professionalism and expertise. Their legal advice helped us navigate the complexities of the law and achieve a favorable outcome.",
    },
  ];

  // Auto-advance testimonials carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prev) => (prev + 1) % (testimonials.length - 1)
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  // Touch gesture handlers for mobile
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    e.currentTarget.touchStartX = touchStart;
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const touchStart = e.currentTarget.touchStartX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextTestimonial();
      } else {
        previousTestimonial();
      }
    }

    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prev) => (prev + 1) % (testimonials.length - 1)
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex(
      (prev) =>
        (prev - 1 + (testimonials.length - 1)) % (testimonials.length - 1)
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonialIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const achievements = [
    { number: "500+", label: "Cases Won", icon: TbTrophy },
    { number: "98%", label: "Success Rate", icon: TbStar },
    { number: "15+", label: "Years Experience", icon: FaBalanceScale },
    { number: "100%", label: "Client Satisfaction", icon: FaHandshake },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-100 to-slate-200 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hammer.jpg)",
            filter: "blur(2px)",
          }}
        ></div>
      </div>

      <div className="max-w-[95%] mx-auto md:px-3 lg:px-14 relative z-10">
        {/* Success Stories */}
        <div className="mb-10">
          <div className="inline-flex items-center mb-6">
            <div className="h-1 w-16 bg-secondary-700 rounded-full mr-4"></div>
            <span className="text-2xl md:text-3xl font-bold text-slate-800 relative">
              Our Success Stories
            </span>
            <div className="h-1 w-16 bg-secondary-700 rounded-full ml-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/70 backdrop-blur-sm border border-slate-200/50 p-6 hover:shadow-xl group"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-burgundy bg-burgundy/20 px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                  <div className="">
                    <story.icon className="w-9 h-9 text-burgundy" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-3 leading-tight">
                  {story.title}
                </h4>

                {/* Description */}
                <p className="text-slate-800 mb-4 text-lg lg:text-[1.2rem] leading-relaxed">
                  {story.description}
                </p>

                {/* Result */}
                <div className="bg-secondary-700/20 py-2.5 px-6 mb-4">
                  <div className="text-[0.95rem] font-semibold text-secondary-700 mb-1">
                    Result
                  </div>
                  <div className="text-lg lg:text-[1.15rem] font-bold text-slate-800">
                    {story.result}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border-l-4 border-secondary-700 pl-4 mb-4">
                  <TbQuote className="w-6 h-6 text-secondary-700 mb-2" />
                  <p className="text-slate-600 italic text-lg lg:text-[1.15rem] leading-relaxed">
                    "{story.testimonial}"
                  </p>
                  <div className="mt-2 font-semibold text-burgundy">
                    - {story.clientName}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div
          className="lg:p-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6 lg:mb-8 text-center relative">
            <span className="relative">What Our Clients Say</span>
          </h3>

          <div className="relative">
            {/* Testimonials Carousel */}
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{
                  x: `-${
                    currentTestimonialIndex * (isMobile ? 100 / 2 : 100 / 4)
                  }%`,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  width: `${
                    testimonials.length * (isMobile ? 100 / 4 : 100 / 4)
                  }%`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 px-1 md:px-2"
                    style={{
                      width: `${isMobile ? 100 / 2 : 100 / 4}%`,
                    }}
                  >
                    <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 p-3 md:p-4 lg:p-6 hover:shadow-lg transition-all duration-500 h-full">
                      {/* Rating */}
                      <div className="flex items-center mb-2 md:mb-3 lg:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <TbStar
                            key={i}
                            className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-600 text-lg lg:text-[1.2rem] leading-relaxed mb-4 italic">
                        "{testimonial.text}"
                      </p>

                      {/* Client Info */}
                      <div className="border-t border-slate-200 pt-4">
                        <div className="font-bold text-lg text-burgundy">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-600">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex justify-center mt-6 px-4">
              {/* Position Indicators */}
              <div className="flex space-x-2">
                {testimonials.slice(0, testimonials.length - 1).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                      currentTestimonialIndex === i
                        ? "bg-secondary-600 w-8"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Position Indicators */}
            <div className="hidden lg:flex justify-center mt-6 space-x-2">
              {testimonials.slice(0, testimonials.length - 1).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    currentTestimonialIndex === i
                      ? "bg-secondary-600 w-8"
                      : "bg-slate-400/60 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
