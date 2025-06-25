import { motion } from 'framer-motion';
import React, { useState,useRef,useEffect } from 'react'
import Typed from 'typed.js';
import { fadeIn } from '../../framer-motion/Variant';
import git from '../../../public/images/git.png'
import linkedin from '../../../public/images/linkedin.png'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";


const HeroText = () => {
 // const [typeds,setTyped] = useState(null);
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "<span class='text-[15px]'>I am Frontend <span class='text-orange '>Web developer.</span></span>"
      ],
      typeSpeed: 30,
      backSpeed: 40,
      loop: true,
    };
    //setTyped(options)
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
      <motion.h2  variants={fadeIn('down',0.2)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show" className='lg:text-2xl sm:text-xl uppercase text-cyan element'> <span ref={el}></span></motion.h2>
      <motion.h1 variants={fadeIn('right',0.2)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show" className='md:text-[2.8rem] font-bold xl:text-6xl sm:text-4xl font-body text-orange'>Manoj<span className='text-cyan'>.Balla</span></motion.h1>
      <motion.p variants={fadeIn('up',0.2)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show" className='text-white'>I’m a Front-End Web Developer with 5+ years of experience, specializing in Angular and React.
      Throughout my career, I’ve developed responsive, high-performance web applications across diverse domains including, <span className='text-cyan'><strong>Automobiles, Insurance, and Energy Metering</strong></span>. My strong grasp of HTML, CSS, JavaScript, and modern frameworks allows me to create scalable and user-centric solutions. I thrive in collaborative environments, bringing both technical expertise and a problem-solving mindset to every project I work on.
      </motion.p>
      <div className='flex mt-2 gap-2 items-center'>
       <a href="https://www.linkedin.com/in/manoj-kumar-176859271/" target='_blank'><CiLinkedin  className='text-4xl text-cyan hover:text-orange transition-all duration-500'/></a>
       <a href=""> <FiGithub className='text-4xl text-cyan hover:text-orange transition-all duration-500'/></a>
      </div>
    </div>
  )
}

export default HeroText
