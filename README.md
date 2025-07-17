# 🚀 Developer Portfolio

> A modern, responsive developer portfolio showcasing skills, projects, and experience with stunning animations and smooth interactions.

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🌟 **Live Demo**

**[🔗 View Portfolio](https://adityaaishwarya.vercel.app)**

---

## ✨ **Features**

🎨 **Modern Design** - Clean, professional layout with stunning visual effects  
📱 **Fully Responsive** - Optimized for all devices and screen sizes  
🌊 **Smooth Scrolling** - Enhanced UX with Lenis smooth scrolling  
⚡ **Interactive Animations** - Engaging micro-interactions using Aceternity UI  
🔒 **Type Safety** - Built with TypeScript for robust development  
🚀 **Performance Optimized** - Fast loading with Next.js 14+ App Router  
🔍 **SEO Friendly** - Built-in SEO optimization and metadata management  
🌙 **Dark/Light Mode** - Theme switching capability  
♿ **Accessibility** - WCAG compliant and keyboard navigable

---

## 🛠️ **Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) | Framework | 14+ |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | Language | 5.0+ |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Styling | 3.0+ |
| ![Aceternity](https://img.shields.io/badge/Aceternity_UI-FF6B6B?style=flat&logo=react&logoColor=white) | Components | Latest |
| ![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) | Animations | Latest |
| ![Lenis](https://img.shields.io/badge/Lenis-FF4785?style=flat&logo=javascript&logoColor=white) | Smooth Scroll | Latest |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Deployment | Latest |

---

## 📁 Project Structure

```
Portfolio/
├── .next/                      # Next.js build output
├── app/                        # Next.js 14+ App Router
│   ├── globals.css            # Global styles and Tailwind imports
│   ├── layout.tsx             # Root layout component
│   ├── page.tsx               # Home page component
│   └── provider.tsx           # Context providers wrapper
├── components/                 # Reusable UI components
│   ├── ui/                    # Aceternity UI components
│   │   ├── Component.tsx      # Custom UI components
│   │   └── Cert.tsx          # Certificate component
│   ├── Education.tsx          # Education section
│   ├── Footer.tsx             # Footer component
│   ├── Grid.tsx               # Grid layout component
│   ├── Hero.tsx               # Hero section
│   ├── Interest.tsx           # Interests section
│   └── Projects.tsx           # Projects showcase
├── data/                       # Static data and content
│   ├── confetti.json          # Confetti animation config
│   ├── globe.json             # Globe animation data
│   └── index.ts               # Data exports
├── lib/                        # Utility functions
├── node_modules/               # Dependencies
├── public/                     # Static assets
├── .gitignore                 # Git ignore rules
├── eslint.config.mjs          # ESLint configuration
├── next-env.d.ts              # Next.js TypeScript declarations
├── next.config.ts             # Next.js configuration
├── package-lock.json          # Dependency lock file
├── package.json               # Project dependencies
├── postcss.config.js          # PostCSS configuration
├── postcss.config.mjs         # PostCSS configuration (ESM)
├── README.md                  # Project documentation
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🚀 **Quick Start**

### 📋 **Prerequisites**

- **Node.js** 18.x or later
- **npm**, **yarn**, or **pnpm**
- **Git**

### ⚡ **Installation**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Aditya1286/Portfolio.git
cd Portfolio

# 2️⃣ Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3️⃣ Run development server
npm run dev
# or
yarn dev
# or
pnpm dev

# 4️⃣ Open your browser
# Navigate to http://localhost:3000
```

---

## 📝 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://your-portfolio.com
NEXT_PUBLIC_CONTACT_EMAIL=aishwaryaaditya2@gmail.com
```

### Data Configuration

Update your personal information in `data/index.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "aishwaryaaditya2@gmail.com",
  // ... other details
};

export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript", "Node.js"],
    // ... other project details
  },
];
```

### Styling Customization

- **Tailwind Config**: Modify `tailwind.config.ts` for custom colors and themes
- **Global Styles**: Edit `app/globals.css` for global styling
- **Component Styles**: Individual component styling within component files

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Adding New Sections

1. Create component in `components/`
2. Add data structure in `data/index.ts`
3. Import and use in `app/page.tsx`

Example:
```typescript
// components/NewSection.tsx
export const NewSection = () => {
  return (
    <section className="py-20">
      {/* Your content */}
    </section>
  );
};
```

## 🎨 Components Overview

### Core Components

- **Hero**: Landing section with animated introduction
- **Education**: Educational background with timeline
- **Projects**: Interactive project showcase with hover effects
- **Grid**: Responsive grid layout for various content
- **Footer**: Contact information and social links
- **Cert**: Certificates and achievements display

### UI Components

Located in `components/ui/`, these are enhanced Aceternity UI components:
- Custom animations and transitions
- Responsive design patterns
- Accessibility features
- TypeScript interfaces

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to [Vercel](https://vercel.com/)
3. Deploy with automatic builds on every push

### Manual Deployment

```bash
npm run build
npm run start
```

## 🔍 SEO & Performance

- **Metadata**: Configured in `app/layout.tsx`
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Analysis**: Run `npm run analyze` (if configured)

## 🎯 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) for beautiful components
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lenis](https://lenis.studiofreight.com/) for smooth scrolling
- [Framer Motion](https://www.framer.com/motion/) for animations

## 📞 Contact

**Aditya Aishwarya** - [aishwaryaaditya2@gmail.com](mailto:aishwaryaaditya2@gmail.com)

**Project Link**: [https://github.com/Aditya1286/Portfolio](https://github.com/Aditya1286/Portfolio)

**Live Demo**: [Portfolio Website](https://adityaaishwarya.vercel.app)

---

⭐ Star this repository if you found it helpful!
