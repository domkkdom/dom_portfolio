import React from "react";

export default function SkillCard({
  title,
  desc,
  thumbnail,
}: {
  title: string;
  desc: string;
  thumbnail: string;
}) {
  return (
    <div className="relative group rounded-2xl bg-white dark:bg-[#0f1425] p-5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-purple/30 transition-all duration-300 flex items-center gap-4">
      <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/20 shadow-sm">
        <img
          src={thumbnail}
          className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
          alt={`${title} icon`}
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 mt-0.5 line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
}
