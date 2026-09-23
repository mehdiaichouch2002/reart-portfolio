---
name: verify
description: Build, serve and visually verify this portfolio (responsiveness + form flows)
---

# Verifying the portfolio

CRA app, no router — single page with scroll sections (`[name="home"]`, `about`, `portfolio`, `skills`, `contact`).

## Build & serve

```bash
CI=false npm run build          # CRA production build
cd build && python3 -m http.server 5232 --bind 127.0.0.1 &
```

(`npx serve` also works but is slow to boot; check the port isn't already bound before assuming failure.)

## Unit tests

```bash
CI=true npx react-scripts test --watchAll=false
```

Gotchas already handled in the repo:
- `react-markdown`/`remark-gfm` are ESM-only → mocked via `jest.moduleNameMapper` in package.json → `src/__mocks__/`.
- `src/setupTests.js` mocks `matchMedia`, `IntersectionObserver` (framer-motion), `scrollIntoView`, and clears `localStorage` after each test (language choice persists there and leaks between tests otherwise).

## Responsiveness / visual checks

Drive with `puppeteer-core` + system Chrome (`/usr/bin/google-chrome`,
args `--no-sandbox --disable-gpu --hide-scrollbars`). Do NOT use bare
`google-chrome --headless --screenshot` — its window-size handling
renders a bogus layout at small widths.

Key checks:
- `document.documentElement.scrollWidth <= viewport` at 320/390/768/1024/1440. Note `html,body { overflow-x: clip }` masks overflow from scrollWidth — also scan `getBoundingClientRect()` of all elements for rects past the viewport edges. Expected false positive: the mobile menu parked off-screen at `translate-x-full`.
- Hero headline: the French headline is the longest — set `localStorage.setItem("lang","fr")`, reload, and check the h1 wraps inside the text column at 320px and 390px without overflowing. The "See my work" and "Download resume" buttons should be above the fold at 1440×720.
- Contact form: fill `#contact-name`/`#contact-email`/`#contact-message`, submit, assert `[role="alert"]` messages. Form is `noValidate` — validation is custom and bilingual.
- Smooth scrolling is on (`scroll-behavior: smooth`), so jump with `window.scrollTo({top, behavior: "instant"})` before screenshots, or you'll capture mid-scroll.
- AI chat: click `button[aria-label="Toggle AI Assistant"]`; window must fit a 320×600 viewport.
