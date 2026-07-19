# Trippy Web House — Website

Dark, 3D-premium agency website for Trippy Web House. Built with React + Vite.

## Pages
- Home (`/`)
- Services (`/services`)
- About (`/about`)
- Contact (`/contact`)

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build for production
```bash
npm run build
```
Output goes to `dist/` — upload that folder to Vercel, Netlify, or any static host.

## Deploy quickly (Vercel)
```bash
npm i -g vercel
vercel
```

## Edit content
- Contact details (phone/email/Instagram): `src/components/Footer.jsx`, `src/pages/Contact.jsx`
- Services list: `src/pages/Services.jsx` (SERVICE_GROUPS array)
- Colors/theme: `src/index.css` (`:root` CSS variables at top)
- Logo: `src/assets/logo-mark.png`
# TWH_website
