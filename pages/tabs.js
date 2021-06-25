import React, { useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import styles from "../styles/Home.module.css";

export default function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  const [text, settext] = useState('')

  return (
    <div className="tracking-wider px-16">
      <div className="my-5">
        <h1 className="text-2xl font-normal tracking-widest text-center">Import Wallet</h1>
      </div>

      <div className={styles.tabs}>
        <Tab>
          <TabList color="lightBlue">
            <TabItem
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              ripple="light"
              active={openTab === 1 ? true : false}
              href="tabItem"
            >
              Discover
            </TabItem>
            <TabItem
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              ripple="light"
              active={openTab === 2 ? true : false}
              href="tabItem"
            >
              Profile
            </TabItem>
            <TabItem
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              ripple="light"
              active={openTab === 3 ? true : false}
              href="tabItem"
            >
              Settings
            </TabItem>
          </TabList>

          <TabContent>
            <TabPane active={openTab === 1 ? true : false}>
              <textarea value={text} onChange={(e)=> settext(e.target.value)} placeholder='Phrase is typically 12 (sometimes 24) words separated by single spaces' className='resize-none h-28 w-9/10 mx-auto p-5 focus:outline-none text-gray-700 font-light focus:ring-1 focus:ring-darkblue border border-darkblue rounded-xl' />
              <button className='bg-darkblue w-9/10 mx-auto text-center my-5 rounded-lg text-white py-1.5 '>import</button>
            </TabPane>
            <TabPane active={openTab === 2 ? true : false}>
            <textarea value={text} onChange={(e)=> settext(e.target.value)} placeholder='Keystore JSON is Several lines of text beginning with "(...)" ' className='resize-none h-28 w-9/10 mx-auto p-5 focus:outline-none text-gray-700 font-light focus:ring-1 focus:ring-darkblue border border-darkblue rounded-xl' />
            <textarea value={text} onChange={(e)=> settext(e.target.value)} placeholder='Keystore JSON is Several lines of text beginning with "(...)" ' className='resize-none h-14 w-9/10 mx-auto p-5 focus:outline-none text-gray-700 font-light focus:ring-1 focus:ring-darkblue border border-darkblue rounded-xl' />

              <button className='bg-darkblue w-9/10 mx-auto text-center my-5 rounded-lg text-white py-1.5 '>import</button>
            </TabPane>
            <TabPane active={openTab === 3 ? true : false}>
            <textarea value={text} onChange={(e)=> settext(e.target.value)} placeholder='Private Key is typically 12 (sometimes 24) words separated by single spaces' className='resize-none h-28 w-9/10 mx-auto p-5 focus:outline-none text-gray-700 font-light focus:ring-1 focus:ring-darkblue border border-darkblue rounded-xl' />
              <button className='bg-darkblue w-9/10 mx-auto text-center my-5 rounded-lg text-white py-1.5 '>import</button>
            </TabPane>
          </TabContent>
        </Tab>
      </div>
    </div>
  );
}
