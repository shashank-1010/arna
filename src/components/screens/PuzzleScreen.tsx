import { birthdayContent } from "../../content/birthday";
import { BackButton } from "../BackButton";
import { JigsawPuzzle } from "../JigsawPuzzle";
import styles from "./PuzzleScreen.module.css";

export function PuzzleScreen({ onBack }: { onBack: () => void }) {
  const { puzzle } = birthdayContent;
  return (
    <>
      <BackButton onClick={onBack} />
      <h1 className="hand-heading lg">{puzzle.heading}</h1>
      <p className={styles.subheading}>{puzzle.hint}</p>
      <JigsawPuzzle
        image={puzzle.image}
        fallbackImage={puzzle.fallbackImage}
        gridSize={puzzle.gridSize}
        caption={puzzle.caption}
        successHeading={puzzle.successHeading}
        successMessage={puzzle.successMessage}
      />
    </>
  );
}
