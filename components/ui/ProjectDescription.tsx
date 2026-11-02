import { FeatureProp, technicalReview } from "@/data";
import TechnicalReview from "./TechnicalReview";
import KeyFeature from "./KeyFeature";
import ProjectDescriptions from "./Project_Description";

type ProjectDescriptionProps = {
  description: string;
  company: string;
  timeline: string;
  features: FeatureProp[];
};

export default function ProjectDescription({
  description,
  company,
  timeline,
  features,
}: ProjectDescriptionProps) {
  const isPersonal = company?.toLowerCase() === "personal";

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-10 text-slate-900 dark:text-white text-center">
      <ProjectDescriptions description={description} />

      {isPersonal ? (
        <div>
          <KeyFeature keyFeature={features} />
          <TechnicalReview technicalReview={technicalReview} />
        </div>
      ) : (
        <div>
          <KeyFeature keyFeature={features} />
        </div>
      )}

      {/* Target Platforms */}
      <div className="mt-8 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black-200/30 max-w-2xl mx-auto">
        <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base">
          Built for <span className="font-semibold text-purple-600 dark:text-purple">iOS</span> and{" "}
          <span className="font-semibold text-purple-600 dark:text-purple">Android</span>, optimized for 60fps animations, security, and peak responsiveness.
        </p>

        {timeline && (
          <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm italic mt-2">
            {timeline}
          </p>
        )}
      </div>
    </section>
  );
}
