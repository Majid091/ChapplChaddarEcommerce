import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import image1 from "../../assets/chappal1.png";
import image3 from "../../assets/chappal2.png";

const AddReviewComponent = () => {
  const Items = [
    {
      id: 1,
      img: image1,
      desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
      price: 4500,
      rating: 4.5,
      size: "38",
      color: "Browen",
      name: "Chappal",
      quantity: 1,
      shippingCharges: 200,
      discount: 120,
    },
  ];

  return (
    <div className="w-full h-full my-16">
      <h1 className="font-bold text-2xl text-center">ADD REVIEW</h1>

      <div className="flex flex-col md:flex-row lg:flex-row w-full my-16 gap-8 ">
        {/* left box */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col gap-8 mx-16">
          <h1 className="font-bold text-lg">REVIEW</h1>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-sm">Rating</p>
            <div className="flex gap-1">
              <CiStar size={35}/>
              <CiStar size={35}/>
              <CiStar size={35}/>
              <CiStar size={35}/>
              <CiStar size={35}/>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-sm">Review</h1>
            <textarea 
            name="review" 
            id="1" 
            placeholder="Write about products..."
            className="border rounded-4xl h-50 w-full placeholder:text-xs px-6 py-4"
            >
            </textarea>
          </div>

          <button className="text-sm bg-[#FFBF3D] text-white w-2/3 py-2 rounded-3xl mt-20">
          ADD REVIEW
          </button>
        </div>

        {/* middle line */}
        <div className="border hidden md:block lg:block"></div>

        {/* right box */}
        <div className="w-full md:w-1/2 lg:w-1/2 mx-16 flex flex-col gap-16">
          <h1 className="font-bold text-lg">PRODUCTS</h1>

          <div className="mx-8">
            {Items.map((item) => (
              <div key={item.id} className="flex justify-center items-center gap-4">
                <div className="bg-[#EBEBEB] w-45 h-40 rounded-3xl">
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-xs">{item.name}</p>
                  <p className="font-bold text-sm">{item.desc}</p>
                  <p className="font-bold text-[10px]">SIZE:{item.size}</p>
                  <p className="font-bold text-[10px]">COLOR{item.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviewComponent;
