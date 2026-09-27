// ─────────────────────────────────────────────────────────────────────────
// EVERYTHING IN THIS FILE IS SAFE TO EDIT.
// Replace names, messages, and photo paths here — no need to touch any
// component code. Photos referenced below should be dropped into
// public/photos/ (see the README in that folder).
// ─────────────────────────────────────────────────────────────────────────

export type MascotScreenKey =
  | "intro"
  | "retry"
  | "excited"
  | "birthday"
  | "roast"
  | "final";

export const birthdayContent = {
  recipientName: "Arya",
  senderName: "Me",

  // ── Mascot, set per page ─────────────────────────────────────────────
  // Every screen below can have its own character image or GIF instead of
  // the built-in doodle mascot. Drop files into /public/mascot/ and point
  // each key at its file, e.g. "/mascot/intro.gif" or "/mascot/final.png".
  // GIFs just work — the browser animates them automatically, no extra
  // setup needed. Leave any value as null to keep the default hand-drawn
  // doodle for that screen only; you can mix doodle pages and image/GIF
  // pages freely.
  mascotImages: {
    intro: "/mascot/intro.gif",
    retry: "/mascot/retry.gif",
    excited: "/mascot/excited.gif",
    birthday: "/mascot/birthday.gif",
    roast: null as string | null, // drop /mascot/roast.gif in and set it here if you want
    final: "/mascot/final.gif",
  },

  intro: {
    line1: "I have made something for you",
    line2: "Do you wanna see it?",
  },

  retry: {
    message: "Aww, come on… pretty please?",
    button: "OKAY OKAY, TRY AGAIN",
  },

  excited: {
    line1: "Each gift has something for you..",
    line2: "Are you really excited?",
  },

  birthday: {
    heading: "HAPPY",
    subheading: "Birthday",
    photoSrc: "/photos/hero.jpg" as string | null,
    photoAlt: "A favourite photo of Arya",
    message:
      "Wishing you a day full of little joys, warm hugs, and every single thing that makes you smile.",
    buttonLabel: "Keep going →",
  },

  cake: {
    headingTop: "MAKE A",
    headingBottom: "WISH",
    sideNote: "i love you",
    buttonLabel: "Blow the candles 🎂",
  },

  gifts: {
    heading: "Each gift has something for you..",
    hint: "click a box to open it",
    restartLabel: "Restart ↺",
    boxes: [
      { id: "memories", label: "Memories" },
      { id: "letter", label: "A Letter" },
      { id: "roast", label: "Tareef Time" },
      { id: "puzzle", label: "Puzzle" },
      { id: "wish", label: "One Last Wish" },
    ],
  },

  // Replace photo paths with real ones in /public/photos, or leave the
  // placeholder — the app will render a friendly placeholder card instead.
  // This opens into a little 3-part experience: photos -> then & now -> 20 reasons.
  memories: {
    heading: "memories",
    items: [
      { src: "/photos/memory-1.jpg" as string | null, caption: "That one road trip" },
      { src: "/photos/memory-2.jpg" as string | null, caption: "Movie night" },
      { src: "/photos/memory-3.jpg" as string | null, caption: "Silly costumes" },
      { src: "/photos/memory-4.jpg" as string | null, caption: "Just us" },
      { src: "/photos/memory-5.jpg" as string | null, caption: "That mall day" },
      // Add more photos any time — just drop the file in /public/photos
      // and point the src at it. Leave src as null to show a placeholder.
      { src: null as string | null, caption: "More coming soon" },
    ],
    nextLabel: "Next →",
  },

  // "Bachpan se bade tak" — drag the slider to compare a childhood photo
  // against a recent one. Drop the two photos at the paths below; until
  // then a soft placeholder is shown on each side so it still works.
  thenAndNow: {
    heading: "Bachpan se Bade Tak",
    hint: "Drag the slider to see how far you've come 🥹",
    thenImage: "/photos/childhood.jpg" as string,
    nowImage: "/photos/now.jpg" as string,
    thenFallback: "/photos/then-placeholder.svg" as string,
    nowFallback: "/photos/now-placeholder.svg" as string,
    thenLabel: "Bachpan",
    nowLabel: "Ab",
    nextLabel: "Next →",
  },

  // A little box of 20 reasons — feel free to rewrite every single line,
  // this is the easiest place in the whole file to make it 100% personal.
  reasons: {
    heading: "You're Officially 20! 🎉",
    subheading: "So here are the 20 Reasons Why I Love You",
    items: [
      "Your laugh is the loudest sound in every room, in the best way.",
      "You remember the tiny details about people that most people forget.",
      "You always show up, even when it's inconvenient for you.",
      "You make ordinary days feel like an occasion.",
      "You're brutally honest, but only because you actually care.",
      "You never let me take myself too seriously.",
      "The way you get excited about small good things.",
      "You give the best advice, even when I don't ask for it.",
      "You've stayed you through everything life has thrown at you.",
      "You make everyone around you feel a little more comfortable.",
      "Your texts always land at exactly the right moment.",
      "You never make people feel silly for caring about something.",
      "You're impossible to stay mad at for very long.",
      "You celebrate other people's wins like they're your own.",
      "You have zero chill and I love that about you.",
      "You somehow remember every inside joke we've ever had.",
      "You make time for people, even when you barely have any left.",
      "You're the same person in private as you are in public.",
      "You've never once made me feel like a burden.",
      "Honestly — just for being exactly, unapologetically you.",
    ],
    doneLabel: "Back to gifts",
  },

  // The jigsaw puzzle — now its own gift box. Drop a real photo at
  // /public/photos/puzzle.jpg and it'll be used automatically. Until then
  // a placeholder pattern is shown so the puzzle still works out of the box.
  puzzle: {
    heading: "Puzzle Time 🧩",
    hint: "Tap two pieces to swap them and put the picture back together",
    image: "/photos/puzzle.jpg" as string,
    fallbackImage: "/photos/puzzle-placeholder.svg" as string,
    gridSize: 3,
    caption: "Piece it back together 🧩",
    successHeading: "Great! 🎉",
    successMessage: "You did it — just like us, always comes together in the end.",
    doneLabel: "Back to gifts",
  },

  // A little appreciation, straight from the heart.
  roast: {
    heading: "Kuch Baatein, Dil Se 💛",
    subheading: "thoda sach, thoda emotional",
    hint: "",
    lines: [
      "Tere jitna genuine banda dhoondna mushkil hai yaar, seedha dil se baat karta hai, kabhi dikhava nahi.",
      "Sabse zyada pasand hai mujhe ye ki tu jitna busy ho, apno ke liye time nikaal hi leta hai, waise hi jaise pehle nikalta tha.",
      "Tere saath baithke ghante nikal jaate hai pata hi nahi chalta, aisi comfort kam logo ke saath milti hai.",
      "Jitna bhi kuch face kiya hai tune, phir bhi kabhi apna nature nahi badla, ye badi baat hai.",
      "Sach bolu toh tu bina try kiye bhi sabka din bana deta hai, bas apne hone se hi.",
      "Tere jaisa dost mil jaye toh bandaa lucky feel karta hai, aur main hu wo lucky banda.",
    ],
    finalHeading: "Ek Aakhri Baat 🥹",
    finalLine:
      "Bas itna chahta hu ki jo bhi tu deserve karta hai wo sab is saal mile, thoda sukoon, thodi khushi aur bahut saara pyaar. Happy Birthday yaar! 🎉❤️",
    nextLabel: "Next →",
    doneLabel: "Back to gifts",
  },

  letter: {
    heading: "Happy Birthday to my best friend!",
    paragraphs: [
      "Even though I changed my college and we don't talk as much anymore, you still hold a very special place in my heart. It feels strange how someone who was once a stranger became such an important part of my life in such a short time. 🥹🫶🏻",
      "I truly miss our conversations, our laughter, our silly moments, and all the beautiful memories we made together. No matter how much time passes or how far life takes us, I will always be grateful for you and for the bond we shared. ❤️",
      "Thank you for being there for me, understanding me, listening to me, and making so many moments special. I hope your birthday is filled with happiness, love, laughter, and everything you deserve. 💗",
      "I hope you always keep smiling and achieve all your dreams. Even though we are not talking like before, you will always be special to me, and I will always wish the best for you. 🥹❤️",
      "Happy Birthday once again, bestie! I miss you, I love you, and I hope we make many more beautiful memories together someday. ♾️🎂💕",
    ],
    signOff: "Love you ❤",
  },

  final: {
    heading: "One last thing…",
    message:
      "May all the good things you've been waiting for finally find you this year.",
    letterHeading: "Before you go…",
    // This is typed out live, letter by letter, like it's being handwritten
    // in front of you. Keep lines reasonably short so it reads nicely.
    letterParagraphs: [
      "If no one's told you today — I'm really, really glad you exist.",
      "Here's to another year of your laugh, your randomness, and everything that makes you, you.",
      "Happy Birthday. I mean every word of this. 🎂",
    ],
    letterSignOff: "— with all my love",
    buttonLabel: "Restart ↺",
  },
};

export type BirthdayContent = typeof birthdayContent;
