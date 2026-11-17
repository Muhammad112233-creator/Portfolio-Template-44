/* ============================================================
   CONFIG — Edit everything here. This is the ONLY file you
   need to change to make the template yours.
   ============================================================ */
window.SITE_CONFIG = {
  /* --- Identity --- */
  name: "Alex Carter",
  nameShort: "Alex",
  logoText: "ALEX",
  role: "Creative Developer",
  roleJP: "クリエイティブデベロッパー",
  taglineJP: "コードとモーションで、没入感のあるWeb体験を作る",
  taglineJPAccent: "Web体験",
  locationFrom: "From Lahore to Tokyo",
  timezone: "Asia/Tokyo",
  timezoneLabel: "JP",
  email: "hello@alexcarter.dev",

  /* --- Socials --- */
  socials: [
    { label: "[ MAIL ]", value: "hello@alexcarter.dev", href: "mailto:hello@alexcarter.dev" },
    { label: "[ X ]", value: "@alexcarter_dev", href: "https://x.com/" },
    { label: "[ INSTAGRAM ]", value: "@alexcarter.dev", href: "https://instagram.com/" },
    { label: "[ GITHUB ]", value: "alexcarter-dev", href: "https://github.com/" }
  ],

  /* --- Home --- */
  homeTitle: "Creative<br/>Developer",

  /* --- About (bilingual blocks, same structure as reference) --- */
  about: [
    {
      id: "about", index: "[ 01 ]", title: "About me",
      jp: "Alexです。子どもの頃からゲームやデザインが好きで、2021年にWeb制作の世界に入りました。最初は静的なサイトを作っていましたが、動きのあるサイトに惹かれ、コードとモーションを学び始めました。今は3Dやインタラクションのある没入型のWebサイトを作っています。",
      en: "I'm Alex. I've loved games and design since I was a kid, and I entered web production in 2021. I started with static sites, but I was drawn to websites that move — so I taught myself code, motion and interaction. Today I build immersive websites with 3D and interaction, like this one.",
      jp2: "絵を描くこと、音楽を聴くことが好きで、その感覚が制作の土台になっています。日本が好きで、いつか日本で働くことが目標です。",
      en2: "I love drawing and music, and that eye still shapes how I build. I love Japan — my goal is to work with a Japanese studio one day."
    },
    {
      id: "what-i-do", index: "[ 02 ]", title: "What I do",
      jp: "クリエイティブデベロッパー。動きが必要なWebサイトを作ります。アニメーション、インタラクション、3D。細部まで考え抜いて実装します。デザインもできますが、主戦場は開発です。フリーランスの案件も歓迎します。",
      en: "Creative development. I build websites that need to move: animation, interaction and 3D, thought through in every detail. I design too, but development is where I focus. Open to freelance projects and studio collaborations."
    },
    {
      id: "recognition", index: "[ 03 ]", title: "Recognition",
      jp: "これまでに携わったプロジェクトの受賞歴です。",
      en: "Selected recognition from projects I have contributed to.",
      awards: [
        { org: "Awwwards", prize: "Site of the Day", href: "https://www.awwwards.com/" },
        { org: "Awwwards", prize: "Developer Award", href: "https://www.awwwards.com/" },
        { org: "CSS Design Awards", prize: "Website of the Day", href: "https://www.cssdesignawards.com/" },
        { org: "MUUUUU.ORG", prize: "Site of the Day", href: "https://muuuuu.org/" }
      ]
    },
    {
      id: "philosophy", index: "[ 04 ]", title: "Philosophy",
      jp: "プロジェクトには深く潜ります。クリエイティブであること、そしてきちんと機能すること。その両方を成立させるために何が必要かを理解しています。",
      en: "I go deep into every project. I know what it takes for a site to be creative and still work. Radical, disruptive, built to hit hard — but always functional."
    }
  ],

  /* --- Cases (edit titles, tags, images) --- */
  cases: [
    { slug: "nova-studio", title: "Nova Studio", year: "2026", image: "assets/case-nova.jpg",
      tags: ["Creative Development", "Motion", "3D / WebGL"],
      category: "Brand site", role: "Design + Development", date: "March 2026",
      desc: "A data studio reimagined as a living 3D space. Floating glass panels, scroll-driven camera moves and a custom WebGL scene built with Three.js.",
      credits: "Design + Development by Alex Carter", live: "https://example.com" },
    { slug: "atlas-motors", title: "Atlas Motors", year: "2026", image: "assets/case-atlas.jpg",
      tags: ["UI Design", "Motion", "3D / WebGL"],
      category: "Product site", role: "Development", date: "January 2026",
      desc: "A concept car launch site with a real-time 3D configurator, cinematic lighting and buttery page transitions.",
      credits: "Development by Alex Carter", live: "https://example.com" },
    { slug: "mira-cosmetics", title: "Mira Cosmetics", year: "2025", image: "assets/case-mira.jpg",
      tags: ["UI Design", "Creative Development", "Motion"],
      category: "E-commerce", role: "Design + Development", date: "November 2025",
      desc: "A quiet-luxury beauty store with tactile product reveals, magnetic buttons and a fully custom cart experience.",
      credits: "Design + Development by Alex Carter", live: "https://example.com" },
    { slug: "orbit-labs", title: "Orbit Labs", year: "2025", image: "assets/case-orbit.jpg",
      tags: ["Creative Development", "3D / WebGL", "Motion"],
      category: "Tech site", role: "Development", date: "September 2025",
      desc: "An interactive orbital visualisation for a space-tech startup. Drag to spin the ring, scroll to fly through it.",
      credits: "Development by Alex Carter", live: "https://example.com" },
    { slug: "kite-co", title: "Kite & Co", year: "2025", image: "assets/case-kite.jpg",
      tags: ["Creative Development", "Motion", "UI Design"],
      category: "Architecture site", role: "Design + Development", date: "July 2025",
      desc: "A brutalist architecture portfolio with layered paper-like panels and a strict grid that breaks on purpose.",
      credits: "Design + Development by Alex Carter", live: "https://example.com" },
    { slug: "northwind", title: "Northwind", year: "2025", image: "assets/case-northwind.jpg",
      tags: ["UI Design", "Motion", "Creative Development"],
      category: "Fashion site", role: "Development", date: "May 2025",
      desc: "A fashion house site where fabric simulation and typography move together on every scroll.",
      credits: "Development by Alex Carter", live: "https://example.com" },
    { slug: "scs-construction", title: "SCS Construction", year: "2026", image: "assets/case-archway.jpg",
      tags: ["Architecture", "Creative Development", "Motion"],
      category: "Studio site", role: "Design + Development", date: "April 2026",
      desc: "A considered digital home for a practice shaping places with light, material and landscape. Architectural photography meets a quiet, tactile interface.",
      credits: "Design + Development by Alex Carter", live: "https://example.com" },
    { slug: "cool-agency", title: "Cool Agency", year: "2026", image: "assets/case-lumen.jpg",
      tags: ["Creative Development", "Motion", "3D / WebGL"],
      category: "Agency site", role: "Creative Development", date: "February 2026",
      desc: "A new business card for an independent creative studio, built around a luminous object, expressive type and confident transitions.",
      credits: "Creative Development by Alex Carter", live: "https://example.com" },
    { slug: "legacy-house", title: "Legacy House", year: "2025", image: "assets/case-form.jpg",
      tags: ["Brand site", "UI Design", "Motion"],
      category: "Brand site", role: "Design + Development", date: "December 2025",
      desc: "A future-facing furniture label with a material-first catalogue, strong editorial rhythm and product stories built to last.",
      credits: "Design + Development by Alex Carter", live: "https://example.com" },
    { slug: "basic-objects", title: "Basic Objects", year: "2025", image: "assets/case-basic.jpg",
      tags: ["E-commerce", "UI Design", "Motion"],
      category: "E-commerce", role: "Design + Development", date: "October 2025",
      desc: "An everyday stationery shop with a beautifully simple product system, tactile details and a warm, sunlight-led visual language.",
      credits: "Design + Development by Alex Carter", live: "https://example.com" },
    { slug: "willy-music", title: "Willy Music", year: "2025", image: "assets/case-willy.jpg",
      tags: ["Artist site", "Creative Development", "Motion"],
      category: "Artist site", role: "Development", date: "August 2025",
      desc: "A digital stage for an independent musician. A dark visual world, live-show updates and a sound-led release experience.",
      credits: "Development by Alex Carter", live: "https://example.com" },
    { slug: "nissan-super-expo", title: "Nissan Super Expo", year: "2025", image: "assets/case-vanta.jpg",
      tags: ["Campaign", "3D / WebGL", "Motion"],
      category: "Campaign site", role: "Creative Development", date: "June 2025",
      desc: "A concept vehicle showcase with a dramatic product reveal, interactive colour story and a high-energy launch sequence.",
      credits: "Creative Development by Alex Carter", live: "https://example.com" },
    { slug: "neiru", title: "NEIRU", year: "2025", image: "assets/case-neiru.jpg",
      tags: ["Beauty", "E-commerce", "UI Design"],
      category: "Beauty site", role: "Design + Development", date: "April 2025",
      desc: "A serene skincare experience built around thoughtful formulation, sensorial photography and clear, effortless product discovery.",
      credits: "Design + Development by Alex Carter", live: "https://example.com" }
  ]
};
