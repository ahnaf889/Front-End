import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItem = [
    {
      id: 1,
      item: "Home",
    },
    {
      id: 2,
      item: "Contact",
    },
    {
      id: 3,
      item: "About",
    },
    {
      id: 4,
      item: "Sign Up",
    },
  ];
  return (
    <div className="pt-10 pb-4 border-b-[1px] border-b-black border-opacity-30">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <h1 className="font-Inter text-2xl text-Text2__color font-bold">
              Exclusive
            </h1>
          </div>
          <div>
            <ul className="flex items-center gap-x-12">
              {navItem?.map((nav) => (
                <li key={nav.id} className="menuUnderLine">
                  <NavLink
                    to={`/${nav.item}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "bg-red-700"
                        : isPending
                        ? "bg-red-500"
                        : "font-Poppins font-normal text-base text-Text2__color"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
