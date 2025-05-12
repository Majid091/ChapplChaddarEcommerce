import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';


const Login = () => {


    const loginUser = async (userData) => {
        const response = await axios.post('http://localhost:3000/api/user/login-user', userData);
        return response.data;
      };
    
      // Mutation using the inline function
      const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
          console.log('Login successful:', data);
          // Show a toast, redirect, or clear form here
        },
        onError: (error) => {
          console.error('Login failed:', error.response?.data || error.message);
        },
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
          email: e.target.email.value,
          password: e.target.password.value,
        };
        mutation.mutate(formData);
      };



  return (
    <div className='w-auto'>
        
        <div className='flex flex-col justify-center items-center gap-25 my-16 w-auto h-full'>
            <h1 className='font-bold text-2xl text-center'>LOGIN</h1>
            <form
            onSubmit={handleSubmit} 
            className='flex flex-col gap-8 w-1/3 '>
                
                <input
                name='email' 
                type="text" 
                placeholder='EMAIL'
                className='border w-full rounded-3xl placeholder:text-xs p-2'
                />

                
                <input
                name='password' 
                type="text" 
                placeholder='PASSWORD'
                className='border w-full rounded-3xl placeholder:text-xs p-2'
                />
               

                <div className='flex flex-col gap-4 '>
                    <div className='flex flex-col md:flex-col lg:flex-row justify-between '>
                        <NavLink to={'/registration'}><span className='text-[#FFBF3D] cursor-pointer'>don't have an account?</span></NavLink>
                        <NavLink to={'/forgot-password'}><span className='text-[#FFBF3D] cursor-pointer'>forgot password</span></NavLink>
                    </div>
                    <button className='bg-[#FFBF3D] text-white text-xs font-bold w-full rounded-3xl py-2'>
                       LOGIN
                    </button>
                </div>
            </form>

            
        </div>
    </div>
  )
}

export default Login
