import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavbarMain from './Components/NavBar/NavbarMain'
import HeroMain from './Components/HeroSection/HeroMain'
import HeroGradent from './Components/HeroSection/HeroGradent'
import AboutMe from './Components/AboutMe/AboutMe'
import SkillsMain from './Components/Skills/SkillsMain'
import SubSkills from './Components/Skills/SubSkills'
import ExperienceMain from './Components/Experience/ExperienceMain'
import ProjectsMain from './Components/Projects/ProjectsMain'
import Contactmain from './Components/ContactMe/Contactmain'
import FooterMain from './Components/Footer/FooterMain'
import TimelineExpe from './Components/TimeLine/timelineExpe'
import SubHero from './Components/SubHero/SubHero'
import ScrollToTop from "react-scroll-to-top";
import './App.css'
function App() {
 
  return (
    
    <main>
      <ScrollToTop  className='custome-back-top' smooth height='20px' width='20px' color="#fb9718" />
    <NavbarMain/>
    <HeroMain/>
   <HeroGradent/>
   <SubHero/>
   <AboutMe/>
   <TimelineExpe/>
   <SkillsMain/>
   <SubSkills/>
   <ExperienceMain/>
   <ProjectsMain/>
   <Contactmain/>
   <FooterMain/>
  
  </main>
  )
}

export default App
