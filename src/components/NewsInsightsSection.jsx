import React, { useState, useEffect } from "react";
import {
  TbArrowRight,
  TbArrowLeft,
  TbArrowRight as TbArrowRightIcon,
} from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const NewsInsightsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Simple view count - 3 for large screens, 1 for small screens
  const [viewCount, setViewCount] = useState(3);

  useEffect(() => {
    const updateViewCount = () => {
      setViewCount(window.innerWidth >= 1024 ? 3 : 1);
    };

    updateViewCount();
    window.addEventListener("resize", updateViewCount);
    return () => window.removeEventListener("resize", updateViewCount);
  }, []);

  // Calculate total pages based on view count
  const totalPages = Math.ceil(blogPosts.length / viewCount);
  const currentPage = Math.floor(currentIndex / viewCount);

  const nextArticles = () => {
    if (viewCount === 3) {
      // Large screens: move by 3 articles (1 page)
      if (currentPage < totalPages - 1) {
        setCurrentIndex((currentPage + 1) * viewCount);
      }
    } else {
      // Small screens: move by 1 article
      if (currentIndex < blogPosts.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const previousArticles = () => {
    if (viewCount === 3) {
      // Large screens: move by 3 articles (1 page)
      if (currentPage > 0) {
        setCurrentIndex((currentPage - 1) * viewCount);
      }
    } else {
      // Small screens: move by 1 article
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const goToSlide = (pageIndex) => {
    if (viewCount === 3) {
      // Large screens: go to specific page
      setCurrentIndex(pageIndex * viewCount);
    } else {
      // Small screens: go to specific article
      setCurrentIndex(pageIndex);
    }
  };

  return (
    <section className=" py-16 md:py-20 lg:py-24 bg-white relative">
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

      <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
          {/* Left Column - Newsletter Subscription (30% width) */}
          <div className="lg:col-span-3 relative">
            <div className="relative z-10 space-y-6">
              {/* Heading */}
              <div className="space-y-3">
                <div>
                  <span className="font-bold uppercase tracking-wider text-slate-700">
                    THE LATEST
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                    News
                  </h2>
                  <div className="w-1 h-8 bg-secondary-500"></div>
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
                    className="flex-1 px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-secondary-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded font-semibold transition-colors duration-200">
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Blog Posts (70% width) */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Desktop Navigation Arrows */}
              <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={previousArticles}
                  disabled={currentPage === 0}
                  className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                    currentPage === 0
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-secondary-600"
                  }`}
                >
                  <TbArrowLeft className="w-6 h-6" />
                </button>
              </div>

              <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={nextArticles}
                  disabled={
                    viewCount === 3
                      ? currentPage >= totalPages - 1
                      : currentIndex >= blogPosts.length - 1
                  }
                  className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                    viewCount === 3
                      ? currentPage >= totalPages - 1
                      : currentIndex >= blogPosts.length - 1
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-secondary-600"
                  }`}
                >
                  <TbArrowRightIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Blog Posts Carousel */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{
                    x:
                      viewCount === 3
                        ? -currentPage * 100 + "%"
                        : -currentIndex * 100 + "%",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  style={{
                    width:
                      viewCount === 3
                        ? `${totalPages * 100}%`
                        : `${blogPosts.length * 100}%`,
                  }}
                >
                  {viewCount === 3
                    ? // Large screens: page-based layout
                      Array.from({ length: totalPages }, (_, pageIndex) => (
                        <div
                          key={pageIndex}
                          className="flex-shrink-0 w-full px-4"
                          style={{
                            width: `${100 / totalPages}%`,
                          }}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogPosts
                              .slice(
                                pageIndex * viewCount,
                                (pageIndex + 1) * viewCount
                              )
                              .map((post) => (
                                <div
                                  key={post.id}
                                  className="group cursor-pointer"
                                >
                                  <div className="bg-white border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                                    {/* Image */}
                                    <div className="h-52 overflow-hidden">
                                      <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                      />
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                      <div className="space-y-3">
                                        {/* Title */}
                                        <h3 className="font-bold line-clamp-2 text-slate-800 leading-tight text-lg group-hover:text-secondary-600 transition-colors duration-200">
                                          {post.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-600 text-lg leading-relaxed line-clamp-3">
                                          {post.description}
                                        </p>

                                        <div className="flex justify-between items-center pt-2">
                                          {/* Read More Link */}
                                          <span className="inline-flex items-center text-slate-800 font-semibold text-lg group-hover:text-secondary-600 transition-colors duration-200">
                                            Read More →
                                          </span>

                                          {/* Date */}
                                          <span className="text-lg text-slate-500">
                                            {post.date}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      ))
                    : // Small screens: article-based layout
                      blogPosts.map((post, index) => (
                        <div
                          key={post.id}
                          className="flex-shrink-0 w-full px-4"
                          style={{
                            width: `${100 / blogPosts.length}%`,
                          }}
                        >
                          <div className="max-w-sm mx-auto">
                            <div className="group cursor-pointer">
                              <div className="bg-white border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                                {/* Image */}
                                <div className="h-48 overflow-hidden">
                                  <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>

                                {/* Content */}
                                <div className="p-3">
                                  <div className="space-y-3">
                                    {/* Title */}
                                    <h3 className="font-extrabold line-clamp-2 text-slate-800 leading-tight text-lg group-hover:text-secondary-600 transition-colors duration-200">
                                      {post.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                      {post.description}
                                    </p>

                                    <div className="flex justify-between items-center pt-2">
                                      {/* Read More Link */}
                                      <span className="inline-flex items-center text-slate-800 font-semibold text-lg group-hover:text-secondary-600 transition-colors duration-200">
                                        Read More →
                                      </span>

                                      {/* Date */}
                                      <span className="text-lg text-slate-500">
                                        {post.date}
                                      </span>
                                    </div>
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
              <div className="lg:hidden flex justify-between items-center mt-8 px-4">
                <button
                  onClick={previousArticles}
                  disabled={currentIndex === 0}
                  className={`p-4 rounded-full shadow-lg transition-all duration-200 ${
                    currentIndex === 0
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-secondary-600"
                  }`}
                >
                  <TbArrowLeft className="w-6 h-6" />
                </button>

                {/* Position Indicators */}
                <div className="flex space-x-3">
                  {Array.from({ length: blogPosts.length }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        i === currentIndex
                          ? "bg-secondary-600 w-8"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextArticles}
                  disabled={currentIndex >= blogPosts.length - 1}
                  className={`p-4 rounded-full shadow-lg transition-all duration-200 ${
                    currentIndex >= blogPosts.length - 1
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-secondary-600"
                  }`}
                >
                  <TbArrowRightIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Desktop Position Indicators */}
              <div className="hidden lg:flex justify-center mt-8 space-x-3">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      i === currentPage
                        ? "bg-secondary-600 w-8"
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
