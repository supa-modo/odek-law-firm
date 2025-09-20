import React, { useState } from "react";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import {
  TbPhoneCall,
  TbMail,
  TbMapPin,
  TbClock,
  TbArrowRight,
  TbMailFilled,
} from "react-icons/tb";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    legalMatter: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="pt-16 md:pt-20 lg:pt-24 bg-gradient-to-br from-slate-100 to-slate-200 relative"
    >
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

      <div>
        <div className="max-w-[95%] mx-auto md:px-6 lg:px-14 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-16 bg-secondary-700 rounded-full mr-4"></div>
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-secondary-700">
                GET IN TOUCH
              </span>
              <div className="h-1 w-16 bg-secondary-700 rounded-full ml-4"></div>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-1.5 md:mb-3 lg:mb-4 leading-tight">
              Ready to Discuss Your Legal Needs?
            </h2>
            <p className="text-[1.15rem] lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Contact our experienced legal team today for a confidential
              consultation. We're here to provide expert guidance and protect
              your interests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-burgundy mb-8 relative">
                  <span className="relative">
                    Contact Information
                    <div className="absolute -bottom-2 left-0 w-20 h-1 bg-secondary-700 rounded-full"></div>
                  </span>
                </h3>

                <div className="space-y-2 md:space-y-3 lg:space-y-5">
                  {/* Address */}
                  <div className="group flex items-start space-x-4 p-4 bg-white/50 backdrop-blur-sm border border-slate-200/50 ">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-700/10 flex items-center justify-center group-hover:bg-secondary-700/20 transition-colors">
                      <PiMapPinAreaDuotone className="w-6 h-6 text-secondary-700" />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-bold text-slate-800 mb-1">
                        Our Office Address & Hours
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-[1.1rem] lg:text-lg">
                        Westlands Business Centre Nairobi, Kenya
                      </p>
                      <p className="text-slate-600 leading-relaxed text-[1.1rem] lg:text-lg">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group flex items-start space-x-4 p-4 bg-white/50 backdrop-blur-sm border border-slate-200/50 ">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-700/10 flex items-center justify-center group-hover:bg-secondary-700/20 transition-colors">
                      <TbPhoneCall className="w-6 h-6 text-secondary-700" />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-bold text-slate-800 mb-1">
                        Phone Numbers
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-[1.1rem] lg:text-lg">
                        +254 700 000 000
                        <br />
                        +254 20 000 0000
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-start space-x-4 p-4 bg-white/50 backdrop-blur-sm border border-slate-200/50 ">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-700/10 flex items-center justify-center group-hover:bg-secondary-700/20 transition-colors">
                      <TbMailFilled className="w-6 h-6 text-secondary-700" />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-bold text-slate-800 mb-1">
                        Email Address
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-[1.1rem] lg:text-lg">
                        info@obelassociates.co.ke
                        <br />
                        consultation@obelassociates.co.ke
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 backdrop-blur-sm border border-slate-200/50 p-3 md:p-4 lg:p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-8 relative px-3 pt-4 lg:px-0 lg:pt-0">
                  <span className="relative">
                    Send us a Message
                    <div className="absolute -bottom-2 left-0 w-20 h-1 bg-burgundy/80 rounded-full"></div>
                  </span>
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-5 lg:space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                    <div>
                      <label className="block lg:text-lg font-semibold text-slate-600 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-lg lg:text-[1.15rem] font-semibold placeholder:font-normal border border-slate-300 focus:outline-none focus:ring-1 focus:ring-burgundy/80 focus:border-burgundy/80 transition-colors bg-white/80 backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block lg:text-lg font-semibold text-slate-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-lg lg:text-[1.15rem] font-semibold placeholder:font-normal border border-slate-300 focus:outline-none focus:ring-1 focus:ring-burgundy/80 focus:border-burgundy/80 transition-colors bg-white/80 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block lg:text-lg font-semibold text-slate-600 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-lg lg:text-[1.15rem] font-semibold placeholder:font-normal border border-slate-300 focus:outline-none focus:ring-1 focus:ring-burgundy/80 focus:border-burgundy/80 transition-colors bg-white/80 backdrop-blur-sm"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block lg:text-lg font-semibold text-slate-600 mb-2">
                      Legal Matter *
                    </label>
                    <select
                      name="legalMatter"
                      value={formData.legalMatter}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-lg lg:text-[1.15rem] font-semibold placeholder:font-normal border border-slate-300 focus:outline-none focus:ring-1 focus:ring-burgundy/80 focus:border-burgundy/80 transition-colors bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Select a practice area</option>
                      <option value="civil-law">Civil Law</option>
                      <option value="tax-law">Tax Law</option>
                      <option value="property-law">Property & Land Law</option>
                      <option value="employment-law">
                        Employment & Labour
                      </option>
                      <option value="corporate-law">
                        Commercial & Corporate Law
                      </option>
                      <option value="banking-law">
                        Banking & Financial Law
                      </option>
                      <option value="criminal-law">Criminal Law</option>
                      <option value="family-law">Family Law</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block lg:text-lg font-semibold text-slate-600 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 text-lg lg:text-[1.15rem] font-semibold placeholder:font-normal border border-slate-300 focus:outline-none focus:ring-1 focus:ring-burgundy/80 focus:border-burgundy/80 transition-colors resize-none bg-white/80 backdrop-blur-sm"
                      placeholder="Please describe your legal matter or questions in detail..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-burgundy/80 hover:bg-burgundy text-white px-8 py-2.5 md:py-3 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <TbPhoneCall className="w-5 h-5" />
                        <span>Send Message</span>
                        <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>

                    <p className="pt-2 text-[0.95rem] md:text-base text-slate-600 text-center leading-relaxed">
                      All consultations are confidential and protected by
                      attorney-client privilege.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="pt-10">
          <h4 className="max-w-[97%] lg:max-w-[90%] mx-auto text-2xl md:text-3xl lg:text-4xl font-bold text-burgundy mb-1">
            You Can Find Us Here
          </h4>
          <p className="max-w-[97%] lg:max-w-[90%] mx-auto text-[1.1rem] md:text-lg lg:text-[1.4rem] text-slate-600 mb-2 lg:mb-4">
            We are located in the Westlands Business Centre, Nairobi, Kenya.
          </p>
          <div className="w-full h-[36rem] bg-slate-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8089!2d36.8065!3d-1.2644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1734a4b4b4b4%3A0x4b4b4b4b4b4b4b4b!2sWestlands%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
