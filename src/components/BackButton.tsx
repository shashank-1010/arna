import styles from "./BackButton.module.css";

export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className={styles.back} onClick={onClick} aria-label="Back to gifts">
      ← back
    </button>
  );
}
