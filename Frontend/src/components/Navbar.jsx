import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const NavItems = [
    {label: "HOME", path: '/'},
    {label: "PRODUCTS", path: '/product'},
    {label: "FAVORITES", path: '/favorite-products'},
    {label: "NEW ARRIVALS", path: '/new-arrival'},
    {label: "MOST POPULAR", path: '/product'},
    {label: "ABOUT US", path: '/about'},
  ]

  return (
    <nav className="flex justify-around items-center bg-gray-600 w-full py-5">
      <h1 className="font-bold text-yellow-400 text-2xl">LOGO</h1>

      <ul className="flex gap-5 text-xs font-bold text-white ">
        {
          NavItems.map(({label, path})=>(
            <li key={path}
            className="hover:text-[#FFBF3D] cursor-pointer"
            >
              <NavLink
              to={path}
              className={({isActive})=>
              isActive? "text-[#FFBF3D]" : "hover:text-[#FFBF3D]"
              }
              >
                {label}
              </NavLink>

            </li>
          ))
        }
      </ul>

      <div className="flex gap-5">
        <NavLink to={'/login'}><button className="font-bold text-yellow-500 text-xs border rounded-2xl px-4 py-1">LOGIN</button></NavLink>
        <NavLink to={'/registration'}><button className="rounded-2xl px-4 py-1 text-white text-xs font-bold bg-yellow-500">SIGN UP</button></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
