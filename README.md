# Vigneshwaran N — Portfolio

A responsive, static software-engineering portfolio built with Next.js, React,
TypeScript, Tailwind CSS, and Motion.

The visual system uses a lightweight CSS grid, cursor-positioned text reveals,
and transform-only text-roll interactions—without a WebGL runtime.

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

Before the first deployment, open the repository's **Settings → Pages** and set
the source to **GitHub Actions**. The workflow supplies the GitHub Pages base
path at build time, so static assets also work when the site is hosted under a
repository subpath.
