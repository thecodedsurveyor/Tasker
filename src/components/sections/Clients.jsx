import { motion } from "framer-motion";
import {
  useScrollAnimation,
  fadeInUp,
  scaleIn,
} from "../../hooks/useScrollAnimation";

const Clients = () => {
  const { ref: clientsRef, isInView: clientsInView } = useScrollAnimation(0.1);

  return (
    <motion.section
      ref={clientsRef}
      initial="hidden"
      animate={clientsInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="mt-12 flex flex-col items-center justify-center bg-gray-200 p-4 xl:p-16"
    >
      <motion.h3
        variants={fadeInUp}
        className="text-2xl font-bold text-gray-900 xl:text-4xl"
      >
        Trusted by Leading Companies
      </motion.h3>
      <motion.p
        variants={fadeInUp}
        className="py-4 text-center text-gray-600 xl:w-1/2"
      >
        Join thousands of organizations worldwide who trust Tasker to streamline
        their workflows, boost productivity, and achieve their project goals
        with confidence.
      </motion.p>
      <motion.div
        variants={scaleIn}
        whileHover={{ scale: 1.05 }}
        className="mt-8 xl:mt-0"
      >
        <img src="./images/clients.svg" alt="clients" />
      </motion.div>
    </motion.section>
  );
};

export default Clients;
