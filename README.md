# Professional Services Website

A production-ready, multilingual Next.js website with modern 3D UI/UX, offering professional services including portfolio assignments, computer projects, PhD research, interview preparation, digital marketing, and web development.

## 🎯 Features

### Core Services
- **Portfolio-Ready Assignments** - Professional assignments designed to showcase your skills
- **Computer Projects** - Mini and major computer projects tailored to your needs
- **PhD Research & Thesis Writing** - Comprehensive research and thesis writing services
- **Interview Preparation & Job Landing Support** - Complete interview prep and job search support
- **Digital Marketing** - Meta/Facebook/Instagram Ads management and campaigns
- **Web Development Services** - Full-stack web development from simple websites to complex applications

### Website Features
- **Multilingual Support** - English (default), Spanish, French with next-intl
- **3D UI/UX** - Modern 3D animations using Framer Motion and Three.js
- **Service Detail Pages** - Dedicated page for each service (`/services/[slug]`)
- **Blog System** - Service-specific blog sections with SEO-friendly structure (`/blog/service/[serviceId]`)
- **Contact Form** - Working contact form with validation
- **Responsive Design** - Mobile-first, fully responsive across all devices
- **SEO Optimized** - Meta tags, structured data, and SEO-friendly URLs
- **Dark/Light Mode** - Theme switching with next-themes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js / React Three Fiber / @react-three/drei
- **Animations**: Framer Motion, GSAP
- **Internationalization**: next-intl
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

1. **Clone the repository**:
```bash
git clone <your-repo-url>
cd digital-marketing-agency
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Create environment file** (optional for email):
```bash
cp .env.example .env.local
```

4. **Run the development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
digital-marketing-agency/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── services/
│   │   ├── page.tsx             # Services listing page
│   │   └── [slug]/              # Service detail pages
│   ├── blog/
│   │   ├── page.tsx             # Blog listing page
│   │   ├── [id]/                # Individual blog posts
│   │   └── service/[serviceId]/ # Service-specific blog sections
│   ├── about/                   # About page
│   ├── contact/                 # Contact page with form
│   ├── portfolio/               # Portfolio page
│   └── api/
│       └── contact/             # Contact form API route
├── components/                  # React components
│   ├── ui/                     # Reusable UI components
│   ├── sections/               # Homepage sections
│   ├── layout/                 # Navbar, Footer
│   ├── 3d/                     # 3D components
│   └── forms/                  # Form components
├── lib/                        # Utilities and constants
│   ├── constants.ts            # Services, navigation, etc.
│   ├── blog-data.ts            # Blog posts data
│   ├── validations.ts          # Form validations
│   └── utils.ts                # Utility functions
├── i18n/                       # Internationalization
│   ├── config.ts               # i18n configuration
│   ├── routing.ts              # Routing configuration
│   ├── request.ts              # Request configuration
│   └── messages/               # Translation files
│       ├── en.json
│       ├── es.json
│       └── fr.json
└── public/                     # Static files
```

## 📧 Contact Information

**Email**: Rehkais@outlook.com

The email is displayed throughout the website:
- Footer
- Contact page
- Service detail pages
- About page

## 🌐 Multilingual Support

The website supports multiple languages:
- **English** (default) - `/en`
- **Spanish** - `/es`
- **French** - `/fr`

Language switcher is available in the navigation. To add more languages:

1. Add the locale to `i18n/config.ts` and `i18n/routing.ts`
2. Create a new translation file in `i18n/messages/[locale].json`
3. Add translations following the existing structure

## 🎨 Customization

### Services

Edit services in `lib/constants.ts`:
```typescript
export const SERVICES = [
  {
    id: "portfolio-assignments",
    title: "Portfolio-Ready Assignments",
    description: "...",
    features: [...],
    category: "education",
  },
  // ...
];
```

### Blog Posts

Add blog posts in `lib/blog-data.ts`:
```typescript
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-id",
    title: "Post Title",
    description: "...",
    content: "...",
    category: "development",
    serviceId: "web-development",
    // ...
  },
];
```

### Colors

Modify colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#6366F1",
    light: "#818CF8",
    dark: "#4F46E5",
  },
  // ...
}
```

## 📝 Blog Structure

The blog system includes:
- **Main Blog Page** (`/blog`) - Lists all blog posts
- **Service-Specific Blogs** (`/blog/service/[serviceId]`) - Blog posts for each service
- **Individual Post Pages** (`/blog/[id]`) - Full blog post pages with related posts

Each service has its own blog section for SEO optimization.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Configure environment variables (if needed)
4. Deploy automatically

### Build for Production

```bash
npm run build
npm start
```

## ✅ Production Ready Features

- [x] Multilingual support (next-intl)
- [x] Service detail pages for each service
- [x] Service-specific blog sections
- [x] Working contact form with validation
- [x] SEO optimization (meta tags, structured data)
- [x] 3D UI animations (Framer Motion, Three.js)
- [x] Responsive design (mobile, tablet, desktop)
- [x] Dark/Light mode support
- [x] TypeScript for type safety
- [x] Form validation with Zod
- [x] Clean, modular code structure
- [x] GitHub ready with .gitignore

## 📋 Pages

- **Home** (`/`) - Hero section with 3D animations, services overview, CTA buttons
- **Services** (`/services`) - All services listing
- **Service Details** (`/services/[slug]`) - Individual service detail pages
- **Blog** (`/blog`) - Main blog listing
- **Service Blogs** (`/blog/service/[serviceId]`) - Service-specific blog sections
- **Blog Post** (`/blog/[id]`) - Individual blog posts
- **About** (`/about`) - Company mission and expertise
- **Contact** (`/contact`) - Working contact form
- **Portfolio** (`/portfolio`) - Portfolio showcase

## 🔧 Configuration

### Email Service (Optional)

To enable email sending from the contact form:

1. Install Resend (or another email service):
```bash
npm install resend
```

2. Add API key to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

3. Uncomment and configure the code in `app/api/contact/route.ts`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📞 Support

For questions or support, contact:
- **Email**: Rehkais@outlook.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
