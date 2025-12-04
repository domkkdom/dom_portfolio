import AboutProject from '@/components/ui/aboutProject'
import { featureFslApp, featureGTI } from '@/data';
import React from 'react'

const description = 
`GTI is a robust and intuitive mobile application focused on asset management for retail investors. As a mid-level developer on a four-person team, I contributed extensively to the app’s core functionality and user experience. My work included implementing a comprehensive KYC workflow with multiple interactive pages for document submission and verification, designing a smooth navigation system with the Stacked state management pattern, and building user-friendly screens such as FAQs, Settings, and Profile pages. I also developed a version-check and forced update system to ensure users have access to the latest features and security fixes. These contributions enhanced usability, security, and maintainability, resulting in a scalable and seamless app experience for users managing their assets.`;


const page = ({}) => {
  return (
    <div>
       <AboutProject 
           title={"GTI Asset Management"}
           subTitle={"Asset Management App"}
           img1={"/Gti_prospect.png"}
           img2={"/Gti_dashboard.png"}
           img3={"/gti_101.png"}
           company = {"Inventiva Technologies"}
           role = {"Mid Level Developer | Team of 4"}
           expertise = {"Mobile App Development"}
           year = {"2025"}
           description={description}
           timeline={""}
           features={featureGTI}
           google={"https://play.google.com/store/apps/details?id=com.gtiassetmanagement.gti.am"}
           apple={"https://apps.apple.com/us/app/assetpro-by-gti/id6754518762"}
        />
    </div>
  )
}

export default page
