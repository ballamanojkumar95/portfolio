import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import AllSkillsSm from './AllSkillsSm'
import TechSkills from './TechSkills'

function SkillsMain() {
  return (
    <div id='skills'>
     
        <div className='max-w-[1200px] px-4 mx-auto min-h-[430px] relative overflow-hidden'>
        <SkillsText/>
        <div >
        <TechSkills/>
        </div>
        {/* <div className='sm:block lg:hidden'>
        <AllSkillsSm/>
        </div> */}
        </div>
      
    </div>
  )
}

export default SkillsMain