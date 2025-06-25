import React from 'react'
import subSkill from '../../../public/images/subSkill.jpg'

function SubSkills() {
  return (
    <div className='border-y-2 border-lightGray relative'>
        <div className='absolute bg-gradient-to-t from-orange to-cyan opacity-50 w-full h-full'></div>
    <img src={subSkill} alt="" className='h-[80px] w-full'/>
    </div>
  )
}

export default SubSkills