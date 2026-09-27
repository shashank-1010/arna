import { useState } from "react";
import styles from "./GiftBox.module.css";

export function GiftBox({
  label,
  onOpen,
}: {
  label: string;
  onOpen: () => void;
}) {
  const [opening, setOpening] = useState(false);

  function handleClick() {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 650); // matches lid-open animation duration
  }

  return (
    <button
      type="button"
      className={`${styles.box} ${opening ? styles.opening : ""}`}
      onClick={handleClick}
      aria-label={`Open the ${label} gift`}
    >
      <span className={styles.sparkle} aria-hidden="true">
        ✨
      </span>
      <span className={styles.lid} aria-hidden="true" />
      <span className={styles.ribbonV} aria-hidden="true" />
      <span className={styles.bow} aria-hidden="true" />
      <span className={styles.base} aria-hidden="true" />
      <span className={styles.tag}>{label}</span>
    </button>
  );
}
