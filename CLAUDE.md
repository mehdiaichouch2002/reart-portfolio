# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio for Mehdi Aichouch: a single-page Create React App site (React 18, Tailwind CSS 3, Framer Motion) with no router and no backend.

## Commands

```bash
npm start                                          # dev server on http://localhost:3000
CI=false npm run build                             # production build to build/ (CI=false stops lint warnings from failing the build)
CI=true npx react-scripts test --watchAll=false    # run all tests once
CI=true npx react-scripts test --watchAll=false -t "Language switcher"   # run one describe/test by name
```

Linting is CRA's built-in ESLint (`react-app` config), which runs during `start` and `build`. There is no separate lint script.

To build, serve, and visually verify the site at different viewport sizes, use the project skill `.claude/skills/verify/SKILL.md`.

## Environment

Copy `.env.example` to `.env`. Every variable needs the `REACT_APP_` prefix and is inlined into the client bundle at build time:
- `REACT_APP_EMAILJS_*`: used by the contact form (`src/services/contactService.js`, sent through EmailJS).
- `REACT_APP_OPENROUTER_API_KEY`: used by the AI chat assistant (`src/services/chatService.js`).

## Architecture

- **Page layout:** `src/App.jsx` stacks the section components (`Home`, `About`, `Portfolio`, `Skills`, `Contact`) inside `LanguageProvider` and `ResumeModalProvider`. Navigation uses `react-scroll`, which targets elements by `name` (`home`, `about`, …). The link list is in `src/data/navLinks.js`, and the labels come from `nav.*` translations.
- **i18n (EN/FR):** `src/context/LanguageContext.jsx` provides `t("dotted.key")`, which looks up `src/i18n/translations.js` and returns the key itself when nothing matches. The chosen language is saved in `localStorage["lang"]`. `t()` can also return arrays or objects. For example, the About timeline is `t("timeline")`, and the hero typewriter roles are `t("home.roles")`. Any user-facing text change has to be made in both the `en` and `fr` trees. `src/data/timeline.js` is not imported anywhere, so edit the timeline in `translations.js`.
- **Projects:** `src/data/projects.js` holds the metadata: image import, link, `hosted`, `category` (`commercial` | `opensource` | `personal`), `tech`, and `descriptionKey`. The description text is at `portfolio.projects.<descriptionKey>` in both languages. `Portfolio.jsx` filters by category and uses "show more" paging. Project images go in `src/assets/projects/`, and technology logos go in `src/assets/technologies/` (listed in `src/data/technologies.js`).
- **Logic in hooks and services:** components use hooks (`useContactForm`, `useChat`, `useScrolled`), and hooks call services for network I/O. The contact form sets `noValidate` and runs its own bilingual validation.
- **AI chat assistant:** `chatService.streamChatResponse` is an async generator that streams SSE from the OpenRouter chat-completions API, tries each free model in `MODELS` in order, moving to the next one on an HTTP error or an empty reply (`openrouter/free` is OpenRouter's router across whatever free models are up). Free models are often rate-limited upstream (429) and get retired without notice, so when the chat breaks, first check that the IDs in `MODELS` still exist. Fallback attempts are logged with `console.warn("[AI chat] ...")`. The assistant's knowledge of Mehdi comes entirely from the hardcoded `SYSTEM_PROMPT` in that file. **When projects, the timeline, or skills change, update `SYSTEM_PROMPT` too**, or the chatbot will give outdated answers. A rate-limit error comes back as the sentinel message `"rate_limit"`, which `useChat` detects.
- The `@anthropic-ai/sdk`, `@google/generative-ai`, and `axios` dependencies are currently unused in `src/`.

## Testing notes

Tests are in `src/App.test.jsx` (Jest + Testing Library, rendering the full `<App />`). Test setup already handles these cases:
- `react-markdown` and `remark-gfm` are ESM-only, so the `jest.moduleNameMapper` in `package.json` points them to mocks in `src/__mocks__/`.
- `src/setupTests.js` mocks `matchMedia` (for react-slick), `IntersectionObserver` (for framer-motion), and `scrollIntoView`. It also clears `localStorage` after each test so the saved language doesn't carry over into the next test.
