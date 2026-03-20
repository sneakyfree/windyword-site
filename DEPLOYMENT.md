# WindyWord.ai - Deployment Guide

This guide covers deploying the WindyWord marketing site to Cloudflare Pages.

## Prerequisites

- Cloudflare account
- Domain `windyword.ai` configured in Cloudflare DNS
- Git repository (GitHub, GitLab, or Bitbucket)

## Method 1: Cloudflare Pages Dashboard (Recommended)

### Step 1: Push to Git

```bash
cd /root/windyword-site
git add .
git commit -m "Initial WindyWord marketing site"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the left sidebar
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare to access your Git provider
6. Select the `windyword-site` repository

### Step 3: Configure Build Settings

- **Project name:** `windyword`
- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (leave blank if repo root)
- **Node version:** `18` or `20`

### Step 4: Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (~1-2 minutes)
3. Your site will be live at `windyword.pages.dev`

### Step 5: Add Custom Domain

1. In your project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter `windyword.ai`
4. Cloudflare will automatically configure DNS (if domain is on Cloudflare)
5. Wait for SSL certificate provisioning (~5 minutes)

**Optional:** Add `www.windyword.ai` as a redirect

## Method 2: Wrangler CLI (Advanced)

### Install Wrangler

```bash
npm install -g wrangler
```

### Authenticate

```bash
wrangler login
```

### Deploy

```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=windyword

# Deploy to specific branch (production)
wrangler pages deploy dist --project-name=windyword --branch=main
```

### Set up custom domain via CLI

```bash
wrangler pages domains add windyword.ai --project-name=windyword
```

## Method 3: Direct Upload (No Git)

1. Build the project locally:
   ```bash
   npm run build
   ```

2. In Cloudflare Dashboard → Pages:
   - Click **Create a project**
   - Select **Direct Upload**
   - Upload the `dist` folder
   - Configure custom domain

## Environment Variables

This is a static site with no environment variables required. If you need to add any in the future:

1. Go to project **Settings** → **Environment variables**
2. Add variables for **Production** and/or **Preview** environments
3. Rebuild the project

## Build Configuration

The site is optimized for Cloudflare Pages:

- **Headers:** Security headers configured in `public/_headers`
- **Redirects:** SPA routing handled by `public/_redirects`
- **Cache:** Static assets cached for 1 year
- **Compression:** Brotli/Gzip enabled automatically

## Continuous Deployment

Once connected to Git, Cloudflare Pages will automatically:

- **Build and deploy** on every push to `main` (production)
- **Create preview deployments** for pull requests
- **Run builds** in ~1-2 minutes
- **Invalidate CDN cache** automatically

## Performance Optimizations

✅ **Minified assets** - Vite automatically minifies JS/CSS  
✅ **Code splitting** - React components lazy-loaded where beneficial  
✅ **Brotli compression** - Cloudflare Pages handles this  
✅ **Global CDN** - Content served from 300+ edge locations  
✅ **HTTP/3** - Enabled by default on Cloudflare  

## Post-Deployment Checklist

- [ ] Verify site loads at `windyword.ai`
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify waveform animation works
- [ ] Test model catalog search
- [ ] Check all Windy ecosystem links
- [ ] Validate Open Graph tags (use [OpenGraph.xyz](https://www.opengraph.xyz/))
- [ ] Run Lighthouse audit (target 90+ on all metrics)
- [ ] Test download buttons
- [ ] Verify footer links

## Monitoring & Analytics

### Add Cloudflare Web Analytics (Free)

1. Go to **Web Analytics** in Cloudflare Dashboard
2. Add `windyword.ai` as a site
3. Copy the analytics snippet
4. Add to `index.html` before `</head>`:

```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "YOUR_TOKEN_HERE"}'></script>
```

### Optional: Google Analytics

Add to `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Rollback Strategy

### Via Dashboard

1. Go to **Deployments** in your project
2. Find the previous working deployment
3. Click **···** → **Rollback to this deployment**

### Via CLI

```bash
wrangler pages deployment list --project-name=windyword
wrangler pages deployment rollback <deployment-id> --project-name=windyword
```

## Troubleshooting

### Build fails

- Check Node version (use 18 or 20)
- Verify `npm install` completes without errors
- Check build logs in Cloudflare Dashboard

### 404 errors

- Ensure `public/_redirects` exists
- Verify build output directory is `dist`
- Check that all assets are in `dist/assets/`

### Styles not loading

- Clear browser cache
- Check that CSS file is in `dist/assets/`
- Verify Tailwind config is correct

### Animations not working

- Check browser console for errors
- Verify Framer Motion is installed
- Test in different browsers

## DNS Configuration (Manual)

If domain is NOT on Cloudflare:

1. Add CNAME record:
   - **Name:** `@` or `windyword.ai`
   - **Value:** `windyword.pages.dev`

2. For `www`:
   - **Name:** `www`
   - **Value:** `windyword.pages.dev`

3. Wait for DNS propagation (up to 24 hours)

## Security Headers

Configured in `public/_headers`:

- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Privacy
- `Permissions-Policy` - Restricts browser features

## Support

For deployment issues:

1. Check [Cloudflare Pages docs](https://developers.cloudflare.com/pages/)
2. Cloudflare Community Forum
3. Contact the WindyWord team

---

**The world is talking. Now you understand.** 🌪️
