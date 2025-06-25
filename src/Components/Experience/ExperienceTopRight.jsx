import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import './Experience.css';
import { fadeIn } from '../../framer-motion/Variant';
import { motion } from 'framer-motion';
function ExperienceTopRight() {
  return (
    <motion.div variants={fadeIn('right',0.2)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show" className='boxshow xl:w-[35%] lg:w-[40%] sm:h-auto border border-lightBrown p-4 rounded-4 rounded-xl'>
        <p className='text-lg text-center text-lightGray'><FaQuoteLeft  className='text-6xl text-orange'/>We craft stunning, fully responsive web applications that adapt seamlessly across all devices—leveraging flexible grids, fluid media queries, and optimized performance to deliver engaging and user-friendly experiences on desktop, tablet, and mobile.”</p>
    </motion.div>
  )
}

export default ExperienceTopRight