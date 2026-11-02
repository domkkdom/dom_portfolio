"use client";

import Link from "next/link";
import { FaLocationArrow, FaArrowLeft, FaDownload } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import AppScreensSection from "./AppScreenSection";
import ProjectDescription from "./ProjectDescription";
import Footer from "./FooterProject";
import { FeatureProp } from "@/data";
import ThemeToggle from "./ThemeToggle";

type AboutProjectProps = {
  title: string;
  subTitle: string;
  img1: string;
  img2: string;
  img3: string;
  img4?: string;
  company: string;
  role: string;
  expertise: string;
  year: string;
  description: string;
  timeline: string;
  apple?: string;
  google?: string;
  apkUrl?: string;
  features: FeatureProp[];
};

const AboutProject = ({
  title,
  subTitle,
  img1,
  img2,
  img3,
  img4,
  company,
  role,
  expertise,
  year,
  description,
  timeline,
  apple,
  google,
  apkUrl,
  features,
}: AboutProjectProps) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black-100 text-slate-900 dark:text-white flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-4 py-8 sm:py-16 text-center transition-colors">
      {/* Top Navigation Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-12 sm:mb-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-slate-900/80 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple hover:scale-105 transition-all shadow-sm backdrop-blur-md"
        >
          <FaArrowLeft className="w-3 h-3" />
          <span>Back to Projects</span>
        </Link>

        <ThemeToggle />
      </div>

      {/* Category Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple mb-5">
        <span className="text-xs font-semibold tracking-widest uppercase">
          {title}
        </span>
      </div>

      {/* Main Subtitle / Title */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight max-w-3xl mb-8">
        {subTitle}
      </h1>

      {/* Action Buttons: App Store / Google Play / APK */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {google && (
          <a href={google} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-sm">
              <SiGoogleplay className="text-lg" />
              <span>Google Play</span>
              <FaLocationArrow className="text-xs opacity-80" />
            </button>
          </a>
        )}

        {apple && (
          <a href={apple} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-sm border border-slate-700">
              <SiAppstore className="text-lg" />
              <span>App Store</span>
              <FaLocationArrow className="text-xs opacity-80" />
            </button>
          </a>
        )}

        {(apkUrl || company?.toLowerCase() === "personal") && (
          <a
            href={
              apkUrl ||
              "https://drive.google.com/file/d/1lYpt5KktWiV8piVsBmdGFQD1nEnwj_bj/view?usp=drive_link"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-sm"
          >
            <FaDownload className="text-sm" />
            <span>Download APK</span>
          </a>
        )}
      </div>

      {/* Project Meta Metrics Box */}
      <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black-200/60 shadow-sm backdrop-blur-md mb-8">
        <div>
          <h3 className="text-slate-500 dark:text-gray-400 text-xs font-semibold tracking-wider mb-1 uppercase">
            Company / Client
          </h3>
          <p className="text-slate-900 dark:text-white text-sm sm:text-base font-bold">
            {company}
          </p>
        </div>

        <div>
          <h3 className="text-slate-500 dark:text-gray-400 text-xs font-semibold tracking-wider mb-1 uppercase">
            Role
          </h3>
          <p className="text-slate-900 dark:text-white text-sm sm:text-base font-bold">
            {role}
          </p>
        </div>

        <div>
          <h3 className="text-slate-500 dark:text-gray-400 text-xs font-semibold tracking-wider mb-1 uppercase">
            Expertise
          </h3>
          <p className="text-slate-900 dark:text-white text-sm sm:text-base font-bold">
            {expertise}
          </p>
        </div>

        <div>
          <h3 className="text-slate-500 dark:text-gray-400 text-xs font-semibold tracking-wider mb-1 uppercase">
            Year
          </h3>
          <p className="text-slate-900 dark:text-white text-sm sm:text-base font-bold">
            {year}
          </p>
        </div>
      </div>

      {/* Screen Mockups Showcase */}
      <AppScreensSection img1={img1} img2={img2} img3={img3} img4={img4} />

      {/* Detailed Technical Description & Reviews */}
      <ProjectDescription
        description={description}
        company={company}
        timeline={timeline}
        features={features}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutProject;
