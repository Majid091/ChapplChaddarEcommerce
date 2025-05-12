import React from 'react'
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className=' w-[40%] pt-40 bg-[#333740] pl-20'>
        <h1 className='font-bold text-[#FFBF3D] text-4xl'>UNLOCK 20% OFF</h1>
        <p className='font-bold text-2xl text-white mt-2'>ON OUR PREMIUM COLLECTION FOR A LIMITED TIME ONLY</p>

        <button className='bg-[#FFBF3D] rounded-2xl text-xs text-white px-16 py-2 font-bold mt-16'>SHOP NOW</button>
      </div>

      <div className='w-[60%]'>
        <img src={banner} alt="banner image" className='h-full'/>
      </div>

    </div>
  )
}

export default Banner
