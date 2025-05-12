import React, { useState } from "react";
import image1 from "../../assets/chappal1.png";
import image3 from "../../assets/chappal2.png";
import { NavLink } from "react-router-dom";

const Order1Component = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const renderContent = () => {
    switch (activeTab) {
      case "pending":
        return (
          <>
            {/* Element list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-16 gap-16">
              {Items.map((item) => (
                <div key={item.id} 
                className="flex gap-4 bg-[#363844] rounded-4xl p-4">
                  <div className="w-30 h-35 bg-[#6D5E54] rounded-3xl place-items-center">
                    <img src={item.img} alt={item.name}/>
                  </div>

                  <div className="flex justify-center items-center text-white gap-4 px-4">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-[10px]">{item.name}</p>
                      <p className="font-bold text-bold text-xs">{item.desc}</p>
                      <p className="text-[10px]">SIZE: {item.size}</p>
                      <p className="text-[10px]">COLOR: {item.color}</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg">RS.{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "completed":
        return (
            <>
              {/* Element list */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-16 gap-16">
                {Items.map((item) => (
                  <div key={item.id} 
                  className="flex gap-4 bg-[#363844] rounded-4xl p-4">
                    <div className="w-30 h-35 bg-[#6D5E54] rounded-3xl place-items-center">
                      <img src={item.img} alt={item.name}/>
                    </div>
  
                    <div className="flex justify-center items-center text-white gap-4 px-2">

                        {/* left side */}
                      <div className="flex flex-col gap-2">
                        <p className="font-semibold text-[10px]">{item.name}</p>
                        <p className="font-bold text-bold text-xs">{item.desc}</p>
                        <p className="text-[10px]">SIZE: {item.size}</p>
                        <p className="text-[10px]">COLOR: {item.color}</p>
                      </div>

                        {/* right side */}
                      <div className="flex flex-col jutify-center items-center gap-4 my-4 w-full">
                        <p className="font-bold text-sm">RS.{item.price}</p>
                        <NavLink to={'/order-review'} key={item.id}>
                        <button className="font-bold text-[10px] bg-[#FFBF3D] rounded-2xl px-3 py-2">
                            ADD REVIEW
                        </button>
                        </NavLink>

                        <NavLink to={'/order-detail'}>
                        <button className="font-bold text-[10px] bg-white text-[#FFBF3D] rounded-2xl px-3 py-2">
                            VIEW DETAILS
                        </button>
                        </NavLink>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          );
      case "cancelled":
        return (
            <>
              {/* Element list */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-16 gap-16">
                {Items.map((item) => (
                  <div key={item.id}
                  className="flex gap-4 bg-[#363844] rounded-4xl p-4">
                    <div className="w-30 h-35 bg-[#6D5E54] rounded-3xl place-items-center">
                      <img src={item.img} alt={item.name}/>
                    </div>
  
                    <div className="flex justify-center items-center text-white gap-4 px-4">
                      <div className="flex flex-col gap-2">
                        <p className="font-semibold text-[10px]">{item.name}</p>
                        <p className="font-bold text-bold text-xs">{item.desc}</p>
                        <p className="text-[10px]">SIZE: {item.size}</p>
                        <p className="text-[10px]">COLOR: {item.color}</p>
                      </div>
                      <div className="flex flex-col jutify-center items-center gap-4 my-4 w-full">
                        <p className="font-bold text-sm">RS.{item.price}</p>
                        <NavLink to={'/order-detail'}>
                        <button className="font-bold text-[10px] bg-[#FFBF3D] rounded-2xl px-3 py-2">
                            VIEW DETAILS
                        </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          );
      default:
        return null;
    }
  };

  const [Items, setItems] = useState([
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
    {
      id: 2,
      img: image3,
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
    {
      id: 3,
      img: image3,
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
  ]);

  return (
    <div className="w-full h-full my-20">
      <h1 className="font-bold text-2xl text-center">ORDER</h1>
      <div className="w-full mt-16">
        <div className="flex w-1/2 justify-evenly">

          {["pending", "completed", "cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`uppercase font-medium transition duration-300 cursor-pointer ${
                activeTab === tab
                  ? "text-lg font-bold text-yellow-500"
                  : "text-gray-500 text-base normal-case"
              }`}
            >
             
              {tab}
            </button>
            
          ))}
          
        </div>
        {/* Line behind the states */}
        <div className="border mx-20"></div>

        <div>
            {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Order1Component;
