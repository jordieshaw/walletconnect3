import React from "react";
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

const Navbar = () => {
  return (
    <div>
      <nav className="h-24 grid grid-cols-8 text-gray-600 font-normal py-1 px-12">
        <div className='col-span-2'></div>
          <div className='col-span-4 flex justify-evenly px-10 items-center'>
            <Link href='/'>Wallet</Link>
            <Link href='/about'>Docs</Link>
            <Link href='/docs'>Apps</Link>
            <Link href='/git'>Github</Link>
          </div>
          <div className='col-span-2 flex justify-center items-center'>
            <input className='rounded-full border border-gray-200 py-1 px-4 focus:outline-none' type='search' placeholder='search wallet' />
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
