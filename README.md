# 🎨 Professional Portfolio Website

A modern, full-stack portfolio built with Next.js, React, and Node.js. Complete internship task implementation.

---

## ✅ Task Completion Status

**Internship Task**: Build a Professional Portfolio Website

| Component | Status | Tech Stack |
|-----------|--------|-----------|
| **Frontend** | ✅ Complete | React.js, Next.js 16, TypeScript, Tailwind CSS |
| **Backend** | ✅ Complete | Node.js, Next.js API Routes, Nodemailer |
| **Database** | ✅ Optional | Email-only (no database needed) |
| **Deployment** | ✅ Ready | Vercel, GitHub, Domain ready |

---

## 🎯 Portfolio Stats

- **Years of experience**: 2
- **Projects completed**: 8
- **Problems solved**: 50+
- **Code commits**: 100+

---

## ✨ Features

✅ **Frontend**
- Modern UI/UX with smooth animations
- Fully responsive (desktop, tablet, mobile)
- Interactive components with Framer Motion
- Scroll indicators & animations
- Name splash animation on page load
- Dark mode support
- SEO optimized (meta tags, structured data)
- Performance optimized

✅ **Backend**
- Contact form API (`POST /api/contact`)
- Email notifications with Nodemailer
- Form validation using Zod schema
- Rate limiting (6 requests/minute)
- Error handling & security
- CORS protection

✅ **Content**
- Hero section with CTA
- 8 projects with live demos & GitHub links
- Resume with certificates & skills
- Contact form
- Social links
- Professional animations

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.0.10
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.17
- **Animations**: Framer Motion, Lenis
- **3D**: Three.js, React Three Fiber
- **Icons**: Lucide React
- **UI Components**: Radix UI

### Backend
- **Runtime**: Node.js
- **Server**: Next.js API Routes
- **Email**: Nodemailer
- **Validation**: Zod
- **Database**: Optional (currently email-only)

### Deployment
- **Hosting**: Vercel
- **Version Control**: GitHub
- **Package Manager**: pnpm
- **Domain**: Custom domain ready

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   ├── contact/route.ts          # Contact form API
│   │   └── send-mail/route.ts        # Email sending
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Global styles
│   ├── contact/page.tsx              # Contact page
│   ├── resume/page.tsx               # Resume page
│   ├── work/page.tsx                 # Projects page
│   └── services/page.tsx             # Services page
├── components/
│   ├── hero.tsx                      # Hero section
│   ├── work-section.tsx              # Projects grid
│   ├── resume-section.tsx            # Resume tabs
│   ├── contact-section.tsx           # Contact form
│   ├── services-section.tsx          # Services
│   ├── stats.tsx                     # Stats counter
│   ├── theme-provider.tsx            # Dark mode
│   ├── name-splash.tsx               # Animation
│   ├── scroll-progress.tsx           # Progress bar
│   ├── scroll-to-top.tsx             # Scroll button
│   ├── structured-data.tsx           # SEO schema
│   ├── client-background.tsx         # 3D background
│   └── ui/                           # Reusable UI components
├── lib/
│   ├── utils.ts                      # Helper functions
│   └── animations.ts                 # Animation utilities
├── public/
│   └── images/
│       ├── certificates/             # Certificate PDFs
│       └── skills/                   # Skill icons
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
└── .env.example
```

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Setup Environment Variables
Create `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
TO_EMAIL=your-email@gmail.com
```

### 4. Run Development Server
```bash
pnpm dev
```

Visit: **http://localhost:3000**

### 5. Build for Production
```bash
pnpm build
pnpm start
```

---

## 📧 Email Setup

### Gmail (Recommended)

1. **Enable 2-Factor Authentication**
   - Visit: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password**
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password

3. **Update .env.local**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   TO_EMAIL=your-email@gmail.com
   ```

### Other Providers

**Outlook/Office 365:**
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

**SendGrid:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.xxxxx...
```

**AWS SES:**
```env
SMTP_HOST=email-smtp.region.amazonaws.com
SMTP_PORT=587
SMTP_USER=ses-username
SMTP_PASS=ses-password
```

---

## 🌐 Deployment to Vercel

### Option 1: GitHub + Vercel Auto-Deploy

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Portfolio deployment"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to: https://vercel.com
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Add Environment Variables on Vercel**
   - Go to: Settings → Environment Variables
   - Add the same variables from `.env.local`
   - Redeploy

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] **Live URL works** - Visit your Vercel link
- [ ] **Contact form** - Submit test message
- [ ] **Email received** - Check inbox for notification
- [ ] **Mobile responsive** - Test on phone/tablet
- [ ] **Scroll indicators** - Top progress bar visible
- [ ] **Name animation** - Splash animation on refresh
- [ ] **GitHub public** - Repository is public
- [ ] **All links work** - Projects, resume, socials

---

## 📊 Performance Optimization

**Implemented:**
- ✅ Lazy loading of heavy components
- ✅ Image optimization
- ✅ Code splitting
- ✅ Minification
- ✅ Deferred 3D background loading
- ✅ Optimized animations

**Lighthouse Target:** 90+ score

---

## 🔒 Security Features

- Input validation with Zod schema
- Rate limiting on contact form (6 requests/min)
- SMTP credentials in environment variables
- XSS prevention
- CORS protection
- Error handling & logging

---

## 🛠️ Available Commands

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Deployment
pnpm deploy           # Deploy to Vercel (if CLI setup)
```

---

## 🐛 Troubleshooting

### Contact Form Not Sending Email?
- Verify SMTP credentials in `.env.local`
- Check Vercel environment variables match
- Ensure Gmail app password is correct (16 characters)
- Check spam folder for test emails
- Verify "Less secure apps" setting if using Gmail

### Portfolio Lagging on Startup?
- Heavy 3D background loads after splash animation
- This is optimized - expected delay is 2-3 seconds
- Restart dev server if it persists

### Build Errors?
- Run `pnpm install` to reinstall dependencies
- Delete `.next` folder and rebuild: `rm -r .next && pnpm build`
- Check Node.js version: `node --version` (requires 18+)

### Port 3000 Already in Use?
```bash
Get-Process node | Stop-Process -Force
pnpm dev -- -p 3001  # Use different port
```

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📈 SEO Optimization

✅ Implemented:
- Meta tags (title, description)
- Open Graph tags (social sharing)
- JSON-LD structured data
- Mobile-friendly responsive design
- Proper heading hierarchy
- Internal linking
- XML sitemap ready

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Nodemailer Guide](https://nodemailer.com/)

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🎉 Status

**Ready for Internship Submission!**

Portfolio meets all requirements:
- ✅ Frontend (React.js)
- ✅ Backend (Node.js)
- ✅ Email integration
- ✅ Deployment ready
- ✅ GitHub public
- ✅ Live URL ready

**Live Demo**: [https://tportfolio-dusky.vercel.app/](https://tportfolio-dusky.vercel.app/)

**Next Steps:**
1. Configure email (Gmail App Password)
2. Deploy to Vercel
3. Make GitHub public
4. Submit live URL + repo link

---

**Created for**: Internship Task 1 - Professional Portfolio
**Status**: Production Ready ✅
**Last Updated**: April 2026
