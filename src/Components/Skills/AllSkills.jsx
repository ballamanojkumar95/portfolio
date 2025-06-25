import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import SingleSkill from './SingleSkill'
import { SiTypescript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";



const skills = [{
    skill: "HTML",
    icon: FaHtml5
},
{
    skill: "CSS",
    icon: FaCss3Alt
},
{
    skill: "JavaScript",
    icon: IoLogoJavascript
},
{
    skill: "TypeScript",
    icon: SiTypescript
},
{
    skill: "Angular",
    icon:  FaAngular
},
{
    skill: "React",
    icon:  FaReact
},
{
    skill: "TailWindcss",
    icon:  RiTailwindCssFill
},
{
    skill: "Bootstrap",
    icon:  FaBootstrap
}
]

function AllSkills() {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item,index) =>{
             return <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>} />
            })}
        </div>
    </div>
  )
}

export default AllSkills