import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section className="py-20 scroll-mt-28 sm:scroll-mt-32" id="experience">
      <div className="text-center mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-600 dark:text-purple mb-2">
          Career Trajectory
        </p>
        <h1 className="heading text-slate-900 dark:text-white">
          My <span className="text-purple-600 dark:text-purple">Work Experience</span>
        </h1>
        <p className="mt-3 text-slate-600 dark:text-[#BEC1DD] text-sm sm:text-base max-w-xl mx-auto">
          5 years of delivering production software, from fast-paced startup web apps to enterprise fintech mobile deployments.
        </p>
      </div>

      <div className="w-full mt-10 grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 8000) + 9000}
            className="flex-1 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800"
          >
            <div className="flex sm:flex-row flex-col sm:items-center p-5 sm:p-7 lg:p-8 gap-5 text-left w-full">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-purple-50 dark:bg-slate-800/80 border border-purple-100 dark:border-white/10 flex items-center justify-center p-3 shadow-sm">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple border border-purple-500/20">
                    {card.badge || "Engineering"}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {card.period}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  {card.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-white-100 mt-2 font-normal leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
