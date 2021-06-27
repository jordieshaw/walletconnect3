import React from "react";
import Image from 'next/image'
import socials from '../src/images/socials.svg'

function Footer() {
  return (
    <div className="bg-darkblue px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-x-5 tracking-wider py-4 text-white text-sm">
      <div className="">
        <div className="uppercase my-2">Contact us</div>
        <div className='my-2'>
            <Image src={socials} alt='' />
        </div>
        <div className="text-turquoise my-2">
          Copyright © 2021- WalletConnect. All rights reserved.
        </div>
      </div>
      <div className="flex items-end">
        <div className="my-2">
          Disclaimer | Terms of use | Copyright Notice | Privacy policy
        </div>
      </div>
    </div>
  );
}

export default Footer;
