# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Aceternity UI components. This portfolio showcases projects, skills, and experience with stunning animations and interactive elements.

## ✨ Features

- **Modern Design**: Clean, professional layout with stunning visual effects
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Engaging animations and micro-interactions
- **Fast Performance**: Optimized with Next.js 14+ and TypeScript
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Accessible**: Following web accessibility best practices
- **Dark/Light Mode**: Theme switching capability
- **Smooth Animations**: Powered by Framer Motion and Aceternity UI

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Aceternity UI](https://ui.aceternity.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/          # Aceternity UI components
│   │   ├── sections/    # Page sections
│   │   └── layout/      # Layout components
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   └── data/
│       └── portfolio.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Customization

### Personal Information

Update your personal information in `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Projects

Add your projects to the projects array in `src/data/portfolio.ts`:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript", "Node.js"],
    // ... other project details
  },
];
```

### Styling

The project uses Tailwind CSS with Aceternity UI components. You can customize:

- Colors and themes in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-specific styles in individual component files

## 🧩 Available Components

This portfolio includes various Aceternity UI components:

- **Hero Section**: Eye-catching landing section with animations
- **About Section**: Personal introduction with skills showcase
- **Projects Grid**: Interactive project cards with hover effects
- **Experience Timeline**: Professional experience with smooth transitions
- **Contact Form**: Animated contact form with validation
- **Navigation**: Smooth scrolling navigation with active states

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
```

### SEO Configuration

Update SEO settings in `src/app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your portfolio description',
  // ... other metadata
};
```

## 🚀 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy with automatic builds on every push

### Deploy on Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify

## 📈 Performance

This portfolio is optimized for performance with:
- Next.js automatic code splitting
- Image optimization with Next.js Image component
- Lazy loading for components
- Efficient bundle size with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) for the beautiful components
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

## 📞 Contact

Your Name - [aishwaryaaditya2@gmail.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

⭐ Star this repository if you found it helpful!