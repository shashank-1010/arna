Put your character images or GIFs here, one per screen, then point each
one at its file in src/content/birthday.ts under `mascotImages`:

  intro.gif / intro.png     -> mascotImages.intro     ("Do you wanna see it?")
  retry.gif / retry.png     -> mascotImages.retry      (shown after tapping "no")
  excited.gif / excited.png -> mascotImages.excited    ("Are you really excited?")
  birthday.gif / birthday.png -> mascotImages.birthday (the HAPPY BIRTHDAY screen)
  final.gif / final.png     -> mascotImages.final      (the very last screen)

You are not limited to those file names — use anything, as long as the
path in mascotImages matches. Example, in src/content/birthday.ts:

  mascotImages: {
    intro: "/mascot/intro.gif",
    retry: "/mascot/retry.png",
    excited: "/mascot/excited.gif",
    birthday: "/mascot/birthday.png",
    final: "/mascot/final.gif",
  },

GIFs work with zero extra setup — the browser animates them automatically,
just reference the .gif file like any image. Leave a screen's value as
null to keep the built-in hand-drawn doodle for that screen only; doodle
pages and image/GIF pages can be mixed freely.
