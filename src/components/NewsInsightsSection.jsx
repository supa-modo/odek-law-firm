import React, { useState, useEffect } from "react";
import { TbArrowRight, TbArrowLeft, TbCalendar, TbTag } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const NewsInsightsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const blogPosts = [
    {
      id: 1,
      title: "Navigating Kenya's New Corporate Governance Regulations",
      description:
        "Understanding the latest changes in corporate law and how they affect your business operations and compliance requirements. Stay ahead with expert insights.",
      image: "/court3.jpg",
      date: "Dec 15, 2024",
      category: "Corporate Law",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Land Dispute Resolution: A Comprehensive Guide",
      description:
        "Expert insights into resolving complex land ownership disputes and protecting your property rights in Kenya. Learn the legal framework and best practices.",
      image: "/scales.jpg",
      date: "Dec 10, 2024",
      category: "Property Law",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Employment Law Updates: What Employers Need to Know",
      description:
        "Stay informed about recent changes in Kenya's labour laws and their impact on workplace policies and practices. Essential updates for HR professionals.",
      image: "/documents2.jpg",
      date: "Dec 5, 2024",
      category: "Employment Law",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Criminal Defense Strategies in Kenyan Courts",
      description:
        "Expert criminal defense representation with strategic legal counsel and evidence analysis for all criminal proceedings. Understanding your rights.",
      image: "/hero2.jpg",
      date: "Dec 1, 2024",
      category: "Criminal Law",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Family Law: Navigating Divorce and Custody",
      description:
        "Comprehensive family legal services with compassion and legal expertise for sensitive family matters. Protecting families during difficult times.",
      image: "/scales.jpg",
      date: "Nov 25, 2024",
      category: "Family Law",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Banking Regulations: What Businesses Need to Know",
      description:
        "Stay compliant with Kenya's banking and financial regulations for your business operations. Essential compliance guide for entrepreneurs.",
      image: "/documents2.jpg",
      date: "Nov 20, 2024",
      category: "Banking Law",
      readTime: "5 min read",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [blogPosts.length, isAutoPlaying]);

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
      // Minimum swipe distance
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
      } else {
        // Swipe right - previous slide
        setCurrentIndex(
          (prev) => (prev - 1 + blogPosts.length) % blogPosts.length
        );
      }
    }

    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setCurrentIndex(
        (prev) => (prev - 1 + blogPosts.length) % blogPosts.length
      );
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 3000);
    } else if (e.key === "ArrowRight") {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 3000);
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [blogPosts.length]);

  const nextArticle = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const previousArticle = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/documents.png)",
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
              NEWS & INSIGHTS
            </span>
            <div className="h-1 w-16 bg-secondary-700 rounded-full ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Latest Legal Updates & Insights
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our expert analysis of the latest legal
            developments, regulatory changes, and industry insights that matter
            to your business.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200/50 p-8 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Stay Updated with Our Newsletter
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Get the latest legal insights, regulatory updates, and exclusive
              content delivered directly to your inbox. Join our community of
              informed professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors bg-white/80 backdrop-blur-sm"
              />
              <button className="bg-secondary-700 hover:bg-secondary-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Articles Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={previousArticle}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-secondary-700 hover:text-white group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <TbArrowLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            onClick={nextArticle}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-secondary-700 hover:text-white group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <TbArrowRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Progress Bar */}
          <div className="h-1 w-full bg-slate-200 rounded-full mb-8 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-secondary-700 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              key={currentIndex}
              transition={{ duration: 6, ease: "linear" }}
            />
          </div>

          {/* Article Display */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: -currentIndex * 100 + "%",
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                width: `${blogPosts.length * 100}%`,
              }}
            >
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="flex-shrink-0 w-full px-4"
                  style={{
                    width: `${100 / blogPosts.length}%`,
                  }}
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                      {/* Image */}
                      <div className="h-64 md:h-80 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="space-y-6">
                          {/* Category and Meta */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-secondary-700/10 text-secondary-700">
                                <TbTag className="w-4 h-4 mr-1" />
                                {post.category}
                              </span>
                              <span className="text-slate-500 text-sm">
                                {post.readTime}
                              </span>
                            </div>
                            <div className="flex items-center text-slate-500 text-sm">
                              <TbCalendar className="w-4 h-4 mr-1" />
                              {post.date}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight group-hover:text-secondary-700 transition-colors duration-300">
                            {post.title}
                          </h3>

                          {/* Description */}
                          <p className="text-lg text-slate-600 leading-relaxed">
                            {post.description}
                          </p>

                          {/* Read More Button */}
                          <div className="pt-4">
                            <button className="inline-flex items-center text-secondary-700 hover:text-secondary-800 font-semibold text-lg group-hover:translate-x-2 transition-all duration-300">
                              <span>Read Full Article</span>
                              <TbArrowRight className="w-5 h-5 ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group focus:outline-none"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <motion.div
                  className={`rounded-full transition-all duration-500 ${
                    currentIndex === index
                      ? "bg-secondary-700 scale-125 shadow-lg w-4 md:w-5 h-1.5 md:h-2.5"
                      : "bg-slate-300 backdrop-blur-sm border border-slate-200 w-2 md:w-3 h-2 md:h-3"
                  }`}
                />

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-secondary-700/20 opacity-0"
                  whileHover={{ opacity: 1, scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsInsightsSection;
