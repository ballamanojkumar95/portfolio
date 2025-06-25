import React from "react";
import { fadeIn } from "../../framer-motion/Variant";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
function AboutMeText() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      viewport={{ once: false, amount: 0 }}
      whileInView="show"
      className="flex flex-col md:w-[720px] sm:text-center md:text-left"
    >
      <h2 className="text-cyan text-6xl sm:mb-[5px] font-body mb-8 lg:text-6xl lg:font-normal sm:text-3xl sm:font-bold sm:py-[15px] ">
        About <span className="text-orange">Me</span>
      </h2>
      <p className="text-[#fff]">
        I am as a Front-End / Angular Developer. I have strong hands-on
        experience in building scalable and maintainable web applications using:
        <span className='text-cyan'> Angular (2+), TypeScript, RxJS, NgRx HTML5, CSS3, SCSS, Angular
        Material,Bootstrap,Tailwindcss,Responsive web apps RESTful API
        integration, component-driven architecture Performance optimization,
        lazy loading,</span> and route guards Version control with Git and experience
        with Agile/Scrum methodologies I’m passionate about clean code, UI/UX
        best practices, and delivering high-performance front-end solutions.
        Open to full-time roles (on-site/hybrid/remote). Let’s connect if you’re
        hiring or know of a role that aligns with my skill set!
      </p>
      <button className="border hover:text-white border-orange rounded-full py-2 px-4 text-lg flex items-center mt-6 hover:bg-orange text-white transition-all duration-500 cursor-pointer md:self-start sm:self-center">
       <Link smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              to='projects'> My Projects</Link>
      </button>
    </motion.div>
  );
}

export default AboutMeText;
