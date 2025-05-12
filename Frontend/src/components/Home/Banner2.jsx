import React from "react";
import banner2 from "../../assets/banner2.png";

const Banner2 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner2})` }}
      className="w-full h-auto"
    >
      <div className="w-full h-140 p-28">
        <p className="font-bold text-2xl w-2/6 text-[#FFBF3D]">
          Experience the best with our Premium Quality Collections—crafted fort
          hose who seek excellence
        </p>

        <button className="bg-[#FFBF3D] text-white font-bold text-[10px] px-17 py-2 rounded-2xl mt-8">SHOP NOW</button>

      </div>


    </div>
  );
};

export default Banner2;
