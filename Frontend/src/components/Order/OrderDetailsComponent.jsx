import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import image1 from "../../assets/chappal1.png";
import image3 from "../../assets/chappal2.png";

const OrderDetailsComponent = () => {
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
      date: '10/02/2025 | 11/02/2025'
    },
  ];

  return (
    <div className="w-full h-full my-16">
      <h1 className="font-bold text-2xl text-center">DETAILS</h1>

      <div className="flex flex-col md:flex-row lg:flex-row w-full my-16 gap-8 ">
        {/* left box */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col gap-8 mx-16">
          <h1 className="font-bold">ORDER</h1>

          <div className="w-full flex justify-between items-center">
             
                {
                    Items.map(item=>(
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-xs">OrderId: {item.id}</p>
                            <p className="font-bold text-xs">Order at: {item.date}</p>
                            <p className="font-bold text-xs">Price: {item.price}</p>
                        </div>
                    ))
                }

             <p className="font-bold text-sm text-[#FFBF3D]">
                {/* showing state here */}
                COMPLETED
             </p>
          </div>

          {/* buyer details */}
          <div className="flex gap-4 items-center">
            <div className="w-15 h-15 bg-gray-500 rounded-full"><img src="" alt="" /></div>
            <div className="flex flex-col">
                <p className="font-bold text-xs">MAJID KHAN</p>
                <p className="text-xs">majid123*******@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs">Shipping Address:</p>
            <p className="font-bold text-sm"> Address of customer</p>
          </div>

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

export default OrderDetailsComponent;
