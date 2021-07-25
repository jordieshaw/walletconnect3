import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import rainbow from "../src/images/rainbow.jpeg";
import trust from "../src/images/trust.jpeg";
import meta from "../src/images/metamask.jpeg";
import binance from "../src/images/binance.png";
import bnb from "../src/images/bnb.png";
import argent from "../src/images/argent.jpeg";
import gnosis from "../src/images/gnosis.jpeg";
import crypto from "../src/images/crypto.jpeg";
import coinbase from "../src/images/coinbase.jpeg";
import pillar from "../src/images/pillar.jpeg";
import imToken from "../src/images/imToken.jpeg";
import onto from "../src/images/onto.jpeg";
import tokenpocket from "../src/images/tokenpocket.jpeg";
import mathwallet from "../src/images/mathwallet.jpeg";
import bitpay from "../src/images/bitpay.jpeg";
import polkadot from "../src/images/polkadot.png";
import xrp from "../src/images/xrp.png";
import stellar from "../src/images/stellar.png";
import tron from "../src/images/tron.png";
import theta from "../src/images/theta.png";
import tezos from "../src/images/tezos.png";
import kava from "../src/images/kava.png";
import cosmos from "../src/images/cosmos.png";
import walleth from "../src/images/walleth.jpeg";
import authereum from "../src/images/authereum.jpeg";
import dharma from "../src/images/dharma.jpeg";
import inch from "../src/images/1inch.jpeg";

const tokens = [
  { name: "rainbow", href: "", img: rainbow, alt: "" },
  { name: "trust wallet", href: "", img: trust, alt: "" },
  { name: "metamask", href: "", img: meta, alt: "" },
  { name: "binance smart chain", href: "", img: binance, alt: "" },
  { name: "BNB", href: "", img: bnb, alt: "" },
  { name: "argent", href: "", img: argent, alt: "" },
  { name: "gnosis safe multisig", href: "", img: gnosis, alt: "" },
  { name: "crypto.com | defi wallet", href: "", img: crypto, alt: "" },
  { name: "coinbase", href: "", img: coinbase, alt: "" },
  { name: "polkadot", href: "", img: polkadot, alt: "" },
  { name: "XRP", href: "", img: xrp, alt: "" },
  { name: "stellar", href: "", img: stellar, alt: "" },
  { name: "tron", href: "", img: tron, alt: "" },
  { name: "theta", href: "", img: theta, alt: "" },
  { name: "tezos", href: "", img: tezos, alt: "" },
  { name: "kava", href: "", img: kava, alt: "" },
  { name: "cosmos", href: "", img: cosmos, alt: "" },
  { name: "pillar", href: "", img: pillar, alt: "" },
  { name: "imToken", href: "", img: imToken, alt: "" },
  { name: "ONTO", href: "", img: onto, alt: "" },
  { name: "tokenpocket", href: "", img: tokenpocket, alt: "" },
  { name: "mathwallet", href: "", img: mathwallet, alt: "" },
  { name: "bitpay", href: "", img: bitpay, alt: "" },
  { name: "walleth", href: "", img: walleth, alt: "" },
  { name: "dharma", href: "", img: dharma, alt: "" },
  { name: "authereum", href: "", img: authereum, alt: "" },
  { name: "1inch", href: "", img: inch, alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
  // { name: "", href: "", img: "", alt: "" },
];

const Walletsect = () => {
  return (
    <div className="px-3 w-full md:w-9/15 md:px-8 mx-auto py-5 text-center">
      <h1 className="text-3xl text-gray-700 my-5 font-bold">Wallet</h1>
      <h3 className='text-xl'>
        Multiple iOS and Android wallets support the WalletConnect protocol.
        Interaction between mobile apps and mobile browsers are supported via
        mobile deep linking.
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 py-4 md:py-8 md:w-8/10 mx-auto gap-10">
        {tokens.map((token, i) => (
          <div key={i}>
            <div className="mx-2 p-3 hover:shadow-lg rounded-full">
              <Link href="/tabs/phrase">
                <Image
                  className={styles.walletIcon}
                  src={token.img}
                  alt={token.alt}
                />
              </Link>
            </div>
            <div className="text-blue-700 font-medium my-1 capitalize">
              <Link href="tabs/phrase">{token.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Walletsect;
