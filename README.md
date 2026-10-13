# Nu Skin Storefront

A responsive storefront demo built with React, Vite, and Material UI.

## Requirements

- Node.js 20.19+ or 22.12+
- Yarn

## Getting started

```bash
yarn install
yarn dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Available scripts

- `yarn dev` — start the development server.
- `yarn build` — create a production build in `dist/`.
- `yarn preview` — serve the production build locally.
- `yarn lint` — run ESLint.

## Features

- Responsive storefront landing page with product, brand, and editorial sections.
- Add-to-cart interaction with a live item count (session-only demo state).
- Search that opens a detail page displaying the submitted query.

Product and page content is defined in `src/data.js`. Product imagery is loaded from Unsplash, so viewing those images requires an internet connection.
