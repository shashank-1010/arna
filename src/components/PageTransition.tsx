import type { ReactNode } from "react";
import styles from "./PageTransition.module.css";

/** Wraps a screen so it fades/slides in on mount. Key by screen name so React remounts it. */
export function PageTransition({ children }: { children: ReactNode }) {
  return <div className={styles.enter}>{children}</div>;
}
