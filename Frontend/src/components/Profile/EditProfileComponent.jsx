import React from 'react'

const EditProfileComponent = () => {
  return (
    <div className='flex flex-col items-center h-screen w-full gap-8 mt-20'>
        
        <h1 className='font-bold text-2xl'>EDIT PROFILE</h1>
        
        <div className='w-40 h-40 bg-[#363844] rounded-full'><img src="" alt="" /></div>

        <div className='flex flex-col gap-2 items-center'>
            <input 
            type="text"
            placeholder='Name' 
            className='border rounded-3xl placeholder:text-xs px-4 py-1'
            />
            <input 
            type="text"
            placeholder='Email' 
            className='border rounded-3xl placeholder:text-xs px-4 py-1'
            />
            <button className='bg-[#FFBF3D] text-white font-bold text-[10px] px-18 py-2 rounded-3xl mt-12'>
                UPDATE PROFILE
            </button>
        </div>
    </div>
  )
}

export default EditProfileComponent
