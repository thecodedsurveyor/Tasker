import { useScrollToTopOnRouteChange } from "../../hooks/useScrollToTopOnRouteChange";

const ScrollToTopOnRouteChange = () => {
  // Scroll to top with smooth behavior when route changes
  useScrollToTopOnRouteChange({
    behavior: "smooth",
    top: 0,
    enabled: true,
    delay: 0,
  });

  return null; // This component doesn't render anything
};

export default ScrollToTopOnRouteChange;
