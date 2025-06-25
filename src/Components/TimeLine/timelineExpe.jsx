import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoLogoJavascript } from "react-icons/io5";
import { GrOrganization } from "react-icons/gr";
import { fadeIn } from '../../framer-motion/Variant';
import { motion } from 'framer-motion';
import { RiOrganizationChart } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";


const TechSkills = [
  "HTML", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "Angular Material", "Tailwindcss", "Responsive WebDesign"
]


function TimelineExpe() {
  return (
    <div className='sm:mt-[40px] md:mt-[100px] mt-[100px] mb-[50px]'>
        <VerticalTimeline animate={false}>
            <motion.div variants={fadeIn('right',0.2)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show">
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#009fb3', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #009fb3' }}
    date="2021 - Present"
    iconStyle={{ background: '#fb9718', color: '#fff' }}
    icon={<GrOrganization />}
  >
    <h3 className="vertical-timeline-element-title"><strong className='font-body' >Role:</strong> Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong className='font-body'>Company:</strong> Cognizant Technology Solutions</h4>
    <p>
      User Experience, Visual Design, Project Management, Clean Code, Responsive Web Design
    </p>
  </VerticalTimelineElement>
            </motion.div>
   
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background:'#fb9718',color:'#fff'}}
    contentArrowStyle={{ borderRight: '7px solid  #fb9718' }}
    date="2019 - 2021"
    iconStyle={{ background: '#009fb3', color: '#fff' }}
    icon={<RiOrganizationChart />}
  >
    <h3 className="vertical-timeline-element-title"><strong className='font-body' >Role:</strong> HTML Integrator</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong className='font-body'>Company:</strong> Vsplash Tech Labs</h4>
    <p>
      Fixing bugs, Implement new Features, User Experience, Visual Design, Responsive Web Design
    </p>
  </VerticalTimelineElement>

  <motion.div variants={fadeIn('right',0.2)} initial="hidden" viewport={{once:false,amount:0}} whileInView="show">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background:'',color:'#000'}}
    dateClassName='text-white'
    date="2012 - 2016"
    iconStyle={{ background: '#fb9718', color: '#fff' }}
    icon={<FaBookOpenReader />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong className='font-body'>JNTU Kakinada Univercity</strong></h4>
    <p>
      Electrical and Electronics Engineering
    </p>
  </VerticalTimelineElement>
  </motion.div>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   
    contentStyle={{ background:'rgb(106 102 102)', color:'#fff'}}
    
     date="Technologies"
    iconStyle={{ background: '#009fb3', color: '#fff' }}
    icon={<GiSkills />}
  >
    <h3 className="vertical-timeline-element-title">Tech Skills</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>Frame Work:</strong> Angular, React</h4>
     <ul className='flex gap-3 flex-row flex-wrap mt-2'>
      {TechSkills.map((res,i) =>{
       return <li className='border px-2 bg-orange' key={i}>{res}</li>
      })}
     </ul>
  </VerticalTimelineElement>
 
</VerticalTimeline>

    </div>
  )
}

export default TimelineExpe