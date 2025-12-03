# Havoc Hacking Articles - Deployment Repository

<p align="center">
  <a href="https://havocsec.me">
    <img src="https://media.gettyimages.com/id/1304093074/photo/how-to-make-a-blog.jpg?s=2048x2048&w=gi&k=20&c=fJE7PezWmW18lYMs9DJhshE3KpQyjrRlkhIm_GiGXXA=" width="120" />
  </a>
  <br>
  <i>Built site deployed from private source repository</i>
  <br>
  <b>🌐 <a href="https://havocsec.me">havocsec.me</a></b>
</p>

---

## About This Repository

This is the **public deployment repository** for Havoc Hacking Articles. It contains only the built, production-ready static site files.

**What's here:**
- ✅ Compiled HTML, CSS, and JavaScript
- ✅ Optimized images and assets
- ✅ Ready-to-serve static files

**What's NOT here:**
- ❌ Source markdown files
- ❌ Hugo configuration
- ❌ Build scripts
- ❌ Draft content

---

## Deployment

This repository is automatically updated by GitHub Actions from the private source repository. **Do not make manual commits here** - they will be overwritten on the next deployment.

### Build Status

![Build Status](https://img.shields.io/github/actions/workflow/status/Daniel-wambua/blogz/hugo.yml?branch=main&style=flat-square&logo=github&label=Build)

---

## Visit the Site

🌐 **Live Site:** [havocsec.me](https://havocsec.me)

Explore cybersecurity insights, CTF writeups, penetration testing guides, and more.

---

## Architecture

```
Private Source Repo (blogz)
         │
         │ GitHub Actions
         │ Build & Deploy
         ▼
Public Deployment Repo (Blogs) ← You are here
         │
         │ GitHub Pages
         ▼
    havocsec.me
```

---

## Tech Stack

- **Generator:** Hugo Static Site Generator
- **Theme:** Qubt v2.1.0
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages
- **CDN:** Cloudflare
- **Analytics:** Google Analytics 4

---

## Content

- **Blog Posts** - Technical articles and security insights
- **CTF Writeups** - Capture The Flag challenge solutions
- **Pentesting Guides** - HackTheBox, TryHackMe, OffSec
- **Community** - Chitchat and discussions

---

## License

Content © 2025 Richie Havoc (Daniel Wambua). All rights reserved.

Site code licensed under MIT License.

---

<p align="center">
  <i>Automatically deployed • Last updated: <!-- Date will be in commit message --></i>
</p>
