import React, { useState } from "react";
import styles from '../../styles/Home.module.css'
import Tabs from ".";

const Profile = () => {
  const [text, settext] = useState("");
  return (
    <Tabs>
      <div>
        <textarea
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder='Keystore JSON is Several lines of text beginning with "(...)" '
          className={styles.textarea}
        />
        <textarea
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder='Keystore JSON is Several lines of text beginning with "(...)" '
          className={`${styles.textarea} h-8`}
        />

        <button className={styles.button}>
          import
        </button>
      </div>
    </Tabs>
  );
};

export default Profile;
