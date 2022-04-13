import React, { useContext } from "react";
import Image from 'next/image'
import discord from '../src/images/discord.svg'
import twitter from '../src/images/twitter.svg'
import github from '../src/images/github.svg'
import { BsMoonStars } from 'react-icons/bs'
import { appTheme } from "../pages/_app";
import { MdOutlineWbSunny } from 'react-icons/md'

function Footer() {
  const { theme, setTheme } = useContext(appTheme)

  const toggleTheme = () => {
    setTheme(curr => curr === "light" ? 'dark' : 'light')
  }
  return (
    <div className="md:w-5/10 mx-auto p-10 md:p-20 text-xl header flex items-center capitalize justify-around">
      <div className='flex items-center'>
        <Image src={discord} alt='' />
        <div className='mx-2'>discord</div>
      </div>
      <div className='flex items-center'>
        <Image src={twitter} alt='' />
        <div className='mx-2'>twitter</div>
      </div>
      <div className='flex items-center'>
        <Image src={github} alt='' />
        <div className='mx-2'>github</div>
      </div>
      <div className='flex items-center'>
        <div className='p-2 px-4 rounded-lg footer shadow' onClick={toggleTheme}>
          {theme === 'dark' ? <BsMoonStars className='text-2xl' /> : <MdOutlineWbSunny className='text-2xl' />}
        </div>


      </div>
    </div>
  );
}

export default Footer;
