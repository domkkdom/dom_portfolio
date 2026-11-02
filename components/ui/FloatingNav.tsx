"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import {
  FaUser,
  FaFolderOpen,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

interface NavItem {
  name: string;
  link: string;
  iconName?: string;
  icon?: React.ReactNode;
}

const getNavIcon = (name: string, iconName?: string) => {
  switch (iconName || name.toLowerCase()) {
    case "fauser":
    case "about":
      return <FaUser className="w-3.5 h-3.5" />;
    case "fafolderopen":
    case "projects":
      return <FaFolderOpen className="w-3.5 h-3.5" />;
    case "fabriefcase":
    case "experience":
      return <FaBriefcase className="w-3.5 h-3.5" />;
    case "facode":
    case "skills":
      return <FaCode className="w-3.5 h-3.5" />;
    case "faenvelope":
    case "contact":
      return <FaEnvelope className="w-3.5 h-3.5" />;
    default:
      return <FaHome className="w-3.5 h-3.5" />;
  }
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      const diff = current - lastScrollY;
      // Keep visible near the top of the page
      if (current < 60) {
        setVisible(true);
      } else if (diff > 10) {
        // Scrolling down: hide to avoid obstructing content
        setVisible(false);
      } else if (diff < -10) {
        // Scrolling up: reveal navbar
        setVisible(true);
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className={cn(
          "flex max-w-[94vw] sm:max-w-fit fixed top-4 sm:top-6 inset-x-0 mx-auto border rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[5000] px-3 sm:px-6 py-2 items-center justify-between sm:justify-center space-x-1 sm:space-x-4 border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-[#000319]/80 backdrop-blur-xl transition-colors",
          className
        )}
      >
        <div className="flex items-center space-x-1 sm:space-x-3">
          {navItems.map((navItem, idx) => {
            const icon = navItem.icon || getNavIcon(navItem.name, navItem.iconName);
            return (
              <a
                key={`nav-link-${idx}`}
                href={navItem.link}
                className="relative px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center gap-1.5"
              >
                <span className="text-purple-600 dark:text-purple">{icon}</span>
                <span className="inline text-xs sm:text-sm">{navItem.name}</span>
              </a>
            );
          })}
        </div>

        <div className="pl-1 sm:pl-2 border-l border-slate-200 dark:border-white/15">
          <ThemeToggle />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
