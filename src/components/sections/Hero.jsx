import { motion } from "framer-motion";
import Button from "../ui/Button";
import Input from "../ui/Input";
import {
  useScrollAnimation,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "../../hooks/useScrollAnimation";

const Hero = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.1);
  const { ref: formRef, isInView: formInView } = useScrollAnimation(0.2);

  return (
    <motion.main
      ref={heroRef}
      initial="hidden"
      animate={heroInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="mt-8 flex flex-col-reverse items-center gap-4 p-8 lg:mt-36 lg:grid lg:grid-cols-2 xl:gap-12 xl:px-20"
    >
      <motion.div variants={fadeInLeft} className="flex flex-col gap-4">
        <motion.h1
          variants={fadeInUp}
          className="text-center text-xl font-bold leading-snug text-gray-900 xl:text-left xl:text-5xl 2xl:text-6xl"
        >
          Streamline Your Workflow with Intelligent Task Management
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="my-0 text-center text-xl text-gray-600 xl:my-12 xl:text-left"
        >
          Organize tasks, collaborate seamlessly, and boost productivity with
          our comprehensive project management platform designed for modern
          teams.
        </motion.p>

        {/* Enhanced Form Design */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={scaleIn}
          className="mt-8"
        >
          <div className="relative mx-auto max-w-md xl:mx-0">
            {/* Form Container with Gradient Border */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-0.5 shadow-2xl"
            >
              <div className="rounded-2xl bg-white p-6">
                <form className="flex flex-col gap-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your work email"
                      className="w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-6 py-4 text-lg transition-all focus:border-blue-500 focus:bg-white"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="w-full rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Start Free Trial
                    </Button>
                  </motion.div>
                </form>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500"
                >
                  <svg
                    className="h-4 w-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No credit card required</span>
                  <span>•</span>
                  <span>14-day free trial</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Elements for Visual Appeal */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 -top-4 h-8 w-8 rounded-full bg-yellow-400 opacity-20"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-blue-400 opacity-20"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 left-8 h-4 w-4 rounded-full bg-green-400 opacity-20"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeInRight} className="relative">
        <motion.img
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src="./images/hero-img.svg"
          className="w-[600px]"
          alt="hero"
        />
      </motion.div>
    </motion.main>
  );
};

export default Hero;
