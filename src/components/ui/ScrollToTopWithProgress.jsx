import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopWithProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress and toggle visibility
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setScrollProgress(Math.min(scrollPercent, 100));

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Progress Circle */}
          <div className="relative">
            <svg className="h-16 w-16 -rotate-90 transform" viewBox="0 0 36 36">
              {/* Background circle */}
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
              />
              {/* Progress circle */}
              <motion.path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray={`${scrollProgress}, 100`}
                strokeLinecap="round"
                initial={{ strokeDasharray: "0, 100" }}
                animate={{ strokeDasharray: `${scrollProgress}, 100` }}
                transition={{ duration: 0.3 }}
              />
            </svg>

            {/* Button inside progress circle */}
            <motion.button
              onClick={scrollToTop}
              className="absolute inset-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <motion.svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ y: 2 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </motion.svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopWithProgress;
