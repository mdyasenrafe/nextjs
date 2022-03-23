import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className=" flex justify-between items-center max-w-5xl m-auto">
        <div>
          <img
            width="150px"
            height="50px"
            src="https://i.ibb.co/r4gYqhs/85073c9c-aa4d-490a-8764-eefc0934057a.jpg"
            alt=""
          />
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
            <button class="bg-[#2C4BFF] p-3 rounded-lg font-normal text-white  w-[150px]">
              Get Early Access
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
