 import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
 
 const RecentProjects = () => {
   return (
     <div className='py-20' id="projects">
        <h1 className='heading'>
          A small selection of {' '}
          <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap justify-center p-4 pt-10 gap-x-24  mt-10'>
         {projects.map(({id, title, des, img, iconLists, link})=> (
          <div key={id} className=" flex items-center justify-center sm:w-[570px] sm:h-[41rem] h-32rem w-[80vw] p-16">
            <PinContainer title={title} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]   mb-10'>
                <div>
                  <img src="/bg.png" alt='bg-img'/>
                </div>
                <img src={img} alt={title} className='absolute inset-0 w-full h-full object-contain z-10'/>
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base  line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-base lg:font-normal font-light text-sm  line-clamp-2'>
                {des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                    {iconLists.map((icon, index)=> (
                      <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{transform: `translateX(-${5 * index * 2}px)`}}>
                          <img src={icon} alt={icon} className='p-2' />
                      </div>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Case Study</p>
                  <FaLocationArrow className='ms-3' color='#CBACF9'/>
                </div>
              </div>
            </PinContainer>
          </div>
         ))} 
        </div>
     </div>
   )
 }
 
 export default RecentProjects
 

//  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 p-4 pt-10 mt-10">
//  {projects.map(({id, title, des, img, iconLists, link})=> (
//   <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] p-16">
//     <PinContainer title={title} href={link}>
//       <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[50vh] lg:h-[70vh] mb-10 '>
//         <div>
//           <img src="/bg.png" alt='bg-img'/>
//         </div>
//         <img src={img} alt={title} className='absolute inset-0 w-full h-full object-contain z-10'/>
//       </div>
//       <h1 className='font-bold lg:text-2xl md:text-xl text-base  line-clamp-1'>
//         {title}
//       </h1>
//       <p className='lg:text-xl lg:font-normal font-light text-sm  line-clamp-2'>
//         {des}
//       </p>
//     </PinContainer>
//   </div>