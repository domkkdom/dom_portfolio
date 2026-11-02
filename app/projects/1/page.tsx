import AboutProject from "@/components/ui/aboutProject";
import { featureFslApp } from "@/data";
import React from "react";

const description =
  "FSL Mobile is a production cross-platform mobile application designed to streamline securities trading, stock monitoring, and asset management for retail investors. As a core mobile engineer on the team at Inventiva Tech, I contributed significantly to the application's architecture and full lifecycle release on the Apple App Store and Google Play Store. Key responsibilities included implementing real-time push notifications via Firebase Cloud Messaging, engineering secure authentication and custom URL schemes, building interactive settings and profile screens, and establishing the Stacked clean state management pattern for maximum testability and maintainability.";

const timeline = "From architecture to live App Store and Google Play deployment.";

const page = () => {
  return (
    <div>
      <AboutProject
        title="FSL MOBILE"
        subTitle="Stocks Trading & Wealth Management App"
        img1="/fsldesign.png"
        img2="/fsldesign1.png"
        img3="/fsldesign2.png"
        company="Inventiva Tech"
        role="Mobile Application Developer"
        expertise="Flutter, Dart & Clean Architecture"
        year="2025 – Present"
        description={description}
        timeline={timeline}
        features={featureFslApp}
        apple="https://apps.apple.com/us/app/fsl-mobile/id6745034085"
        google="https://play.google.com/store/apps/details?id=com.fsl.mobile&hl=en-US&pli=1"
      />
    </div>
  );
};

export default page;
