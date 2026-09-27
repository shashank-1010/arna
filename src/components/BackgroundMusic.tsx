import { useEffect, useRef, useState } from "react";
import styles from "./BackgroundMusic.module.css";

const TRACK_SRC = "/audio/bg-music.mp3";

/**
 * Plays a looping background track for the whole experience. Mounted once
 * at the top level (see BirthdayExperience.tsx) so it keeps playing across
 * every screen change instead of restarting.
 *
 * Browsers block audio with sound from auto-starting until the visitor has
 * interacted with the page at least once. We try to play immediately, and
 * if that's blocked we quietly retry on the very first tap/click/key press
 * anywhere on the page — which on this site happens right away anyway.
 */
export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;

    let settled = false;
    const stopListening = () => {
      if (settled) return;
      settled = true;
      window.removeEventListener("pointerdown", attemptPlay);
      window.removeEventListener("keydown", attemptPlay);
    };

    function attemptPlay() {
      audio?.play().then(stopListening).catch(() => {
        /* still blocked — keep waiting for a real interaction */
      });
    }

    attemptPlay();
    window.addEventListener("pointerdown", attemptPlay);
    window.addEventListener("keydown", attemptPlay);

    return () => {
      window.removeEventListener("pointerdown", attemptPlay);
      window.removeEventListener("keydown", attemptPlay);
    };
  }, []);

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !audio.muted;
    audio.muted = next;
    setMuted(next);
    if (!next && audio.paused) {
      audio.play().catch(() => {});
    }
  }

  return (
    <>
      <audio ref={audioRef} src={TRACK_SRC} loop preload="auto" />
      <button
        type="button"
        className={styles.toggle}
        onClick={toggleMute}
        aria-label={muted ? "Unmute background music" : "Mute background music"}
        title={muted ? "Unmute music" : "Mute music"}
      >
        <span aria-hidden="true">{muted ? "🔇" : "🎵"}</span>
      </button>
    </>
  );
}
