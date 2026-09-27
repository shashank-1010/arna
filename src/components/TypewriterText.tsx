import { useEffect, useState } from "react";
import styles from "./TypewriterText.module.css";

/**
 * Types out a list of paragraphs one character at a time, like they're
 * being handwritten live. Finished paragraphs stay fully visible; the
 * paragraph currently being typed shows a blinking cursor at its end.
 */
export function TypewriterText({
  paragraphs,
  speedMs = 28,
  pauseBetweenMs = 450,
  startDelayMs = 200,
  onDone,
}: {
  paragraphs: string[];
  speedMs?: number;
  pauseBetweenMs?: number;
  startDelayMs?: number;
  onDone?: () => void;
}) {
  const [paraIndex, setParaIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setStarted(true), startDelayMs);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!started) return;
    const current = paragraphs[paraIndex];
    if (current === undefined) {
      onDone?.();
      return;
    }
    if (charIndex < current.length) {
      const t = window.setTimeout(() => setCharIndex((c) => c + 1), speedMs);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      setParaIndex((p) => p + 1);
      setCharIndex(0);
    }, pauseBetweenMs);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, charIndex, paraIndex]);

  const isDone = paraIndex >= paragraphs.length;

  return (
    <div className={styles.wrap} aria-live="polite">
      {paragraphs.map((p, i) => {
        if (i > paraIndex) return null;
        const text = i === paraIndex && !isDone ? p.slice(0, charIndex) : p;
        const showCursor = i === paraIndex && !isDone;
        return (
          <p key={i} className={styles.line}>
            {text}
            {showCursor && <span className={styles.cursor} aria-hidden="true" />}
          </p>
        );
      })}
      {isDone && <span className={styles.cursor} aria-hidden="true" />}
    </div>
  );
}
