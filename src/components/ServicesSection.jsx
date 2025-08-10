const ServicesSection = () => {
  const practiceAreas = [
    {
      icon: (
        <svg
          className="w-16 h-16 text-amber-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: ["CIVIL", "LAW"],
      description:
        "Comprehensive civil litigation and dispute resolution services for individuals and businesses.",
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-amber-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      title: ["CORPORATE", "LAW"],
      description:
        "Strategic business legal solutions including formations, mergers, acquisitions and compliance.",
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-amber-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
      title: ["REAL ESTATE", "LAW"],
      description:
        "Expert property law services covering transactions, disputes, and development projects.",
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-amber-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.99 2.99 0 0 0 17 7.5h-2c-1.66 0-3 1.34-3 3 0 .35.06.68.14 1H8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H12v8h8z" />
        </svg>
      ),
      title: ["FAMILY", "LAW"],
      description:
        "Compassionate legal support for divorce, custody, adoption and matrimonial matters.",
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-amber-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
      title: ["CRIMINAL", "DEFENSE"],
      description:
        "Aggressive criminal defense representation protecting your rights and freedom.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block h-1 w-20 bg-amber-500 mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Practice Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal expertise across multiple practice areas,
            delivering exceptional results for our clients with dedication and
            professionalism.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors duration-300">
                  {area.icon}
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-6">
                <div className="space-y-1">
                  {area.title.map((line, lineIndex) => (
                    <div
                      key={lineIndex}
                      className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {area.description}
              </p>

              {/* Learn More Button */}
              <div className="text-center">
                <button className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group-hover:transform group-hover:scale-105 transition-all duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our experienced legal team is ready to provide you with expert
              guidance and representation. Contact us today for a confidential
              consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
