import { useState } from "react";
import { birthdayContent } from "../../content/birthday";
import { BackButton } from "../BackButton";
import { Character } from "../Character";
import { HandDrawnButton } from "../HandDrawnButton";
import styles from "./RoastScreen.module.css";

export function RoastScreen({ onBack }: { onBack: () => void }) {
  const { roast } = birthdayContent;
  const [index, setIndex] = useState(0);
  const isDone = index >= roast.lines.length;

  function handleNext() {
    setIndex((i) => i + 1);
  }

  return (
    <>
      <BackButton onClick={onBack} />
      <h1 className="hand-heading lg">{isDone ? roast.finalHeading : roast.heading}</h1>
      {!isDone && <p className={styles.subheading}>{roast.subheading}</p>}

      <Character pose={isDone ? "cheer" : "peek"} screen="roast" />

      <div className={styles.stack} aria-live="polite">
        {!isDone ? (
          <div key={index} className={styles.card}>
            <span className={styles.badge}>
              {index + 1} / {roast.lines.length}
            </span>
            <p className={styles.cardText}>{roast.lines[index]}</p>
          </div>
        ) : (
          <div key="final" className={`${styles.card} ${styles.finalCard}`}>
            <p className={styles.cardText}>{roast.finalLine}</p>
          </div>
        )}
      </div>

      {!isDone ? (
        <div className={styles.hint}>
          <span className="hand-heading md">{roast.hint}</span>
        </div>
      ) : null}

      <HandDrawnButton onClick={isDone ? onBack : handleNext}>
        {isDone ? roast.doneLabel : roast.nextLabel}
      </HandDrawnButton>
    </>
  );
}
