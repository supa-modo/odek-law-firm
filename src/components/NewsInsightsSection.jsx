import React, { useState, useEffect } from "react";
import {
  TbArrowRight,
  TbArrowLeft,
  TbChevronLeft,
  TbChevronRight,
} from "react-icons/tb";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NewsInsightsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const blogPosts = [
    {
      id: 1,
      title: "Navigating Kenya's New Corporate Governance Regulations",
      description:
        "Understanding the latest changes in corporate law and how they affect your business operations and compliance requirements.",
      image: "/court3.jpg",
      date: "Dec 15, 2024",
      category: "Corporate Law",
    },
    {
      id: 2,
      title: "Land Dispute Resolution: A Comprehensive Guide",
      description:
        "Expert insights into resolving complex land ownership disputes and protecting your property rights in Kenya.",
      image: "/scales.jpg",
      date: "Dec 10, 2024",
      category: "Property Law",
    },
    {
      id: 3,
      title: "Employment Law Updates: What Employers Need to Know",
      description:
        "Stay informed about recent changes in Kenya's labour laws and their impact on workplace policies and practices.",
      image: "/documents2.jpg",
      date: "Dec 5, 2024",
      category: "Employment Law",
    },
    {
      id: 4,
      title: "Criminal Defense Strategies in Kenyan Courts",
      description:
        "Expert criminal defense representation with strategic legal counsel and evidence analysis for all criminal proceedings.",
      image: "/hero2.jpg",
      date: "Dec 1, 2024",
      category: "Criminal Law",
    },
    {
      id: 5,
      title: "Family Law: Navigating Divorce and Custody",
      description:
        "Comprehensive family legal services with compassion and legal expertise for sensitive family matters.",
      image: "/scales.jpg",
      date: "Nov 25, 2024",
      category: "Family Law",
    },
    {
      id: 6,
      title: "Banking Regulations: What Businesses Need to Know",
      description:
        "Stay compliant with Kenya's banking and financial regulations for your business operations.",
      image: "/documents2.jpg",
      date: "Nov 20, 2024",
      category: "Banking Law",
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
        nextArticle();
      } else {
        // Swipe right - previous slide
        previousArticle();
      }
    }

    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      previousArticle();
    } else if (e.key === "ArrowRight") {
      nextArticle();
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

  // Get the three articles to display
  const getVisibleArticles = () => {
    return blogPosts.slice(currentIndex, currentIndex + 3);
  };

  return (
    <section
      className="py-10 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200  relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f9b91e' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-screen-2xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
          {/* Left Column - Newsletter Subscription (30% width) */}
          <div className="lg:col-span-3 relative px-3 lg:px-0">
            <div className="relative z-10 space-y-6">
              {/* Heading */}
              <div className="space-y-4">
                <div>
                  <span className="font-semibold uppercase tracking-wider text-slate-700">
                    THE LATEST
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-10 bg-burgundy/80"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    News
                  </h2>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                    + Insights
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                Subscribe to our email list to stay up to date on the latest
                news and insights from Obel & Company Associates. We share
                exciting legal wins and exclusive news.
              </p>

              {/* Newsletter Form */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="flex-1 px-3 py-2 lg:py-2.5 text-lg lg:text-[1.15rem] font-semibold border border-slate-300  focus:ring-1 focus:border-burgundy focus:ring-burgundy focus:outline-none transition-all duration-200"
                  />
                  <button className="bg-burgundy hover:bg-burgundy/80 text-white px-6 py-2  font-semibold transition-colors duration-200">
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Blog Posts (70% width) */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Desktop Navigation Arrows */}
              <div className="hidden lg:flex absolute -left-10 top-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={previousArticle}
                  disabled={currentIndex === 0}
                  className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                    currentIndex === 0
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-secondary-600"
                  }`}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <TbChevronLeft className="w-6 h-6" />
                </button>
              </div>

              <div className="hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={nextArticle}
                  className="p-3 rounded-full shadow-lg transition-all duration-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-secondary-600"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <TbChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Blog Posts Carousel */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{
                    x: `-${currentIndex * (isMobile ? 100 / 6 : 100 / 6)}%`,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: `${
                      blogPosts.length * (isMobile ? 100 / 1 : 100 / 3)
                    }%`,
                  }}
                >
                  {blogPosts.map((post, index) => (
                    <div
                      key={post.id}
                      className="flex-shrink-0 px-1.5 md:px-2"
                      style={{
                        width: `${isMobile ? 100 / 6 : 100 / 6}%`,
                      }}
                    >
                      <div className="group cursor-pointer">
                        <div className="bg-white border border-burgundy overflow-hidden hover:shadow-lg transition-all duration-300">
                          {/* Image */}
                          <div className="h-52 md:h-64 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                            />
                          </div>

                          {/* Content */}
                          <div className="p-2.5 md:p-4">
                            <div className="space-y-2.5 md:space-y-3">
                              {/* Title */}
                              <h3 className="font-bold line-clamp-2 text-slate-800 leading-tight text-lg group-hover:text-secondary-600 transition-colors duration-200">
                                {post.title}
                              </h3>

                              {/* Description */}
                              <p className="text-slate-600 text-lg leading-tight line-clamp-3">
                                {post.description}
                              </p>

                              <div className="flex justify-between items-center pt-1">
                                {/* Read More Link */}
                                <span className="inline-flex items-center text-burgundy font-bold group-hover:text-burgundy transition-colors duration-200">
                                  Read More →
                                </span>

                                {/* Date */}
                                <span className=" text-slate-500">
                                  {post.date}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Navigation */}
              <div className="lg:hidden flex justify-between items-center mt-4 px-4">
                <button
                  onClick={previousArticle}
                  disabled={currentIndex === 0}
                  className={`p-2.5 rounded-full shadow-lg transition-all duration-300 ${
                    currentIndex === 0
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-secondary-600"
                  }`}
                >
                  <FaChevronLeft className="w-4 h-4" />
                </button>

                {/* Position Indicators */}
                <div className="flex space-x-2">
                  {blogPosts.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                        currentIndex === i
                          ? "bg-burgundy w-8"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextArticle}
                  className="p-2.5 rounded-full shadow-lg transition-all duration-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-secondary-600"
                >
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Desktop Position Indicators */}
              <div className="hidden lg:flex justify-center mt-8 space-x-2">
                {blogPosts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      currentIndex === i
                        ? "bg-burgundy w-8"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsInsightsSection;
