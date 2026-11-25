# Tensact Labs — Homepage

Single-page homepage for Tensact Labs, built with Next.js 15 (App Router), React 19, TypeScript, Chakra UI v2 + Emotion, and GSAP. No backend, auth, CMS, or environment variables.

## Install and run
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build && npm start
```

## Deploy to Vercel
Push to GitHub, import the repo in Vercel, accept the Next.js defaults. No environment variables are needed.

## Replace the media orbit videos
1. Put short, muted-friendly MP4/WebM clips in `public/videos/orbit/`.
2. In `src/components/media-orbit/media-config.ts`, set `src` on each item, e.g. `src: "/videos/orbit/cryptography.mp4"`.
Items without `src` (or whose video fails) show a built-in animated fallback. The orbit is `aspect-ratio: 16 / 9` to match the supplied clips; change it in `globals.css` (`.orbit`, `.orbit-col`, `--h`) and `ConnectionLines.tsx` if you switch ratios.

## Replace team placeholders
Edit `TEAM` in `src/lib/constants.ts`. Members with `name`, `role`, `bio`, `x`, `linkedin` and `src` are clickable and show a profile; entries without a name stay as placeholders. Use square images in `public/images/team/`.

## Brand colors
Edit `src/theme/index.ts` (Chakra tokens) and the CSS variables at the top of `src/app/globals.css`.

## Layout notes
The desktop composition is driven by `--o` (orbit size) in `.stage`. `ConnectionLines` uses coordinates relative to the orbit, so lines scale with it. Below 900px the layout stacks and lines are hidden. Animations are disabled under `prefers-reduced-motion`.
