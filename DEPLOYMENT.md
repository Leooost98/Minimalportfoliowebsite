# 🚀 How to Deploy Your Portfolio Website

## ✅ Good News: Images Removed!

Your project is now **only 640KB** without images - ready to push to GitHub!

## 📸 You'll Add Images Later

After pushing to GitHub, you'll upload your 223 portfolio images directly to the `src/imports` folder.

### 💡 TIP: Compress Images First

Before uploading to GitHub, compress your images for better performance:

1. **Go to TinyPNG.com**
   - Open https://tinypng.com in your browser
   - Drag and drop ALL your images
   - Download the compressed versions
   - These will be ~80% smaller!

2. **Benefits:**
   - ✅ Much faster website loading
   - ✅ Better mobile experience
   - ✅ Lower hosting costs

---

## 📋 Step-by-Step Deployment

### Step 1: Install Git (if you don't have it)

**Mac:** Already installed
**Windows:** Download from https://git-scm.com/download/win

### Step 2: Open Terminal/Command Prompt

**Mac:** 
- Press `Cmd + Space`
- Type "Terminal"
- Press Enter

**Windows:**
- Press `Windows + R`
- Type "cmd"
- Press Enter

### Step 3: Navigate to Your Project

```bash
# Replace with your actual project location
cd /path/to/your/project/code
```

### Step 4: Push to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Leo portfolio website"

# Connect to GitHub
git remote add origin https://github.com/Leooost98/Leo-portfolio-patternmaking.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**When it asks for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (NOT your password)

**To create a token:**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name like "Leo Portfolio"
4. Check "repo" permission
5. Click "Generate token"
6. Copy the token and use it as your password

### Step 5: Deploy to Vercel

1. **Go to https://vercel.com**

2. **Click "Sign Up"** (top right)
   - Choose "Continue with GitHub"

3. **Click "New Project"**

4. **Find your repository**
   - Look for "Leo-portfolio-patternmaking"
   - Click "Import"

5. **Click "Deploy"**
   - Don't change any settings
   - Just click the blue "Deploy" button

6. **Wait 2-3 minutes**
   - Vercel will build your website
   - You'll see a success screen

7. **Get your live URL!**
   - It will look like: `https://leo-portfolio-patternmaking.vercel.app`
   - Click "Visit" to see your live website
   - **Note:** Images won't show yet - that's normal!

### Step 6: Upload Your Images

1. **Go to your GitHub repository**
   - Visit: https://github.com/Leooost98/Leo-portfolio-patternmaking

2. **Navigate to the imports folder**
   - Click on `src` folder
   - Click on `imports` folder

3. **Upload your images**
   - Click "Add file" → "Upload files"
   - Drag all 223 images into the box
   - **IMPORTANT:** Make sure filenames match exactly (check `src/imports/README.md` for the complete list)
   - Scroll down and click "Commit changes"

4. **Wait for Vercel to rebuild (2-3 minutes)**
   - Vercel detects the new files automatically
   - Go to your Vercel dashboard to watch the deployment
   - Once complete, refresh your website - images will appear!

---

## 🎉 You're Done!

Your website is now live! Share the URL with anyone.

### To update your website later:

```bash
# Make your changes in the code
# Then run:
git add .
git commit -m "Updated photos"
git push

# Vercel will automatically redeploy!
```

---

## ❓ Troubleshooting

**"Failed to push" error:**
- Your images are too large
- Compress them with TinyPNG first
- Or use Git LFS (see top of this file)

**"Authentication failed":**
- Make sure you're using a Personal Access Token
- NOT your GitHub password

**Website not updating:**
- Go to vercel.com
- Check the "Deployments" tab
- Look for error messages

**Need help?**
- Check the logs in Vercel dashboard
- Or email the developer

---

Built with Claude Code 🤖
