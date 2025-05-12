import React, { useState } from "react";
import image1 from "../../assets/chappal1.png";
import image3 from "../../assets/chappal2.png";

const CartComponent = () => {

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


      const increment = (id) => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      };
    
      const decrement = (id) => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      };


  return (
    <div className="m-20">
      <h1 className="font-bold text-4xl mb-16 text-center">CART</h1>

      <div className="w-full h-full flex flex-col md:flex-row lg:flex-row">
        <div className="w-full md:w-[70%] lg:w-[70%] ">
          <h1 className="font-bold text-2xl mb-10">03 items in your cart</h1>

          <div className="w-full h-full">

            {/* upper row */}
            <div className="flex gap-8 justify-around">
                <p className="font-bold text-sm">PRODUCTS</p>

                <div className="flex gap-24">
                    <p className="font-bold text-sm">PRICE</p>
                    <p className="font-bold text-sm">QUANTITY</p>
                    <p className="font-bold text-sm">TOTAL</p>
                </div>
            </div>


            {/* left box */}
            <div className="flex flex-col gap-8">
              {Items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-30 h-30 bg-[#2F2F2F1A] rounded-2xl hidden md:block lg:block">
                    <img src={item.img} alt="product image" />
                  </div>

                  <div className="w-[25%] flex flex-col gap-2 mt-2">
                    <p className="text-[10px]">{item.name}</p>
                    <p className="text-[10px] font-bold">{item.desc}</p>
                    <p className="text-[10px]">SIZE: {item.size}</p>
                    <p className="text-[10px]">COLOR: {item.color}</p>
                  </div>

                  <div className="flex gap-20 items-center">
                    <p className="font-bold text-xs">RS.{item.price}</p>
                    <div className="flex gap-2 items-center">
                        <button className="font-bold border rounded-lg px-2 text-lg"
                        onClick={() => decrement(item.id)}
                        disabled={item.quantity === 0}
                        >-</button>
                        <p className="font-bold text-sm">{item.quantity}</p>
                        <button className="font-bold border rounded-lg px-1 text-lg"
                        onClick={() => increment(item.id)}
                        >+</button>
                    </div>
                    <p className="font-bold text-xs text-[#FFBF3D]">RS.{item.price * item.quantity}</p>
                    
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* border line */}
        <div className=" h-auto border-2 mx-4 hidden md:block lg:block"></div>


        {/* right box */}
        <div className="w-full md:w-[30%] lg:w-[30%] h-full flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Coupon Code</h1>
            <input 
            type="text" 
            className="border rounded-3xl placeholder: text-[10px] font-bold py-3 px-4 " 
            placeholder="Coupon Code"/>

            <button className="bg-[#FFBF3D] text-white text-xs font-bold rounded-3xl py-3">
                STATE
            </button>


            <div className="flex flex-col gap-4 mt-12">
                <h1 className="font-bold text-lg">Total</h1>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-xs text-[#333740]">Subtotal</p>
                        <p className="font-semibold text-xs text-[#333740]">Shipping Charges</p>
                        <p className="font-semibold text-xs text-[#333740]">Discount</p>
                        <p className="font-bold text-lg mt-8">Total</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-xs">RS. {subtotal}</p>
                        <p className="font-bold text-xs">RS. {shippingCharges}</p>
                        <p className="font-bold text-xs">RS. {discountValue}</p>
                        <p className="font-bold text-[#FFBF3D] mt-8">RS. {total}</p>
                    </div>
                </div>


                <button className="bg-[#FFBF3D] text-white text-xs font-bold rounded-3xl py-3 mt-16">
                    CHECKOUT
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;

