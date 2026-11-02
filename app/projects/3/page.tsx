import AboutProject from "@/components/ui/aboutProject";
import { featureMovieApp } from "@/data";
import React from "react";

const description =
  "CineScope is a sleek, modern mobile application designed to help cinema enthusiasts discover trending movies and explore comprehensive release details. Powered by the TMDB API, the app offers real-time movie rankings, detailed cast lists, synopses, and embedded trailer previews. The codebase is structured with Riverpod for reactive state management, AutoRoute for type-safe nested navigation, and Drift (SQLite) combined with Firebase for offline-first caching and cloud synchronizations.";

const timeline = "Designed, engineered, and completed as a standalone high-performance mobile project.";

const page = () => {
  return (
    <div>
      <AboutProject
        title="CineScope"
        subTitle="Smart Movie Recommendation & Discovery App"
        img1="/Figure 7.1.png"
        img2="/Figure 11.12.png"
        img3="/Figure 7.2.png"
        img4="/Figure 11.14.png"
        company="Personal Project"
        role="Solo Mobile Developer"
        expertise="Flutter, Riverpod, Drift & TMDB API"
        year="2025"
        description={description}
        timeline={timeline}
        features={featureMovieApp}
        apkUrl="https://drive.google.com/file/d/1lYpt5KktWiV8piVsBmdGFQD1nEnwj_bj/view?usp=drive_link"
      />
    </div>
  );
};

export default page;
