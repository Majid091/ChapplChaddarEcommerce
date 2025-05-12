import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ProfileSetting1Component = () => {

    const [selected, setSelected] = useState("option1");

  return (
    <div className="w-full h-full mt-16">
      <h1 className="font-bold text-2xl text-center">SETTING</h1>
      <div className="flex flex-col gap-4 m-20">
        <h1 className="font-bold text-lg">MY ADDRESS</h1>
        <div className="flex flex-col gap-8 bg-[#F0F0F0] w-2/5 rounded-3xl p-4 mx-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="option"
              value="option1"
              checked={selected === "option1"}
              onChange={() => setSelected("option1")}
              className="form-radio text-blue-600"
            />
            <div className="flex flex-col mt-8">
               <p className="text-xs font-bold">Majid Khan</p>
               <p className="text-xs">(+92)333*******92</p>
               <p className="text-xs">Majid123*******@gmail.com</p>
            </div>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="option"
              value="option2"
              checked={selected === "option2"}
              onChange={() => setSelected("option2")}
              className="form-radio text-green-600"
            />
            <div className="flex flex-col mt-8">
               <p className="text-xs font-bold">Majid Khan</p>
               <p className="text-xs">(+92)333*******92</p>
               <p className="text-xs">Majid123*******@gmail.com</p>
            </div>
          </label>
        </div>

        <NavLink to={'/profile-setting2'}><p className="text-[#FFBF3D] font-semibold cursor-pointer mx-8 cursor-pointer"><span className="font-bold text-2xl">+</span>Add another address</p></NavLink>
      </div>
    </div>
  );
};

export default ProfileSetting1Component;
