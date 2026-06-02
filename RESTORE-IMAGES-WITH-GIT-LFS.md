# 🔄 How to Restore Images Using Git LFS

## What is Git LFS?

Git LFS (Large File Storage) is GitHub's solution for handling large files. Instead of storing large images directly in your git repository, it stores:
- **Pointers** (tiny text files) in git
- **Actual images** in LFS storage (1GB free on GitHub)

This lets you:
- ✅ Push repositories larger than 50MB
- ✅ Keep your git repo fast and lightweight
- ✅ Store all 431MB of your images without issues

---

## Step-by-Step: Restore Images with Git LFS

### **Step 1: Find Your Original Images**

Your images should still be on your computer. Check:
- Downloads folder
- Desktop/Projects folder  
- Figma Make's export/workspace folder
- Any folder where you were working on this project

### **Step 2: Install Git LFS** (one-time setup)

**On Mac:**
```bash
brew install git-lfs
```

**On Windows:**
Download from https://git-lfs.github.com and run the installer

**On Linux:**
```bash
sudo apt-get install git-lfs
# or
sudo yum install git-lfs
```

### **Step 3: Copy Images Back**

Copy all 223 images back into:
```
/path/to/your/project/src/imports/
```

### **Step 4: Initialize Git with LFS**

Open Terminal/Command Prompt in your project folder:

```bash
# Initialize git
git init

# Initialize Git LFS
git lfs install

# Track all image files with LFS (already configured in .gitattributes)
# The .gitattributes file is already set up to track .jpg, .png, .JPG, .PNG files

# Check that LFS is tracking images
git lfs track

# You should see:
# *.jpg
# *.JPG
# *.png
# *.PNG
```

### **Step 5: Add Everything to Git**

```bash
# Add all files
git add .

# Check what will be committed
git status

# You should see LFS files listed separately
git lfs status

# Create commit
git commit -m "Initial commit with images via Git LFS"
```

### **Step 6: Push to GitHub**

```bash
# Add remote
git remote add origin https://github.com/Leooost98/Leo-portfolio-patternmaking.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**When asked for credentials:**
- Username: Your GitHub username
- Password: Personal Access Token (create at https://github.com/settings/tokens)

---

## ✅ What Happens?

1. **Git LFS uploads your images** to GitHub's LFS storage (~431MB)
2. **Git stores tiny pointers** instead of full images (~10KB per image)
3. **Your repo stays under 50MB** (code + pointers only)
4. **When Vercel builds**, it automatically downloads images from LFS

---

## 📊 Storage Limits

**GitHub Free:**
- ✅ 1GB LFS storage (you'll use ~431MB)
- ✅ 1GB monthly bandwidth
- ✅ Plenty for your portfolio!

**If you exceed limits:**
- GitHub charges $5/month for 50GB extra
- Or compress images with TinyPNG (recommended anyway for performance)

---

## 🆘 Alternative: Compress Images Instead

**If you don't want to use Git LFS:**

1. Compress all images at https://tinypng.com
2. This typically reduces 431MB → ~50-80MB
3. Replace original images with compressed ones
4. Push normally without Git LFS

**Benefits:**
- ✅ Faster website loading
- ✅ Better mobile performance
- ✅ No LFS needed
- ✅ Still under 50MB limit

---

## 🚀 Quick Decision Guide

**Use Git LFS if:**
- ✅ You want to keep original high-quality images
- ✅ You're okay with GitHub's 1GB LFS limit
- ✅ You can install Git LFS on your computer

**Compress images instead if:**
- ✅ You want the fastest website performance
- ✅ You want to avoid Git LFS setup
- ✅ You don't need super high-res images

**My recommendation:** Compress images with TinyPNG (~80% smaller) + better website performance!

---

## ❓ FAQ

**Q: Where do I find my original images?**
A: Check where you were working in Figma Make - they should be in an export or workspace folder on your computer.

**Q: Can I compress images AND use Git LFS?**
A: Yes! Compress first, then use LFS. Best of both worlds.

**Q: What if I can't install Git LFS?**
A: Just compress the images to get under 50MB.

**Q: Do I need to uncomment the imports again?**
A: Yes! After restoring images, follow the instructions in `HOW-TO-ADD-IMAGES.md` to uncomment the image imports in the code.

---

Need help? Let me know which option you prefer!
