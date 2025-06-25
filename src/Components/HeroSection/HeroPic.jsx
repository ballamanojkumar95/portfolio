import React from 'react'
import { fadeIn } from '../../framer-motion/Variant';
import { motion } from 'framer-motion';
import { BsHexagon } from "react-icons/bs";
import hero from '../../../public/images/hexbio.png'




const HeroPic = () => {
  return (
    <motion.div 
    variants={fadeIn('left',0.2)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show" className='flex items-center justify-center h-full '>
       <img src={hero} alt="" className='max-h-[400px] w-auto' />
       {/* <img src="../../public/images/circle.png"  className='h-[500px] w-[500px] absolute animate-[spin_20s_ease-in-out_infinite] z-[-1]' alt="" /> */}
       <BsHexagon  className='h-[400px] w-[400px] absolute animate-[spin_20s_ease-in-out_infinite] z-[-1]' color='rgb(0 101 164 / 46%)' />
    </motion.div>
  )
}

export default HeroPic
