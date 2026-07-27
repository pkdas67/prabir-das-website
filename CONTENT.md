# Content Guide for Prof. Prabir Kumar Das Website

This document guides you through updating the website with your personal content.
All placeholder content in the website can be replaced by editing the files listed below.

---

## 1. Profile Photo

**File to update:** `public/profile.jpg`

Please add a professional headshot photo:
1. Name the file `profile.jpg` (or `profile.png`)
2. Place it in the `public/` folder
3. Recommended size: 400×400 pixels or larger (square format preferred)

Then update `components/HeroSection.tsx` to use the image:
Replace the SVG placeholder with:
```tsx
import Image from "next/image";
// Inside the profile div:
<Image src="/profile.jpg" alt="Prof. Prabir Kumar Das" fill className="object-cover" />
```

---

## 2. About / Bio Section

**File to update:** `components/AboutSection.tsx`

Replace the placeholder bio text (lines ~55–80) with your actual bio. You can include:
- Your full name and credentials (PhD, institution)
- Current position and institution
- Summary of your academic journey
- Research interests and contributions
- Industry/corporate experience
- Teaching philosophy (optional)

**Areas of expertise** (already listed, update as needed):
```
Statistics & Probability, Business Analytics, Financial Modelling,
Operations Research, Data Science, Research Methodology, Econometrics,
Machine Learning, Corporate Finance, Decision Analysis
```

---

## 3. Research Publications

**File to update:** `data/publications.ts`

Replace the 12 placeholder publications with your actual 50+ papers.
Each entry follows this format:

```typescript
{
  id: 1,
  title: "Your Paper Title Here",
  authors: "Das, P.K., Co-Author1, & Co-Author2",
  journal: "Journal Name",
  year: 2023,
  area: "Statistics",          // "Statistics" | "Analytics" | "Finance" | "Operations Research"
  doi: "10.xxxx/xxxxxxx",     // optional
  citations: 15,               // optional — from Google Scholar
},
```

**Google Scholar Link:**
Update the Google Scholar profile URL in `components/ResearchSection.tsx`:
```tsx
href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
```

Replace `YOUR_SCHOLAR_ID` with your actual Google Scholar user ID
(found in your Scholar profile URL).

**Total counts:**
Update `data/publications.ts`:
```typescript
export const totalPublications = 50;  // your actual count
export const totalCitations = 200;    // your actual citation count
```

---

## 4. Training Programs

**File to update:** `data/training.ts`

Replace or update the 6 sample training programs with your actual offerings.
Each program follows this format:

```typescript
{
  id: 1,
  title: "Program Title",
  category: "open",            // "open" | "customized" | "both"
  duration: "3 Days",
  level: "Intermediate",       // "Beginner" | "Intermediate" | "Advanced" | custom
  description: "Program description (2–3 sentences).",
  topics: [
    "Topic 1",
    "Topic 2",
    "Topic 3",
    "Topic 4",
    "Topic 5",
  ],
  targetAudience: "Description of ideal participants",
  icon: "📊",                  // Choose a relevant emoji
},
```

---

## 5. Contact Information

**File to update:** `components/ContactSection.tsx`

Update the contact details (lines ~20–35):
```typescript
const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "your-actual-email@institution.edu.in",
    href: "mailto:your-actual-email@institution.edu.in",
  },
  // Add your phone number if desired
  {
    icon: "📱",
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  // Update Google Scholar link
  {
    icon: "🎓",
    label: "Google Scholar",
    value: "View Profile",
    href: "https://scholar.google.com/citations?user=YOUR_ID",
  },
  // Update LinkedIn link
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/your-profile",
  },
];
```

**Setting up the Contact Form (Formspree):**
1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form for your email address
3. Copy the form ID from the Formspree dashboard
4. In `components/ContactSection.tsx`, replace `YOUR_FORM_ID`:
   ```typescript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```

---

## 6. Footer Links

**File to update:** `components/Footer.tsx`

Update social/academic links:
- Email: `href="mailto:your-email@domain.com"`
- Google Scholar: Replace the `href` with your Scholar profile URL
- LinkedIn: Replace with your actual LinkedIn profile URL

---

## 7. SEO & Metadata

**File to update:** `app/layout.tsx`

Update the metadata for better SEO:
```typescript
export const metadata: Metadata = {
  title: "Prof. Prabir Kumar Das | Statistics & Analytics Expert",
  description: "Your custom description here (150–160 characters).",
  // Add your actual website URL once deployed:
  metadataBase: new URL("https://pkdas67.github.io/prabir-das-website"),
};
```

---

## 8. Hero Stats

**File to update:** `components/HeroSection.tsx`

Update the stats to reflect your actual numbers:
```typescript
const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "50+", label: "Research Papers" },
  { value: "200+", label: "Citations" },
  { value: "500+", label: "Professionals Trained" },  // update with your count
];
```

---

## 9. Future Sections (Phase 2)

The following sections are planned for future updates:
- **Book Chapters** — List of book chapters authored/co-authored
- **Courses Taught** — Courses taught at various institutions
- **Testimonials** — Quotes from students and training participants
- **Blog / Insights** — Articles and thought leadership pieces

To add these, create new component files in `components/` and import them in `app/page.tsx`.

---

## Deployment

Once you're satisfied with your changes:

1. Commit all changes: `git add . && git commit -m "Add website content"`
2. Push to main: `git push origin main`
3. GitHub Actions will automatically build and deploy to GitHub Pages
4. Your site will be live at: **https://pkdas67.github.io/prabir-das-website**

To enable GitHub Pages:
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

---

*This content guide was generated as part of the website development. For technical assistance, please refer to the README.md file.*
