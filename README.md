# Product Portfolio 

## Overview

This is a product portfolio website built with Vite, React, TypeScript, and Tailwind CSS. Recent updates include:

- Updated theme colors to a deep slate blue (`#0C182F`) with complementary accents.
- Added placeholder images in the Case Study page for visual context.
- Streamlined asset handling using `public/` for static files and `src/assets/` for imports.

## Getting Started

Prerequisites:
- Node.js and npm installed (recommended via nvm).

Setup and run:
```sh
# Install dependencies
npm install

# Start the development server (HMR enabled)
npm run dev
# Open http://localhost:8080/

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

- `public/` – static files served at the site root (e.g., `/placeholder.svg`).
- `src/index.css` – global styles and theme variables.
- `src/pages/CaseStudyScanAndPay.tsx` – case study content and images.
- `src/assets/` – images imported via modules (e.g., profile photo).

## Theme & Styling

- Colors are defined as CSS variables in `src/index.css` under `:root`.
- Primary theme updated to deep slate blue (`#0C182F`).
- To change theme colors, edit variables such as `--primary`, `--primary-light`, `--primary-dark`, and `--accent`.

## Images

- Placeholder images are located in `public/placeholder.svg` and `public/placeholder2.svg`.
- Case Study uses placeholder images added in `src/pages/CaseStudyScanAndPay.tsx`.
- Use `public/` for files referenced by path (e.g., `src="/image.png"`).
- Use `src/assets/` for module imports:
  - `import img from '@/assets/my-image.jpg'`
  - `<img src={img} alt="..." />`
- Profile photo lives at `src/assets/profile-photo.jpg` (replace with your image as needed).

## Scripts

- `dev` – start Vite dev server.
- `build` – create production build.
- `preview` – serve the production build locally.
- `lint` – run ESLint.

## Tech Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Notes

- Static assets in `public/` are available at the site root (e.g., `/favicon.ico`).
