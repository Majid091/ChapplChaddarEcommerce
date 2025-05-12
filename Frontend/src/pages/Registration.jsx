import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';


const Registration = () => {


    // API function defined inside the component
  const registerUser = async (userData) => {
    const response = await axios.post('http://localhost:3000/api/user/create-user', userData);
    return response.data;
  };

  // Mutation using the inline function
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log('Registration successful:', data);
      // Show a toast, redirect, or clear form here
    },
    onError: (error) => {
      console.error('Registration failed:', error.response?.data || error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    mutation.mutate(formData);
  };



  return (
    <div className='w-full'>
        
        <div className='flex flex-col justify-center items-center gap-25 my-16 w-auto h-full'>
            <h1 className='font-bold text-2xl text-center'>REGISTRATION</h1>
            <form 
            className='flex flex-col gap-8 w-1/3 '
            onSubmit={handleSubmit}
            >
                <input 
                type="text" 
                placeholder='USERNAME'
                className='border w-full rounded-3xl placeholder:text-xs p-2'
                name='username'
                />

                <input 
                type="text" 
                placeholder='EMAIL'
                className='border w-full rounded-3xl placeholder:text-xs p-2'
                name='email'
                />

                <div className='flex w-full gap-4'>
                    <input 
                    type="text" 
                    placeholder='PASSWORD'
                    className='border w-1/2 rounded-3xl placeholder:text-xs p-2'
                    name='password'
                    />

                    <input 
                    type="text" 
                    placeholder='CONFIRM PASSWORD'
                    className='border w-1/2 rounded-3xl placeholder:text-xs p-2'
                    />
                </div>

                

                <div className='flex flex-col gap-4 '>
                    <NavLink to={'/login'}><span className='text-[#FFBF3D] cursor-pointer'>already have an account?</span></NavLink>
                    <button
                    type='submit'
                    disabled={mutation.isLoading} 
                    className='bg-[#FFBF3D] text-white text-xs font-bold w-full rounded-3xl py-2'>
                       {mutation.isLoading ? 'Registering...' : 'Register'}
                    </button>
                </div>
            </form>

            
        </div>
    </div>
  )
}

export default Registration
