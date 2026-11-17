<div align="center">

<img src="assets/rainbow-heading.gif" alt="Animated rainbow ALEX — Creative Developer heading" width="840" />

### A motion-led portfolio template for the web.

<img src="https://readme-typing-svg.demolab.com?font=Space+Mono&size=16&duration=3200&pause=900&color=EB1716&center=true&vCenter=true&width=600&lines=Design+in+motion.;Built+with+Three.js%2C+GSAP+%26+Barba.;Make+it+yours.+Make+it+move." alt="Animated tagline" />

[Customize](#customize) ·

</div>

---

## ✦ The idea

A dark, editorial portfolio with tactile paper transitions, a restrained red accent, an original Three.js scene, smooth scrolling and thirteen editable project pages. The structure is intentionally simple: plain HTML, CSS and JavaScript, so you can personalize it without a build step.

> **Template note:** Replace the sample identity, projects and outbound links before publishing. The included projects and generated artworks are demo content.

## ◈ Built with

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Structure  | HTML5, CSS3, vanilla JavaScript     |
| Motion     | GSAP, Barba.js, Lenis               |
| 3D         | Three.js r174 (ES module)           |
| Typography | Archivo Black + Zen Kaku Gothic New |
| Hosting    | GitHub Pages or any static host     |

## ✧ Features

- Responsive home, cases, about, contact and project-detail pages.
- Paper-panel transitions, blurred title entrance, drawn navigation underlines and animated grain.
- Interactive Three.js sculpture reacts gently to pointer movement.
- Project image slider with drag, swipe and thumbnail navigation.
- Tokyo clock, Web Audio UI effects (sound is opt-in), award hover badges and keyboard-friendly links.
- No install, bundler or build command required.

## Preview

1. **On your computer:** open `index.html` in a modern browser. For best results, use a local static server because browser security can restrict ES modules opened with `file://`.
2. **VS Code:** install the Live Server extension, right-click `index.html`, then choose **Open with Live Server**.
3. **Python:** from the project folder run `python -m http.server 8000`, then visit `http://localhost:8000`.
4. **Online:** publish with GitHub Pages (instructions below), then open the Pages URL shown in repository settings.

The HTML preview embedded in some file viewers may block external font/CDN requests. The locally served site is the reliable preview.

## Quick start

```text
portfolio/
├── index.html              # Home
├── cases.html              # Selected work
├── about.html              # Bio + recognition
├── contact.html            # Contact links
├── 404.html                # Custom not-found page
├── cases/                  # One detail page per project
├── assets/                 # Project images + favicon + animated README heading
├── css/style.css           # Layout, colors, responsive rules
├── js/config.js            # Identity, bio, links and project data
├── js/main.js              # Interactions and transitions
├── js/nav-draw.js          # Navigation underline animation
├── js/sound.js             # Opt-in synthesized UI sounds
├── js/scene.js             # Three.js artwork
├── webgl.html              # Full-screen 3D scene iframe
├── .gitignore              # Ignore local OS/editor clutter
└── .nojekyll               # Serve static assets as-is on Pages
```

## Customize

### 1. Edit the content

Start with `js/config.js`. Change the name, role, email, timezone, bio and project metadata. Update the visible page copy in `index.html`, `about.html`, `contact.html`, `cases.html` and the matching files in `cases/` as needed. Replace each `https://example.com` / social profile URL with your own.

### 2. Replace project artwork

Put your images in `assets/`, then change the corresponding image paths in `cases.html` and `cases/*.html`. Keep image names simple (lowercase, hyphenated) and optimize large images before uploading. The included JPGs are original demo artwork.

### 3. Match your brand

Edit the CSS variables near the top of `css/style.css`:

```css
:root {
  --dark: #000;
  --light: #fff;
  --red: #eb1716;
  --paper: #eae3d4;
}
```

The layout uses `em` sizing and viewport-based root font sizes; review the responsive rules at the end of the stylesheet before changing global type sizes.

### 4. Add or remove projects

Duplicate one of the HTML files in `cases/`, give it a unique name, then add a matching card in `cases.html` and an entry in `SITE_CONFIG.cases` in `js/config.js`. Update the thumbnail links and image alt text too.

## Preview

To test before publishing, run a local server from the folder containing `index.html`:

```bash
python -m http.server 8000
```

Open **http://localhost:8000**. Stop the server with `Ctrl+C`. Alternatively use VS Code Live Server. After GitHub Pages deployment, the public preview is the Pages link shown under **Settings → Pages**.

## Accessibility & privacy

Sound effects are generated locally with the Web Audio API and stay muted until you opt in. The 3D scene and web fonts use third-party CDNs; these requests are not necessary for the page structure, but an offline browser may show fallback fonts or omit the 3D layer. Avoid publishing private contact details you do not want public.

## License

Provided as a personal portfolio template. You may adapt the source for your own site. Replace demo identity, project descriptions and links before using it as your portfolio. Third-party libraries keep their respective licenses.

---

<div align="center">

**Made to move. Built to be remade.**  
<span style="color:#eb1716">✦</span> <span style="color:#ff9f43">✦</span> <span style="color:#f7d154">✦</span> <span style="color:#2ed573">✦</span> <span style="color:#1e90ff">✦</span> <span style="color:#a55eea">✦</span>

</div>
