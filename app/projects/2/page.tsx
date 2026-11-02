import AboutProject from "@/components/ui/aboutProject";
import { featureGreenWish } from "@/data";
import React from "react";

const description =
  "GreenWish Asset Management is a next-generation mobile wealth platform engineered to empower retail and institutional investors with sustainable asset allocations. The application delivers real-time portfolio tracking, multi-asset yield projections, interactive financial planning tools, and bank-grade security protocols. Built with Flutter and Clean Architecture, the project emphasizes 60fps animations, intuitive data visualizations, and robust offline-first caching.";

const timeline = "In Active Development • Release Scheduled for Q2 2026";

const page = () => {
  return (
    <div>
      <AboutProject
        title="GreenWish Asset Management"
        subTitle="Sustainable Wealth & Portfolio Growth Platform"
        img1="/GreenWish-4234.png"
        img2=""
        img3=""
        company="Fintech Innovation"
        role="Lead Mobile Architect"
        expertise="Flutter, Clean Architecture & UI/UX"
        year="2025 – 2026"
        description={description}
        timeline={timeline}
        features={featureGreenWish}
      />
    </div>
  );
};

export default page;
