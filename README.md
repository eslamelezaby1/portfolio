# Eslam Elezaby — Engineering Corps portfolio

Responsive Next.js App Router portfolio with TypeScript, React, and Tailwind CSS. An anime-inspired engineering archive using the supplied wallpaper and portraits, with CV-verified career details.

## Run
npm install
npm run dev

Open http://localhost:3000. Production: npm run build, then npm start.

## Checks
npm run lint
npm run typecheck
npm run build

## Features
- Fixed numbered navigation and active section tracking.
- Personnel dossier with professional portrait.
- Connected service timeline with dated employment records.
- Expandable mission files with original SVG schematics.
- Structured skills inventory and direct contact links.
- Downloadable CV served by a Next.js route handler.
- Responsive layouts and reduced-motion support.

## Editing
Career details and verified contact URLs: lib/portfolio.ts. Layout: app/page.tsx. Responsive styling: app/globals.css. Original archive insignia and schematics: components/archive-art.tsx. Portrait panel: components/dossier.tsx. Assets: public/assets. Replace public/Eslam-Elezaby-CV.pdf to update the download.

Mission files describe documented employment work. Contact links open email, WhatsApp, GitHub, and LinkedIn. No chatbot, AI service, Python, or FastAPI backend is used.


## Anime scene archive
The World section adds a Colossal Titan fan illustration, Levi-inspired character study, an interactive software-layer schematic, and original programming and AI messages. The hero's engineering motto links to this section, which is also available from the main navigation.

Goth Titan by Juan Casco is loaded locally from app/fonts. Its included license is personal use only. The supplied font contains blank outlines for most capitals, so decorative display titles use its complete lowercase alphabet. Body text uses a readable system font.


## Ten moments gallery
The scene gallery at /#moments sits directly beneath the cinematic Titan banner. It presents all ten scenes selected in constancejb's BuzzFeed article, with attributed MAPPA stills and original engineering interpretations. It supports numbered thumbnail selection, previous/next navigation with wraparound, and reduced-motion-aware scrolling to the selected scene. Gallery copy: lib/engineering-moments.ts. UI: components/engineering-moments.tsx. Images: public/assets/moments.

## Color palette
Loading.io Attack on Titan: https://loading.io/color/feature/AttackonTitan/

- Dark brown: #1D0E0B
- Rust: #774023
- Copper: #D88C51
- Cream: #F3E7C9
- Ivory: #FFF9F5

These five colors define the interface, with transparent and mixed shades for depth. Artwork and scene stills retain their original colors.
