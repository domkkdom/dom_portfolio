"use client";

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

const RecentProjects = () => {
  return (
    <section className="py-20 scroll-mt-28 sm:scroll-mt-32" id="projects">
      <div className="text-center mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-600 dark:text-purple mb-2">
          Featured Work
        </p>
        <h1 className="heading text-slate-900 dark:text-white">
          A small selection of{" "}
          <span className="text-purple-600 dark:text-purple">recent projects</span>
        </h1>
        <p className="mt-3 text-slate-600 dark:text-[#BEC1DD] text-sm sm:text-base max-w-xl mx-auto">
          Production mobile applications architected for high performance, Clean Architecture, and active store releases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 sm:gap-y-24 gap-x-12 max-w-5xl mx-auto px-4">
        {projects.map(({ id, title, des, img, iconLists, link, liveLinks, tag }) => (
          <div
            key={id}
            className="flex items-center justify-center min-h-[32rem] sm:min-h-[34rem] w-full"
          >
            <PinContainer title={title} href={link}>
              <div className="w-[85vw] max-w-[21rem] sm:max-w-[24rem] md:max-w-[25rem] flex flex-col justify-between">
                {/* Top Badge & Store Pills */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-purple-500/10 dark:bg-purple/15 text-purple-700 dark:text-purple border border-purple-500/20">
                    {tag || "Mobile Project"}
                  </span>

                  {liveLinks && (
                    <div className="flex items-center gap-2">
                      {liveLinks.google && (
                        <a
                          href={liveLinks.google}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-white transition-colors"
                          title="View on Google Play"
                          aria-label="View on Google Play"
                        >
                          <SiGoogleplay className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {liveLinks.apple && (
                        <a
                          href={liveLinks.apple}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-white transition-colors"
                          title="View on Apple App Store"
                          aria-label="View on Apple App Store"
                        >
                          <SiAppstore className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Project Image Preview */}
                <div className="relative flex items-center justify-center w-full overflow-hidden rounded-xl h-48 sm:h-56 bg-slate-100 dark:bg-[#0c102b] border border-slate-200 dark:border-white/10 mb-4 group/image">
                  <img
                    src="/bg.png"
                    alt="background pattern"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30"
                  />
                  <img
                    src={img}
                    alt={title}
                    className="relative z-10 w-full h-full object-contain p-2 transition-transform duration-500 group-hover/image:scale-105"
                  />
                </div>

                {/* Title & Description */}
                <h2 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white line-clamp-1 mb-2">
                  {title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#BEC1DD] font-normal line-clamp-2 min-h-[2.5rem]">
                  {des}
                </p>

                {/* Tech Icons & Action */}
                <div className="flex items-center justify-between mt-5 pt-3 border-t border-slate-200 dark:border-white/10">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={`${icon}-${index}`}
                        className="border border-slate-300 dark:border-white/20 rounded-full bg-slate-100 dark:bg-black w-8 h-8 flex justify-center items-center shadow-sm"
                        style={{ transform: `translateX(-${ index * 6}px)` }}
                      >
                        <img src={icon} alt="tech icon" className="p-1.5 w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>

                  <a
                    href={link}
                    className="flex items-center text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple hover:underline"
                  >
                    <span>Case Study</span>
                    <FaLocationArrow className="ms-2 w-3 h-3" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
