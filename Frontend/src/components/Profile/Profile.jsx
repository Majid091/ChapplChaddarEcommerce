import React from 'react'
import { NavLink } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='w-full h-screen flex'>
        <div className='w-[70%] h-screen'>

        </div>

        <div className='w-[30%] h-auto m-16'>
            <div className='bg-[#3638440D] h-full w-full p-8 flex flex-col gap-4 rounded-2xl shadow-md'>
                <NavLink to={'/my-profile'}><p className='font-semibold text-lg cursor-pointer'>MY PROFILE</p></NavLink>
                <NavLink to={'/cart'}><p className='font-semibold text-lg cursor-pointer'>MY CART</p></NavLink>
                <NavLink to={'/profile-setting1'}><p className='font-semibold text-lg cursor-pointer'>SETTING</p></NavLink>
                <NavLink to={'/change-password'}><p className='font-semibold text-lg cursor-pointer'>CHANGE PASSWORD</p></NavLink>

                <div className='border-2 mx-auto w-full mt-4'></div>
                <p className='font-semibold text-lg mt-4 cursor-pointer'>LOGOUT</p>
            </div>


        </div>
    </div>
  )
}

export default Profile
