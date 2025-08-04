import { motion } from "framer-motion";
import {
  useScrollAnimation,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
} from "../../hooks/useScrollAnimation";

const Features = () => {
  const { ref: featuresRef, isInView: featuresInView } =
    useScrollAnimation(0.1);
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation(0.2);
  const { ref: section2Ref, isInView: section2InView } =
    useScrollAnimation(0.1);
  const { ref: section3Ref, isInView: section3InView } =
    useScrollAnimation(0.1);

  const featureCards = [
    {
      icon: "./images/tasks.svg",
      title: "Smart Task Management",
      description:
        "Create, assign, and track tasks with intelligent prioritization, deadlines, and progress monitoring to ensure nothing falls through the cracks.",
      bgColor: "bg-red-500",
    },
    {
      icon: "./images/clock.svg",
      title: "Time Tracking",
      description:
        "Monitor project timelines, track time spent on tasks, and optimize resource allocation with detailed analytics and reporting.",
      bgColor: "bg-blue-500",
    },
    {
      icon: "./images/dna.svg",
      title: "Team Onboarding",
      description:
        "Streamline new team member integration with automated workflows, role-based access, and guided project familiarization processes.",
      bgColor: "bg-green-500",
    },
    {
      icon: "./images/chat.svg",
      title: "Real-time Collaboration",
      description:
        "Foster teamwork with integrated communication tools, file sharing, and collaborative workspaces that keep everyone connected.",
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section className="">
      <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-col items-center justify-between px-8 py-10 xl:flex-row xl:px-20"
      >
        <motion.div
          variants={fadeInLeft}
          className="flex flex-col items-start justify-start gap-4 xl:w-1/3 xl:items-start xl:justify-start"
        >
          <p className="text-md text-blue-500">Discover Our Features</p>
          <h3 className="text-xl font-bold text-gray-900 xl:text-4xl">
            Powerful Tools for Modern Teams
          </h3>
          <p className="text-gray-700">
            From task creation to project completion, our platform provides
            everything you need to manage workflows efficiently and keep your
            team aligned.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block rounded-md bg-blue-500 px-8 py-2 text-white transition-colors hover:bg-blue-600"
          >
            Explore Features
          </motion.a>
        </motion.div>

        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-8 px-2 xl:mt-0 xl:flex xl:w-2/4 xl:px-20"
        >
          <div className="flex flex-col gap-8">
            {featureCards.slice(0, 2).map((card, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`self-baseline rounded-lg ${card.bgColor} p-2`}
                >
                  <img src={card.icon} alt="task-icon" />
                </motion.div>
                <p className="text-2xl font-bold text-gray-900">{card.title}</p>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {featureCards.slice(2, 4).map((card, index) => (
              <motion.div
                key={index + 2}
                variants={scaleIn}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="mt-4 flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`self-baseline rounded-lg ${card.bgColor} p-2`}
                >
                  <img src={card.icon} alt="task-icon" />
                </motion.div>
                <p className="text-2xl font-bold text-gray-900">{card.title}</p>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={section2Ref}
        initial="hidden"
        animate={section2InView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-col items-center justify-between bg-gray-200 px-8 py-16 xl:flex-row xl:px-20"
      >
        <motion.div variants={fadeInLeft}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="./images/lady-hat.svg"
            alt="hat"
            className="w-3/4 xl:w-full"
          />
        </motion.div>

        <motion.div
          variants={fadeInRight}
          className="mt-8 flex flex-col items-start justify-start gap-4  xl:mt-0 xl:w-2/5"
        >
          <p className="text-md text-blue-500">Centralized Work Management</p>
          <h3 className="text-xl font-bold text-gray-900 xl:text-4xl">
            Everything You Need in One Platform
          </h3>
          <p className="text-gray-700">
            Consolidate all your project activities, team communications, and
            progress tracking into a single, intuitive interface that adapts to
            your workflow.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block rounded-md bg-blue-500 px-8 py-2 text-white transition-colors hover:bg-blue-600"
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        ref={section3Ref}
        initial="hidden"
        animate={section3InView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-col-reverse items-center justify-between px-8 py-8 xl:flex-row xl:px-20 xl:py-16"
      >
        <motion.div
          variants={fadeInLeft}
          className="flex flex-col items-start justify-start gap-4 xl:w-2/5"
        >
          <p className="text-md text-blue-500">Performance Analytics</p>
          <h3 className="text-xl font-bold text-gray-900 xl:text-4xl">
            Data-Driven Insights for Better Results
          </h3>
          <p className="text-gray-700">
            Leverage advanced analytics and performance metrics to identify
            bottlenecks, optimize processes, and make informed decisions that
            drive success.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block rounded-md bg-blue-500 px-8 py-2 text-white transition-colors hover:bg-blue-600"
          >
            View Analytics
          </motion.a>
        </motion.div>

        <motion.div variants={fadeInRight}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="./images/rocket-man.svg"
            alt="hat"
            className="w-3/4 xl:w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
