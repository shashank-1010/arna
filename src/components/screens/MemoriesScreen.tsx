import { useState } from "react";
import { birthdayContent } from "../../content/birthday";
import { BackButton } from "../BackButton";
import { HandDrawnButton } from "../HandDrawnButton";
import { ThenAndNow } from "../ThenAndNow";
import styles from "./MemoriesScreen.module.css";

type Step = "photos" | "thenAndNow" | "reasons";

export function MemoriesScreen({ onBack }: { onBack: () => void }) {
  const { memories, thenAndNow, reasons } = birthdayContent;
  const [step, setStep] = useState<Step>("photos");

  function handleBack() {
    if (step === "thenAndNow") {
      setStep("photos");
      return;
    }
    if (step === "reasons") {
      setStep("thenAndNow");
      return;
    }
    onBack();
  }

  return (
    <>
      <BackButton onClick={handleBack} />

      {step === "photos" && (
        <>
          <h1 className="hand-heading xl">{memories.heading}</h1>
          <div className={styles.line} aria-hidden="true" />
          <div className={styles.grid}>
            {memories.items.map((item, i) => (
              <figure
                key={i}
                className={styles.polaroid}
                style={{ ["--tilt" as string]: `${(i % 2 === 0 ? -1 : 1) * (3 + i)}deg` }}
              >
                <span className={styles.pin} aria-hidden="true" />
                {item.src ? (
                  <img src={item.src} alt={item.caption} />
                ) : (
                  <div className={styles.placeholder}>📸</div>
                )}
              </figure>
            ))}
          </div>
          <HandDrawnButton onClick={() => setStep("thenAndNow")}>
            {memories.nextLabel}
          </HandDrawnButton>
        </>
      )}

      {step === "thenAndNow" && (
        <>
          <h1 className="hand-heading lg">{thenAndNow.heading}</h1>
          <p className={styles.subheading}>{thenAndNow.hint}</p>
          <ThenAndNow
            thenImage={thenAndNow.thenImage}
            nowImage={thenAndNow.nowImage}
            thenFallback={thenAndNow.thenFallback}
            nowFallback={thenAndNow.nowFallback}
            thenLabel={thenAndNow.thenLabel}
            nowLabel={thenAndNow.nowLabel}
          />
          <HandDrawnButton onClick={() => setStep("reasons")}>
            {thenAndNow.nextLabel}
          </HandDrawnButton>
        </>
      )}

      {step === "reasons" && (
        <>
          <h1 className="hand-heading lg">{reasons.heading}</h1>
          <p className={styles.subheading}>{reasons.subheading}</p>
          <div className={styles.reasonsBox}>
            <ol className={styles.reasonsList}>
              {reasons.items.map((line, i) => (
                <li key={i} style={{ animationDelay: `${i * 35}ms` }}>
                  {line}
                </li>
              ))}
            </ol>
          </div>
          <HandDrawnButton onClick={onBack}>{reasons.doneLabel}</HandDrawnButton>
        </>
      )}
    </>
  );
}
