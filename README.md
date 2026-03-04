# ⛪ First Baptist Church — Website

A modern, fully responsive static website for **First Baptist Church (FCL)**, built with **React** and **Tailwind CSS**. Converted from a single-file HTML prototype into a scalable, component-driven React application with global configuration support.

---

## 🚀 How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Steps

```bash
# 1. Navigate into the project folder
cd FBC

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open your browser and visit: **http://localhost:5173**

### Other Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Build for production (outputs to `/dist`) |
| `npm run preview` | Preview the production build locally |

---

## 📦 Packages Used

| Package | Purpose |
|---|---|
| **react** | Core UI library |
| **react-dom** | Renders React into the browser |
| **react-router-dom** | Client-side routing between pages |
| **lucide-react** | Clean, consistent icon set (clock, map pin, play, etc.) |
| **vite** | Fast development server and build tool |
| **tailwindcss** | Utility-first CSS framework for styling |
| **autoprefixer** | Adds vendor prefixes to CSS for cross-browser support |
| **postcss** | CSS preprocessor (required by Tailwind) |
| **@vitejs/plugin-react** | Enables React Fast Refresh in Vite |

---

## 🌐 Pages

### 🏠 Home (`/`)
The landing page and first impression of the church. It contains:
- **Hero Section** — Full-screen parallax background image with the church's core message (*Truth. Grace. Community.*) and a live-status widget showing Sunday service times and address.
- **About Section** — A brief introduction to the church's mission and values, with links to deeper content.
- **Ministries Bento Grid** — A modern card grid highlighting Children & Youth, Worship Arts, Small Groups, and Upcoming Events.
- **Sermon Teaser** — A preview of the latest sermon with a play button and link to the full archive.

---

### 📖 What We Believe (`/believe`)
Explains the core doctrinal positions of the church. Each belief is displayed as a clean card with:
- The **doctrine title** (e.g., The Scriptures, The Trinity, Salvation, The Church)
- A clear **written statement** of belief
- The **Bible verses** that support it

> Content is driven by `src/data/doctrines.js` — add, remove, or edit beliefs there.

---

### 🤝 Connect (`/connect`)
Helps visitors find ways to get involved with the church community:
- **Small Groups** — Encourages people to join home groups for fellowship and Bible study.
- **Serve on a Team** — Invites people to volunteer in various Sunday roles (greeting, kids ministry, etc.).

---

### 🎙️ Sermons (`/sermons`)
The sermon library page, giving access to past and current teaching:
- **Current Series** — A featured card for the ongoing sermon series with a watch/listen button.
- **Past Series Grid** — A visual grid of previous sermon series with image thumbnails.

> Content is driven by `src/data/sermons.js` — update the current series or add past series there.

---

### 💛 Give (`/give`)
Explains the theology of generosity and provides ways to give financially:
- **Why We Give** — A short explanation of biblical stewardship.
- **Ways to Give** — Text-to-give, mailing a check.
- **Online Giving Widget** — An interactive card where users can select a preset amount ($50, $100, $250) or enter a custom amount, and choose between one-time or recurring giving.

---

### 📍 Location & Times (`/visit`)
Everything a first-time visitor needs to plan their trip:
- **Service Schedule** — Lists all Sunday gatherings with times (Bible Classes, Worship), pulled from global config.
- **What to Expect** — Describes the worship style, dress code, and kids ministry.
- **Campus Map** — A stylized map placeholder with a pulsing location pin and a link to Google Maps.

---

### 👥 Leadership (`/leadership`)
Introduces the pastoral and ministry staff team with photo cards showing:
- Staff member name and role
- A short personal biography

---

### 📜 History (`/history`)
Tells the church's founding story through an elegant alternating **visual timeline** — from 1998 (founding) through 2018 (moving to the current Avenue U campus).

---

### ✋ Membership (`/membership`)
Walks through what it means to become a covenant member and what steps to take:
1. Attend a Membership Class
2. Meet with an Elder
3. Be publicly welcomed into the family

Includes a CTA at the bottom linking to the Connect page.

---

## 🎨 Global Customization

You can change anything site-wide by editing **one file**:

| File | Controls |
|---|---|
| `src/config/siteData.js` | Church name, abbreviation, address, phone, service times, tagline |
| `tailwind.config.js` | Color palette, font families, shadow styles |
| `src/data/doctrines.js` | Belief statements and supporting scriptures |
| `src/data/sermons.js` | Current sermon series and past series list |

---

## 📁 Project Structure

```
src/
├── config/
│   └── siteData.js          ← Global site constants
├── data/
│   ├── doctrines.js         ← Belief content
│   └── sermons.js           ← Sermon series content
├── layouts/
│   └── RootLayout.jsx       ← Wraps all pages with Navbar + Footer
├── components/common/
│   ├── Navbar.jsx           ← Floating pill navigation
│   ├── Footer.jsx           ← Dark footer with links
│   ├── PageHeader.jsx       ← Reusable page hero banner
│   └── Reveal.jsx           ← Scroll-triggered fade-in animation
└── pages/
    ├── Home.jsx
    ├── Believe.jsx
    ├── Connect.jsx
    ├── Sermons.jsx
    ├── Give.jsx
    ├── Visit.jsx
    ├── Leadership.jsx
    ├── History.jsx
    └── Membership.jsx
```

---

## ✝️ About the Church

```markdown
**First Baptist Church** — *Knowing, Proclaiming, & Living the Word of God.*

📍 217 N.Cross Ave, Wink, TX 79789  
📞 +254 68 15120  
✉️ sarahewell31@gmail.com
```
