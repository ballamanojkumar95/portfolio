import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
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

function AllSkillsSm() {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item,i) =>{
            return (
                <div key={i} className='flex flex-col hover:-translate-y-3 transition-all  duration-500 items-center shadow-customeShadow border border-1 border-[#818181] p-[10px] rounded-[20px]'>
                    <item.icon className='text-7xl text-orange'/>
                    <p className='text-center mt-4 text-white'>{item.skill}</p>
                </div>
            )
        })}
    </div>
  )
}

export default AllSkillsSm