# ATS – Accent Techno Soft (Frontend)

React + TypeScript + Vite + Tailwind CSS · React Router · Framer Motion · React Hook Form + Zod · Swiper · Lucide

```bash
npm install
npm run dev      # local dev
npm run build    # production build in /dist
```

## Frontend-only notes
- All forms (Contact, Quote, Internship Application) validate with Zod but **only simulate submission**. Nothing is sent to ATS.
- Projects and internship programs are **sample/demo content** (`src/data/projects.ts`, `src/data/internships.ts`). Duration and mode are placeholders.
- Testimonials are hidden until real reviews are added to `src/data/testimonials.ts`.
- WhatsApp button appears only when `whatsappNumber` is set in `src/data/company.ts`.
- Google Map appears only when a verified `mapEmbedUrl` is set in `src/data/company.ts`.
- Social links in `company.ts` are `#` placeholders. Privacy/Terms pages are template text needing review.
- Logo is used unmodified from `src/assets/logo/logo.webp`.
- For hosting, configure SPA fallback (all routes -> `index.html`).

## Structure
`src/components/{common,layout,home,services,internships,projects,forms}`, `src/pages` (+ `pages/services`), `src/data`, `src/hooks`, `src/utils`, `src/types`.
"# ats" 
