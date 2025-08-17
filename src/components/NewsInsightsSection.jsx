import React, { useState } from "react";
import {
  TbArrowRight,
  TbArrowLeft,
  TbArrowRight as TbArrowRightIcon,
} from "react-icons/tb";

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

  const nextArticles = () => {
    if (currentIndex < blogPosts.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousArticles = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visiblePosts = blogPosts.slice(currentIndex, currentIndex + 3);

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
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-700">
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
              <p className="text-base text-slate-600 leading-relaxed">
                Subscribe to our email list to stay up to date on the latest
                news and insights from Obel & Company Associates. We share
                exciting legal wins and exclusive news.
              </p>

              {/* Newsletter Form */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-secondary-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded font-semibold text-sm transition-colors duration-200">
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Blog Posts (70% width) */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Navigation Arrows */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={previousArticles}
                  disabled={currentIndex === 0}
                  className={`p-2 rounded-full shadow-lg transition-all duration-200 ${
                    currentIndex === 0
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-secondary-600"
                  }`}
                >
                  <TbArrowLeft className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={nextArticles}
                  disabled={currentIndex >= blogPosts.length - 3}
                  className={`p-2 rounded-full shadow-lg transition-all duration-200 ${
                    currentIndex >= blogPosts.length - 3
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-secondary-600"
                  }`}
                >
                  <TbArrowRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 px-0 md:px-3 lg:px-12">
                {visiblePosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="group cursor-pointer transition-all duration-300"
                  >
                    <div className="bg-white border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300">
                      {/* Image */}
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <div className="space-y-2">
                          {/* Title */}
                          <h3 className="font-bold text-slate-800 leading-tight text-sm">
                            {post.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-xs leading-relaxed">
                            It all begins with an idea.
                          </p>

                          <div className="flex justify-between">
                            {/* Read More Link */}
                            <div className="pt-1">
                              <span className="inline-flex items-center text-slate-800 font-semibold text-xs group-hover:text-secondary-600 transition-colors duration-200">
                                Read More →
                              </span>
                            </div>

                            {/* Date */}
                            <div className="pt-1">
                              <span className="text-xs text-slate-500">
                                {post.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Position Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from(
                  { length: Math.ceil(blogPosts.length / 3) },
                  (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i * 3)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        i === Math.floor(currentIndex / 3)
                          ? "bg-secondary-600 w-4"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsInsightsSection;
