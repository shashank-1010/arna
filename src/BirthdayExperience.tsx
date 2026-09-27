import { useState } from "react";
import { GinghamFrame } from "./components/GinghamFrame";
import { PageTransition } from "./components/PageTransition";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { IntroScreen } from "./components/screens/IntroScreen";
import { RetryScreen } from "./components/screens/RetryScreen";
import { ExcitedScreen } from "./components/screens/ExcitedScreen";
import { BirthdayHero } from "./components/screens/BirthdayHero";
import { CakeScreen } from "./components/screens/CakeScreen";
import { GiftSelection } from "./components/screens/GiftSelection";
import { MemoriesScreen } from "./components/screens/MemoriesScreen";
import { LetterScreen } from "./components/screens/LetterScreen";
import { RoastScreen } from "./components/screens/RoastScreen";
import { PuzzleScreen } from "./components/screens/PuzzleScreen";
import { FinalScreen } from "./components/screens/FinalScreen";

type Screen =
  | "INTRO"
  | "RETRY"
  | "EXCITED"
  | "BIRTHDAY"
  | "CAKE"
  | "GIFTS"
  | "MEMORIES"
  | "LETTER"
  | "ROAST"
  | "PUZZLE"
  | "FINAL";

// Maps each gift box id (see src/content/birthday.ts) to the screen it opens.
const GIFT_SCREEN: Record<string, Screen> = {
  memories: "MEMORIES",
  letter: "LETTER",
  roast: "ROAST",
  puzzle: "PUZZLE",
  wish: "FINAL",
};

export function BirthdayExperience() {
  const [screen, setScreen] = useState<Screen>("INTRO");

  function renderScreen() {
    switch (screen) {
      case "INTRO":
        return (
          <IntroScreen onYes={() => setScreen("EXCITED")} onNo={() => setScreen("RETRY")} />
        );
      case "RETRY":
        return <RetryScreen onRetry={() => setScreen("INTRO")} />;
      case "EXCITED":
        return <ExcitedScreen onYes={() => setScreen("BIRTHDAY")} />;
      case "BIRTHDAY":
        return <BirthdayHero onNext={() => setScreen("CAKE")} />;
      case "CAKE":
        return <CakeScreen onNext={() => setScreen("GIFTS")} />;
      case "GIFTS":
        return (
          <GiftSelection
            onOpenGift={(id) => setScreen(GIFT_SCREEN[id] ?? "GIFTS")}
            onRestart={() => setScreen("INTRO")}
          />
        );
      case "MEMORIES":
        return <MemoriesScreen onBack={() => setScreen("GIFTS")} />;
      case "LETTER":
        return <LetterScreen onBack={() => setScreen("GIFTS")} />;
      case "ROAST":
        return <RoastScreen onBack={() => setScreen("GIFTS")} />;
      case "PUZZLE":
        return <PuzzleScreen onBack={() => setScreen("GIFTS")} />;
      case "FINAL":
        return (
          <FinalScreen
            onBack={() => setScreen("GIFTS")}
            onRestart={() => setScreen("INTRO")}
          />
        );
    }
  }

  return (
    <GinghamFrame>
      <BackgroundMusic />
      {/* key forces remount so entrance animations replay on every screen change */}
      <PageTransition key={screen}>{renderScreen()}</PageTransition>
    </GinghamFrame>
  );
}
