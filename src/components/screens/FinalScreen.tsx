import { birthdayContent } from "../../content/birthday";
import { BackButton } from "../BackButton";
import { Character } from "../Character";
import { HandDrawnButton } from "../HandDrawnButton";
import { TypewriterText } from "../TypewriterText";

export function FinalScreen({
  onBack,
  onRestart,
}: {
  onBack: () => void;
  onRestart: () => void;
}) {
  const { final } = birthdayContent;
  return (
    <>
      <BackButton onClick={onBack} />
      <h1 className="hand-heading lg">{final.heading}</h1>
      <Character pose="cheer" screen="final" />
      <p className="body-text" style={{ fontSize: "1.15rem" }}>
        {final.message}
      </p>

      <h2 className="hand-heading md">{final.letterHeading}</h2>
      <TypewriterText
        paragraphs={[...final.letterParagraphs, final.letterSignOff]}
      />

      <HandDrawnButton onClick={onRestart}>{final.buttonLabel}</HandDrawnButton>
    </>
  );
}
