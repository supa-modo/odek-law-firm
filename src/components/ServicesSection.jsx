const ServicesSection = () => {
  return (
    <section
      id="services"
      className="pt-10 md:py-10 bg-gradient-to-br from-slate-100 to-slate-50"
    >
      <div className="max-w-screen-2xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Column - Main Message */}
          <div className="lg:col-span-2 px-3 lg:px-0">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-4 md:mb-6 leading-tight font-garamond">
                Your Legal Rights Matter. We're Here to Protect Them.
              </h2>

              <div className="space-y-4 md:space-y-6 text-slate-800">
                <p className="text-[1.15rem] lg:text-2xl leading-relaxed">
                  Whether you're a business owner navigating corporate
                  regulations, an individual facing legal challenges, or a
                  family dealing with sensitive matters, we provide expert
                  counsel tailored to your unique situation. Our experienced
                  lawyers understand both local and international law to serve
                  your best interests.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center text-red-600 hover:text-secondary-700 font-bold text-base lg:text-xl uppercase tracking-wide group transition-colors duration-300"
                >
                  <span className="underline underline-offset-4">
                    NEED LEGAL ADVICE? CONTACT US.
                  </span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>

                <p className="text-[1.15rem] lg:text-2xl text-slate-800 mt-3 leading-">
                  Legal matters can be complex and overwhelming. Our team is
                  here to guide you through every step, ensuring your rights are
                  protected and your interests are served.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Visual Design */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden shadow-2xl">
                <div className="aspect-[16/12] md:aspect-[16/9] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                    style={{
                      backgroundImage: "url(/lawyer.jpg)",
                    }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/60 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 px-4 py-6 md:p-8 lg:p-10 flex flex-col justify-end">
                    <div className="text-white">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-3 lg:mb-4 font-garamond">
                        Excellence in Legal Practice
                      </h3>
                      <p className="text-slate-200 text-[0.9rem] sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 md:mb-5 lg:mb-6 max-w-lg">
                        Our commitment to legal excellence is reflected in every
                        case we handle, every client we represent, and every
                        outcome we achieve.
                      </p>

                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-1">
                            25+
                          </div>
                          <div className="text-[0.7rem] md:text-sm text-slate-300 uppercase font-medium tracking-wide">
                            Years Experience
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-1">
                            500+
                          </div>
                          <div className="text-[0.7rem] md:text-sm text-slate-300 uppercase font-medium tracking-wide">
                            Cases Won
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-1">
                            98%
                          </div>
                          <div className="text-[0.7rem] md:text-sm text-slate-300 uppercase font-medium tracking-wide">
                            Success Rate
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full opacity-15 blur-xl"></div>

              {/* Decorative Accent */}
              <div className="absolute top-1/2 -right-2 w-1 h-32 bg-gradient-to-b from-secondary-500 to-transparent transform -translate-y-1/2"></div>
              <div className="absolute bottom-1/2 -left-2 w-1 h-32 bg-gradient-to-b from-transparent to-secondary-500 transform translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
