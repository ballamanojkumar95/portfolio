import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { fadeIn } from "../../framer-motion/Variant";
import { motion } from "framer-motion";
import html from "../../../public/images/ihtml.png";
import css from "../../../public/images/icss.png";
import js from "../../../public/images/js.png";
import angular from "../../../public/images/ang.png";
import react from "../../../public/images/react.png";
import bootstrap from "../../../public/images/bootstrap.png";
import material from "../../../public/images/material.png";
import tailwind from "../../../public/images/tailwindcss.png";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TechSkills() {
  let techSkills = [
    {
      maxCompleted:100,
      bgColor:'#15d1e9',
      completed:95,
      src:css,
      iconHeight:'30px',
      iconWidth:'30px'
    },
    {
      maxCompleted:100,
      bgColor:'#fb9718',
      completed:96,
      src:html,
      iconHeight:'30px',
      iconWidth:'30px'
    },
    {
      maxCompleted:100,
      bgColor:'#fede23',
      completed:94,
      src:js,
      iconHeight:'30px',
      iconWidth:'30px'
    },
    {
      maxCompleted:100,
      bgColor:'#15d1e9',
      completed:90,
      src:tailwind,
      iconHeight:'30px',
      iconWidth:'30px'
    }
  ];
  let rightSideTechSkills = [
    {
      strokeWidth:4,
      strokeColor:'#f50000',
      value:90,
      image:angular,
      alt:'angular'
    },
    {
      strokeWidth:4,
      strokeColor:'#00c4e0',
      value:50,
      image:react,
      alt:'react'
    },
    {
      strokeWidth:4,
      strokeColor:'#fb9718',
      value:90,
      image:material,
      alt:'material'
    },
    {
      strokeWidth:4,
      strokeColor:'#814bfd',
      value:90,
      image:bootstrap,
      alt:'bootstrap'
    }
  ]
  return (
    <div className="flex sm:flex-wrap md:flex-nowrap justify-between items-center gap-5">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        viewport={{ once: false, amount: 0 }}
        whileInView="show"
        className="left  sm:w-[100%] md:w-[50%] border-1 border p-4 rounded-[20px]  border-darkGray">
        <h2 className="text-center text-2xl font-body font-bold text-white">
          Technical Skills
        </h2>
        
        {/* let side skills */}
        <motion.div
          className="mb-1 items-center"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          viewport={{ once: false, amount: 0 }}
          whileInView="show">
          {techSkills.map((item,i) =>{
            return <>
           <div key={i} className="flex items-center mb-1">
           <div>
            <p className="w-[25px] h-[25px]">
              <img src={item.src} alt=""  />
            </p>
          </div>
          <div className="w-full ml-1">
            <ProgressBar
              bgColor={item.bgColor}
              isLabelVisible="true"
              height="20px"
              labelSize="0"
              labelAlignment="right"
              borderRadius="0"
              completed={item.completed}
              transitionDuration="10s"
              animateOnRender="true"
              transitionTimingFunction="ease-in-out"
              maxCompleted={item.maxCompleted}
            />
          </div>
           </div>
            </>
          })}
        </motion.div>
        {/* right side skills */}
      </motion.div>
      
      {/* right side skills started */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        viewport={{ once: false, amount: 0 }}
        whileInView="show"
        className="h-[222px] border-1 border  p-4 rounded-[20px]  border-darkGray right flex gap-4 items-center md:w-[50%] sm:w-[100%] "
      >
        {rightSideTechSkills.map((item,i) =>{
          return <>
          <div key={i}
          className="items-center flex sm:w-[100px]"
          style={{ width: 200, height: 200 }}
        >
          <CircularProgressbarWithChildren
            strokeWidth={item.strokeWidth}
            styles={{
              path: {
                stroke: item.strokeColor,
              },
            }}
            value={item.value}
          >
            <img
              style={{ width: 40, marginTop: -5 }}
              src={item.image}
              alt={item.alt}
            />
            <div style={{ fontSize: 12, marginTop: -5, color: "white" }}>
            </div>
          </CircularProgressbarWithChildren>
        </div>
          
          </>
        })}
        
      </motion.div>
    </div>
  );
}

export default TechSkills;
