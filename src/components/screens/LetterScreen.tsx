import { birthdayContent } from "../../content/birthday";
import { BackButton } from "../BackButton";
import styles from "./LetterScreen.module.css";

export function LetterScreen({ onBack }: { onBack: () => void }) {
  const { letter } = birthdayContent;
  return (
    <>
      <BackButton onClick={onBack} />
      <h1 className="hand-heading lg">{letter.heading}</h1>
      <div className={styles.paper}>
        {letter.paragraphs.map((p, i) => (
          <p
            key={i}
            className={styles.line}
            style={{ animationDelay: `${300 + i * 260}ms` }}
          >
            {p}
          </p>
        ))}
        <p
          className={`${styles.line} ${styles.signOff}`}
          style={{ animationDelay: `${300 + letter.paragraphs.length * 260}ms` }}
        >
          {letter.signOff}
        </p>
      </div>
    </>
  );
}
