# WindyWord.ai - Quick Start

Get the marketing site running in 60 seconds.

## Install & Run

```bash
cd /root/windyword-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

Output goes to `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Deploy to Cloudflare Pages

### Quick Deploy (if repo already exists)

```bash
# Push to Git
git add .
git commit -m "Update WindyWord site"
git push

# Cloudflare Pages auto-deploys on push to main
```

### First Time Setup

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. **Create project** → **Connect to Git**
4. Select repo, set build command: `npm run build`, output: `dist`
5. Deploy!

Site will be live at `windyword.pages.dev` → add custom domain `windyword.ai` in settings.

## Project Structure

```
windyword-site/
├── src/
│   ├── components/       # All React components
│   ├── App.jsx           # Main app
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind styles
├── public/
│   ├── _headers          # Security headers
│   ├── _redirects        # SPA routing
│   └── favicon.svg       # Site icon
└── index.html            # HTML template
```

## Key Components

- **Hero** - Animated waveform, value prop, CTAs
- **Features** - 2,000+ models, local processing, privacy
- **ModelCatalog** - Browse/search language packs
- **Pricing** - Free vs Pro ($4.99/mo)
- **Ecosystem** - Links to WindyCloud, WindyClone, WindyChat, etc.
- **Download** - Platform-specific download buttons
- **OpenSource** - HuggingFace models, no lock-in

## Tech Stack

- **Vite** - Build tool
- **React** - UI framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Customization

### Colors

Edit `tailwind.config.js`:

```js
colors: {
  'windy-amber': '#f59e0b',   // Primary accent
  'windy-gold': '#fbbf24',    // Secondary accent
  'windy-dark': '#0a0a0a',    // Background
  'windy-gray': '#1a1a1a',    // Cards
}
```

### Content

All copy is in the components. Edit directly:

- Hero tagline: `src/components/Hero.jsx`
- Features: `src/components/Features.jsx`
- Pricing: `src/components/Pricing.jsx`
- etc.

### SEO

Edit `index.html`:

```html
<title>WindyWord - Your Voice. Your Language. Your AI.</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
```

## Development Tips

- **Hot reload** works automatically in dev mode
- **Mobile responsive** - test with browser DevTools
- **Animations** - controlled via Framer Motion
- **Smooth scroll** - enabled in `index.css`

## Build Output

- ~300KB JS (gzipped: ~92KB)
- ~19KB CSS (gzipped: ~4KB)
- Fast Lighthouse scores (90+)

## Need Help?

- Full deployment guide: `DEPLOYMENT.md`
- Master plan context: `WINDY-EMPIRE-MASTER-PLAN.md`
- Project README: `README.md`

---

**Built for the Windy Empire. The world is talking. Now you understand.** 🌪️
