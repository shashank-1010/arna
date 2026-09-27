import { useEffect, useRef, useState } from "react";
import styles from "./ThenAndNow.module.css";

function useFallbackSrc(src: string, fallback: string) {
  const [resolved, setResolved] = useState(src);
  useEffect(() => {
    const probe = new Image();
    probe.onerror = () => setResolved(fallback);
    probe.onload = () => setResolved(src);
    probe.src = src;
  }, [src, fallback]);
  return resolved;
}

export function ThenAndNow({
  thenImage,
  nowImage,
  thenFallback,
  nowFallback,
  thenLabel,
  nowLabel,
}: {
  thenImage: string;
  nowImage: string;
  thenFallback: string;
  nowFallback: string;
  thenLabel: string;
  nowLabel: string;
}) {
  const then = useFallbackSrc(thenImage, thenFallback);
  const now = useFallbackSrc(nowImage, nowFallback);
  const [pos, setPos] = useState(50);
  const [trackWidth, setTrackWidth] = useState(320);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setTrackWidth(el.getBoundingClientRect().width);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  function setFromClientX(clientX: number) {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    }
    function onUp() {
      dragging.current = false;
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
      >
        <img src={now} alt={nowLabel} className={styles.base} draggable={false} />
        <div className={styles.clip} style={{ width: `${pos}%` }}>
          <img
            src={then}
            alt={thenLabel}
            className={styles.overlayImg}
            style={{ width: `${trackWidth}px` }}
            draggable={false}
          />
        </div>
        <div className={styles.divider} style={{ left: `${pos}%` }}>
          <span className={styles.handle}>↔</span>
        </div>
        <span className={`${styles.badge} ${styles.badgeLeft}`}>{thenLabel}</span>
        <span className={`${styles.badge} ${styles.badgeRight}`}>{nowLabel}</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className={styles.slider}
        aria-label={`Compare ${thenLabel} and ${nowLabel}`}
      />
    </div>
  );
}
