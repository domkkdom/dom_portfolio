import AboutProject from '@/components/ui/aboutProject'
import { featureFslApp } from '@/data';
import React from 'react'

const description = 
"FSL Mobile is a robust and user-friendly mobile application designed to simplify stock trading and asset management for retail investors. As a mid-level developer on a 4-man team, I contributed significantly to the app’s core functionality and overall user experience. My responsibilities included implementing push notification features, developing multiple interactive screens such as FAQs, Settings, and Profile pages, and integrating a version-check system to help users stay informed about app updates. I also played an important role in ensuring smooth navigation and clean architecture by applying the Stacked state management pattern, resulting in a more maintainable and scalable codebase.";
const timeline = "Timeline: From idea to final release in 5+ months while working with multiple projects simultaneously.";

const page = ({}) => {
  return (
    <div>
       <AboutProject 
           title={"FSL MOBILE"}
           subTitle={"Stock Trading & Asset Management App"}
           img1={"/fsldesign.png"}
           img2={"/fsldesign1.png"}
           img3={"/fsldesign2.png"}
           company = {"Inventiva Technologies"}
           role = {"Mid Level Developer | Team of 4"}
           expertise = {"Mobile App Development"}
           year = {"2025"}
           description={description}
           timeline={timeline}
           features={featureFslApp}
           apple={"https://apps.apple.com/us/app/fsl-mobile/id6745034085"}
           google={"https://play.google.com/store/apps/details?id=com.fsl.mobile&hl=en-US&pli=1"}
        />
    </div>
  )
}

export default page
