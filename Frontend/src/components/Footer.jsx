import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around mt-16 bg-[#FFBF3D1A]'>
      <h1 className='font-bold text-2xl'>LOGO</h1>

      <div className='flex flex-col gap-5'>
        <span className='font-bold text-lg'>SHOP</span>

        <ul>
            <li className='text-xs font-bold'>Home</li>
            <li className='text-xs font-bold'>Products</li>
            <li className='text-xs font-bold'>Favorites</li>
            <li className='text-xs font-bold'>New Arrival</li>
            <li className='text-xs font-bold'>Most Popular</li>
            <li className='text-xs font-bold'>Orders</li>
        </ul>

      </div>




      <div className='flex flex-col gap-5'>
        <span className='font-bold text-lg'>CUSTOMER SUPPORT</span>

        <ul>
            <li className='text-xs font-bold'>Refund & Exchange Policy</li>
            <li className='text-xs font-bold'>About Us</li>
            <li className='text-xs font-bold'>FAQs</li>
            <li className='text-xs font-bold'>Contact Us</li>
        </ul>
      </div>





      <div className='flex flex-col gap-5'>
        <span className='font-bold text-lg'>STORE LOCATION</span>

        <div>
            <p className='text-xs font-bold'>Lorem ipsum dolor sit amet.</p>
            <p className='text-xs font-bold'>Uni Town, Peshawar</p>

            <p className='text-xs font-bold'>(+92) 987  *** **90</p>
            <p className='text-xs font-bold'>(+92) 987  *** **90</p>
            <p className='text-xs font-bold'>Majid*********@gmail.com</p>
        </div>


      </div>

    </div>
  )
}

export default Footer