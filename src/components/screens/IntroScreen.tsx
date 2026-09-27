import { birthdayContent } from "../../content/birthday";
import { Character } from "../Character";
import { HandDrawnButton } from "../HandDrawnButton";
import styles from "./IntroScreen.module.css";

export function IntroScreen({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  const { intro } = birthdayContent;
  return (
    <>
      <h1 className="hand-heading lg">{intro.line1}</h1>
      <Character pose="wave" screen="intro" />
      <p className="hand-heading md" style={{ color: "var(--ink)" }}>
        {intro.line2}
      </p>
      <div className={styles.actions}>
        <HandDrawnButton onClick={onYes}>YES</HandDrawnButton>
        <HandDrawnButton variant="outline" onClick={onNo}>
          NO
        </HandDrawnButton>
      </div>
    </>
  );
}
