import React, { useState } from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framer-motion/Variant';
import { FaLongArrowAltRight } from "react-icons/fa";


import "reactjs-popup/dist/index.css";
import PopupOpen from "./Popup";
function SingleProject({ name, year, image, link, align, desc }) {
  const [poupOpen, setOpen] = useState(false);
  const handlePop = () => {
    setOpen(!poupOpen);
  };
  return (
    // <div className={`flex w-fll sm:flex-col-reverse items-center gap-8 ${align==='left'? 'md:flex-row':"md:flex-row-reverse"} justify-end`}>
    //     <div>
    //         <h2 className='md:text-3xl sm:text-xl text-orange'>{name}</h2>
    //         <h2 className={`text-xl font-thin text-white sm:text-center ${align=="left"? 'md:text-right' : 'md:text-left'}`}>{year}</h2>
    //         <a href={link} className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align =="left" ? 'md:justify-self-end': 'md:justify-self-start'}`}>View <BiSolidRightTopArrowCircle/></a>
    //     </div>
    //     <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
    //         <div className='w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
    //         <img src={image} alt="" className='w-full h-full' />
    //     </div>
    // </div>
    <div>
      <div className="card transform transition duration-500 
                                hover:-translate-y-3  max-h-[500px] min-h-[200px] min-w-[200px] border border-1 border-[#e3e1e1]   rounded-xl">
        <div className={`${name=="Smart Meters" ? 'bg-[#fff] rounded-[10px]':''} max-h-[220px]  max-w-[400px] mx-auto w-full text-center`}>
          <img className="rounded-xl mx-auto h-[120px]" src={image} alt="" />
        </div>
        <div className="text-center mt-2 p-2">
          <strong className="text-orange">
            <h5>{name}</h5>
          </strong>
          <button className="border border-[#fff] text-white hover:bg-orange hover:border-0 text-sm rounded-xl p-1 w-full mt-2" onClick={() => setOpen(!poupOpen)}>View Details</button>
          {poupOpen ? <PopupOpen handleClose={handlePop} popUpData={desc} align={align} title={name} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
