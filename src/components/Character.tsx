import { birthdayContent, type MascotScreenKey } from "../content/birthday";
import styles from "./Character.module.css";

type Pose = "wave" | "sad" | "cheer" | "peek";

/**
 * A small mascot used throughout the experience.
 * By default this renders an original doodle character. Pass a `screen`
 * key and set `birthdayContent.mascotImages[screen]` (see
 * src/content/birthday.ts) to swap in your own image or GIF for that one
 * screen only — every screen can look different, or stay the doodle.
 */
export function Character({
  pose = "wave",
  className,
  screen,
}: {
  pose?: Pose;
  className?: string;
  screen?: MascotScreenKey;
}) {
  const mascotSrc = screen ? birthdayContent.mascotImages[screen] : null;

  if (mascotSrc) {
    return (
      <img
        src={mascotSrc}
        alt="Character illustration"
        className={`${styles.character} ${styles[pose]} ${styles.imageMascot} ${
          className ?? ""
        }`}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 120 140"
      className={`${styles.character} ${styles[pose]} ${className ?? ""}`}
      role="img"
      aria-label={
        pose === "sad"
          ? "Doodle character looking a little sad"
          : "Doodle character celebrating"
      }
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d2493c" />
          <stop offset="100%" stopColor="var(--red-deep)" />
        </linearGradient>
        <radialGradient id="headGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#fff0dc" />
          <stop offset="100%" stopColor="#ffdfb0" />
        </radialGradient>
      </defs>
      {/* party hat */}
      <path d="M48 30 L60 4 L72 30 Z" fill="var(--red-soft)" />
      <circle cx="60" cy="4" r="4" fill="var(--pink)" />
      {/* body */}
      <ellipse cx="60" cy="108" rx="30" ry="24" fill="url(#bodyGrad)" />
      {/* head */}
      <circle cx="60" cy="58" r="34" fill="url(#headGrad)" />
      {/* cheeks */}
      <circle cx="40" cy="64" r="5" fill="var(--pink)" opacity="0.7" />
      <circle cx="80" cy="64" r="5" fill="var(--pink)" opacity="0.7" />
      {/* eyes */}
      <g className={styles.eyes}>
        <circle cx="47" cy="54" r="3.4" fill="var(--ink)" />
        <circle cx="73" cy="54" r="3.4" fill="var(--ink)" />
      </g>
      {/* mouth */}
      {pose === "sad" ? (
        <path
          d="M48 72 Q60 64 72 72"
          stroke="var(--ink)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      ) : (
        <path
          d="M46 68 Q60 82 74 68"
          stroke="var(--ink)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      )}
      {/* arm */}
      <path
        className={styles.arm}
        d="M86 100 Q108 92 106 68"
        stroke="var(--red)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
