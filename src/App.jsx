import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import NewsInsightsSection from "./components/NewsInsightsSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import LegalTeamPage from "./pages/LegalTeamPage";

// Main App Component
function App() {
  return (
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
            <NewsInsightsSection />
            <ContactSection />
            <Footer />
          </div>
        }
      />

      {/* About Page */}
      <Route path="/about" element={<AboutPage />} />

      {/* Practice Areas Page */}
      <Route path="/practice-areas" element={<PracticeAreasPage />} />

      {/* Legal Team Page */}
      <Route path="/legal-team" element={<LegalTeamPage />} />
    </Routes>
  );
}

export default App;
