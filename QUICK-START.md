# ⚡ Quick Start Guide

## 🚀 Deploy in 5 Minutes

### 1. Push to GitHub (2 min)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Leooost98/Leo-portfolio-patternmaking.git
git branch -M main
git push -u origin main
```

**When asked for credentials:**
- Username: Your GitHub username  
- Password: Personal Access Token (create at https://github.com/settings/tokens)

### 2. Deploy to Vercel (1 min)

1. Go to https://vercel.com
2. Click "Sign Up" → "Continue with GitHub"
3. Click "New Project"
4. Select "Leo-portfolio-patternmaking"
5. Click "Deploy"

**Your site is now live!** (using placeholder images for now)

### 3. Add Images (2 min)

1. **Compress images first:**
   - Go to https://tinypng.com
   - Drop all 223 images
   - Download compressed versions

2. **Upload to GitHub:**
   - Go to https://github.com/Leooost98/Leo-portfolio-patternmaking/tree/main/src/imports
   - Click "Add file" → "Upload files"
   - Drag compressed images
   - Click "Commit changes"

3. **Uncomment image imports** (IMPORTANT!)
   - See detailed instructions in `HOW-TO-ADD-IMAGES.md`
   - Edit 3 files: `Home.tsx`, `Work.tsx`, `About.tsx`
   - Replace placeholder imports with real image imports
   - Commit changes

4. **Done!** Vercel auto-rebuilds in 2-3 minutes with real images

---

## 📋 Required Images

Check `src/imports/README.md` for the complete list of 223 required image files.

**IMPORTANT:** Filenames must match exactly (including capitalization).

---

## ✅ Checklist

- [ ] Code pushed to GitHub
- [ ] Site deployed on Vercel
- [ ] Images compressed with TinyPNG
- [ ] Images uploaded to GitHub
- [ ] Vercel rebuild complete
- [ ] Website working with all images

---

## 🆘 Problems?

**Push fails:** Make sure you created a Personal Access Token at https://github.com/settings/tokens

**Images not showing:** Check that filenames match exactly (see `src/imports/README.md`)

**Build fails on Vercel:** Check the deployment logs at https://vercel.com/dashboard

---

Need detailed instructions? See `DEPLOYMENT.md`
