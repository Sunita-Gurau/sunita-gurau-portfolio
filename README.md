# Sunita Gurau - Portfolio Website

A modern, responsive portfolio website built with Vue 3, TypeScript, and Tailwind CSS. This project showcases my professional experience, education, projects, and contact information.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean and professional design
- **Vue 3 Composition API**: Latest Vue.js features with TypeScript
- **Fast Performance**: Built with Vite for optimal development and production builds
- **SEO Optimized**: Proper meta tags and structure
- **Contact Form**: Easy way for visitors to get in touch
- **Project Showcase**: Dedicated section to highlight my work
- **Experience Timeline**: Professional journey presentation
- **Education Section**: Academic background and certifications

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Icons**: Lucide Vue Next
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm

## 📁 Project Structure

```
frontend-portfolio/
├── src/
│   ├── components/          # Reusable Vue components
│   │   └── icons/          # Icon components
│   ├── views/              # Page components
│   │   ├── HomeView.vue    # Landing page
│   │   ├── ContactView.vue # Contact information
│   │   ├── EducationView.vue # Education background
│   │   ├── ExperienceView.vue # Work experience
│   │   └── ProjectsView.vue # Project showcase
│   ├── router/             # Vue Router configuration
│   ├── stores/             # Pinia state management
│   └── assets/             # Static assets
├── public/                 # Public assets
└── dist/                   # Production build output
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sunita-Gurau/sunita-gurau-portfolio.git
   cd sunita-gurau-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

- Modifying `tailwind.config.js` for theme customization
- Updating `src/assets/main.css` for global styles
- Editing individual component styles

### Content

Update the content by modifying the respective Vue components:

- `src/views/HomeView.vue` - Landing page content
- `src/views/ExperienceView.vue` - Work experience
- `src/views/EducationView.vue` - Education background
- `src/views/ProjectsView.vue` - Project showcase
- `src/views/ContactView.vue` - Contact information

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts

### GitHub Pages

1. Add GitHub Pages action to `.github/workflows/deploy.yml`
2. Push to trigger automatic deployment

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **GitHub**: [@Sunita-Gurau](https://github.com/Sunita-Gurau)
- **Portfolio**: [Live Demo](https://sunita-gurau-portfolio.netlify.app) (when deployed)

---

Built with ❤️ using Vue 3, TypeScript, and Tailwind CSS
