import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import wc from "../src/images/wc.svg";
import Walletsect from "../components/Walletsect";

export default function Home() {
  return (
    <div className="tracking-wider font-normal">
      <div className="text-center">
        <h2 className="text-xl md:text-4xl font-extrabold my-5 tracking-widest">
          WalletConnect
        </h2>
        <h3 className="text-lg md:text-2xl my-1 tracking-widest">
          Open Protocol for connecting wallets to Apps
        </h3>
        <Image src={wc} alt="wallet connect background image" />
      </div>
      <div className="grid p-3 gap-x-2 md:py-5 md:px-12 md:gap-x-6 grid-cols-2">
        <div className='w-9/10 mx-auto'>
          <h1 className="text-blue text-lg md:text-2xl my-2 mb-5">
            What is WalletConnect?
          </h1>
          <p className="text-sm md:text-base">
            WalletConnect is an open source protocol for connecting
            decentralised applications to mobile wallets with QR code scanning
            or deep linking. A user can interact securely with any Dapp from
            their mobile phone, making WalletConnect wallets a safer choice
            compared to desktop or browser extension wallets.
          </p>
        </div>
        <div className='w-9/10 mx-auto'>
          <h1 className="text-blue text-lg md:text-2xl my-2 mb-5">
            How does WalletConnect work?
          </h1>
          <p className="text-sm md:text-base">
            WalletConnect connects web applications to supported mobile wallets.
            WalletConnect session is started by a scanning a QR code (desktop)
            or by clicking an application deep link (mobile).
          </p>
        </div>
      </div>
      <Walletsect />
    </div>
  );
}
