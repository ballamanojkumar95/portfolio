import React from 'react'
import contactMe from '../../../public/images/contact.png'
import { fadeIn } from '../../framer-motion/Variant';
import { motion } from 'framer-motion';

function ContactImage() {
  return (
    <motion.div  variants={fadeIn('left',0.2)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show" className='max-w-[400px]'>
        <img src={contactMe} alt="contact image" className='max-w-[400px] sm:max-w-[250px]  md:min-w-[400px]' />
    </motion.div>
  )
}

export default ContactImage