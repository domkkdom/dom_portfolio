import { toolIWorkWith } from "@/data";
import React from "react";
import SkillCard from "./ui/Skilled-cards";

const Approach = () => {
  return (
    <section className="py-20 scroll-mt-28 sm:scroll-mt-32" id="skills">
      <div className="text-center mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-600 dark:text-purple mb-2">
          Technical Arsenal
        </p>
        <h1 className="heading text-slate-900 dark:text-white">
          Tools & Frameworks I Use{" "}
          <span className="text-purple-600 dark:text-purple">Everyday</span>
        </h1>
        <p className="mt-3 text-slate-600 dark:text-[#BEC1DD] text-sm sm:text-base max-w-xl mx-auto">
          Modern, industry-tested tools optimized for high velocity, modular clean code, and rock-solid mobile performance.
        </p>
      </div>

      <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {toolIWorkWith.map((card) => (
          <SkillCard
            key={card.id}
            title={card.title}
            desc={card.desc}
            thumbnail={card.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default Approach;
