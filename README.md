# La Vie Lounge - Private Business Club Website

A premium, single-page landing experience for La Vie Lounge, an exclusive private business club in Miramar, South Florida. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🎨 Design Philosophy

The design draws inspiration from the Art Deco elegance of the 1920s Gatsby era, modernized for today's web. Every element is crafted to communicate exclusivity, from the color palette to the micro-interactions.

### Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary Background | Deep Navy | `#0a1628` |
| Secondary Background | Rich Black | `#1b1b1b` |
| Accent Primary | Champagne Gold | `#c9a962` |
| Accent Secondary | Antique Gold | `#b8860b` |
| Text Primary | Ivory | `#f5f5dc` |
| Text Secondary | Muted Gold | `#a89968` |

### Typography

- **Headlines:** Playfair Display (elegant serif)
- **Body:** Raleway (refined sans-serif)
- **Accent:** Cormorant Garamond (pull quotes)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd la-vie-lounge

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── apply/
│   │   └── page.tsx          # Application form page
│   ├── thank-you/
│   │   └── page.tsx          # Success page
│   ├── layout.tsx            # Root layout with fonts, metadata
│   ├── globals.css           # Global styles, Tailwind imports
│   ├── sitemap.ts            # Auto-generated sitemap
│   └── robots.ts             # Robots.txt configuration
├── components/
│   ├── ui/                   # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Select.tsx
│   │   └── Accordion.tsx
│   ├── sections/             # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── WhyStatusMatters.tsx
│   │   ├── JoinDiscoverConnect.tsx
│   │   ├── MembershipBenefits.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   ├── forms/
│   │   └── ApplicationForm.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── decorative/
│       └── ArtDecoPattern.tsx
├── lib/
│   ├── validations/
│   │   └── applicationSchema.ts  # Zod validation schemas
│   ├── actions/
│   │   └── submitApplication.ts  # Server action for form
│   └── utils/
│       └── cn.ts                 # Class name utility
├── hooks/
│   └── useScrollAnimation.ts     # Scroll animation hook
├── types/
│   └── index.ts
└── styles/
    └── fonts.ts              # Font configurations
```

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
# Base URL for the site (used in metadata)
NEXT_PUBLIC_SITE_URL=https://lavielounge.com

# reCAPTCHA (optional - for enhanced spam protection)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Email service (for form notifications)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
NOTIFICATION_EMAIL=notifications@lavielounge.com
```

## 🔒 Form Security Features

The application form includes multiple layers of spam protection:

1. **Honeypot Field** - Hidden field that bots will fill, legitimate users won't see
2. **Rate Limiting** - Max 3 submissions per IP per hour
3. **Zod Validation** - Comprehensive client and server-side validation
4. **CSRF Protection** - Built into Next.js Server Actions

### Adding reCAPTCHA v3

To enable reCAPTCHA:

1. Get API keys from [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Add keys to environment variables
3. Install the package: `npm install react-google-recaptcha-v3`
4. Wrap your layout with the provider
5. Update the form submission to verify the token

## 🎭 Animations

The site uses Framer Motion for smooth, elegant animations:

- **Scroll reveals** - Elements fade in as they enter viewport
- **Staggered animations** - Cards and list items animate in sequence
- **Micro-interactions** - Buttons, accordions, hover states
- **Background effects** - Subtle Art Deco pattern animations

Animation variants are centralized in `hooks/useScrollAnimation.ts`.

## ♿ Accessibility

The site follows WCAG 2.1 AA guidelines:

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators styled to match brand
- Color contrast meets AA standards
- Reduced motion preference support

## 📊 Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔍 SEO Implementation

- Comprehensive meta tags (Open Graph, Twitter Cards)
- JSON-LD structured data (Organization, LocalBusiness)
- Auto-generated sitemap
- Robots.txt configuration
- Semantic heading hierarchy
- Target keywords integrated naturally

## 📝 Customization

### Updating Content

All copy is defined in the component files. Key locations:

- `components/sections/*.tsx` - Section content
- `components/forms/ApplicationForm.tsx` - Form fields
- `lib/validations/applicationSchema.ts` - Validation rules
- `app/layout.tsx` - Site metadata

### Changing Colors

Update the color palette in `tailwind.config.ts` under `theme.extend.colors`.

### Adding Sections

1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/layout/Header.tsx`

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform supporting Next.js:

- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## 📄 License

Private - All rights reserved.

---

Built with elegance for La Vie Lounge.
