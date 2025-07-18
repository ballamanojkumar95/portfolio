import React from 'react'
import weather from '../../../public/images/wather.jpg'
import weatherbg from '../../../public/images/weather-forecast-concept.jpg'

import { FaLocationArrow } from "react-icons/fa6";


function RecentProjects() {

    const redirectToWather = () =>{
       let url = 'https://ballamanojkumar95.github.io/react-weather-app/'
       window.open(url, 'blank')
       
    }
  return (
    <div className='p-2 mt-5 rounded rounded-5 '>
        <h1  className='text-cyan text-4xl mt-3 text-center mb-5 '>Recent Projects</h1>
        <div className='flex sm:flex-wrap items-center justify-center'>
            <div className='sm:mb-3'><img className='rounded-xl' src={weatherbg} alt="" /></div>
            <div className='w-[200px] rounded-xl bg-white text-center relative'>
            <img src={weather} alt=""  className='w-[200px] h-[200px] rounded-xl'/>
            <h2 className='text-black text-center text-xl py-2 absolute top-[60%] right-[20%]'>Weather App</h2>
            <button className='flex py-2 justify-center items-center text-center w-[100%] gap-2 cursor-pointer'  onClick={() =>redirectToWather()}>View Live <FaLocationArrow></FaLocationArrow> </button>
        </div>
        </div>
    </div>
  )
}

export default RecentProjects 