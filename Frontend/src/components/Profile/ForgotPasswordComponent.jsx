import React from 'react'

const ForgotPasswordComponent = () => {
  return (
    <div className='w-full h-full'>
        <h1 className='font-bold text-4xl text-center text-[#333740] mt-16'>FORGOT PASSWORD</h1>

        <div className='flex flex-col m-16 justify-center items-center gap-40 mt-20'>
            <input type="email" 
            placeholder='Email'
            className='border rounded-3xl placeholder:text-xs px-4 py-2 w-1/2'
            />

            <button className='bg-[#FFBF3D] text-white rounded-3xl text-xs px-4 py-3 w-1/2'>
                GET CODE
            </button>
        </div>
    </div>
  )
}

export default ForgotPasswordComponent
