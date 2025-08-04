import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "../../hooks/useScrollAnimation";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref: testimonialRef, isInView: testimonialInView } =
    useScrollAnimation(0.1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 400);
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((current) =>
          current === 0 ? testimonials.length - 1 : current - 1,
        );
        setIsTransitioning(false);
      }, 400);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== activeIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 400);
    }
  };

  return (
    <motion.section
      ref={testimonialRef}
      initial="hidden"
      animate={testimonialInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="bg-gradient-to-brm  bg-gray-200 from-gray-50 to-gray-100 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Customer Stories
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
            Loved by Teams Worldwide
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            See how Tasker is transforming workflows and boosting productivity
            for teams across the globe
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-6xl">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                isTransitioning ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <div className="relative mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-12 shadow-2xl">
                {/* Large Quote Mark */}
                <div className="absolute -top-8 left-12 font-serif text-8xl text-blue-200">
                  &ldquo;
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  <blockquote className="mb-8 text-center text-2xl font-light leading-relaxed text-gray-900">
                    {testimonials[activeIndex].testimonial}
                  </blockquote>

                  {/* Author Section */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className="relative">
                      <img
                        className="h-16 w-16 rounded-full object-cover shadow-lg ring-4 ring-white"
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                      />
                      <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-blue-600">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTransitioning}
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTransitioning}
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonial;
