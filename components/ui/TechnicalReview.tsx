"use client";

import { FeatureProp } from "@/data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.5 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
};

const TechnicalReview = ({ technicalReview }: { technicalReview: FeatureProp[] }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        Technical Review
      </h2>

      <ul className="mb-8 space-y-4 leading-relaxed">
        {technicalReview.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            variants={itemVariants}
          >
            <span className="text-lg mr-2">{item.icon}</span>
            <div>
              <span className="font-bold text-lg">{item.title}</span>
              <span className="text-md"> — {item.description}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TechnicalReview;
