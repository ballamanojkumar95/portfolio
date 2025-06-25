import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { fadeIn } from '../../framer-motion/Variant';
import { motion } from 'framer-motion';



function ContactText() {
  return (
    <motion.div  variants={fadeIn('right',0.2)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show"  className='flex flex-col gap-4 w-[300px] sm:pb-[30px] lg:pb-[0px] md:pb-[0px]'>
        <p  className='hover:scale-110 transform transition-all duration-500 flex flex-row items-center border-[0.2px] py-2 w-auto bg-lightBrown rounded-[10px] text-white  hover:text-cyan font-bold'><span className='mx-3'><FaSquarePhone className='text-cyan text-3xl hover:text-orange' /></span>7675941724</p>
        <p className='hover:scale-110 transform transition-all duration-500 flex flex-row items-center border-[0.5px] w-auto py-2 bg-lightBrown rounded-[10px] text-white  hover:text-cyan font-bold'><span className='mx-3'><MdEmail className='text-cyan text-3xl hover:text-orange' /></span><a href="mailto:manojkrballa@gmail.com">manojkrballa@gmail.com</a></p>
        <p className='hover:scale-110 transform transition-all duration-500 flex flex-row items-center border-[0.5px] py-2 w-auto bg-lightBrown rounded-[10px] text-white  hover:text-cyan font-bold'><span className='mx-3'><FaLinkedin className='text-cyan text-3xl hover:text-orange' /></span><a href="https://www.linkedin.com/in/manoj-kumar-176859271/" target='_blank'>Linked In</a></p>
    </motion.div>
  )
}

export default ContactText