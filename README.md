# Harsha Teja — Developer Portfolio

A premium, interactive developer portfolio built with Next.js 16 (App Router),
TypeScript, Tailwind CSS v4 and Framer Motion. Every claim, project and
skill on the site comes from Lakshmi Harsha Teja Kesamneni's actual resume —
nothing is fabricated.

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-based theme tokens in `app/globals.css`)
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Hero background:** a lightweight, dependency-free `<canvas>` particle
  field (mouse-responsive, pauses when the tab is hidden, respects
  `prefers-reduced-motion`) instead of a heavier Three.js scene

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Folder structure

```
app/
  layout.tsx        # fonts, metadata, SEO
  page.tsx           # assembles all sections
  globals.css          # design tokens + Tailwind theme
components/
  Navbar.tsx             # sticky nav, active-section indicator, scroll progress
  Hero.tsx                # animated hero + particle background
  ParticleField.tsx        # canvas particle field (client-only)
  About.tsx
  TechStack.tsx
  Projects.tsx              # grid of ProjectCard
  ProjectCard.tsx
  ProjectModal.tsx            # project detail overlay
  Experience.tsx                # timeline
  GithubSection.tsx
  Contact.tsx
  Footer.tsx
  CustomCursor.tsx                # desktop-only, disabled on touch/reduced-motion
data/
  projects.ts                       # all project content
  technologies.ts                     # tech stack + timeline content
public/
  images/profile.jpg                    # (add this — see below)
  images/projects/*.png                   # (add these — see below)
  resume/Harsha_Teja_Resume.pdf             # (add this — see below)
```

## Replacing the profile photo

Add an image at:

```
public/images/profile.jpg
```

Until it exists, the About section shows a clean placeholder instead of a
broken image.

## Replacing project screenshots

Add PNGs at:

```
public/images/projects/taskflow.png
public/images/projects/hirehub.png
public/images/projects/finance-dashboard.png
public/images/projects/nutribite.png
public/images/projects/hospital.png
public/images/projects/restaurant.png
```

Any project without a matching image automatically falls back to a neutral
placeholder card — the site never breaks or shows a broken-image icon.

## Adding your resume

Add the PDF at:

```
public/resume/Harsha_Teja_Resume.pdf
```

The "Resume" button in the hero automatically detects whether the file
exists at build time. If it's missing, the button renders as a clear,
disabled state instead of a dead link.

## Changing GitHub / LinkedIn / email

Contact details are centralized in a few places:

- `components/Contact.tsx` — the `CONTACT` object at the top of the file
- `components/Hero.tsx` — the social icon links
- `components/GithubSection.tsx` — the GitHub profile link
- `data/projects.ts` — each project's individual `github` field

## Editing project content

All project copy — title, category, stack, summary, problem/solution,
features, architecture, and links — lives in `data/projects.ts`. Add a new
entry to the array to add a new project card automatically.

## Deploying to Vercel

This project needs no environment variables and no custom server —
it's a standard Next.js app.

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed.
4. Deploy.

If you later add anything that does need an environment variable (an
analytics key, a contact-form endpoint, etc.), document it in
`.env.example` and add it in your Vercel project settings.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `section`, `footer`) and a proper
  heading hierarchy throughout
- Visible focus states on every interactive element
- `prefers-reduced-motion` disables the particle field's motion, the custom
  cursor, and reduces Framer Motion animation durations globally
- The particle field and custom cursor are client-only, gated to
  pointer-capable devices, and the particle animation pauses when the tab
  isn't visible
- The profile photo uses Next.js `<Image />`; project screenshots use a
  plain `<img>` with a graceful `onError` fallback since their exact source
  file may not exist yet
"# Harsha-Teja" 
