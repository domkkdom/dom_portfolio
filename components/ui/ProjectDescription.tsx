import { featureFslApp, featureMovieApp, FeatureProp, technicalReview } from "@/data";
import TechnicalReview from "./TechnicalReview";
import KeyFeature from "./KeyFeature";
import ProjectDescriptions from "./Project_Description";

type ProjectDescriptionProps = {
  description: string, 
  company : string, 
  timeline: string, 
  features: FeatureProp[] 
}

export default function ProjectDescription( {
  description,
  company, 
  timeline,
  features
  }: ProjectDescriptionProps) {

    return (
      <section className="max-w-5xl mx-auto px-5 sm:px-10 py-16 text-white">
       <div>
        <ProjectDescriptions description={description}/>
       </div>

        {company?.toLowerCase() == "personal" ? 
        <div>
          <KeyFeature keyFeature={features}/>
          <TechnicalReview technicalReview={technicalReview} />
        </div>
        : 
        <div>
          <TechnicalReview technicalReview={features} />

            {/* <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Key Features I Helped Deliver:
            </h2>
            <ul className="mb-8 space-y-4  leading-relaxed">
                {features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-lg mr-2">{feature.icon}</span>
                    <div>
                      <span className="font-bold  text-lg ">{feature.title}</span>
                      <span className=" text-md"> — {feature.description}</span>
                    </div>
                  </li>
                ))}
            </ul> */}
        </div>}
       
  
        {/* Platforms */}
        <p className="text-gray-300 text-lg mb-6">
          Built for <span className="font-semibold">Android</span> and later <span className="font-semibold">iOS</span>, optimized for performance, security, and user engagement.
        </p>
  
        {/* Timeline */}
        <p className="text-gray-500 text-sm italic">
          {timeline}
        </p>
      </section>
    );
  }
  