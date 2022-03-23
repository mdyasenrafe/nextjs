import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-[#FFFFFF] py-3 px-6 shadow-lg sticky top-0">
      <nav className="flex justify-between items-center m-auto">
        <div>
          <a href="#">
            <img
              width="150px"
              height="50px"
              src="https://i.ibb.co/r4gYqhs/85073c9c-aa4d-490a-8764-eefc0934057a.jpg"
              alt=""
            />
          </a>
        </div>
        <ul className="hidden md:flex justify-between">
          <li>
            <a href="#skip-the-hassle" className="mx-4">
              Skip the Hassle
            </a>
          </li>
          <li>
            <a href="#cruise-through-backend">Cruise through backend</a>
          </li>
        </ul>
        <ul>
          <li>
            <button className="bg-[#2C4BFF] p-3 rounded-lg font-normal text-white  w-[150px]">
              <a href="#get-early-acess"> Get Early Access</a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
