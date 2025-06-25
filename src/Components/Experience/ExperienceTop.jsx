import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopRight from './ExperienceTopRight'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import './Experience.css'
function ExperienceTop() {
  return (
    <div className='flex sm:flex-wrap md:flex-nowrap gap-4 items-center justify-between sm:justify-center before-animation '>
        <ExperienceTopLeft/>
        <ExperienceTopMiddle/>
        <ExperienceTopRight/>
    </div>
  )
}

export default ExperienceTop