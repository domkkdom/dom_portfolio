import AboutProject from '@/components/ui/aboutProject'
import { featureMovieApp } from '@/data';
import React from 'react'

const description = "CineScope is a modern and intuitive mobile application designed to help users effortlessly discover trending movies and stay up to date with the latest releases. The app provides a rich browsing experience where users can explore detailed movie information, including synopses, cast lists, ratings, and reviews. Users can also watch official trailers directly within the app, enabling them to quickly decide which movies to watch next.With a smooth interface and real-time data updates, CineScope simplifies movie discovery and delivers an enjoyable entertainment-focused experience.";
const timeline = "Timeline: From idea to final release in 2 months while working with multiple projects simultaneously.";
const page = ({}) => {
  return (
    <div>
       <AboutProject 
           title={"Movie Suggestion App"}
           subTitle={"For Movie Suggestion"}
           img1={"/Figure 7.1.png"}
           img2={"/Figure 11.12.png"}
           img3={"/Figure 7.2.png"}
           company = {"Personal"}
           role = {"Solo Developer"}
           expertise = {"Mobile App Development"}
           year = {"2025"}
           description={description}
           timeline={timeline}
           features={featureMovieApp}
        />
    </div>
  )
}

export default page
