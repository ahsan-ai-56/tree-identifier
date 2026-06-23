# 🌳 TreeIdentifier

AI-powered tree identification website built with Next.js and Groq AI.

## Features
- 🌳 Upload any tree photo for instant AI identification
- 📚 Detailed species info, care tips, and ecological data
- ⚡ Powered by Groq AI for ultra-fast responses
- 🔍 SEO optimized with sitemap and meta tags
- 📱 Fully responsive mobile design
- 🌿 7 pages: Home, Tool, Result, About, Contact, Privacy, Disclaimer

## Pages
| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page with 500+ word content |
| Tool | `/tree-identifier` | Image upload & identification tool |
| Result | `/result` | AI identification results display |
| About | `/about` | Mission, team, and technology |
| Contact | `/contact` | Contact form |
| Privacy | `/privacy-policy` | Privacy policy |
| Disclaimer | `/disclaimer` | Legal disclaimer |

## Deploy to Vercel

### 1. Clone & Install
```bash
npm install
```

### 2. Set Environment Variable
In Vercel Dashboard → Project → Settings → Environment Variables:
```
GROQ_API_KEY = your_groq_api_key_here
```

Or for local dev, create `.env.local`:
```
GROQ_API_KEY=your_groq_api_key_here
```

### 3. Deploy
```bash
npx vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Local Development
```bash
npm run dev
# Open http://localhost:3000
```

## Tech Stack
- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **AI:** Groq API (llama-4-scout vision model)
- **Deployment:** Vercel
- **Images:** Unsplash (tree photography)

## Environment Variables
| Variable | Required | Description |
|----------|----------|-------------|
| `GROQ_API_KEY` | ✅ Yes | Your Groq API key from console.groq.com |

## SEO
- Dynamic meta tags per page
- Sitemap at `/api/sitemap`
- Robots.txt at `/api/robots`
- Canonical URLs
- Open Graph tags
- Structured headings (H1, H2, H3)
- Internal linking throughout
