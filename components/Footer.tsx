import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaEnvelope, FaPhoneAlt, FaFilePdf, FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-20 pb-10 relative scroll-mt-28 sm:scroll-mt-32" id="contact">
      {/* Background Grid Image */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="footer grid"
          className="w-full h-full opacity-30 dark:opacity-50"
        />
      </div>

      <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple mb-4">
          <span className="uppercase tracking-widest text-[11px] font-semibold">
            Let&apos;s Build Something Great
          </span>
        </div>

        <h1 className="heading text-slate-900 dark:text-white max-w-2xl">
          Ready to elevate your <span className="text-purple-600 dark:text-purple">mobile product</span> to the next level?
        </h1>

        <p className="text-slate-600 dark:text-white-200 mt-4 mb-8 max-w-xl text-sm sm:text-base leading-relaxed">
          Whether you need a senior Flutter developer to architect a new fintech application, optimize an existing codebase, or ship to the App Store and Google Play, let&apos;s talk.
        </p>

        {/* Quick Contact Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-black-200/80 text-xs sm:text-sm font-medium text-slate-800 dark:text-white hover:border-purple-500 transition-all shadow-sm"
          >
            <FaEnvelope className="text-purple-600 dark:text-purple" />
            <span>{personalInfo.email}</span>
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-black-200/80 text-xs sm:text-sm font-medium text-slate-800 dark:text-white hover:border-purple-500 transition-all shadow-sm"
          >
            <FaPhoneAlt className="text-emerald-500" />
            <span>{personalInfo.phone}</span>
          </a>

          <a
            href={personalInfo.cvPath}
            download="Jesusblessing_Dominion_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-black-200/80 text-xs sm:text-sm font-medium text-slate-800 dark:text-white hover:border-purple-500 transition-all shadow-sm"
          >
            <FaFilePdf className="text-red-500" />
            <span>Download CV</span>
          </a>
        </div>

        <a
          href="https://www.linkedin.com/in/dominion-jesusblessing-2026a7251/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Connect on LinkedIn"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 border-t border-slate-200 dark:border-white/10 pt-8 relative z-10">
        <p className="text-xs sm:text-sm font-normal text-slate-600 dark:text-gray-400">
          Copyright © {currentYear} Jesusblessing Dominion. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/domkkdom"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl flex justify-center items-center border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-black-200/80 text-slate-700 dark:text-white hover:text-purple-600 dark:hover:text-purple hover:scale-105 transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/dominion-jesusblessing-2026a7251/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl flex justify-center items-center border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-black-200/80 text-slate-700 dark:text-white hover:text-purple-600 dark:hover:text-purple hover:scale-105 transition-all shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="w-10 h-10 rounded-xl flex justify-center items-center border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-black-200/80 text-slate-700 dark:text-white hover:text-purple-600 dark:hover:text-purple hover:scale-105 transition-all shadow-sm"
            aria-label="Send Email"
          >
            <FaEnvelope className="w-4 h-4 text-purple-600 dark:text-purple" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
