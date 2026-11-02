import AboutProject from "@/components/ui/aboutProject";
import { featureGTI } from "@/data";
import React from "react";

const description =
  "AssetPro by GTI is an enterprise wealth management and mutual fund investment mobile application deployed live on the Apple App Store and Google Play Store. At Inventiva Tech, I led the implementation of critical core workflows, including a comprehensive multi-step KYC verification system with real-time document validation, fund deposits and withdrawals, live market analytics, and portfolio performance tracking. I also architected a robust forced-update engine that ensures client applications stay aligned with backend API security protocols and schema changes.";

const timeline = "From system architecture through production store releases.";

const page = () => {
  return (
    <div>
      <AboutProject
        title="AssetPro by GTI Asset Management"
        subTitle="Enterprise Wealth Management & Investment Platform"
        img1="/Gti_prospect.png"
        img2="/Gti_dashboard.png"
        img3="/gti_101.png"
        company="Inventiva Tech"
        role="Mobile Application Developer"
        expertise="Flutter, Clean Architecture & KYC Workflows"
        year="2025 – Present"
        description={description}
        timeline={timeline}
        features={featureGTI}
        google="https://play.google.com/store/apps/details?id=com.gtiassetmanagement.gti.am"
        apple="https://apps.apple.com/us/app/assetpro-by-gti/id6754518762"
      />
    </div>
  );
};

export default page;
