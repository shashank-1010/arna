# A Little Surprise 🎂

An interactive, animated birthday-surprise website: an off-white scrapbook
card, red handwritten typography, a gingham side pattern, and a playful
click-through story — intro → cake → three openable gift boxes → memories,
a letter, and a final wish.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build a static, deployable version:

```bash
npm run build
npm run preview   # serve the production build locally
```

## Customize everything from one file

Open **`src/content/birthday.ts`**. Every name, headline, and message in the
site lives there — no need to touch component code:

- `recipientName` / `senderName`
- Intro, retry, "excited", cake, and final-wish wording
- `birthday.photoSrc` — path to a hero photo (see below)
- `memories.items` — up to as many scrapbook photos/captions as you want
- `letter.paragraphs` — the handwritten letter text
- `gifts.boxes` — the three gift box labels

## Using your own character image

By default the mascot is an original doodle SVG. To use your own image
instead (on every screen it appears):

1. Put the image file in `public/mascot/` — e.g. `public/mascot/shinchan.png`.
2. In `src/content/birthday.ts`, set:
   ```ts
   mascotImageSrc: "/mascot/shinchan.png",
   ```
3. Save — it now replaces the doodle mascot everywhere. Set it back to
   `null` to return to the default doodle.

## Adding your own photos

1. Drop image files into `public/photos/`.
2. Reference them in `src/content/birthday.ts` as `"/photos/your-file.jpg"`
   (e.g. `birthday.photoSrc = "/photos/us.jpg"`).
3. Leave a slot as `null` to show a friendly placeholder instead.

## Project structure

```
src/
  content/birthday.ts       ← all editable text & photo paths
  styles/global.css         ← paper card, gingham pattern, fonts, tokens
  components/
    GinghamFrame.tsx         page shell (gingham sides + card + doodles)
    PageTransition.tsx       fade/slide entrance wrapper
    HandDrawnButton.tsx      red pill button
    Character.tsx            original doodle mascot (wave / sad / cheer poses)
    DoodleLayer.tsx           hearts, sparkles, squiggles, hand-drawn arrow
    GiftBox.tsx               interactive gift box (hover lift + lid-open animation)
    BackButton.tsx
    screens/                  one component per screen (Intro, Retry, Excited,
                               BirthdayHero, Cake, GiftSelection, Memories,
                               Letter, Final)
  BirthdayExperience.tsx     the state machine wiring every screen together
```

State flow: `INTRO → (NO) → RETRY → INTRO`, `INTRO → (YES) → EXCITED →
BIRTHDAY → CAKE → GIFTS`, and each gift box opens `MEMORIES`, `LETTER`, or
`FINAL`, each with a back button to `GIFTS`. No page reloads between
screens.

## Accessibility

- Every interactive element is a real `<button>`, keyboard-reachable with a
  visible focus ring.
- Meaningful images have `alt` text; purely decorative doodles are
  `aria-hidden`.
- `prefers-reduced-motion` is respected — decorative animation is disabled
  for users who request it.

## A note on the reference material

The reference video/screenshots this was based on use **Crayon Shin-chan**,
a copyrighted licensed character, inside what looks like a specific
commercially-distributed Canva template. To keep this project clean and
original, this build does **not** reproduce that character or clone the
template pixel-for-pixel. Instead it uses an original doodle mascot
(`src/components/Character.tsx`) and its own interpretation of the
scrapbook/handwritten aesthetic, while keeping the same interactive story
beats you asked for (intro, retry, cake, gift boxes, memories, letter,
final message). Swap in your own character art in that one file if you'd
like a different mascot.
# arna  
