import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use a timeout to ensure smooth scrolling works properly after route change
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 50); // Small delay to ensure DOM is ready

    // Fallback for browsers that don't support smooth scrolling
    const fallbackTimer = setTimeout(() => {
      // Check if smooth scroll worked, if not, scroll immediately
      if (window.pageYOffset > 10) {
        window.scrollTo(0, 0);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
