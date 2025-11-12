import AboutProject from '@/components/ui/aboutProject'
import React from 'react'

const page = ({}) => {
  return (
    <div>
       <AboutProject 
           title={"GTI Asset Management"}
           subTitle={"Asset Management App"}
           img1={"/Gti_prospect.png"}
           img2={"/Gti_dashboard.png"}
           img3={"/gti_101.png"}
        />
    </div>
  )
}

export default page
