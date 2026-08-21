# Sujal Bhandari — Developer Portfolio

A polished, responsive developer portfolio built with React, TypeScript, Vite and Tailwind CSS. It is a static site and can be deployed free on GitHub Pages.

## Features

- Responsive desktop/tablet/mobile layout
- Light/dark mode with localStorage
- Smooth section navigation and active-section detection
- Project, skills, experience and education data separated from UI
- Accessible focus states and reduced-motion support
- Local placeholder artwork; no paid APIs or backend
- GitHub Pages-compatible Vite configuration

## Requirements

Node.js 20+ and npm.

## Install and run

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Build

```bash
npm run build
```

## Customize

Most personal information is in `src/data/portfolio.ts`. Look for `// EDIT THIS`.

- Name/title/bio/email: `src/data/portfolio.ts`
- Skills: `src/data/skills.ts`
- Projects: `src/data/projects.ts`
- Experience: `src/data/experience.ts`
- Education: `src/data/education.ts`
- Profile image: replace `src/assets/profile-placeholder.svg` with your own image and update the `<img>` source in `src/components/Hero.tsx`.
- Project images: replace the SVG files in `src/assets/projects/` and keep the paths in `src/data/projects.ts`.

### Profile photo recommendation

Use a square JPG or WebP image, ideally around 800×800 to 1200×1200 pixels. Keep the file reasonably compressed. The circular frame crops it automatically.

### Social links

Replace the placeholder GitHub and LinkedIn URLs in `src/data/portfolio.ts`. Do not leave fake URLs on your live site.

## GitHub Pages

1. Create a GitHub repository.
2. Push this project to the repository.
3. In GitHub, open **Settings → Pages**.
4. Choose **GitHub Actions** as the source.
5. Add a workflow that runs `npm ci` and `npm run build`, then publishes the `dist` folder. For a repository project site, Vite's relative production base in `vite.config.ts` keeps assets working.

For a user site named `YOUR_USERNAME.github.io`, the published address is `https://YOUR_USERNAME.github.io/`.

For a normal repository named `portfolio`, the address is typically `https://YOUR_USERNAME.github.io/portfolio/`.

## Folder structure

```text
src/
├── assets/
│   └── projects/
├── components/
├── data/
├── App.tsx
├── index.css
└── main.tsx
```
