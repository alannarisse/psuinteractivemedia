# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About This Site

PSUInteractiveMedia.com is a static HTML/CSS/JS educational support site for Interactive Media courses (DES140, DES340, DES341, DES342) at Portland State University, maintained by instructor Alanna Risse. It is deployed via GitHub Pages.

There is no build step, no package manager, and no framework. Everything is plain HTML, CSS, and vanilla JavaScript with CDN-loaded libraries.

## Previewing the Site

Use the VS Code **Live Server** extension (configured to port 5501 for the multi-root workspace, or 5502 for the single-root workspace). Open any `.html` file and click "Go Live". There is no `npm start` or equivalent.

## Sass / SCSS

### Main site styles

The global stylesheet is authored in SCSS at `css/scss/style.scss` and compiled to `css/style.css`. The partials are:

| Partial | Contents |
|---|---|
| `_variables.scss` | Colors (`$yellow`, `$orange`, `$red`, `$teal`, `$dark-teal`, `$body-text`, `$aside-bg`), font stacks (`$font-display`, `$font-body`, `$font-impact`), breakpoints (`$bp-tablet: 768px`, `$bp-desktop: 1024px`) |
| `_base.scss` | Reset-adjacent globals, body, img, a, td, etc. Also holds the Typekit `@import url()` which Sass hoists to the top of the compiled output. |
| `_typography.scss` | h1–h5 with responsive overrides |
| `_layout.scss` | Containers, `.grid-2`, `.three-col`, flex helpers |
| `_nav.scss` | Nav bar, logo, hamburger icon, `.menu-mobile`, `.menu-desktop` |
| `_header.scss` | Header with background image, `header nav` overrides |
| `_footer.scss` | Footer and `.ack` land acknowledgment block |
| `_components.scss` | Buttons, cards, glossary tab, aside, utility classes |
| `_pages.scss` | Page-specific styles: home, subpage, videos, glossary, student list, definition page |

**Compile:**
```bash
npx sass css/scss/style.scss css/style.css --no-source-map
```

**Watch:**
```bash
npx sass --watch css/scss/style.scss css/style.css --no-source-map
```

Both commands are also available as VS Code tasks (`Ctrl+Shift+B` runs "Sass Compile (main)" by default).

### sass-demo (teaching example only)

`sass-demo/` is a standalone teaching demo. Compile with:
```bash
sass sass-demo/scss/main.scss sass-demo/css/style.css
```

The root `gulpfile.js` watches `*.scss` at the repo root (not inside `sass-demo/` or `css/`). The VS Code task "Sass Compile (sass-demo)" targets `sass-demo/` specifically.

## Architecture

### Global Shell

Every page uses the same shell pattern:

- `css/meyer-reset.css` — CSS reset
- `css/style.css` — site-wide styles (Adobe Typekit fonts: `bungee` and `input-mono`; color palette defined in comments at the top)
- `js/script.js` — injects shared nav and footer via jQuery; called on every page

`js/script.js` provides four functions called on DOM ready:
- `topNavList()` — renders `#topnavlist` via jQuery `.html()`
- `footerNavList()` — renders `#footernavlist`
- `glossaryTab()` — renders the floating `.glossary-tab` link
- `toggleIcon()` / `closeMobileMenu()` — hamburger menu for mobile

Any page that includes `/js/script.js` must also load jQuery before it (from CDN).

### CDN Libraries Used Site-Wide

- **jQuery** (3.6.4 or 4.0.0 depending on page)
- **GSAP** 3.x + ScrollTrigger (parallax on `<header>` background)
- **animate.css** 4.1.1 (used on homepage headings)

### Page Structure Conventions

All pages follow this body structure:
```html
<div class="glossary-tab"></div>
<nav class="nav">…</nav>
<header>…</header>
<main class="container">…</main>
<footer><ul id="footernavlist"></ul></footer>
```

Body class is `home` on the homepage and `subpage` on interior pages.

### Terms / Student Roster Pages

`terms/current/index.html` and each `terms/<term>/index.html` hold the student roster for that class term. The pattern is a JavaScript `students` array at the bottom of the HTML file, rendered into `#the-list` by an inline script. The `everything-component.js` script in `terms/` renders the master archive list into `#master`.

**To add a new term:** duplicate an existing term folder (e.g. `terms/wi26des140/`), update the `students` array, update the `<title>` and heading, and add a link to the new folder in `terms/everything-component.js` and in `terms/current/index.html`.

**Student object shape:**
```js
{
  name: '',       // display name
  homepage: '',   // student GitHub Pages URL
  github: '',     // GitHub profile URL
  p1Name: '',     // project 1 title
  p1Fig: '',      // Figma file URL
  p1Link: '',     // live project URL
  p1Thumb: '',    // filename relative to /images/students/
  p2Name: '', p2Fig: '', p2Link: '', p2Thumb: ''
}
```

### Demos

`demos/` contains standalone HTML demos linked from `demos/index.html`. Each subdirectory is self-contained. They use the same global nav shell pattern. There is no shared build — add a new demo by creating a subdirectory with its own `index.html` and adding a link in `demos/index.html`.

### Code Snippets & In-Class Demos

`code_snippets/` and `in-class-demos/` are archives of teaching examples. These are not linked from the main nav and do not need to follow the site shell pattern.

### Templates

`templates/basic-site/` and `templates/basic-site-w-logo/` are starter kits given to students. They are self-contained (no dependency on the site's global CSS/JS).

## URL Conventions

All internal links on main site pages use **absolute paths** from the site root (e.g., `/css/style.css`, `/js/script.js`, `/images/logo.png`). Only the standalone templates and demos in subdirectories use relative paths for their own local assets.

## Deployment

The site deploys automatically via GitHub Pages on push to `master`. The live URL is [psuinteractivemedia.com](http://psuinteractivemedia.com/).
