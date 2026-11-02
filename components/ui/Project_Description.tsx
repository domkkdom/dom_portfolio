"use client";

import { motion } from "motion/react";

interface ProjectDescriptionProps {
  description: string;
}

export default function ProjectDescriptions({ description }: ProjectDescriptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center px-4 sm:px-0 max-w-4xl mx-auto mb-12"
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mb-6">
        Project Overview & Architecture
      </h2>

      <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
