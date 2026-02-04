# 🚀 Intellosoft Infotech - Modern Multi-Page Website

A beautiful, modern, and fully responsive multi-page website built with Next.js 14 (App Router), React, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Modern and beautiful design with smooth animations
- 📱 Fully responsive across all devices
- 🚀 Built with Next.js 14 App Router
- 💨 Fast page loads and optimal performance
- 🎭 Engaging animations with Framer Motion
- 🎯 SEO-friendly structure
- 📄 Multiple pages with rich content
- 🔍 Clean and maintainable code

## 📑 Pages Included

1. **Home** - Eye-catching hero, services preview, testimonials, CTA
2. **About Us** - Company story, mission, vision, values, team, timeline
3. **Services** - Comprehensive service listings with details
4. **Solutions** - Industry-specific solutions and case studies
5. **Careers** - Job listings, benefits, company culture
6. **Contact** - Contact form, business information, FAQ

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Quick Start

```bash
# Navigate to project directory
cd intellosoft-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## 🎯 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
intellosoft-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js          # About Us page
│   │   ├── services/
│   │   │   └── page.js          # Services page
│   │   ├── solutions/
│   │   │   └── page.js          # Solutions page
│   │   ├── careers/
│   │   │   └── page.js          # Careers page
│   │   ├── contact/
│   │   │   └── page.js          # Contact page
│   │   ├── layout.js            # Root layout
│   │   ├── page.js              # Home page
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── Navigation.js        # Header navigation
│       └── Footer.js            # Footer component
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies

```

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Content

Each page is in `src/app/[page-name]/page.js`. Simply edit the content in these files.

### Navigation

Edit `src/components/Navigation.js` to modify menu items.

### Footer

Update `src/components/Footer.js` for footer content and links.

## 🌟 Key Features by Page

### Home Page
- Hero section with animated background
- Statistics showcase
- Services preview
- Client testimonials
- Call-to-action section

### About Page
- Company story and history
- Mission and vision
- Core values
- Team members
- Timeline of milestones

### Services Page
- 9 comprehensive service offerings
- Technology stack for each service
- Development process
- Why choose us section

### Solutions Page
- 6 industry-specific solutions
- Real case studies
- Success stories with results

### Careers Page
- Company benefits
- Perks and culture
- Open positions with details
- Application process

### Contact Page
- Interactive contact form
- Business information
- Location map
- FAQ section
- Quick response info

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Other Platforms

```bash
# Build for production
npm run build

# The output will be in .next folder
# Deploy this folder to your hosting provider
```

## 📱 Responsive Design

- **Desktop**: Optimized for 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## ⚡ Performance

- Fast page loads with Next.js optimization
- Image optimization
- Code splitting
- Lazy loading components
- Minimal JavaScript bundle

## 🎭 Animations

Beautiful animations powered by Framer Motion:
- Scroll-triggered animations
- Hover effects
- Page transitions
- Smooth transitions
- Interactive elements

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

Copyright © 2026 Intellosoft Infotech Pvt. Ltd. All Rights Reserved.

## 💬 Support

For questions or support:
- Email: gourav@intellosoft.io
- Website: [https://www.intellosoft.io](https://www.intellosoft.io)

## 🎉 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

**Built with ❤️ by Intellosoft Infotech**
