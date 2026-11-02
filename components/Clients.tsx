import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section className="py-20 scroll-mt-28 sm:scroll-mt-32" id="testimonials">
      <div className="text-center mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-600 dark:text-purple mb-2">
          Endorsements
        </p>
        <h1 className="heading text-slate-900 dark:text-white">
          Kind words from{" "}
          <span className="text-purple-600 dark:text-purple">collaborators & leads</span>
        </h1>
        <p className="mt-3 text-slate-600 dark:text-[#BEC1DD] text-sm sm:text-base max-w-xl mx-auto">
          Feedback from engineering leads, founders, and colleagues I&apos;ve collaborated with on production mobile applications.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="h-[40vh] md:h-[22rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
