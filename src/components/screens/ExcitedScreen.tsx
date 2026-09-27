import { birthdayContent } from "../../content/birthday";
import { Character } from "../Character";
import { HandDrawnButton } from "../HandDrawnButton";
import styles from "../screens/IntroScreen.module.css";

export function ExcitedScreen({ onYes }: { onYes: () => void }) {
  const { excited } = birthdayContent;
  return (
    <>
      <p className="hand-heading lg">{excited.line1}</p>
      <Character pose="cheer" screen="excited" />
      <p className="hand-heading md">{excited.line2}</p>
      <div className={styles.actions}>
        <HandDrawnButton onClick={onYes}>YES!!</HandDrawnButton>
      </div>
    </>
  );
}
