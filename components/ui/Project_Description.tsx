"use client";


import { motion } from "framer-motion";

interface ProjectDescriptionProps {
  description: string;
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // triggers once when 20% of component is in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center px-4 sm:px-0"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
        Project Description
      </h1>

      <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
