"use client";

import { motion } from "motion/react";

export default function AppScreensSection({
  img1,
  img2,
  img3,
  img4,
  img5,
}: {
  img1: string;
  img2: string;
  img3: string;
  img4?: string;
  img5?: string;
}) {
  const images = [img1, img2, img3, img4, img5].filter(Boolean);

  if (images.length === 0) return null;

  return (
    <section className="w-full py-16 flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-600 dark:text-purple mb-1">
          Interface Showcase
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Application Screens
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-4 max-w-6xl">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-[240px] sm:w-[280px] overflow-hidden rounded-2xl shadow-xl dark:shadow-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0c102b] hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <img
              src={src}
              alt={`App screen view ${index + 1}`}
              className="w-full h-auto max-h-[520px] object-contain p-2"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
