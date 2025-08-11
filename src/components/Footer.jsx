import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Company Info - Full width on mobile, 4 columns on desktop */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center rounded-full py-1.5 px-2 bg-white">
                <img
                  src="/scales.jpg"
                  alt="Obel & Company Associates"
                  className="w-10 lg:w-16 h-10 lg:h-16"
                />
              </div>

              <div className="ml-4">
                <h3 className="text-2xl leading-tight text-secondary-600 font-bold">
                  Obel & Company Associates
                </h3>
                <p className="text-gray-400 font-medium">
                  Advocates & Solicitors
                </p>
              </div>
            </div>
            <p className="text-gray-400 font-medium lg:text-lg leading-tight mb-6 max-w-md">
              Providing exceptional legal services with integrity, expertise,
              and unwavering commitment to our clients' success.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-secondary-600 transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary-600 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary-600 transition-colors duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Section - Full width on mobile, 4 columns on desktop */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-secondary-200">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                    >
                      Practice Areas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                    >
                      Talk to Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-secondary-200">
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form - Full width on mobile, 4 columns on desktop */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-4 text-secondary-200">
              Get In Touch
            </h4>
            <form className="space-y-2">
              {/* Message Textarea */}
              <div>
                <textarea
                  placeholder="Leave us a message..."
                  className="w-full h-24 px-4 py-3 bg-primary-700 border border-primary-600    text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent resize-none transition-all duration-300"
                ></textarea>
              </div>

              {/* Email/Phone Input and Send Button Row */}
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Email or Phone"
                  className="flex-1 px-4 py-2 bg-primary-700 border border-primary-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-1/5 bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 font-semibold transition-all duration-300 flex items-center justify-center "
                >
                  <TbSend className="hidden md:block w-5 h-5 mr-2" /> Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-primary-600 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} Obel & Company Associates. All
            rights reserved. | Advocates & Solicitors of the High Court of Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
