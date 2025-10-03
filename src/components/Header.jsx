import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbArrowRight, TbChevronDown } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is on the menu button
      const menuButton = event.target.closest("[data-menu-button]");
      if (menuButton) {
        return; // Don't close if clicking the menu button
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsPracticeAreasOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsPracticeAreasOpen(false);
  }, [location.pathname]);

  // Handle scrolling to contact section
  useEffect(() => {
    if (location.pathname === "/") {
      // Check if we have a hash or if we need to scroll to contact
      if (location.hash === "#contact" || location.state?.scrollToContact) {
        const scrollToContact = () => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        };

        // Try immediate scroll first
        scrollToContact();

        // Fallback with timeout in case the element isn't ready
        const timer = setTimeout(scrollToContact, 500);

        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname, location.hash, location.state]);

  const practiceAreas = [
    {
      to: "/practice-areas/corporate",
      label: "Corporate & Commercial",
    },
    {
      to: "/practice-areas/property",
      label: "Real Estate & Property",
    },
    {
      to: "/practice-areas/employment",
      label: "Employment & Labour",
    },
    {
      to: "/practice-areas/family",
      label: "Family Law & Succession",
    },
    {
      to: "/practice-areas/criminal",
      label: "Criminal Law & Litigation",
    },
    {
      to: "/practice-areas/banking",
      label: "Banking & Financial",
    },
  ];

  const navigationItems = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "Our Law Firm",
    },
    {
      to: "/practice-areas",
      label: "Practice Areas",
    },
    {
      to: "/legal-team",
      label: "Our Legal Team",
    },
    {
      to: "/#contact",
      label: "Contact Us",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-white shadow-lg"
          : "bg-transparent md:py-1 lg:py-3"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center h-[4.6rem]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/scales.jpg"
                  alt="Obel & Company Advocates - Scales of Justice Logo"
                  className="w-14 lg:w-16 h-14 lg:h-16 mr-2"
                  loading="eager"
                />
                <div>
                  <h1
                    className={`text-xl lg:text-2xl font-extrabold font-garamond transition-colors duration-300 ${
                      isScrolled || isMenuOpen
                        ? "text-primary-700"
                        : "text-secondary-300"
                    }`}
                  >
                    Obel & Company Advocates
                  </h1>
                  <p
                    className={`-mt-1 text-sm lg:text-[0.97rem] font-semibold transition-colors duration-300 ${
                      isScrolled || isMenuOpen
                        ? "text-gray-700"
                        : "text-gray-200"
                    }`}
                  >
                    Advocates & Solicitors
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-center font-outfit uppercase text-[0.9rem] space-x-2.5">
              {navigationItems.map((item, index) => (
                <React.Fragment key={item.to}>
                  {item.to.startsWith("/#") ? (
                    <a
                      href={item.to}
                      className={`px-3 py-2 font-semibold transition-colors relative group ${
                        isScrolled || isMenuOpen
                          ? "text-gray-500 hover:text-burgundy-900"
                          : "text-white hover:text-secondary-300"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname === "/") {
                          // If already on homepage, just scroll to contact section
                          const contactSection =
                            document.getElementById("contact");
                          if (contactSection) {
                            contactSection.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        } else {
                          // If not on homepage, navigate to homepage with state to scroll to contact
                          navigate("/", { state: { scrollToContact: true } });
                        }
                      }}
                    >
                      {item.label}
                      <div
                        className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                          isScrolled || isMenuOpen
                            ? "bg-burgundy-900"
                            : "bg-secondary-300"
                        } group-hover:w-full transition-all duration-300 ease-out`}
                      ></div>
                    </a>
                  ) : item.label === "Practice Areas" ? (
                    <div
                      className="relative group"
                      onMouseEnter={() => setIsPracticeAreasOpen(true)}
                      onMouseLeave={() => setIsPracticeAreasOpen(false)}
                    >
                      <button
                        className={`px-3 py-2 uppercase font-semibold transition-colors flex items-center gap-2 group relative ${
                          isScrolled || isMenuOpen
                            ? "text-gray-500 hover:text-burgundy-900"
                            : "text-white hover:text-secondary-300"
                        } ${
                          location.pathname === item.to
                            ? "text-secondary-700"
                            : ""
                        }`}
                      >
                        {item.label}
                        <motion.div
                          animate={{
                            rotate: isPracticeAreasOpen ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                        >
                          <TbChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isPracticeAreasOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{
                              duration: 0.2,
                              ease: "easeOut",
                              staggerChildren: 0.05,
                            }}
                            className="absolute top-full left-0 mt-1 w-80 bg-white shadow-xl border border-slate-200 py-2 z-50 rounded-lg overflow-hidden"
                          >
                            {practiceAreas.map((area, areaIndex) => (
                              <motion.div
                                key={areaIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: areaIndex * 0.05 }}
                              >
                                <Link
                                  to={area.to}
                                  className="block px-4 py-3 hover:bg-slate-50 transition-colors duration-150 group/item"
                                  onClick={() => setIsPracticeAreasOpen(false)}
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <div className="font-semibold text-slate-800 group-hover/item:text-primary-600 transition-colors duration-200">
                                        {area.label}
                                      </div>
                                    </div>
                                    <motion.div
                                      className="text-slate-400 group-hover/item:text-primary-600 transition-colors duration-200"
                                      whileHover={{ x: 3 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      →
                                    </motion.div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      className={`px-3 py-2 font-semibold transition-colors duration-300 relative group ${
                        isScrolled || isMenuOpen
                          ? "text-gray-500 hover:text-burgundy-900"
                          : "text-white hover:text-secondary-300"
                      } ${
                        location.pathname === item.to
                          ? "text-secondary-700"
                          : ""
                      }`}
                    >
                      {item.label}
                      <div
                        className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                          isScrolled || isMenuOpen
                            ? "bg-secondary-700 group-hover:bg-burgundy-900"
                            : "bg-secondary-500 group-hover:bg-secondary-300"
                        } group-hover:w-full transition-all duration-500 ease-out ${
                          location.pathname === item.to ? "w-full" : ""
                        }`}
                      ></div>
                    </Link>
                  )}
                  {index < navigationItems.length - 1 && (
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  )}
                </React.Fragment>
              ))}
              <button
                className={`px-6 py-2 font-garamond text-lg group transition-colors duration-300 font-medium flex items-center gap-2 ${
                  isScrolled || isMenuOpen
                    ? "bg-primary-700 hover:bg-primary-800 text-white"
                    : "bg-secondary-700 hover:bg-secondary-800 text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Free Consultations</span>
                  <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              data-menu-button
              onClick={(e) => {
                e.stopPropagation();
                if (isMenuOpen) {
                  setIsMenuOpen(false);
                  setIsPracticeAreasOpen(false);
                } else {
                  setIsMenuOpen(true);
                }
              }}
              className={`p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-600 transition-colors duration-300 ${
                isScrolled || isMenuOpen
                  ? "text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  : "text-white hover:text-gray-200 hover:bg-white/10"
              }`}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.05,
              }}
              className="lg:hidden absolute top-full px-1 left-0 right-0 bg-white shadow-2xl border-t z-40 rounded-b-lg overflow-hidden"
            >
              <motion.div
                className="px-2 pt-2 pb-3 space-y-0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.15 }}
                  >
                    {item.to.startsWith("/#") ? (
                      <a
                        href={item.to}
                        className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-[1.1rem] font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMenuOpen(false);
                          if (location.pathname === "/") {
                            // If already on homepage, just scroll to contact section
                            const contactSection =
                              document.getElementById("contact");
                            if (contactSection) {
                              contactSection.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          } else {
                            // If not on homepage, navigate to homepage with state to scroll to contact
                            navigate("/", { state: { scrollToContact: true } });
                          }
                        }}
                      >
                        {item.label}
                      </a>
                    ) : item.label === "Practice Areas" ? (
                      <div>
                        <button
                          className="text-gray-700 hover:text-gray-900 flex px-3 py-2 text-[1.1rem] font-medium w-full text-left items-center justify-between transition-colors duration-200 hover:bg-gray-50 rounded-md"
                          onClick={() =>
                            setIsPracticeAreasOpen(!isPracticeAreasOpen)
                          }
                        >
                          {item.label}
                          <motion.div
                            animate={{
                              rotate: isPracticeAreasOpen ? 180 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                          >
                            <TbChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>

                        {/* Mobile Dropdown */}
                        <AnimatePresence>
                          {isPracticeAreasOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                              }}
                              className="ml-4 mt-2 space-y-0.5 border-l-2 border-burgundy pl-4 overflow-hidden"
                            >
                              {practiceAreas.map((area, areaIndex) => (
                                <motion.div
                                  key={areaIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{
                                    delay: areaIndex * 0.1,
                                    duration: 0.2,
                                  }}
                                >
                                  <Link
                                    to={area.to}
                                    className="text-gray-600 hover:text-gray-800 block px-3 py-2 text-[0.9rem] font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setIsPracticeAreasOpen(false);
                                    }}
                                  >
                                    {area.label}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.to}
                        className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-[1.1rem] font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-2"
              >
                <button className="mb-3 bg-primary-700 text-white px-6 py-2 font-garamond text-lg group hover:opacity-90 transition-opacity font-medium w-full mt-2">
                  <div className="flex items-center gap-2 justify-center">
                    <span className="font-semibold">Free Consultations</span>
                    <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
