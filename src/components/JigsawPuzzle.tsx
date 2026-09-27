import { useEffect, useMemo, useState } from "react";
import styles from "./JigsawPuzzle.module.css";

function shuffledOrder(count: number): number[] {
  const order = Array.from({ length: count }, (_, i) => i);
  let isSolved = true;
  // Keep shuffling until it's not already in the solved order (Fisher–Yates).
  while (isSolved) {
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    isSolved = order.every((v, i) => v === i);
  }
  return order;
}

export function JigsawPuzzle({
  image,
  fallbackImage,
  gridSize = 3,
  caption,
  successHeading,
  successMessage,
  onSolved,
}: {
  image: string;
  fallbackImage: string;
  gridSize?: number;
  caption?: string;
  successHeading: string;
  successMessage: string;
  onSolved?: () => void;
}) {
  const total = gridSize * gridSize;
  const [src, setSrc] = useState(image);
  const [order, setOrder] = useState<number[]>(() => shuffledOrder(total));
  const [selected, setSelected] = useState<number | null>(null);
  const [solved, setSolved] = useState(false);
  const [moves, setMoves] = useState(0);

  // If the real photo isn't there yet, fall back to the built-in placeholder
  // instead of showing a broken image.
  useEffect(() => {
    const probe = new Image();
    probe.onerror = () => setSrc(fallbackImage);
    probe.src = image;
  }, [image, fallbackImage]);

  useEffect(() => {
    setSolved(order.every((v, i) => v === i));
  }, [order]);

  useEffect(() => {
    if (solved) onSolved?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solved]);

  const bgSize = `${gridSize * 100}%`;

  function positionFor(correctIndex: number) {
    const col = correctIndex % gridSize;
    const row = Math.floor(correctIndex / gridSize);
    const step = gridSize === 1 ? 0 : 100 / (gridSize - 1);
    return `${col * step}% ${row * step}%`;
  }

  function handleTap(slot: number) {
    if (solved) return;
    if (selected === null) {
      setSelected(slot);
      return;
    }
    if (selected === slot) {
      setSelected(null);
      return;
    }
    setOrder((prev) => {
      const next = [...prev];
      [next[selected], next[slot]] = [next[slot], next[selected]];
      return next;
    });
    setMoves((m) => m + 1);
    setSelected(null);
  }

  function reshuffle() {
    setOrder(shuffledOrder(total));
    setSelected(null);
    setMoves(0);
  }

  const gridStyle = useMemo(
    () => ({ ["--grid" as string]: gridSize }),
    [gridSize]
  );

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.board} ${solved ? styles.solved : ""}`}
        style={gridStyle}
        aria-label="Jigsaw puzzle"
      >
        {order.map((correctIndex, slot) => (
          <button
            key={slot}
            type="button"
            className={`${styles.tile} ${selected === slot ? styles.tileSelected : ""} ${
              solved ? styles.tileSolved : ""
            }`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: bgSize,
              backgroundPosition: positionFor(correctIndex),
            }}
            onClick={() => handleTap(slot)}
            disabled={solved}
            aria-label={`Puzzle piece ${slot + 1}`}
          />
        ))}
        {solved && (
          <div className={styles.overlay}>
            <p className={styles.overlayHeading}>{successHeading}</p>
            <p className={styles.overlayMessage}>{successMessage}</p>
          </div>
        )}
      </div>
      <div className={styles.meta}>
        {caption && !solved && <span className={styles.caption}>{caption}</span>}
        <span className={styles.moves}>{moves} {moves === 1 ? "move" : "moves"}</span>
        {!solved && (
          <button type="button" className={styles.shuffle} onClick={reshuffle}>
            shuffle again ↺
          </button>
        )}
      </div>
    </div>
  );
}
