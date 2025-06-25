import React from 'react'
import { Link, Element } from 'react-scroll';
function NavbarLogo() {
  return (
    <div>
        <h1 className='text-[#fff] text-2xl font-bold sm:hidden md:block'>
           <Link className="cursor-pointer font-body text-white" to='home' smooth={true} spy={true} duration={500} offset={-130} > Manoj Kumar</Link>
        </h1>
        <h1 className='text-[#fff]  font-bold text-4xl sm:block md:hidden'>
        <Link className="cursor-pointer hover:text-cyan  font-body text-[#fff]" to='home' smooth={true} spy={true} duration={500} offset={-130} >M<span className='text-cyan'>.B</span></Link>
          </h1>
    </div>
  )
}

export default NavbarLogo