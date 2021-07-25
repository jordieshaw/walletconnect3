import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Tabs({ children }) {
  const [text, settext] = useState("");

  return (
    <div className="tracking-wider px-2 md:px-16">
      <h1 className="text-2xl my-5 font-normal tracking-widest text-center">
        Import Wallet
      </h1>

      <div className="w-full md:w-8/10 mx-auto my-5 text-sm">
        <div className="capitalize flex justify-between items-center font-light border-b-2 border-blue-100">
          <div className={`${styles.tabMenu} border-b-2`}>
            <Link href="/tabs/phrase">Phrase</Link>
          </div>
          <div className={styles.tabMenu}>
            <Link href="/tabs/keystone">Keystone Json</Link>
          </div>
          <div className={styles.tabMenu}>
            <Link href="/tabs/key">private key</Link>
          </div>
        </div>
        <div className='my-4 text-center px-4'>
        {children}

        </div>
      </div>
    </div>
  );
}
