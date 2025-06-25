import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

function AboutMe() {
  return (
    <div id='about' className='flex items-center justify-between gap-12 md:flex-row sm:flex-col px-4 max-w-[1200px] mx-auto mt-[70px] sm:mt-[25px] md:mt-[70px]' >
         <div>
         <AboutMeImage/>
         </div>
         <div>
         <AboutMeText/>
        
         </div>
    </div>
  )
}

export default AboutMe