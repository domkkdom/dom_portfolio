import AboutProject from '@/components/ui/aboutProject'
import React from 'react'

const page = ({}) => {
  return (
    <div>
       <AboutProject 
           title={"Movie Suggestion App"}
           subTitle={"For Movie Suggestion"}
           img1={"/MovieAppImg1.png"}
           img2={"/MovieAppImg2.png"}
           img3={"/MovieAppImg3.png"}
        />
    </div>
  )
}

export default page
