import { birthdayContent } from "../../content/birthday";
import { Character } from "../Character";
import { HandDrawnButton } from "../HandDrawnButton";

export function RetryScreen({ onRetry }: { onRetry: () => void }) {
  const { retry } = birthdayContent;
  return (
    <>
      <Character pose="sad" screen="retry" />
      <p className="hand-heading lg">{retry.message}</p>
      <HandDrawnButton onClick={onRetry}>{retry.button}</HandDrawnButton>
    </>
  );
}
