export const navItems = [
  { name: "About", link: "#about", iconName: "FaUser" },
  { name: "Projects", link: "#projects", iconName: "FaFolderOpen" },
  { name: "Experience", link: "#experience", iconName: "FaBriefcase" },
  { name: "Skills", link: "#skills", iconName: "FaCode" },
  { name: "Contact", link: "#contact", iconName: "FaEnvelope" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, Clean Architecture & seamless communication",
    description: "Production Fintech Delivery",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with global remote overlap (Nigeria WAT / UTC+1, US & EU time zones)",
    description: "Time Zone Flexibility",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My core tech stack",
    description: "Clean Architecture & Scalable State",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "5 years of engineering experience shipping production fintech apps.",
    description: "Cross-Platform Engineering",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Architecting high-performance mobile workflows with 60fps UX",
    description: "Active Development Focus",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to build or ship a high-performance app together?",
    description: "Let's Connect",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export type FeatureProp = {
  icon: string;
  title: string;
  description: string;
};

export const technicalReview: FeatureProp[] = [
  {
    icon: "⚡",
    title: "State Management",
    description:
      "Implemented Riverpod for clean and scalable state management, allowing reactive UI updates and maintainable code.",
  },
  {
    icon: "🎬",
    title: "Movie Data API",
    description:
      "Integrated TMDB (The Movie Database) API to fetch trending movies, detailed information, and trailers in real time.",
  },
  {
    icon: "🧭",
    title: "Navigation",
    description:
      "Used AutoRoute for seamless and structured navigation between screens, enabling nested routes and type-safe route arguments.",
  },
  {
    icon: "💾",
    title: "Persistence",
    description:
      "Implemented Firebase for cloud persistence and Drift for local database storage, ensuring user favorites and offline data are reliably saved.",
  },
  {
    icon: "🚀",
    title: "Performance & Reliability",
    description:
      "Optimized data fetching and caching to reduce API calls and improve app responsiveness to steady 60fps.",
  },
];

export const featureGTI: FeatureProp[] = [
  {
    icon: "📝",
    title: "KYC Verification Engine",
    description:
      "Implemented a comprehensive multi-step KYC workflow for document submission, identity verification, and real-time status feedback for asset management clients.",
  },
  {
    icon: "⏫",
    title: "Forced Version Update",
    description:
      "Designed a real-time version-check system against the API to enforce mandatory updates during critical security fixes and breaking changes.",
  },
  {
    icon: "💼",
    title: "Portfolio & Fund Transactions",
    description:
      "Built intuitive interfaces for tracking investment yields, fund deposits, withdrawals, and historical transaction statements.",
  },
  {
    icon: "🧭",
    title: "Clean Architecture & Stacked State",
    description:
      "Architected modular, testable codebases using get_it dependency injection and the Stacked architecture pattern for predictable app behavior.",
  },
];

export const featureFslApp: FeatureProp[] = [
  {
    icon: "📈",
    title: "Live Securities & Stock Trading",
    description:
      "Built real-time market data displays, price movement tracking, and fast trade execution flows for retail investors.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    description:
      "Delivered instant alerts for trade confirmations, market movements, and account actions via Firebase Cloud Messaging.",
  },
  {
    icon: "🔒",
    title: "Secure Authentication & Sessions",
    description:
      "Engineered biometric login, secure token storage, deep linking with custom URL schemes, and automated session timeouts.",
  },
  {
    icon: "🧭",
    title: "Clean Architecture & Modular Code",
    description:
      "Maintained a clean separation of concerns with Stacked state management, reusable widgets, and robust RESTful API integration.",
  },
];

export const featureGreenWish: FeatureProp[] = [
  {
    icon: "🌱",
    title: "Sustainable Asset Allocation",
    description:
      "Interactive asset allocation dials and portfolio rebalancing visualizers designed for ESG and wealth growth.",
  },
  {
    icon: "📊",
    title: "Real-Time Yield Forecasting",
    description:
      "Dynamic visual charts illustrating compound returns and investment projections across diverse asset tiers.",
  },
  {
    icon: "🔐",
    title: "Bank-Grade Security",
    description:
      "Encrypted local storage, PIN/biometrics authentication, and end-to-end TLS communication.",
  },
];

export const featureMovieApp: FeatureProp[] = [
  {
    icon: "🔥",
    title: "Trending Movies",
    description:
      "Discover the most popular and currently trending movies updated in real-time from TMDB.",
  },
  {
    icon: "ℹ️",
    title: "Detailed Movie Information",
    description:
      "Explore synopses, cast details, release dates, genres, and ratings for every movie.",
  },
  {
    icon: "🎥",
    title: "Watch Trailers",
    description:
      "View official trailers directly within the app for quick and immersive previews.",
  },
  {
    icon: "✨",
    title: "Personalized Suggestions",
    description:
      "Receive smart movie recommendations based on user genre preferences and viewing trends.",
  },
  {
    icon: "💾",
    title: "Offline Favorites with Drift",
    description:
      "Save movies locally using Drift SQL persistence and sync seamlessly to Firebase.",
  },
];

export const projects = [
  {
    id: 1,
    title: "FSL Capital (FSL Mobile)",
    des: "Production Stocks Trading & Asset Management App deployed on Apple App Store & Google Play.",
    img: "/fsl_correct1.svg",
    iconLists: [
      "/flutter_icon.svg",
      "/dart_icon.svg",
      "/logo.png",
      "/figma_icon.svg",
      "/firebase_icon.svg",
    ],
    link: "/projects/1",
    liveLinks: {
      apple: "https://apps.apple.com/us/app/fsl-mobile/id6745034085",
      google: "https://play.google.com/store/apps/details?id=com.fsl.mobile&hl=en-US&pli=1",
    },
    tag: "Fintech • Live on Stores",
  },
  {
    id: 4,
    title: "AssetPro by GTI Asset Management",
    des: "Production wealth management app with KYC verification, live portfolio analysis, and fund transactions.",
    img: "/gtigti.png",
    iconLists: [
      "/flutter_icon.svg",
      "/dart_icon.svg",
      "/logo.png",
      "/figma_icon.svg",
      "/firebase_icon.svg",
    ],
    link: "/projects/4",
    liveLinks: {
      apple: "https://apps.apple.com/us/app/assetpro-by-gti/id6754518762",
      google: "https://play.google.com/store/apps/details?id=com.gtiassetmanagement.gti.am",
    },
    tag: "Fintech • Live on Stores",
  },
  {
    id: 3,
    title: "CineScope (Movie Discovery)",
    des: "Feature-rich movie discovery app powered by TMDB API, Riverpod, Drift local database, and Firebase.",
    img: "/Figure 11.14.png",
    iconLists: [
      "/flutter_icon.svg",
      "/riverpod_logo.png",
      "/dart_icon.svg",
      "/firebase_icon.svg",
      "/figma_icon.svg",
    ],
    link: "/projects/3",
    tag: "Entertainment • Mobile",
  },
  {
    id: 2,
    title: "GreenWish Asset Management",
    des: "Next-generation sustainable asset management mobile experience with dynamic portfolio allocation.",
    img: "/GreenWish-4234.png",
    iconLists: [
      "/flutter_icon.svg",
      "/dart_icon.svg",
      "/logo.png",
      "/figma_icon.svg",
      "/firebase_icon.svg",
    ],
    link: "/projects/2",
    tag: "Fintech • Active Build",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Mobile Application Developer — Inventiva Tech",
    company: "Inventiva Tech",
    period: "March 2025 – Present",
    desc: "Spearheaded the full lifecycle of deployed production fintech applications (FSL Capital & AssetPro by GTI) through live release on Apple App Store & Google Play Store. Architected modular codebases with Clean Architecture, get_it DI, and state management (Riverpod, BLoC, Stacked).",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    badge: "Production Mobile",
  },
  {
    id: 2,
    title: "Frontend Developer (React) — Freelance",
    company: "Freelance",
    period: "2021 – 2024",
    desc: "Partnered directly with startup founders and small businesses on multiple confidential web projects under NDA. Built responsive interfaces, reusable component systems, and RESTful API integrations in React with rigorous milestone delivery.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    badge: "Web & React",
  },
  {
    id: 3,
    title: "Cross-Platform Mobile Engineer",
    company: "5 Years Software Engineering",
    period: "2020 – Present",
    desc: "Specialized in delivering polished 60fps iOS and Android applications in Flutter & Dart. Engineered biometric authentication, deep linking with custom URL schemes, and automated Firebase push messaging.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    badge: "Cross-Platform",
  },
  {
    id: 4,
    title: "Clean Architecture & Performance Lead",
    company: "Enterprise Engineering",
    period: "Continuous",
    desc: "Engineered scalable state patterns, offline-first persistence (Drift/SQLite), dependency injection, and automated store builds, ensuring maximum code reusability, testability, and stability.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    badge: "Architecture",
  },
];

export const toolIWorkWith = [
  {
    id: 1,
    title: "Flutter",
    desc: "Cross-platform framework for iOS & Android",
    className: "md:col-span-3",
    thumbnail: "/flutter_icon.svg",
  },
  {
    id: 2,
    title: "Dart",
    desc: "Object-oriented, strongly-typed language",
    className: "md:col-span-3",
    thumbnail: "/dart_icon.svg",
  },
  {
    id: 3,
    title: "Riverpod & BLoC",
    desc: "Reactive & scalable state management",
    className: "md:col-span-3",
    thumbnail: "/riverpod_logo.png",
  },
  {
    id: 4,
    title: "Stacked Architecture",
    desc: "Clean architecture pattern for enterprise apps",
    className: "md:col-span-3",
    thumbnail: "/logo.png",
  },
  {
    id: 5,
    title: "Firebase",
    desc: "Push notifications, auth, analytics & cloud sync",
    className: "md:col-span-3",
    thumbnail: "/firebase_icon.svg",
  },
  {
    id: 6,
    title: "Git & GitHub",
    desc: "Version control, branching & CI/CD workflows",
    className: "md:col-span-3",
    thumbnail: "/icons8-github.svg",
  },
  {
    id: 7,
    title: "Figma",
    desc: "UI/UX design translation & interactive prototypes",
    className: "md:col-span-3",
    thumbnail: "/figma_icon.svg",
  },
  {
    id: 8,
    title: "REST APIs & JSON",
    desc: "Secure HTTP sessions, interceptors & WebSockets",
    className: "md:col-span-3",
    thumbnail: "/cloud.svg",
  },
  {
    id: 9,
    title: "VS Code",
    desc: "Optimized development environment",
    className: "md:col-span-3",
    thumbnail: "/icons8-vs-code.svg",
  },
  {
    id: 10,
    title: "Slack & Remote Tools",
    desc: "Seamless async communication across teams",
    className: "md:col-span-3",
    thumbnail: "/icons8-slack-24.png",
  },
];

export const testimonials = [
  {
    quote:
      "Dominion's attention to detail in Flutter is extraordinary. He spearheaded the core mobile architecture for our fintech applications, ensuring every securities trading flow and KYC screen was rock-solid and 60fps smooth.",
    name: "Oluwaseun A.",
    title: "Lead Architect & Engineering Manager, Inventiva Tech",
  },
  {
    quote:
      "Working with Dominion on our production mobile delivery was a seamless experience. His deep mastery of Clean Architecture, Riverpod, Stacked, and App Store guidelines brought our fintech product live on schedule.",
    name: "Adeyemi B.",
    title: "Fintech Product Lead & Founder",
  },
  {
    quote:
      "Dominion is one of the rare mobile engineers who balances high-level architecture with pixel-perfect UI execution. His proactive communication and async delivery across timezones made remote collaboration effortless.",
    name: "Chinedu M.",
    title: "Senior Software Engineer",
  },
  {
    quote:
      "Dominion delivered our cross-platform frontend features with exceptional speed, clean testable code, and high polish. His dedication to engineering excellence truly stands out.",
    name: "Farouk K.",
    title: "Startup Founder",
  },
];

export const companies = [
  {
    id: 1,
    name: "Flutter",
    img: "/flutter_icon.svg",
    nameImg: "/flutter_icon.svg",
  },
  {
    id: 2,
    name: "Dart",
    img: "/dart_icon.svg",
    nameImg: "/dart_icon.svg",
  },
  {
    id: 3,
    name: "Firebase",
    img: "/firebase_icon.svg",
    nameImg: "/firebase_icon.svg",
  },
  {
    id: 4,
    name: "Riverpod",
    img: "/riverpod_logo.png",
    nameImg: "/riverpod_logo.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    title: "GitHub",
    img: "/git.svg",
    link: "https://github.com/domkkdom",
  },
  {
    id: 2,
    title: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/dominion-jesusblessing-2026a7251/",
  },
];

export const personalInfo = {
  name: "Jesusblessing Dominion",
  role: "Flutter & Mobile Application Developer",
  experienceYears: 5,
  phone: "+234 906 863 2296",
  email: "dominionjesusblessing15@gmail.com",
  location: "Nigeria (WAT, UTC+1)",
  portfolioUrl: "https://dom-portfolio-gold.vercel.app",
  cvPath: "/Jesusblessing_Dominion_CV.pdf",
};
