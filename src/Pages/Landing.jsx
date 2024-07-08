import React from 'react'
import hero from '../assets/hero.png'
export default function Landing() {
  return (
    <div className='w-full bg-white  flex border-2'>
      <div className='w-[60%] flex flex-col items-end h-screen'>
         <div className=' mt-20 mr-11'>
            <h2 className='text-7xl font-semibold'>Your data. Your AI.</h2>
            <h2 className='text-7xl font-semibold'>Your future.</h2>
            <h3 className='text-3xl mt-10 '>Own them all on the new data intelligence platform</h3>
         </div>
      </div>
      <div className='w-[40%] h-screen'>
          <img className='w-[350px] mt-20 ml-5' src={hero} alt="" />
      </div>
    </div>
  )
}
