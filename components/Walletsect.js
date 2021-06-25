import React from "react";
import Cardicon from "./Cardicon";

const Walletsect = () => {
  return (
    <div className="px-10 w-9/15 mx-auto py-5 text-center">
      <h1 className="text-2xl my-5 font-extrabold">Wallet</h1>
      <h3>
        {" "}
        Multiple iOS and Android wallets support the WalletConnect protocol.
        Interaction between mobile apps and mobile browsers are supported via
        mobile deep linking.{" "}
      </h3>
      <div className='grid grid-cols-7 py-8 gap-4'>
          <Cardicon />
          <Cardicon />
          <Cardicon />
          <Cardicon />
          <Cardicon />
          <Cardicon />
          <Cardicon />
          <Cardicon />
          <Cardicon />
          <Cardicon />
          <Cardicon />
          <Cardicon />

      </div>
    </div>
  );
};

export default Walletsect;
