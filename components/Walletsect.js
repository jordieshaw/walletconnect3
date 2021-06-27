import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import bnb from "../src/images/bnb.svg";
import busd from "../src/images/busd.svg";
import eth from "../src/images/eth.svg";
import theta from "../src/images/theta.svg";
import trx from "../src/images/trx.svg";
import atom from "../src/images/atom.svg";
import mew from "../src/images/mew.svg";
import meta from "../src/images/meta.svg";
import coin from "../src/images/coin.svg";
import stellar from "../src/images/stellar.svg";
import pancake from "../src/images/pancake.svg";
import tez from "../src/images/tez.svg";
import xrp from "../src/images/xrp.svg";
import arr from "../src/images/arr.svg";
import Link from "next/link";
import Morecoins from "./Morecoins";

// const Button = React.forwardRef(( {onClick, href}, ref)=> {
//     return (
//         <a href={href} onClick={onClick} ref={ref}>
//             <Image />
//         </a>
//     )
// })
const Walletsect = () => {
  const [morecoins, setMorecoins] = useState(false);
  const [moreBtn, setmoreBtn] = useState(true);

  const showMoreIcons = () => {
    setMorecoins(!morecoins);
    setmoreBtn(!moreBtn);
  };
  return (
    <div className="px-3 w-full md:w-9/15 md:px-8 mx-auto py-5 text-center">
      <h1 className="text-2xl my-5 font-extrabold">Wallet</h1>
      <h3>
        {" "}
        Multiple iOS and Android wallets support the WalletConnect protocol.
        Interaction between mobile apps and mobile browsers are supported via
        mobile deep linking.{" "}
      </h3>
      <div className="grid grid-cols-4 md:grid-cols-7 py-4 md:py-8 gap-x-4">
        <Link href="/tabs" passHref>
          <Image src={bnb} alt="" />
        </Link>
        <Link href="/tabs">
          <Image src={busd} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={eth} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={theta} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={trx} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={atom} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={mew} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={meta} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={stellar} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={pancake} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={tez} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={xrp} alt="" />
        </Link>

        <Link href="/tabs">
          <Image src={coin} alt="" />
        </Link>
      </div>
      {morecoins && <Morecoins />}

      <button
        onClick={showMoreIcons}
        className="bg-darkblue p-2 px-5 text-white uppercase rounded-xl shadow-lg w-full focus:outline-none focus:ring-1 focus:ring-darkblue flex items-center justify-center mx-2"
      >
        {" "}
        {moreBtn ? (
          <div className='flex items-center justify-center'>
            see more coins{" "}
            <FontAwesomeIcon
              className="animate-bounce w-4 mx-4"
              icon={faArrowDown}
            />
          </div>
        ) : (
          <div className='flex items-center justify-center'>
            see less coins{" "}
            <FontAwesomeIcon
              className="animate-bounce w-4 mx-4"
              icon={faArrowUp}
            />
          </div>
        )}{" "}
      </button>
    </div>
  );
};

export default Walletsect;
