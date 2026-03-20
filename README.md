# WindyWord.ai - Marketing Website

Production-quality marketing website for WindyWord - the free voice-to-text tool powered by 2,000+ specialized AI models.

## Tech Stack

- **Vite** - Lightning-fast build tool
- **React** - Component-based UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library

## Features

✅ Modern, vibrant, energetic design  
✅ Dark mode with warm golden/amber accents  
✅ Fully responsive (mobile-first)  
✅ Voice waveform animations  
✅ Smooth scroll navigation  
✅ SEO optimized (meta tags, Open Graph)  
✅ Cloudflare Pages ready  

## Sections

1. **Hero** - Animated waveform, value proposition, CTA buttons
2. **Features** - 2,000+ models, local processing, pair specialists
3. **Model Catalog** - Browse packs (Marco Polo, Traveler, Specialist, Full)
4. **How It Works** - Download → Speak → Perfect Text
5. **Pricing** - Free vs Pro ($4.99/mo)
6. **Ecosystem** - WindyCloud, WindyClone, WindyChat, WindyTraveler, WindyTranslate
7. **Download** - Platform buttons (Desktop/Mobile)
8. **Open Source** - HuggingFace models, no lock-in
9. **Testimonials** - User stories (translator, student, journalist, creator)
10. **FAQ** - Common questions
11. **Footer** - Links to all Windy brands

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Cloudflare Pages

### Option 1: Cloudflare Dashboard (Recommended)

1. Push this repo to GitHub
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Pages** → **Create a project** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (or leave blank)
6. Click **Save and Deploy**

Cloudflare will automatically build and deploy on every push to main.

### Option 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=windyword
```

### Custom Domain Setup

1. In Cloudflare Pages dashboard, go to your project
2. Click **Custom domains**
3. Add `windyword.ai`
4. Follow DNS instructions (usually automatic if domain is on Cloudflare)

## Environment Variables (if needed)

For Cloudflare Pages, add environment variables in the dashboard:

- Go to **Settings** → **Environment variables**
- Add any API keys or config (none required for this static site)

## Performance

- Build size: ~300KB JS (gzipped: ~92KB)
- Lighthouse score target: 95+ across all categories
- Lazy-loaded components for faster initial load
- Optimized animations (GPU-accelerated)

## Cross-Promotion Strategy

WindyWord is the **TOP OF FUNNEL** — free entry into the Windy ecosystem:

- Voice data → **WindyClone** (AI avatar creation)
- Storage → **WindyCloud** (sync and backup)
- Translation → **WindyChat** (real-time multilingual chat)
- Travel → **WindyTraveler** (AI travel companion)
- Engine → **WindyTranslate** (powers everything)

## Brand Tone

**Energetic. Accessible. Empowering.**

"The world is talking. Now you understand."

## Folder Structure

```
windyword-site/
├── public/              # Static assets
│   └── favicon.svg      # Site icon
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Waveform.jsx
│   │   ├── Features.jsx
│   │   ├── ModelCatalog.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Pricing.jsx
│   │   ├── Ecosystem.jsx
│   │   ├── Download.jsx
│   │   ├── OpenSource.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles + Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md            # This file
```

## Contributing

This is a production marketing site. For feature requests or bug reports, contact the team.

## License

© 2026 WindyWord. Part of the Windy Empire.

---

**Built with ❤️ for a multilingual world**
