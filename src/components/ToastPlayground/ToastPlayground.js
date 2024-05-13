// lib
import React from "react";
// contexts
import { ToastContext } from "../ToastProvider";
// components
import Button from "../Button";
import ToastShelf from "../ToastShelf";
// styles
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  // local state
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");

  // context
  const { addToast } = React.useContext(ToastContext);

  // submit
  function handleSubmit(event) {
    event.preventDefault();

    // new toast
    addToast(message, variant);

    // reset form
    setMessage("");
    setVariant("notice");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((x) => (
              <label htmlFor={"variant-" + x} key={x}>
                <input
                  id={"variant-" + x}
                  type="radio"
                  name="variant"
                  value={x}
                  checked={x === variant}
                  onChange={(event) => setVariant(event.target.value)}
                />
                {x}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
