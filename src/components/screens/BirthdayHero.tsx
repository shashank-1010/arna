import { birthdayContent } from "../../content/birthday";
import { Character } from "../Character";
import { HandDrawnButton } from "../HandDrawnButton";
import styles from "./BirthdayHero.module.css";

export function BirthdayHero({ onNext }: { onNext: () => void }) {
  const { birthday, recipientName } = { ...birthdayContent };

  return (
    <>
      <h1 className="hand-heading xl">{birthday.heading}</h1>
      <h2 className="hand-heading lg" style={{ marginTop: "-14px" }}>
        {birthday.subheading}
      </h2>

      <div className={styles.photoFrame}>
        {birthday.photoSrc ? (
          <img src={birthday.photoSrc} alt={birthday.photoAlt} />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <span>📷</span>
            <p>Drop a photo in src/content/birthday.ts</p>
          </div>
        )}
      </div>

      <p className="body-text">{birthday.message}</p>
      <p className="hand-heading md" style={{ fontSize: "1.6rem" }}>
        {recipientName}
      </p>

      <Character pose="cheer" className={styles.corner} screen="birthday" />
      <HandDrawnButton onClick={onNext}>{birthday.buttonLabel}</HandDrawnButton>
    </>
  );
}
