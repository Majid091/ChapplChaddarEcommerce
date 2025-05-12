import React from "react";
import { NavLink } from "react-router-dom";

const ChangePasswordComponent = () => {
  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-4xl text-[#333740] text-center mt-8">CHANGE PASSWORD</h1>

      <div className="flex flex-col m-20 gap-8">
        <input type="text" 
        placeholder="Current Password"
        className="w-full border rounded-3xl placeholder:text-xs px-4 py-2"
        />

        <div className="flex gap-8">
          <input type="text" 
          placeholder="New Password"
          className="w-1/2 border rounded-3xl placeholder:text-xs px-4 py-2"
          />
          <input type="text" 
          placeholder="Confirm Password"
          className="w-1/2 border rounded-3xl placeholder:text-xs px-4 py-2"
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-20 gap-4">
          
          <NavLink to={'/forgot-password'}><p className="text-[#FFBF3D] font-bold cursor-pointer">forgot password?</p></NavLink>

          <button className="bg-[#FFBF3D] font-bold text-[10px] text-white py-3 px-30 rounded-3xl">
            CHANGE PASSWORD
          </button>

        </div>
      </div>

    </div>
  );
};

export default ChangePasswordComponent;
