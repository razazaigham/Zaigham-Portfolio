/**
 * PROJECT CARDS — copy any { ... } block, paste before the closing ];
 * then change fields. Use images under images/ e.g. "images/my-game.jpg"
 *
 * Play button: set published: true AND playUrl: "https://..." (itch, Steam, etc.)
 * In development: published: false OR leave playUrl empty
 *
 * Optional: omit role or tech if you do not want that line on the card.
 */
window.GAMES = [
  /* ─── Dummy 1 — duplicate this object to add another card ─── */
  {
    title: "Project Atlas (sample)",
    description:
      "REPLACE: One or two sentences—genre, hook, your contribution, and outcome. Dummy entry for layout; swap copy when you add a real project.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    published: false,
    playUrl: "",
    role: "Your role (e.g. Gameplay programmer)",
    tech: "Your stack (e.g. Unity)",
  },
  /* ─── Dummy 2 — shows “In development” until you set playUrl + published ─── */
  {
    title: "Neon Haul (sample)",
    description:
      "REPLACE: Short pitch for recruiters—what the player does, what systems you owned, and what shipped. Photo is placeholder art.",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80",
    published: false,
    playUrl: "",
    role: "Lead / support role here",
    tech: "Engine & tools here",
  },
  /* ─── Dummy 3 — template for a shipped title (enable Play when URL is real) ─── */
  {
    title: "Quiet Relay (sample)",
    description:
      "REPLACE: When you have a store or WebGL build, set published: true and paste the link in playUrl. Until then this card stays “In development.”",
    image:
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa4674?w=800&q=80",
    published: false,
    playUrl: "",
    role: "Solo / team credit",
    tech: "Unreal / Godot / etc.",
  },
];
