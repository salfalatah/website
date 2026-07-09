# Academic Personal Website

A personal academic website for doctoral students and researchers. Built with TanStack Start and deployed on Netlify.

## Pages

- **Home** (`/`) — Name, photo, bio, contact links (email, ORCID, LinkedIn, Google Scholar, GitHub), research interests, and news
- **Research** (`/research`) — Research overview, publications list, and project cards
- **Teaching** (`/teaching`) — Course history, student mentoring, and teaching philosophy
- **CV** (`/cv`) — Full curriculum vitae with education, publications, awards, service, and skills

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI |
| Content | Content Collections (type-safe markdown) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000).

## Customization

Replace all placeholder text in `src/routes/` with your actual information:

- `index.tsx` — your name, bio, university, and contact links
- `research.tsx` — your publications and projects
- `teaching.tsx` — your courses and mentored students
- `cv.tsx` — your complete academic CV

Add your photo by replacing `public/headshot-on-white.jpg`.

To update the site title, edit the `title` in `src/routes/__root.tsx` and your name in the nav link.
