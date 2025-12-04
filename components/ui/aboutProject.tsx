import { FaLocationArrow } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import AppScreensSection from "./AppScreenSection";
import ProjectDescription from "./ProjectDescription";
import Footer from "./FooterProject";
import { FeatureProp } from "@/data";

type AboutProjectProps = {
  title: string;
  subTitle: string;
  img1: string;
  img2: string;
  img3: string;
  img4?: string;
  company: string;
  role: string;
  expertise: string;
  year: string;
  description: string;
  timeline: string;
  apple?: string,
  google?: string
  features: FeatureProp[]; 
};

const AboutProject = (
    { 
      title, 
      subTitle, 
      img1, 
      img2, 
      img3, 
      img4, 
      company,
      role, 
      expertise, 
      year,
      description,
      timeline,
      apple,
      google,
      features,
     } : AboutProjectProps) => {
    return (
      <div className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5 py-20 text-center">
        <p className="text-sm sm:text-base text-gray-400 uppercase tracking-widest mb-10">
          {title}
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-3xl mb-8">
          {subTitle}
        </h1>
        {company?.toLowerCase() == "personal" ?
          <div>
            <a
         href="https://drive.google.com/file/d/1lYpt5KktWiV8piVsBmdGFQD1nEnwj_bj/view?usp=drive_link" 
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
         <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth={2}
             d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
           />
         </svg>
         <span>Download APK</span>
       </a>
          </div>
        :
        <div className="flex gap-4">
        <a
          href={google}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300">
            <SiGoogleplay className="text-xl" />
              <span>Google Play</span>
            <FaLocationArrow className="text-sm opacity-80" />
          </button>
        </a>
        <a
          href={apple}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-all duration-300">
            <SiAppstore className="text-xl" />
              <span>App Store</span>
            <FaLocationArrow className="text-sm opacity-80" />
          </button>
        </a>
      </div>
      }
      
        <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-16 mt-10 text-center">
      <div>
       <h3 className="text-gray-400 text-sm tracking-wider mb-1">COMPANY</h3>
       <h1 className="text-white text-lg sm:text-xl font-semibold">
         {company}
       </h1>
      </div>

      <div>
        <h3 className="text-gray-400 text-sm tracking-wider mb-1">ROLE</h3>
        <h1 className="text-white text-lg sm:text-xl font-semibold">
          {role}
        </h1>
      </div>

      <div>
        <h3 className="text-gray-400 text-sm tracking-wider mb-1">EXPERTISE</h3>
        <h1 className="text-white text-lg sm:text-xl font-semibold">
         {expertise}
        </h1>
      </div>

      <div>
        <h3 className="text-gray-400 text-sm tracking-wider mb-1">YEAR</h3>
        <h1 className="text-white text-lg sm:text-xl font-semibold">{year}</h1>
        </div>
      </div>
      <AppScreensSection img1={img1} img2={img2} img3={img3} img4={img4}/>
      <ProjectDescription description={description} company={company} timeline={timeline} features={features}/>
    <Footer/>
    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-900/60 to-black-100 pointer-events-none"></div> */}
    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-900/40 to-black-100/40 pointer-events-none"></div> */}
    </div>
  );

  };
  
  export default AboutProject;
  