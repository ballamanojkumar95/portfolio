import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
    <div className='pt-40 px-4 pb-16 overflow-hidden mx-auto max-w-[1200px]' id='home'>
     <div className='flex md:flex-row sm:flex-col   justify-between items-center relative px-4' >
     <div className='w-[60%] sm:w-full md:w-[70%]'><HeroText/></div>
    <div className='w-[50%] sm:w-[90%] md:w-[50%]'> <HeroPic/></div>
     </div>
     
      </div>
   
  )
}

export default HeroMain
