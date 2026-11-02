"use client";

import { FeatureProp } from "@/data";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechnicalReview = ({
  technicalReview,
}: {
  technicalReview: FeatureProp[];
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="text-left max-w-4xl mx-auto my-8"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-white/10 pb-3">
        Technical Architecture & Engineering Highlights:
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {technicalReview.map((item, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black-200/40 shadow-sm flex items-start gap-3"
            variants={itemVariants}
          >
            <span className="text-xl p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              {item.icon}
            </span>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechnicalReview;
