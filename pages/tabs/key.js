import React, { useState } from "react";
import styles from '../../styles/Home.module.css'
import Tabs from ".";

const Settings = () => {
  const [text, settext] = useState("");

  return (
    <Tabs>
      <div>
        <textarea
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Private Key is typically 12 (sometimes 24) words separated by single spaces"
          className={styles.textarea}
        />
        <button className={styles.button}>
          import
        </button>
      </div>
    </Tabs>
  );
};

export default Settings;
