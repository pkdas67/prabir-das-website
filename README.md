# Prof. Prabir Kumar Das — Professional Website

A modern, academic-style personal website for **Prof. Prabir Kumar Das (P K Das)** — Professor with 30 years of experience in Statistics, Analytics, and Professional Training.

🌐 **Live Site:** [https://pkdas67.github.io/prabir-das-website](https://pkdas67.github.io/prabir-das-website)

---

## Features

- **Hero Section** — Professional introduction with CTA buttons
- **About / Bio** — Background, expertise areas, and professional engagements
- **Research & Publications** — Filterable publications showcase with Google Scholar link
- **Training Programs** — Catalog of open and customised training programs
- **Contact Form** — Inquiry form with Formspree integration
- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **SEO-friendly** — Metadata, semantic HTML, and fast static generation
- **GitHub Pages Ready** — Automated CI/CD deployment

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Static Export)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** GitHub Pages via GitHub Actions
- **Form:** Formspree (free tier)

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Static files are generated in the `out/` directory.

---

## Deployment (GitHub Pages)

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`).

Every push to `main` triggers an automatic build and deployment.

**One-time setup required:**
1. Go to repository **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Save settings

Your site will be live at: `https://pkdas67.github.io/prabir-das-website`

---

## Customising Content

See **[CONTENT.md](./CONTENT.md)** for a detailed guide on how to:
- Add your profile photo
- Update bio and expertise areas
- Add your research publications
- Configure training programs
- Set up the contact form
- Update social/academic links

---

## Project Structure

```
prabir-das-website/
├── app/
│   ├── globals.css        # Global styles and Tailwind theme
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Sticky responsive navigation
│   ├── HeroSection.tsx    # Hero with gradient background
│   ├── AboutSection.tsx   # Bio and expertise
│   ├── ResearchSection.tsx # Publications with filter
│   ├── TrainingSection.tsx # Training programs catalog
│   ├── ContactSection.tsx # Contact form (Formspree)
│   └── Footer.tsx         # Site footer
├── data/
│   ├── publications.ts    # Research publications data
│   └── training.ts        # Training programs data
├── public/
│   └── .nojekyll          # Required for GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment
├── CONTENT.md             # Content customisation guide
└── next.config.ts         # Next.js config (static export)
```

---

## Color Scheme

| Color            | Hex       | Usage              |
|------------------|-----------|--------------------|
| Professional Blue | `#2563EB` | Primary actions, links |
| Academic Purple   | `#7C3AED` | Accents, gradients |
| Dark Navy         | `#1e3a8a` | Hero background    |

---

## License

© Prof. Prabir Kumar Das. All rights reserved.
