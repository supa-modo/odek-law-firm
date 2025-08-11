import React from "react";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <div className="pt-[4.6rem] min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Content will be populated later...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
