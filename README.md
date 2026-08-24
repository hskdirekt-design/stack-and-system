# HSK Direct - Stack and System

This repository contains the core system architecture, design assets, and static files for [HSK Direct](https://hskdirect.co.uk). It serves as an online directory and affiliate resource platform.

## 🚀 Tech Stack

This project is built using a lightweight, static web architecture for maximum speed and simplicity:
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Version Control:** GitHub
* **Hosting & Deployment:** Netlify (Continuous Deployment from the `main` branch)

## 📁 Repository Structure

\`\`\`text
├── index.html          # Main landing page
├── about.html          # About page
├── blog/               # Directory for blog posts
│   └── index.html      # Blog homepage
├── css/                # Stylesheets
│   └── style.css       # Main stylesheet
├── js/                 # JavaScript files
│   └── main.js         # Main scripts
├── assets/             # Images, icons, and media
└── sitemap.xml         # XML Sitemap for SEO
\`\`\`

## ⚙️ Deployment

This site is connected to Netlify. Any changes committed to the `main` branch of this repository will automatically trigger a new build and deploy to the live website.

## 📝 Editing the Site
To add a new page or blog post:
1. Create a new `.html` file in the appropriate folder (e.g., `blog/new-post.html`).
2. Update the `sitemap.xml` to include the new page URL.
3. Commit the changes to the `main` branch.
