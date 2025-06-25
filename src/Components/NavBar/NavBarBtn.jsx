import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";
import resume from '../../../public/Resume/Resume.pdf'

function NavBarBtn() {
  const downloadResume= () =>{
    const pdfUrl = resume
      const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "ManojResume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }
  return (
    <button className='flex px-4 py-2 gap-1 bg-gradient-to-r from-cyan to-orange hover:shadow-cyanShadow hover:scale-110 transition-all duration-500 hover:border-orange text-white items-center font-bold border rounded-full border-cyan' onClick={downloadResume}>Hire Me<LuArrowDownRight className='sm:hidden md:block' /></button>
  )
}

export default NavBarBtn