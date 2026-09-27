import { useState } from "react";
import { birthdayContent } from "../../content/birthday";
import { HandDrawnButton } from "../HandDrawnButton";
import { Squiggle } from "../DoodleLayer";
import styles from "./CakeScreen.module.css";

export function CakeScreen({ onNext }: { onNext: () => void }) {
  const { cake } = birthdayContent;
  const [blown, setBlown] = useState(false);
  const candleCount = 5;

  return (
    <>
      <h1 className="hand-heading xl">{cake.headingTop}</h1>
      <h2 className="hand-heading xl" style={{ marginTop: "-18px" }}>
        {blown ? "A WISH ✨" : cake.headingBottom}
      </h2>
      <p className={styles.sideNote}>{cake.sideNote}</p>

      <div className={styles.cakeWrap}>
        <div className={styles.candles}>
          {Array.from({ length: candleCount }).map((_, i) => (
            <span key={i} className={styles.candle}>
              {!blown && <span className={styles.flame} />}
            </span>
          ))}
        </div>
        <div className={styles.tier1} />
        <div className={styles.tier2} />
        <Squiggle className={styles.icing} color="var(--red)" />
      </div>

      <HandDrawnButton onClick={() => setBlown(true)} disabled={blown}>
        {blown ? "Wish made! 🎉" : cake.buttonLabel}
      </HandDrawnButton>

      {blown && (
        <HandDrawnButton variant="outline" onClick={onNext}>
          Continue →
        </HandDrawnButton>
      )}
    </>
  );
}
