import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTopOnRouteChange = (options = {}) => {
  const { pathname } = useLocation();
  const {
    behavior = "smooth",
    top = 0,
    enabled = true,
    delay = 0
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const scrollToTop = () => {
      window.scrollTo({
        top,
        behavior,
      });
    };

    if (delay > 0) {
      const timer = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timer);
    } else {
      scrollToTop();
    }
  }, [pathname, behavior, top, enabled, delay]);
}; 