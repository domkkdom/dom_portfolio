import { FaLocationArrow } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import AppScreensSection from "./AppScreenSection";
import ProjectDescription from "./ProjectDescription";
import Footer from "./FooterProject";

const AboutProject = (
    { title, subTitle, img1, img2, img3 } : 
    {title: string, subTitle: string, img1: string, img2: string, img3: string}) => {
    return (
      <div className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5 py-20 text-center">
        <p className="text-sm sm:text-base text-gray-400 uppercase tracking-widest mb-3">
          {title}
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-3xl mb-8">
          {subTitle}
        </h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300">
            <SiGoogleplay className="text-xl" />
              <span>Google Play</span>
            <FaLocationArrow className="text-sm opacity-80" />
          </button>
          <button className="flex items-center gap-2 bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-all duration-300">
            <SiAppstore className="text-xl" />
              <span>App Store</span>
            <FaLocationArrow className="text-sm opacity-80" />
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-16 mt-10 text-center">
      <div>
       <h3 className="text-gray-400 text-sm tracking-wider mb-1">COMPANY</h3>
       <h1 className="text-white text-lg sm:text-xl font-semibold">
         Inventiva Technologies
       </h1>
      </div>

      <div>
        <h3 className="text-gray-400 text-sm tracking-wider mb-1">ROLE</h3>
        <h1 className="text-white text-lg sm:text-xl font-semibold">
          Mid Level Developer | Team of 4
        </h1>
      </div>

      <div>
        <h3 className="text-gray-400 text-sm tracking-wider mb-1">EXPERTISE</h3>
        <h1 className="text-white text-lg sm:text-xl font-semibold">
          Mobile App Development
        </h1>
      </div>

      <div>
        <h3 className="text-gray-400 text-sm tracking-wider mb-1">YEAR</h3>
        <h1 className="text-white text-lg sm:text-xl font-semibold">2025</h1>
        </div>
      </div>
    <AppScreensSection img1={img1} img2={img2} img3={img3}/>
    <ProjectDescription />
    <Footer/>
    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-900/60 to-black-100 pointer-events-none"></div> */}
    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-900/40 to-black-100/40 pointer-events-none"></div> */}
    </div>
  );

  };
  
  export default AboutProject;
  