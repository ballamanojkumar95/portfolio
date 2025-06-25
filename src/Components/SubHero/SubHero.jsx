import React from 'react'

function SubHero() {
  return (
    <div className='w-full border-y border-lightGray font-bold bg-brown text-lightGray flex justify-around uppercase xl: text-4xl md:text-2xl sm:text-2xl py-8 items-center gap-4'>
        <p className='md:block sm:block'>Fast learner</p>
        <p className='md:block sm:hidden'>Team Work</p>
        <p className='md:block sm:hidden'>Details Master</p>
    </div>
  )
}

export default SubHero