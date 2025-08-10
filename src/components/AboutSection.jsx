const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted Legal Partners for Over
              <span className="text-amber-600"> Two Decades</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Odek & Associates LLC, we understand that navigating the
              complexities of the legal system can be overwhelming. Our
              experienced team of legal professionals is dedicated to providing
              exceptional legal services while maintaining the highest ethical
              standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Expert Legal Counsel
                  </h3>
                  <p className="text-gray-600">
                    Professional guidance from experienced legal practitioners
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Client-Focused Approach
                  </h3>
                  <p className="text-gray-600">
                    Personalized strategies tailored to your unique situation
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-gold text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Learn About Our Firm
            </button>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-12 h-12 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Professional Legal Services
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Cases Won</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
