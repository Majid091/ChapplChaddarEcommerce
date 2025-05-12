import React from 'react'
import { NavLink } from 'react-router-dom'

const MyProfileComponent = () => {
  return (
    <div className='flex flex-col items-center h-screen w-full gap-8 mt-20'>
        <div className='w-full flex'>
            <div className='w-[30%] '></div>
            <div className='w-[70%] flex justify-around'>
               <h1 className='font-bold text-2xl'>MY PROFILE</h1>
               <NavLink to={'/edit-profile'}><h1 className='font-bold text-lg cursor-pointer'>EDIT</h1></NavLink>
            </div>
        </div>

        <div className='w-40 h-40 bg-[#363844] rounded-full'><img src="" alt="" /></div>

        <div className='flex flex-col gap-2 items-center'>
            <p className='font-bold text-2xl'>Profile Name</p>
            <p className='font-bold text-sm'>Majid123********@gmail.com</p>
        </div>
    </div>
  )
}

export default MyProfileComponent
