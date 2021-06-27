import React from "react";
import Link from "next/link";
import style from "../styles/Layout.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className="h-24 grid grid-cols-8 text-gray-600 font-normal p-1 md:px-12">
        <div className="col-span-1 md:col-span-2"></div>
        <div className="col-span-8 md:col-span-4 flex justify-evenly px-3 md:px-10 items-center">
          <Link href="/">
            <a className="hover:text-black">Wallet</a>
          </Link>
          <Link href="/">
            <a className="hover:text-black">Docs</a>
          </Link>
          <Link href="/">
            <a className="hover:text-black">Apps</a>
          </Link>
          <Link href="/">
            <a className="hover:text-black">Github</a>
          </Link>
        </div>
        <div className="col-span-8 md:col-span-2 my-2 flex justify-center items-center">
          <input
            className="rounded-full border font-light text-sm w-7/10 border-gray-200 py-1 px-4 focus:outline-none"
            type="search"
            placeholder="search wallet"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
