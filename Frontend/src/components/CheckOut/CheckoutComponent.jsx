import React, { useState } from "react";
import image1 from "../../assets/chappal1.png";
import image3 from "../../assets/chappal2.png";

const CheckoutComponent = () => {
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
            discount: 120
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
            discount: 120
          },
        ]);

      const subtotal = Items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const shippingCharges = Items.reduce((acc, item) => acc + item.shippingCharges, 0);
      const discountValue = Items.reduce((acc, item) => acc + item.discount, 0);
      const total = subtotal + shippingCharges - discountValue;


  return (
    <div className="w-full h-full ">
      <h1 className="font-bold text-3xl text-center">CHECKOUT</h1>
      <div className="flex flex-col md:flex-row lg:flex-row m-8">
        {/* left box */}
        <div className="w-full md:w-[60%] lg:w-[60%] h-full flex flex-col gap-2 mx-20">
          <h1 className="font-bold text-2xl">Address</h1>

          <p className="font-bold text-xs mt-8">Contact</p>
          <input
            type="text"
            placeholder="Email/Phone Number"
            className="border rounded-3xl placeholder:text-[10px] items-center px-4 py-2"
          />

          <p className="mt-8 font-bold text-xs">Address</p>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="border rounded-3xl px-4 py-2 placeholder:text-[10px] items-center w-1/2"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="border rounded-3xl px-4 py-2 placeholder:text-[10px] items-center w-1/2"
            />
          </div>



          <div className="flex gap-4">
            <select className="bg-[#F4F4F4] w-1/2 rounded-3xl py-3 px-4 text-sm font-semibold text-gray-700 bg-white focus:outline-none focus:ring-2">
              <option value="">State</option>
              <option value="coupon10">Balochistan</option>
              <option value="coupon20">Gilgit-Baltistan</option>
              <option value="freeship">Sindh</option>
              <option value="freeship">Khyber Pakhtunkhwa</option>
              
            </select>

            <select className="bg-[#F4F4F4] w-1/2 rounded-3xl py-3 px-4 text-sm font-semibold text-gray-700 bg-white focus:outline-none focus:ring-2">
              <option value="">City</option>
              <option value="coupon10">Peshawar</option>
              <option value="coupon20">Rawal-Pindi</option>
              <option value="freeship">Charsadda</option>
              <option value="freeship">Faisal-Abad</option>
            </select>
          </div>



          <div className="flex gap-4">
            <select className="bg-[#F4F4F4] w-1/2 rounded-3xl py-3 px-4 text-sm font-semibold text-gray-700 bg-white focus:outline-none focus:ring-2">
              <option value="">Street</option>
              <option value="coupon10">Saddar</option>
              <option value="coupon20">Faiz-Abad</option>
              <option value="freeship">Mardan</option>
              <option value="freeship">Khyber</option>
              
            </select>

            <input
              type="text"
              placeholder="Full name"
              className="border rounded-3xl px-4 py-2 placeholder:text-[10px] items-center w-1/2"
            />

          </div>


          <h1 className="font-bold text-2xl mt-12">Payment</h1>

          <p className="font-bold text-sm mt-8">Payment Method</p>

          <select className="bg-[#F4F4F4] mt-4 w-full rounded-3xl py-3 px-4 text-sm font-semibold text-gray-700 bg-white focus:outline-none focus:ring-2">
              <option value="">Online</option>
              <option value="coupon10">Debut</option>
              <option value="coupon20">Cash On Delivery</option>
              <option value="freeship">EasyPaisa</option>
              <option value="freeship">JazzCash</option>
              
          </select>

        </div>

        {/* middle line */}
        <div className=" h-auto border-2 mx-4 hidden md:block lg:block"></div>

        {/* right box */}
        <div className="w-full md:w-[40%] lg:w-[40%] h-full">
          <h1 className="font-bold text-2xl ">ORDER SUMMARY</h1>

          <p className="font-bold text-sm mt-8">Items</p>
          <div className="flex flex-col gap-8 mt-4">
            {
              Items.map(item=>(
                <div className="flex gap-4">
                  <div className="w-25 h-25 bg-[#2F2F2F1A] rounded-2xl">
                    <img src={item.img} alt="Product image" />
                  </div>


                  <div className="flex flex-col gap-1 mt-2 mx-2">
                    <p className="font-semibold text-[8px]">{item.name}</p>
                    <p className="font-bold text-[10px]">{item.desc}</p>
                    <p className="text-[8px]">SIZE: {item.size}</p>
                    <p className="text-[8px]">COLOR: {}</p>
                    <p className="text-[10px] font-bold">RS. {item.price}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="flex justify-between mx-4 mt-16">
              <div className="flex flex-col gap-4">
                <p className="font-semibold">SubTotal</p>
                <p className="font-semibold">Shipping Charges</p>
                <p className="font-semibold">Discount</p>
                <p className="font-bold text-lg mt-8">Total</p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-bold">{subtotal}</p>
                <p className="font-bold">{shippingCharges}</p>
                <p className="font-bold">{discountValue}</p>
                <p className="font-bold text-lg mt-8 text-[#FFBF3D]">RS. {total}</p>
              </div>
          </div>

          <div className="my-4 border-2 w-5/6 mx-auto mt-12"></div>

          <p className="font-bold mx-4 ">Arrival Time: 24 Hours</p>

        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
