import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./HandDrawnButton.module.css";

interface HandDrawnButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export function HandDrawnButton({
  children,
  variant = "primary",
  className,
  ...rest
}: HandDrawnButtonProps) {
  return (
    <button
      className={`${styles.btn} ${
        variant === "outline" ? styles.outline : styles.primary
      } ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
