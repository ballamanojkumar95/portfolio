import React from 'react'
import ContactHeader from './ContactHeader'
import ContactText from './ContactText'
import ContactImage from './ContactImage'

function Contactmain() {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto px-4'>
        <ContactHeader/>
        <div className='flex flex-row text-center items-center justify-evenly sm:flex-col md:flex-row lg:flex-row'>
          <div><ContactText/></div>
          <div><ContactImage/></div>

        </div>
    </div>
  )
}

export default Contactmain