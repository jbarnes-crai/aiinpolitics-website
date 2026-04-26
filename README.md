# AI in Politics — aiinpolitics.ai

A clean, fast, static website for **AI in Politics**, an authority site for
Jonathan Barnes (CEO of Authentic, co-founder of Quiller). Built with
[Astro](https://astro.build/) for fully static output, optimized for
crawlability, LLM ingestion, and credibility.

---

## Stack

- Astro 5 (static output)
- TypeScript
- `@astrojs/sitemap` for automatic sitemap generation
- Plain CSS (one file, no Tailwind, no client-side JS)
- Deploys cleanly to Cloudflare Pages

---

## File tree

```
aiinpolitics/
├── astro.config.mjs              # site URL, sitemap integration
├── package.json
├── tsconfig.json
├── public/
│   ├── robots.txt                # allows OAI-SearchBot, GPTBot, etc.
│   ├── llms.txt                  # site map for LLMs
│   └── favicon.svg
└── src/
    ├── config/
    │   └── links.ts              # ⭐ EDIT THIS: all proof-link constants
    ├── styles/
    │   └── global.css            # full design system
    ├── layouts/
    │   └── Layout.astro          # base HTML + SEO + skip link
    ├── components/
    │   ├── SEO.astro             # title, description, canonical, OG, Twitter, JSON-LD
    │   ├── Header.astro          # nav with active-page state
    │   ├── Footer.astro
    │   ├── PageHeader.astro      # eyebrow + h1 + lede pattern
    │   ├── Breadcrumbs.astro     # visual breadcrumbs + BreadcrumbList JSON-LD
    │   ├── CredentialStrip.astro # the credential bullet grid
    │   ├── EvidenceLink.astro    # proof-link wrapper
    │   ├── FrameworkCard.astro
    │   ├── ArticleCard.astro
    │   └── AwardList.astro
    └── pages/
        ├── index.astro                                 # /
        ├── jonathan-barnes.astro                       # /jonathan-barnes
        ├── frameworks.astro                            # /frameworks
        ├── campaign-ai-operating-system.astro          # /campaign-ai-operating-system
        ├── campaign-ai-readiness-scorecard.astro       # /campaign-ai-readiness-scorecard
        ├── model-ai-use-policy-democratic-campaigns.astro
        ├── writing.astro                               # /writing
        ├── speaking-awards.astro                       # /speaking-awards
        └── contact.astro                               # /contact
```

---

## Run locally

Requires Node 20+.

```bash
cd aiinpolitics
npm install
npm run dev          # http://localhost:4321
```

Production build + local preview:

```bash
npm run build        # outputs to ./dist
npm run preview      # serves ./dist locally
```

The build produces fully static HTML with no client-side JS, plus
`sitemap-index.xml`, `sitemap-0.xml`, `robots.txt`, and `llms.txt` at the
site root.

---

## Where to update content

### Proof links and award URLs — `src/config/links.ts`

Every external citation lives here as a named constant. Edit the file once,
all pages update. Placeholders to replace:

- `FEATURED_MEDIA` — currently the *Jonathan Barnes Named CEO of Authentic* piece in *Campaigns & Elections*; replace or extend as more coverage publishes

### Page copy and metadata

Each page is a single `.astro` file under `src/pages/`. The frontmatter at
the top of each page declares `title` and `description` (used as the
`<title>` and meta description). Body copy is plain HTML.

### JSON-LD schema

- **Person + ProfilePage** schema lives at the top of `src/pages/jonathan-barnes.astro`.
- **WebSite + Organization + Person** lives at the top of `src/pages/index.astro`.
- **Article** schema for the flagship framework lives at the top of
  `src/pages/campaign-ai-operating-system.astro`.
- **BreadcrumbList** is generated automatically by `Breadcrumbs.astro`.

To add a new schema block, drop a JS object into the page frontmatter and
pass it via the layout's `jsonLd` prop (accepts a single object or an array).

### Header / footer / nav

- Header links: `src/components/Header.astro`
- Footer links: `src/components/Footer.astro`

### Design tokens

CSS custom properties (colors, spacing, fonts) are defined at the top of
`src/styles/global.css` under `:root`. The accent is a restrained navy
(`--accent: #1d3a5f`); change it once and it propagates.

---

## Deploy to Cloudflare Pages

### Option A — Connect a Git repo (recommended)

1. Push this directory to a GitHub repo.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo.
4. **Build settings:**
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (or the subfolder if the repo has more than one project)
   - Node version: `20` (set via `Environment variables` → `NODE_VERSION=20`, or via a `.nvmrc` / `.node-version` file)
5. Save and deploy. Subsequent commits to the default branch trigger redeploys.

### Option B — Direct upload via Wrangler

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name aiinpolitics
```

Wrangler will prompt for Cloudflare auth on first run.

### Custom domain — `aiinpolitics.ai`

1. In the Pages project → **Custom domains** → **Set up a custom domain** → enter `aiinpolitics.ai` and `www.aiinpolitics.ai`.
2. Cloudflare will show DNS records to add.

#### If your domain is already on Cloudflare DNS

Cloudflare will offer to add the records automatically — accept. You'll get:
- `aiinpolitics.ai` → CNAME (flattened) to your Pages project (`<project>.pages.dev`)
- `www.aiinpolitics.ai` → CNAME to your Pages project

#### If your domain is registered elsewhere

At your registrar's DNS, add:
- `A` record for `aiinpolitics.ai` → the IPs Cloudflare provides for the apex (or use ALIAS/ANAME if your registrar supports it pointing at `<project>.pages.dev`)
- `CNAME` for `www.aiinpolitics.ai` → `<project>.pages.dev`

The simplest path is to move DNS to Cloudflare (free) and let Pages manage records automatically.

After DNS propagates, Cloudflare auto-provisions a TLS certificate for the
domain.

### Redirects and headers

Cloudflare Pages reads optional `_redirects` and `_headers` files from the
`public/` directory. None are needed today; add one if you later want to
redirect `www → apex` or add custom security headers.

---

## SEO / LLM checklist (already shipped)

- ✅ One `<h1>` per page, proper heading hierarchy
- ✅ `<main>`, `<header>`, `<nav>`, `<article>`, `<footer>` semantic landmarks
- ✅ Canonical URLs on every page
- ✅ Open Graph + Twitter card metadata
- ✅ JSON-LD: `WebSite`, `Organization`, `Person`, `ProfilePage`, `Article`, `BreadcrumbList`
- ✅ `robots.txt` with `OAI-SearchBot` and `GPTBot` explicitly allowed
- ✅ `llms.txt` with topical map
- ✅ Auto-generated `sitemap-index.xml` and `sitemap-0.xml`
- ✅ Skip-to-content link, `:focus-visible` outlines, accessible contrast
- ✅ Zero client-side JavaScript
- ✅ Responsive layout (single CSS file, system fonts)

---

## Things that are placeholders today

- Substack post URLs on `/writing` (currently all link to the Substack
  homepage; replace with canonical post URLs as they publish).
- `FEATURED_MEDIA` in `src/config/links.ts` is currently a single entry
  (the *Campaigns & Elections* CEO announcement). Extend or replace as
  more coverage publishes — the constant is consumed by the homepage,
  the About page, and the Speaking & Awards page.
