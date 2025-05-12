import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";



const GetInTouch = () => {
  return (
    <div className='w-auto h-screen'>
      <h1 className='text-center font-bold text-2xl'>GET IN TOUCH WITH US</h1>

      <div className='flex justify-between px-16 mt-15'>
        <div className='flex gap-2'>
            <FaFacebook size={40} className='text-blue-700'/>
            <PiInstagramLogoFill size={40} className='text-blue-500 rounded-full'/>
            <AiFillTikTok size={40} className='text-black'/>
            <FaYoutube size={40} className='text-red-700'/>
        </div>

        <div className='flex gap-8'>
            <input type="text" placeholder='enter your email address' className='border rounded-4xl px-16 py-1'/>
            <button className='bg-[#FFBF3D] text-white font-bold text-xs rounded-4xl px-8'>SUBMIT</button>
        </div>

      </div>

    </div>
  )
}

export default GetInTouch
