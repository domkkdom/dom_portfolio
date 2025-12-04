export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    { name: "Experience", link: "#Experience"}
  ];
 
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]  px-4 py-4",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2   px-4 py-4",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2  px-4 py-4",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1   px-4 py-4",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Movie Suggestion App",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2   px-4 py-4",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center ",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1  px-4 py-4",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  // export const gridItems = [
  //   {
  //     id: 1,
  //     title: "I prioritize client collaboration, fostering open communication ",
  //     description: "",
  //     className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
  //     imgClassName: "w-full h-full",
  //     titleClassName: "justify-end",
  //     img: "/b1.svg",
  //     spareImg: "",
  //   },
  //   {
  //     id: 2,
  //     title: "I'm very flexible with time zone communications",
  //     description: "",
  //     className: "lg:col-span-1 md:col-span-3 md:row-span-1",
  //     imgClassName: "",
  //     titleClassName: "justify-start",
  //     img: "",
  //     spareImg: "",
  //   },
  //   {
  //     id: 3,
  //     title: "My tech stack",
  //     description: "I constantly try to improve",
  //     className: "lg:col-span-1 md:col-span-3 md:row-span-1",
  //     imgClassName: "",
  //     titleClassName: "justify-center",
  //     img: "",
  //     spareImg: "",
  //   },
  //   {
  //     id: 4,
  //     title: "Tech enthusiast with a passion for development.",
  //     description: "",
  //     className: "lg:col-span-2 md:col-span-3 md:row-span-1 h-40 md:h-20 lg:h-20",
  //     imgClassName: "",
  //     titleClassName: "justify-start",
  //     img: "/grid.svg",
  //     spareImg: "/b4.svg",
  //   },
  
  //   {
  //     id: 5,
  //     title: "Currently building a JS Animation library",
  //     description: "The Inside Scoop",
  //     className: "md:col-span-3 md:row-span-2",
  //     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //     titleClassName: "justify-center md:justify-start lg:justify-center",
  //     img: "/b5.svg",
  //     spareImg: "/grid.svg",
  //   },
  //   {
  //     id: 6,
  //     title: "Do you want to start a project together?",
  //     description: "",
  //     className: "lg:col-span-2 md:col-span-3 md:row-span-1 h-40 md:h-20 lg:h-20",
  //     imgClassName: "",
  //     titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  //     img: "",
  //     spareImg: "",
  //   },
  // ];

  
  export type FeatureProp = {
      icon: string;
      title: string;
      description: string;
    };
    
  export const technicalReview: FeatureProp[] = [
    {
      icon: "•",
      title: "State Management",
      description:
        "Implemented Riverpod for clean and scalable state management, allowing reactive UI updates and maintainable code."
    },
    {
      icon: "•",
      title: "Movie Data API",
      description:
        "Integrated TMDB (The Movie Database) API to fetch trending movies, detailed information, and trailers in real time."
    },
    {
      icon: "•",
      title: "Navigation",
      description:
        "Used AutoRoute for seamless and structured navigation between screens, enabling nested routes and type-safe route arguments."
    },
    {
      icon: "•",
      title: "Persistence",
      description:
        "Implemented Firebase for cloud persistence and Drift for local database storage, ensuring user favorites and offline data are reliably saved."
    },
    {
      icon: "•",
      title: "Performance & Reliability",
      description:
        "Optimized data fetching and caching to reduce API calls and improve app responsiveness."
    }
  ];
  


  export const  featureGTI :  FeatureProp[] = [
    {
      icon: "📝",
      title: "KYC",
      description: 
        "Implemented a comprehensive KYC workflow, including multiple interactive pages for document submission, verification status, and user guidance. Designed the user experience to ensure smooth submission of identity documents, integrated real-time validations, and provided clear feedback on verification progress. This functionality enhanced security and compliance while maintaining a seamless experience for users managing their asset accounts."
    },
    {
      icon: "⏫",
      title: "Forced Update",
      description:
        "Implemented a version-check system that compares the app's current version with the latest version from the API. Designed logic to enforce mandatory updates when critical changes are detected, ensuring users always have the latest features and security fixes. This feature maintains app integrity and prevents compatibility issues, while providing a smooth and informative experience for users when an update is required."
    },    
    {
      icon: "📜",
      title: "Building Screens",
      description:
        "Designed and implemented multiple interactive and user-friendly screens for the application, including FAQs, Settings, and Profile pages. Focused on creating a cohesive, responsive, and visually appealing UI while following best practices for mobile app development, ensuring a seamless user experience across different devices and screen sizes."
    },
    {
      icon: "🔔",
      title: "Version System",
      description:
        "Developed a comprehensive version-check system allowing users to view the current app version and build. Integrated logic to prompt updates when necessary, ensuring users always have access to the latest features and security enhancements, thereby maintaining app reliability and user trust."
    },
    {
      icon: "🧭",
      title: "Smooth Navigation & State Management",
      description:
        "Implemented clean and maintainable navigation and state management using the Stacked pattern. This enabled predictable app behavior, easier debugging, and scalable architecture, resulting in a smooth, intuitive, and responsive user experience throughout the application."
    }
    
  ];
  





export const  featureFslApp :  FeatureProp[] = [
  {
      icon: "🔔",
      title: "Push Notifications",
      description:
        "Delivered alerts for price movements and trade executions using Firebase Cloud Messaging.",
  },
  {
    icon: "📜",
    title: "Building Screens",
    description:
      "  Designed and implemented multiple interactive screens for the application, including FAQS, Settings and profile pages. Ensured a cohesive and responsive UI using best practices for mobile app development.",
  },
  {
    icon: "🔔",
    title: "Version System",
    description:
    "User can check the version and build of the app.",
  },
  {
    icon: "🧭",
    title: "Smooth Navigation & State Management",
    description:
      "Achieved clean, maintainable architecture with the Stacked pattern.",
  },
];

export const featureMovieApp :  FeatureProp[]  = [
  {
    icon: "•",
    title: "Trending Movies",
    description:
      "Discover the most popular and currently trending movies updated in real-time."
  },
  {
    icon: "•",
    title: "Detailed Movie Information",
    description:
      "Explore synopses, cast details, release dates, genres, and ratings for every movie."
  },
  {
    icon: "•",
    title: "Watch Trailers",
    description:
      "View official trailers directly within the app for quick and easy previews."
  },
  {
    icon: "•",
    title: "Personalized Suggestions",
    description:
      "Receive smart movie recommendations based on trends and your viewing interests."
  },
  {
    icon: "•",
    title: "Search & Filter",
    description:
      "Find movies quickly using powerful search tools and category-based filters."
  },
  {
    icon: "•",
    title: "Favorites List",
    description:
      "Save movies you love or want to watch later by adding them to your personal favorites."
  }
];



export const projects = [
    {
      id: 1,
      title: "FSL MOBILE",
      des: "Stocks Trading and Asset Management App",
      img: "/fsl_correct1.svg",
      iconLists: ["/flutter_icon.svg", "/logo.png", "/dart_icon.svg", "/figma_icon.svg", "firebase_icon.svg"],
      link:  `/projects/${1}`,
    },
    {
      id: 2,
      title: "Work in Progress",
      des: "Will  be Available soon",
      img: "/GreenWish-4234.png",
      iconLists: ["/flutter_icon.svg", "/logo.png", "/dart_icon.svg", "/figma_icon.svg", "firebase_icon.svg"],
      link: '#',
    },
    {
      id: 3,
      title: "Movie Suggestion App",
      des: "For Movie Recommendations",
      // img: "/Gemini_Generated_Image_d7gtz9d7gtz9d7gt-removebg-preview.png",
      img: "/Figure 11.14.png",
      iconLists: ["/flutter_icon.svg", "/riverpod_logo.png", "/dart_icon.svg", "/figma_icon.svg", "firebase_icon.svg"],
      link:  `/projects/${3}`,
    },
    {
      id: 4,
      title: "GTI AssetManagement",
      des: "Asset Management App",
      img: "/gtigti.png",
      iconLists: ["/flutter_icon.svg", "/logo.png", "/dart_icon.svg", "/figma_icon.svg", "firebase_icon.svg"],
      link: `/projects/${4}`,
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - Iventiva Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using Flutter.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Contributed as one of four developers in building the mobile app from its initial concept through full development and deployment.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Mid Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies Like Orcale Apex.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];

    
  export const toolIWorkWith = [
    {
      id: 1,
      title: "Flutter",
      desc: "FrameWork.",
      className: "md:col-span-3 ",
      thumbnail: "/flutter_icon.svg",
    },
    {
      id: 2,
      title: "VSCode",
      desc: "Integrated Development Enviroment",
      className: "md:col-span-3", // change to md:col-span-2
      thumbnail: "/icons8-vs-code.svg",
    },
    {
      id: 3,
      title: "GitHub",
      desc: "Version Control System",
      className: "md:col-span-3", // change to md:col-span-2
      thumbnail: "/icons8-github.svg",
    },
    {
      id: 4,
      title: "Figma",
      desc: "UX/UI Design & Prototyping",
      className: "md:col-span-3",
      thumbnail: "/figma_icon.svg",
    },
    {
      id: 5,
      title: "Firebase",
      desc: "FrameWork",
      className: "md:col-span-3",
      thumbnail:  "firebase_icon.svg",
    },
    {
      id: 6,
      title: "Slack",
      desc: "Communication",
      className: "md:col-span-3",
      thumbnail: "/icons8-slack-24.png",
    },
    {
      id: 7,
      title: "RiverPod",
      desc: "Flutter FrameWork",
      className: "md:col-span-3",
      thumbnail: "/riverpod_logo.png",
    },
    {
      id: 8,
      title: "Stacked",
      desc: "Flutter FrameWork",
      className: "md:col-span-3",
      thumbnail: "/logo.png",
    },
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/domkkdom"
    },
    // {
    //   id: 2,
    //   img: "/twit.svg",
    //   link: "https://x.com/d_jesusblessing"
    // },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/dominion-jesusblessing-2026a7251/"
    },
  ];