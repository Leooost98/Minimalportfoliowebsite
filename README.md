# Leo van der Oost - Fashion Portfolio

A modern, responsive portfolio website showcasing fashion patternmaking and tailoring work.

## 📸 Images - Placeholder System

**The website uses placeholder images** so it can build and deploy immediately without errors.

### To add your real images:

1. **The site works NOW** with placeholders showing "Image Placeholder" text
2. **Upload your 223 images** to `src/imports/` on GitHub (see `HOW-TO-ADD-IMAGES.md`)
3. **Uncomment the image imports** in `Home.tsx`, `Work.tsx`, and `About.tsx`
4. **Commit changes** and Vercel will auto-rebuild with real images

**Recommended:** Compress images first at https://tinypng.com/ (~80% size reduction)

**Detailed instructions:** See `HOW-TO-ADD-IMAGES.md` for step-by-step guide

## 📦 Deployment Instructions

### Step 1: Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Create commit
git commit -m "Initial commit - Leo portfolio"

# Add your GitHub repository
git remote add origin https://github.com/Leooost98/Leo-portfolio-patternmaking.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**If using Git LFS:** Images will automatically be uploaded to LFS storage.

**If NOT using Git LFS:** Make sure you've optimized images first, or the push will fail.

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Select `Leo-portfolio-patternmaking` repository
5. Click "Deploy"

Vercel will automatically:
- Detect it's a Vite project
- Install dependencies with `pnpm`
- Build the project
- Deploy to a live URL

### Step 3: Get Your Live URL

After deployment (takes ~2 minutes), you'll get a URL like:
```
https://leo-portfolio-patternmaking.vercel.app
```

## 🎨 Features

- 4 color themes (cream, olive, navy, red)
- Auto-scrolling image carousel
- Horizontal project galleries with smooth scrolling
- Zoomable images
- Custom cursor effects
- Fully responsive (mobile + desktop)
- Smooth navigation between pages

## 🛠️ Tech Stack

- React 19
- TypeScript
- Tailwind CSS v4
- Vite
- React Router
- pnpm

## 📱 Pages

- **Home**: Auto-scrolling carousel with Leo's name
- **Work**: 8 project galleries with horizontal scrolling
- **About**: Bio and contact information

## 🔧 Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📊 Current Stats

- **Code Size**: 640KB (without images)
- **Images Needed**: 223 files (to be added separately)
- **Projects**: 8 photography/fashion projects
- **Themes**: 4 color schemes

## ⚡ Performance Recommendations

After deployment, consider:

1. ✅ Enable image optimization in Vercel (automatic)
2. ✅ Compress images locally before uploading new ones
3. ✅ Use WebP format for new images (better compression)
4. ✅ Consider lazy loading for below-fold images

---

Built with Claude Code
