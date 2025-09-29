import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import NewsInsightsSection from "./components/NewsInsightsSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import ClientSuccessSection from "./components/ClientSuccessSection";
import LegalResourcesSection from "./components/LegalResourcesSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import PracticeAreaDetailPage from "./pages/PracticeAreaDetailPage";
import LegalTeamPage from "./pages/LegalTeamPage";
import { Analytics } from "@vercel/analytics/react";

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="w-full overflow-x-hidden">
              <Header />
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <WhyChooseUsSection />
              <ClientSuccessSection />
              <NewsInsightsSection />
              {/* <LegalResourcesSection /> */}
              <ContactSection />
              <Footer />
            </div>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Practice Areas Page */}
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route
          path="/practice-areas/:areaId"
          element={<PracticeAreaDetailPage />}
        />

        {/* Legal Team Page */}
        <Route path="/legal-team" element={<LegalTeamPage />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
