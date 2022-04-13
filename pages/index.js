import Image from "next/image";
import styles from "../styles/Home.module.css";
import wc from "../src/images/wc.png";
import Walletsect from "../components/Walletsect";

export default function Home() {
  return (
    <div className="tracking-wide font-light px-5 md:w-8/10 mx-auto">
      <div className="text-center header">
        <div className="my-12">
          <h2 className="md:text-4xl font-bold my-7 tracking-wider">
            WalletConnect
          </h2>
          <h3 className="md:text-3xl my-1">
            Open Protocol for connecting wallets to Apps
          </h3>
        </div>
        <div className='w-8/15 mx-auto'>
          <Image src={wc} alt="wallet connect background image" />
        </div>
      </div>
      <div className="grid p-3 gap-x-2 md:py-5 md:px-6 md:gap-x-6 md:grid-cols-2">
        <div className="mx-auto">
          <h1 className="text-blue font-medium md:text-3xl my-2 mb-5">
            What is WalletConnect?
          </h1>
          <p className="md:text-lg">
            WalletConnect is an open source protocol for connecting
            decentralised applications to mobile wallets with QR code scanning
            or deep linking. A user can interact securely with any Dapp from
            their mobile phone, making WalletConnect wallets a safer choice
            compared to desktop or browser extension wallets.
          </p>
        </div>
        <div className="mx-auto">
          <h1 className="text-blue font-medium md:text-3xl my-2 mb-5">
            How does WalletConnect work?
          </h1>
          <p className="md:text-lg">
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
