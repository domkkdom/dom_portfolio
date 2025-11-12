export default function ProjectDescription() {
    const feature = [
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
  
    return (
      <section className="max-w-5xl mx-auto px-5 sm:px-10 py-16 text-white">
        {/* Beautiful H1 */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
          Project Description
        </h1>
  
        {/* Project Description */}
        <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
          FSL Mobile is a robust and user-friendly mobile application designed to
          simplify both stock trading and asset management for retail investors.
          As the mid-level developer in a 3-person team, I was responsible for
          managing code structure using <span className="font-semibold">Stacked</span>,
          ensuring smooth integration between frontend and backend services.
        </p>
  
        {/* Key Features */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Key Features I Helped Deliver:
        </h2>
        <ul className="mb-8 space-y-4  leading-relaxed">
            {feature.map((feature, index) => (
              <li key={index} className="flex items-start">
                {/* Emoji / Icon */}
                <span className="text-lg mr-2">{feature.icon}</span>
                {/* Text */}
                <div>
                  <span className="font-bold  text-lg ">{feature.title}</span>
                  <span className=" text-md"> — {feature.description}</span>
                </div>
              </li>
            ))}
       </ul>
  
        {/* Platforms */}
        <p className="text-gray-300 text-lg mb-6">
          Built for <span className="font-semibold">Android</span> and later <span className="font-semibold">iOS</span>, optimized for performance, security, and user engagement.
        </p>
  
        {/* Timeline */}
        <p className="text-gray-500 text-sm italic">
          Timeline: From idea to final release in 5+ months while working with multiple projects simultaneously.
        </p>
      </section>
    );
  }
  