import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About Us",
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
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center h-[4.6rem]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/scales.jpg"
                  alt="Odek & Associates"
                  className="w-14 lg:w-16 h-14 lg:h-16 mr-2"
                />
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold font-garamond text-secondary-800">
                    Odek & Associates
                  </h1>
                  <p className="-mt-1 text-sm lg:text-[0.97rem] text-navy font-medium leading-tight">
                    Advocates & Solicitors
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-center font-outfit uppercase text-[0.93rem] space-x-4">
              {navigationItems.map((item, index) => (
                <React.Fragment key={item.to}>
                  {item.to.startsWith("/#") ? (
                    <a
                      href={item.to}
                      className={`text-gray-500 hover:text-secondary-700 px-3 py-2 font-semibold transition-colors relative group`}
                    >
                      {item.label}
                      <div
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-700 group-hover:w-full transition-all duration-200 ease-out`}
                      ></div>
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className={`text-gray-500 hover:text-primary-600 px-3 py-2 font-semibold transition-colors relative group ${
                        location.pathname === item.to
                          ? "text-secondary-700"
                          : ""
                      }`}
                    >
                      {item.label}
                      <div
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-700 group-hover:bg-primary-600 group-hover:w-full transition-all duration-200 ease-out ${
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
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 font-garamond text-lg group transition-colors duration-300 font-medium flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Free Consultations</span>
                  <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-600 p-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
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
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full px-2 left-0 right-0 bg-white shadow-xl border-t z-40">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) =>
                item.to.startsWith("/#") ? (
                  <a
                    key={item.to}
                    href={item.to}
                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
            <button className="mb-3 bg-primary-500 text-white px-6 py-2 font-garamond text-lg group hover:opacity-90 transition-opacity font-medium w-full mt-2">
              <div className="flex items-center gap-2 justify-center">
                <span className="font-medium">Free Consultations</span>
                <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
