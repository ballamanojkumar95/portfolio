import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavBarLinks from './NavBarLinks'
import NavBarBtn from './NavBarBtn'
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarMain() {
    const [menuOpen,setMenu] = useState(false);
    const toggle = () =>{
        setMenu(!menuOpen)
    }

    const handleChildClick = (data) => {
     setMenu(data)
    };
    
  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
    <div className='flex justify-between w-full max-w-[1200px] mx-auto px-4 rounded-xl bg-grey items-center p-1 '>
    <NavbarLogo/>
    <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
    <NavBarLinks onClick={handleChildClick} />
    </div>
   
    <NavBarBtn/>
    </div>
    <div className='flex lg:hidden sm:block p-1 bg-black items-center justify-center rounded-full border-[0.5px] border-orange'>
     <button onClick={toggle} className='text-2xl p-3 border border-orange rounded-full text-white'><GiHamburgerMenu/></button>
    </div>
  </nav>
  )
}

export default NavbarMain;