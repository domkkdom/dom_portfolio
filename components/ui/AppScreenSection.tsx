"use client";


import { motion } from "framer-motion";

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

  return (
    <section className="w-full bg-black-100 py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
        App Screens
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-5">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-[250px] sm:w-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.8 }}
          >
              <img 
                src={src}
                alt={`App Screen ${index + 1}`}
                 className="w-full **h-50** object-contain"
              />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
