import React from 'react';
import about from '../../../public/images/about.jpg'
import veiamge from '../../../public/images/veimage.jpg'
import { fadeIn } from '../../framer-motion/Variant';
import { motion } from 'framer-motion';

function AboutMeImage() {
  return (
    <motion.div  variants={fadeIn('down',0.2)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show" className='h-[400px] w-[400px] sm:h-[300px] sm:w-[300px]'>
     <div className='h-[400px] w-[350px] md:w-[400px] sm:w-[300px] sm:h-[300px]  items-center  rounded-[30px]'>
      <img src={veiamge} alt="about" className='w-full h-full rounded-3xl' />
    </div>
    </motion.div>
    
  )
}

export default AboutMeImage