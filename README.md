# Klardata Website Revamp

Modern, professional business intelligence consulting website built with Next.js 16 and Tailwind CSS.

## Features

- **Clean Blue Theme**: Professional design with a calming blue color palette
- **Responsive Design**: Optimized for all device sizes
- **Smooth Scrolling**: Single-page navigation with smooth scroll behavior
- **Modern Typography**: Inter font for excellent readability
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Fast Performance**: Built with Next.js 16 and optimized for speed

## Sections

1. **Hero**: Eye-catching introduction with key statistics
2. **About**: Background, expertise, and trusted clients
3. **Services**: Comprehensive service offerings with benefits
4. **Case Studies**: Real-world project examples with results
5. **Testimonials**: Client feedback and trust indicators
6. **Contact**: Contact form and information
7. **Footer**: Quick links and social media

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Customization

### Colors

The primary blue color palette can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#eff6ff',
    // ... customize other shades
  }
}
```

### Content

Update content in the component files:
- `components/Hero.tsx` - Hero section
- `components/About.tsx` - About section
- `components/Services.tsx` - Services
- `components/CaseStudies.tsx` - Case studies
- `components/Testimonials.tsx` - Testimonials
- `components/Contact.tsx` - Contact form

### Contact Form

The contact form currently logs to console. To enable email functionality, integrate with:
- [Resend](https://resend.com)
- [SendGrid](https://sendgrid.com)
- [Formspree](https://formspree.io)

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## License

© 2026 Klardata. All rights reserved.
