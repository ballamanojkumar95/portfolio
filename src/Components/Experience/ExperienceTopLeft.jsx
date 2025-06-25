import React from 'react'
import ExperienceInfo from './ExperienceInfo'
import './Experience.css';
import { fadeIn } from '../../framer-motion/Variant';
import { motion } from 'framer-motion';
function ExperienceTopLeft() {
  return (
    <motion.div variants={fadeIn('up',0.1)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show" className='hover-animation boxshow flex flex-col justify-center gap-6 w-[300px] sm:w-[70%] md:w-[300px] sm:min-h-[200px] md:min-h-[260px] min-h-[260px] h-[250px] text-center sm:h-auto border border-lightBrown p-4 rounded-4  rounded-xl'>
        <p className='text-orange text-3xl sm:text-2xl md:text-3xl  uppercase font-bold'>Since 2019</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceInfo number={"5+"} text={'Years'}/>
        </div>
    </motion.div>
  )
}

export default ExperienceTopLeft