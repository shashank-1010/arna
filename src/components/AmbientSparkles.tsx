import styles from "./AmbientSparkles.module.css";

const PARTICLES = [
  { symbol: "✨", top: "8%", left: "10%", size: "1.1rem", delay: "0s", duration: "7.5s" },
  { symbol: "🎈", top: "18%", left: "86%", size: "1.6rem", delay: "0.6s", duration: "9s" },
  { symbol: "✨", top: "72%", left: "6%", size: "0.9rem", delay: "1.4s", duration: "8s" },
  { symbol: "🎀", top: "82%", left: "90%", size: "1.3rem", delay: "0.2s", duration: "6.8s" },
  { symbol: "✨", top: "45%", left: "4%", size: "1rem", delay: "2.1s", duration: "7s" },
  { symbol: "🎈", top: "6%", left: "60%", size: "1.2rem", delay: "1s", duration: "8.4s" },
  { symbol: "✨", top: "88%", left: "45%", size: "1rem", delay: "1.8s", duration: "7.2s" },
  { symbol: "🎀", top: "30%", left: "94%", size: "1rem", delay: "0.9s", duration: "8.8s" },
];

/**
 * Purely decorative floating particles behind the main card. Gives the
 * whole page a bit of ambient life without competing with the content.
 * Hidden from screen readers and switched off for reduced-motion users.
 */
export function AmbientSparkles() {
  return (
    <div className={styles.field} aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={styles.particle}
          style={{
            top: p.top,
            left: p.left,
            fontSize: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
