# Vigneshwaran N — Portfolio

A responsive, static software-engineering portfolio built with Next.js, React,
TypeScript, Tailwind CSS, and Motion.

The visual system uses a lightweight CSS grid, cursor-positioned text reveals,
and transform-only text-roll interactions—without a WebGL runtime.

## Website variants

- The repository root contains the dark grid-and-reveal portfolio.
- `classic-3d-portfolio/` is an independently runnable copy of the original
  light 3D portfolio, including the constellation hero, projects section, and
  credential filters.

## Customize the content

Personal information, projects, experience, skills, credential categories,
social links, and SEO settings live in one typed configuration file:

`src/config/portfolio.ts`

Images and downloadable files live under `public/`.

## Local development

```bash
pnpm install
pnpm dev
```

## Production checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

The production build is a static export in `out/`. Pushes to `main` deploy it
to GitHub Pages through `.github/workflows/deploy-pages.yml`.
