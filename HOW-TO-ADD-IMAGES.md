# 📸 How to Add Your Portfolio Images

## Current Status

✅ Your website is **live and working** with placeholder images  
⚠️ You need to **upload 223 real images** to replace the placeholders

---

## Step-by-Step Guide

### Step 1: Prepare Your Images

**RECOMMENDED: Compress images first for better performance**

1. Go to https://tinypng.com
2. Drag all 223 images from your computer
3. Download the compressed versions
4. This reduces file sizes by ~80%!

### Step 2: Upload to GitHub

1. **Go to your repository:**
   - Visit: https://github.com/Leooost98/Leo-portfolio-patternmaking

2. **Navigate to the imports folder:**
   - Click `src` → `imports`
   - You'll see `placeholder.svg` and `README.md`

3. **Upload all images:**
   - Click "Add file" → "Upload files"
   - Drag all 223 compressed images into the upload box
   - **IMPORTANT:** Filenames must match EXACTLY (see list below)
   - Scroll down and click "Commit changes"

### Step 3: Wait for Automatic Rebuild

1. **Vercel automatically detects the changes**
   - Go to https://vercel.com/dashboard
   - Watch the deployment progress (~2-3 minutes)

2. **Check your website**
   - Once deployment completes, refresh your site
   - **Images will still show placeholders!** (This is normal)

### Step 4: Uncomment Image Imports (CRITICAL!)

The code is currently set to use placeholders. You need to update 3 files:

#### File 1: `src/app/pages/Home.tsx`

**Find this section (around line 5-20):**
```typescript
// Import placeholder until real images are uploaded
import placeholder from "../../imports/placeholder.svg";

// Original image imports - will work once images are uploaded to src/imports/
// import scrollImage1 from "../../imports/IMG_8150_3.jpg";
// import scrollImage2 from "../../imports/IMG_8117_3.jpg";
...

const scrollImage1 = placeholder;
const scrollImage2 = placeholder;
...
```

**Replace with:**
```typescript
import scrollImage1 from "../../imports/IMG_8150_3.jpg";
import scrollImage2 from "../../imports/IMG_8117_3.jpg";
import scrollImage3 from "../../imports/IMG_8203.jpg";
import scrollImage4 from "../../imports/IMG_8907_2.jpg";
import scrollImage5 from "../../imports/Screenshot_2026-05-13_at_16.38.57-2.png";
import scrollImage6 from "../../imports/Leo_vd_Oost_2-3.jpg";
import scrollImage7 from "../../imports/IMG_0130.PNG";
```

#### File 2: `src/app/pages/Work.tsx`

**Find this section (around line 5-15):**
```typescript
// Placeholder until real images are uploaded
import placeholder from "../../imports/placeholder.svg";

// Using placeholders for all images
const interior1 = placeholder, interior2 = placeholder, ...
```

**Replace ALL placeholder assignments with actual imports:**
```typescript
import interior1 from "../../imports/Leo_vd_Oost-2.jpg";
import interior2 from "../../imports/Leo_vd_Oost_3-2.jpg";
import interior3 from "../../imports/Leo_vd_Oost_2-2.jpg";
import interior4 from "../../imports/Leo_vd_Oost_1-2.jpg";
import skirt1 from "../../imports/IMG_8111_2.jpg";
import skirt2 from "../../imports/tempImagegYuQXh.png";
// ... continue for all 127 image imports (see original Work.tsx for full list)
```

#### File 3: `src/app/pages/About.tsx`

**Find this section (around line 4-7):**
```typescript
// Placeholder until real image is uploaded
import placeholder from "../../imports/placeholder.svg";
const profileImage = placeholder;
```

**Replace with:**
```typescript
import profileImage from "../../imports/4b1fa4ff-c376-419a-a05e-42b04e80527e_2.jpg";
```

### Step 5: Commit the Changes

1. **Edit the files on GitHub:**
   - Go to each file mentioned above
   - Click the pencil icon (Edit this file)
   - Make the changes
   - Click "Commit changes"

2. **Or edit locally and push:**
   ```bash
   git add .
   git commit -m "Switch to real images"
   git push
   ```

3. **Wait for Vercel to rebuild** (~2 minutes)

4. **Refresh your website** - All images should now appear!

---

## 📋 Complete List of Required Images

### Home Page (7 images):
- IMG_8150_3.jpg
- IMG_8117_3.jpg
- IMG_8203.jpg
- IMG_8907_2.jpg
- Screenshot_2026-05-13_at_16.38.57-2.png
- Leo_vd_Oost_2-3.jpg
- IMG_0130.PNG

### About Page (1 image):
- 4b1fa4ff-c376-419a-a05e-42b04e80527e_2.jpg

### Work Page Projects (215+ images):
See `src/imports/README.md` for the complete categorized list.

---

## ⚠️ Common Issues

**Images still showing as placeholders:**
- Did you uncomment the image imports in the 3 files above?
- Check that filenames match EXACTLY (case-sensitive!)

**Build fails after uncommenting:**
- One or more image files are missing
- Check spelling and capitalization of filenames

**Some images work, others don't:**
- Missing files - check which ones are missing
- Filename typos - verify exact match

---

## 🆘 Need Help?

1. Check Vercel deployment logs for specific errors
2. Compare your filenames with the list in `src/imports/README.md`
3. Make sure you uploaded ALL 223 images

---

Good luck! Your portfolio will look amazing once all images are loaded! 🎉
