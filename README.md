# Tasker - Intelligent Task Management Platform

A modern, responsive task management platform built with React, Vite, and TailwindCSS. Features a comprehensive design system, multiple pages, and advanced UI components for a complete landing experience.

## 🚀 Live Demo

[View Live Demo](https://tasker-eight-iota.vercel.app)

## 🎯 Project Overview

Tasker is a comprehensive task management platform that showcases modern web development practices with a focus on user experience, performance, and maintainability. The platform includes multiple pages, advanced animations, and a robust design system.

## 📱 Pages & Features

### 🏠 Home Page (`/`)
- **Hero Section**: Compelling headline with email signup form
- **Feature Showcase**: Interactive feature cards with animations
- **Client Testimonials**: Customer success stories with profile images
- **FAQ Section**: Expandable questions and answers
- **Newsletter Signup**: Email capture for lead generation
- **Call-to-Action**: Multiple conversion points throughout

### 👥 About Page (`/about`)
- **Company Mission**: Vision and values presentation
- **Team Profiles**: Team member cards with social links
- **Company Story**: Timeline of company milestones
- **Values Section**: Core company principles
- **Contact Information**: Multiple ways to reach the team

### 💰 Pricing Page (`/pricing`)
- **Three Pricing Tiers**: Free, Pro, and Enterprise plans
- **Feature Comparison**: Detailed feature matrix
- **Pricing Cards**: Interactive pricing selection
- **FAQ Section**: Pricing-related questions
- **Enterprise Contact**: Direct contact for enterprise customers

### 📞 Contact Page (`/contact`)
- **Contact Form**: Multi-field contact form with validation
- **Office Locations**: Global office addresses
- **Support Channels**: Multiple support options
- **Social Media Links**: Company social presence
- **Response Time**: Expected response times

### 🛠️ Products Page (`/products`)
- **Product Catalog**: Detailed product listings
- **Feature Breakdown**: Product-specific features
- **Integration Options**: Third-party integrations
- **Use Cases**: Industry-specific applications
- **Product Demos**: Interactive product previews

### 🎯 Solutions Page (`/solutions`)
- **Industry Solutions**: Tailored solutions by industry
- **Case Studies**: Success stories and testimonials
- **Implementation Guide**: Step-by-step setup process
- **Custom Solutions**: Enterprise customization options
- **ROI Calculator**: Business impact calculator

### 📚 Resources Page (`/resources`)
- **Documentation**: Comprehensive guides and tutorials
- **Blog Posts**: Latest industry insights
- **Video Tutorials**: Step-by-step video guides
- **Webinars**: Upcoming and recorded webinars
- **Download Center**: Whitepapers and resources

### 🏢 Enterprise Page (`/enterprise`)
- **Enterprise Features**: Advanced enterprise capabilities
- **Security Compliance**: Security and compliance details
- **Custom Integration**: Enterprise integration options
- **Dedicated Support**: Premium support offerings
- **Enterprise Contact**: Direct enterprise sales contact

## 🎨 Advanced Features

### 🎭 Animations & Interactions
- **Scroll Animations**: Elements animate on scroll
- **Page Transitions**: Smooth page-to-page transitions
- **Micro-interactions**: Hover effects and button animations
- **Loading States**: Skeleton loaders and spinners
- **Progress Indicators**: Scroll progress and loading bars

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Responsive tablet layouts
- **Desktop Enhancement**: Enhanced desktop experience
- **Touch Interactions**: Mobile-friendly touch targets
- **Cross-Browser**: Compatible with all modern browsers

### ♿ Accessibility
- **WCAG 2.1 AA**: Full accessibility compliance
- **Keyboard Navigation**: Complete keyboard support
- **Screen Reader**: ARIA labels and semantic HTML
- **Focus Management**: Proper focus states and order
- **Color Contrast**: High contrast ratios for readability

### 🚀 Performance
- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Images and components lazy loading
- **Optimized Assets**: Compressed images and fonts
- **Caching Strategy**: Efficient caching implementation
- **Bundle Optimization**: Minimal bundle sizes

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.2.0**: Latest React with concurrent features
- **React Router DOM 7.7.1**: Client-side routing
- **React Icons 5.0.1**: Comprehensive icon library

### Build Tools
- **Vite 4.4.5**: Fast build tool and dev server
- **PostCSS 8.4.31**: CSS processing
- **Autoprefixer 10.4.16**: CSS vendor prefixing

### Styling & Design
- **TailwindCSS 3.3.5**: Utility-first CSS framework
- **Framer Motion 12.23.12**: Advanced animations
- **Custom Design System**: Comprehensive design tokens

### Development Tools
- **ESLint 8.45.0**: Code linting and quality
- **Prettier 3.0.3**: Code formatting
- **TypeScript Support**: Type checking and IntelliSense

### Deployment & Hosting
- **Vercel**: Production hosting and deployment
- **GitHub**: Version control and collaboration
- **GitHub Actions**: CI/CD pipeline (configurable)

## 📁 Project Structure

```
Tasker/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── AnimatedButton.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   ├── ScrollToTopWithProgress.jsx
│   │   │   ├── ScrollToTopOnRouteChange.jsx
│   │   │   ├── HamBurgerButton.jsx
│   │   │   └── MobileMenu.jsx
│   │   ├── layout/          # Layout components
│   │   │   └── Container.jsx
│   │   └── sections/        # Page section components
│   │       ├── Hero.jsx
│   │       ├── Features.jsx
│   │       ├── NavigationBar.jsx
│   │       ├── Clients.jsx
│   │       ├── Testimonial.jsx
│   │       ├── Faqs.jsx
│   │       ├── Newsletter.jsx
│   │       └── Footer.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   ├── Products.jsx
│   │   ├── Solutions.jsx
│   │   ├── Resources.jsx
│   │   └── Enterprise.jsx
│   ├── constants/           # Design system and constants
│   │   └── design-system.js
│   ├── context/             # React context
│   │   └── MenuContext.jsx
│   ├── data/                # Static data
│   │   └── testimonials.js
│   ├── hooks/               # Custom React hooks
│   │   ├── usePageTitle.js
│   │   ├── useScrollAnimation.js
│   │   └── useScrollToTopOnRouteChange.js
│   ├── styles/              # Global styles
│   │   └── theme.css
│   ├── utils/               # Utility functions
│   ├── types/               # TypeScript types
│   ├── ui/                  # Additional UI utilities
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── public/
│   └── images/              # Static assets
│       ├── logo.svg
│       ├── hero-img.svg
│       ├── clients.svg
│       ├── tasks.svg
│       ├── clock.svg
│       ├── chat.svg
│       ├── profile.svg
│       ├── sarah.svg
│       ├── rocket-man.svg
│       ├── lady-laptop.svg
│       ├── lady-hat.svg
│       ├── dna.svg
│       ├── world.svg
│       ├── message-paper.svg
│       └── arrow.svg
├── dist/                    # Production build
├── .vercel/                 # Vercel deployment config
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
├── postcss.config.js        # PostCSS configuration
├── prettier.config.cjs      # Prettier configuration
├── .eslintrc.cjs            # ESLint configuration
├── package.json
├── package-lock.json
├── index.html
└── Documentation/
    ├── README.md
    ├── DESIGN_SYSTEM.md
    ├── DESIGN_SYSTEM_README.md
    ├── THEME.md
    ├── ANIMATION_SUMMARY.md
    ├── ANIMATION_IMPROVEMENTS.md
    ├── AUTO_SCROLL_FEATURE.md
    ├── PAGE_TITLES_FEATURE.md
    └── SCROLL_TO_TOP_FEATURE.md
```

## 🎨 Design System

The project includes a comprehensive design system with:

### Colors
- **Primary**: Blue (#3B82F6) - Main brand color
- **Secondary**: Green (#10B981) - Success and growth
- **Accent**: Purple (#8B5CF6) - Highlight and emphasis
- **Neutral**: Gray scale (#F9FAFB to #111827)
- **Semantic**: Success, warning, error, and info colors

### Typography
- **Headings**: Poppins (Bold, Semi-bold, Medium)
- **Body**: Inter (Regular, Medium, Semi-bold)
- **Monospace**: JetBrains Mono (for code snippets)

### Spacing
- **Grid System**: 8px base unit
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px

### Components
- **Button**: 5 variants (primary, secondary, outline, ghost, danger)
- **Card**: 4 variants (default, elevated, outlined, ghost)
- **Input**: Multiple states (default, focus, error, disabled)
- **Container**: Responsive max-width containers

### Shadows
- **Soft**: Subtle elevation for cards
- **Medium**: Standard elevation for modals
- **Large**: High elevation for dropdowns

### Animations
- **Duration**: 150ms, 200ms, 300ms, 500ms
- **Easing**: Ease-in-out, ease-out, ease-in
- **Transitions**: Smooth state changes

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (LTS recommended)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/thecodedsurveyor/Tasker.git
cd Tasker
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

4. **Open your browser** and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Fix ESLint issues automatically

## 🧩 Component Usage

### Button Component
```jsx
<Button
  variant="primary" // primary, secondary, outline, ghost, danger
  size="md" // sm, md, lg, xl
  fullWidth={false}
  disabled={false}
  onClick={() => console.log('clicked')}
>
  Click Me
</Button>
```

### Card Component
```jsx
<Card
  variant="default" // default, elevated, outlined, ghost
  padding="md" // none, sm, md, lg, xl
  className="custom-class"
>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### Input Component
```jsx
<Input
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  fullWidth={true}
  required={true}
  error="Invalid email format"
/>
```

### Container Component
```jsx
<Container maxWidth="default" padding="default">
  <h1>Page Content</h1>
  <p>Your content here</p>
</Container>
```

## 🎯 Design Principles

1. **Consistency**: All components follow the same design patterns
2. **Accessibility**: WCAG 2.1 AA compliant with proper focus management
3. **Responsive**: Mobile-first design with progressive enhancement
4. **Performance**: Optimized for fast loading and smooth interactions
5. **Maintainability**: Clean, well-documented, and modular code
6. **Scalability**: Easy to extend and customize

## 🔧 Customization

### Colors
Modify colors in `tailwind.config.js`:
```js
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  }
}
```

### Typography
Update fonts in `tailwind.config.js`:
```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  heading: ['Poppins', 'system-ui', 'sans-serif'],
}
```

### Components
Add new components in `src/components/ui/` and follow existing patterns.

## 🚀 Deployment

### Vercel (Live Demo)
✅ **Successfully deployed to Vercel**
- **Live URL**: https://tasker-eight-iota.vercel.app
- **Status**: Production ready with all features
- **Performance**: Optimized with code splitting and lazy loading

### Vercel Setup (For Your Own Projects)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Add GitHub Actions workflow for deployment
2. Configure base path in `vite.config.js`
3. Deploy to GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📞 Support

- **Email**: support@tasker.com
- **Documentation**: [docs.tasker.com](https://docs.tasker.com)
- **Issues**: [GitHub Issues](https://github.com/thecodedsurveyor/Tasker/issues)
- **Discussions**: [GitHub Discussions](https://github.com/thecodedsurveyor/Tasker/discussions)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **TailwindCSS Team** for the utility-first CSS framework
- **Framer Motion Team** for the animation library
- **React Router Team** for the routing solution

---

Built with ❤️ by the Tasker team

**Version**: 1.0.0  
**Last Updated**: January 2025
