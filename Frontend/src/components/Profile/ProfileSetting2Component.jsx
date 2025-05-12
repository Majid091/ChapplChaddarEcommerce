import React from "react";

const ProfileSetting2Component = () => {
  return (
    <div className="w-full h-full mt-16">
      <h1 className="font-bold text-2xl text-center">SETTING</h1>


      <div className=" mt-16 w-full">

        <h1 className="font-bold text-lg ml-20">ADD ADDRESS</h1>


        <div className="flex flex-col gap-8 mt-8 mx-20">

          <div className="flex gap-4 w-full">
            <input type="text" 
            placeholder="Full Name"
            className="border rounded-3xl w-1/2 placeholder:text-[10px]  px-4 py-2"
            />
            <input type="text" 
            placeholder="Phone Number"
            className="border rounded-3xl w-1/2 placeholder:text-[10px]  px-4 py-2"
            />
          </div>


          <div className="flex gap-4 w-full">
            <select className="bg-[#F0F0F0] w-1/2 rounded-3xl py-3 px-4 text-sm font-semibold text-gray-700 bg-white focus:outline-none focus:ring-2">
              <option value="">State</option>
              <option value="coupon10">Balochistan</option>
              <option value="coupon20">Gilgit-Baltistan</option>
              <option value="freeship">Sindh</option>
              <option value="freeship">Khyber Pakhtunkhwa</option>
            </select>

            <select className="bg-[#F0F0F0] w-1/2 rounded-3xl py-3 px-4 text-sm font-semibold text-gray-700 bg-white focus:outline-none focus:ring-2">
              <option value="">City</option>
              <option value="coupon10">Peshawar</option>
              <option value="coupon20">Rawal-Pindi</option>
              <option value="freeship">Charsadda</option>
              <option value="freeship">Faisal-Abad</option>
            </select>
          </div>

          <div className="flex gap-4 w-full">
            <select className="bg-[#F0F0F0] w-1/2 rounded-3xl py-3 px-4 text-sm font-semibold text-gray-700 bg-white focus:outline-none focus:ring-2">
              <option value="">Street</option>
              <option value="coupon10">Saddar</option>
              <option value="coupon20">Faiz-Abad</option>
              <option value="freeship">Mardan</option>
              <option value="freeship">Khyber</option>
              
            </select>

            <input type="text" 
            placeholder="Zip Code"
            className="border rounded-3xl w-1/2 placeholder:text-[10px]  px-4 py-2"
            />
          </div>


          <button className="font-bold text-xs text-white bg-[#FFBF3D] mx-80 mt-8 py-3 rounded-3xl cursor-pointer">
            ADD ADDRESS
          </button>


        </div>
      </div>
    </div>
  );
};

export default ProfileSetting2Component;
