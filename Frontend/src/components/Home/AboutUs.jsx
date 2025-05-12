import React from "react";
import aboutus from "../../assets/aboutus.png";

const AboutUs = () => {
  return (
    <div className="w-full h-screen flex p-8">
      <img src={aboutus} alt="about us image" className="w-auto h-130" />

      <div className="mt-16 px-12">
        <h1 className="font-bold text-2xl">ABOUT US</h1>

        <p className="font-bold uppercase mt-8">We are Peshawari Chappal & Peshawari Chaddar Shop since 1998. We are Peshawari Chappal & Peshawari Chaddar Shop since 1998</p>

        <p className="mt-8 uppercase text-sm">
          Lorem ipsum dolor sit amet consectetur. Amet ultricies vitae mattis
          at. Malesuada viverra orci ut tellus duis etiam mauris leo volutpat.
          Dictumst dictumst laoreet sit viverra et. Et condimentum vivamus
          aliquet quis penatibus mauris pretium mauris.
        </p>

        <p className="mt-8 uppercase text-sm">
          Lorem ipsum dolor sit amet consectetur. Amet ultricies vitae mattis
          at. Malesuada viverra orci ut tellus duis etiam mauris leo volutpat.
        </p>

        <button className="mt-16 bg-[#FFBF3D] rounded-4xl text-white text-xs font-bold px-15 py-2">
            MORE ABOUT US
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
