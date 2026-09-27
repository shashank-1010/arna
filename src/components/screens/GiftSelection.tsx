import { birthdayContent } from "../../content/birthday";
import { GiftBox } from "../GiftBox";
import { HandArrow } from "../DoodleLayer";
import { HandDrawnButton } from "../HandDrawnButton";
import styles from "./GiftSelection.module.css";

export function GiftSelection({
  onOpenGift,
  onRestart,
}: {
  onOpenGift: (id: string) => void;
  onRestart: () => void;
}) {
  const { gifts } = birthdayContent;
  return (
    <>
      <h1 className="hand-heading lg">{gifts.heading}</h1>
      <div className={styles.row}>
        {gifts.boxes.map((box) => (
          <GiftBox key={box.id} label={box.label} onOpen={() => onOpenGift(box.id)} />
        ))}
      </div>
      <div className={styles.hint}>
        <span className="hand-heading md">{gifts.hint}</span>
        <HandArrow className={styles.arrow} />
      </div>
      <HandDrawnButton
        variant="outline"
        className={styles.restart}
        onClick={onRestart}
      >
        {gifts.restartLabel}
      </HandDrawnButton>
    </>
  );
}
