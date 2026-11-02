import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "@/data";

const FooterProject = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Jesusblessing Dominion
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm">
            Flutter & Mobile Application Developer • 5 Years Engineering Experience
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 justify-center md:justify-end">
          <a
            href="https://www.linkedin.com/in/dominion-jesusblessing-2026a7251/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-black-200 text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple hover:scale-105 transition-all shadow-sm"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </a>

          <a
            href="https://github.com/domkkdom"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-black-200 text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple hover:scale-105 transition-all shadow-sm"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-black-200 text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple hover:scale-105 transition-all shadow-sm"
            aria-label="Email"
          >
            <FaEnvelope className="w-4 h-4 text-purple-600 dark:text-purple" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-slate-500 dark:text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Jesusblessing Dominion. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterProject;
