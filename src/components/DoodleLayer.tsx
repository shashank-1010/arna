import styles from "./DoodleLayer.module.css";

export function Heart({ className, color = "var(--red-soft)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 32 28" className={className} aria-hidden="true">
      <path
        d="M16 26C7 20 2 14.5 2 9.2 2 4.8 5.4 2 9.2 2c2.6 0 4.8 1.4 6.8 4 2-2.6 4.2-4 6.8-4C26.6 2 30 4.8 30 9.2 30 14.5 25 20 16 26Z"
        fill={color}
      />
    </svg>
  );
}

export function Sparkle({ className, color = "var(--red)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1c.6 4.6 2 8 4.4 10.4C18.8 13.8 22 15 24 15c-4.6.6-8 2-10.4 4.4C11.2 21.8 10 25 10 27c-.6-4.6-2-8-4.4-10.4C3.2 14.2 0 13 0 13c4.6-.6 8-2 10.4-4.4C12.8 6.2 14 3 14 1Z"
        transform="scale(0.85)"
        fill={color}
      />
    </svg>
  );
}

export function Squiggle({ className, color = "var(--red-soft)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 90 20" className={className} aria-hidden="true">
      <path
        d="M2 14C10 4 16 4 23 12C30 20 36 20 43 12C50 4 56 4 63 12C70 20 76 20 88 8"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function HandArrow({ className, color = "var(--red)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 90 60" className={className} aria-hidden="true">
      <path
        d="M4 8C24 4 46 30 40 50"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M26 44 L40 50 L38 34"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const DOODLES = [
  { El: Heart, top: "6%", left: "8%", size: 22, delay: "0s" },
  { El: Sparkle, top: "12%", right: "10%", size: 20, delay: "0.4s" },
  { El: Heart, bottom: "18%", right: "7%", size: 16, delay: "0.8s" },
  { El: Sparkle, bottom: "8%", left: "12%", size: 18, delay: "1.1s" },
];

/** Small floating hearts/sparkles scattered around a screen. Purely decorative. */
export function DoodleLayer() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {DOODLES.map(({ El, size, delay, ...pos }, i) => (
        <span
          key={i}
          className={styles.doodle}
          style={{ ...pos, width: size, height: size, animationDelay: delay }}
        >
          <El className={styles.icon} />
        </span>
      ))}
    </div>
  );
}
