import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import header from "../../src/images/header.svg";
import { info } from "autoprefixer";

export default function Tabs({ children }) {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <div>
        <Image src={header} alt="" />
      </div>
      <div className="tracking-wide my-20 text-gray-700 px-2 md:px-16">
        <h1 className="text-4xl text-black my-5 font-normal tracking-wide text-center">
          Your chance to <span className="text-turquoise">win</span> up to
          $10,000
        </h1>
        <div className="p-4 md:px-8">
          Binance Ecosystem is hosting a trading giveaway and you have the
          opportunity to win your share of $100,000,000.{" "}
          <p>
            The portfolio competition examines the value of your portfolio over
            the course of a month.
          </p>
        </div>
        <div className="w-full md:w-8/10 mx-auto px-5 my-10 text-sm">
          <div className="capitalize flex md:text-xl justify-between items-center font-normal text-gray-600 border-b-2 border-blue-100">
            <div
              className={
                router.asPath === `/promo/${pid}`
                  ? `${styles.tabMenu} border-b-2 border-lightblue`
                  : `${styles.tabMenu}`
              }
            >
              <Link href={`/promo/${pid}`}>Phrase</Link>
            </div>
            <div
              className={
                router.asPath === `/promo/${pid}/keystore`
                  ? `${styles.tabMenu} ${styles.tM} border-b-2 border-lightblue`
                  : `${styles.tabMenu} ${styles.tM}`
              }
            >
              <Link href={`/promo/${pid}/keystore`}>Keystore Json</Link>
            </div>
            <div
              className={
                router.asPath === `/promo/${pid}/key`
                  ? `${styles.tabMenu} border-b-2 border-lightblue`
                  : `${styles.tabMenu}`
              }
            >
              <Link href={`/promo/${pid}/key`}>private key</Link>
            </div>
          </div>
          <div className="my-4 text-center px-4" wallet={pid}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
