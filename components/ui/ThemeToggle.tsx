"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-slate-200/50 dark:bg-slate-800/50 animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-yellow-300 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm backdrop-blur-md cursor-pointer ${className}`}
    >
      {isDark ? (
        <FaSun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <FaMoon className="w-4 h-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
