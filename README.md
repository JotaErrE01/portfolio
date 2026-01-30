# Portfolio Website

A modern, responsive portfolio website built with Astro, Tailwind CSS, and Bun. Features a beautiful night sky theme with easy theme customization.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro, Tailwind CSS, and Bun
- **Easy Theme System**: Change your entire site's appearance by editing one file
- **Responsive Design**: Looks great on all devices
- **Night Sky Theme**: Beautiful blue gradient background with animated stars
- **Performance Optimized**: Fast loading with Astro's static site generation
- **Component-Based**: Modular components for easy customization

## 🛠️ Setup

1. **Install dependencies**:
   ```bash
   bun install
   ```

2. **Start development server**:
   ```bash
   bun run dev
   ```

3. **Build for production**:
   ```bash
   bun run build
   ```

## 🎨 Customizing Your Theme

The easiest way to change your site's appearance is through the theme system:

1. Open `src/config/theme.js`
2. Change the `currentTheme` variable to use a different theme:
   ```js
   // Switch from night sky to ocean theme
   export const currentTheme = themes.ocean;
   ```

### Available Themes

- **Night Sky**: Blue gradient with starry background (default)
- **Ocean**: Teal and cyan gradient 
- **Sunset**: Orange to purple gradient

### Creating Custom Themes

Add a new theme to the `themes` object in `src/config/theme.js`:

```js
export const themes = {
  // ... existing themes
  myCustomTheme: {
    name: 'My Custom Theme',
    background: 'from-purple-900 via-pink-900 to-red-900',
    text: {
      primary: 'text-white',
      secondary: 'text-pink-100',
      accent: 'text-yellow-300'
    },
    cards: 'bg-white/10 backdrop-blur-sm border-white/20',
    buttons: {
      primary: 'bg-yellow-400 hover:bg-yellow-300 text-purple-900',
      secondary: 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
    }
  }
};

// Then use it
export const currentTheme = themes.myCustomTheme;
```

## 📝 Customizing Content

### Personal Information

1. **Hero Section** (`src/components/Hero.astro`):
   - Update your name, title, and description
   - Modify the call-to-action buttons

2. **Projects** (`src/components/Projects.astro`):
   - Replace the sample projects with your own
   - Add project images to the `public/` folder
   - Update GitHub and demo links

3. **Contact** (`src/components/Contact.astro`):
   - Update your email and location
   - Add your social media links
   - Customize the contact form

### Adding New Sections

Create new components in `src/components/` and import them in `src/pages/index.astro`.

## 🏗️ Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── config/      # Theme configuration
│   ├── layouts/     # Page layouts
│   └── pages/       # Site pages
├── astro.config.mjs # Astro configuration
└── tailwind.config.mjs # Tailwind CSS configuration
```

## 🌟 Tips

- All components use the theme system, so changing themes updates the entire site
- Images should be placed in the `public/` folder
- The site is fully responsive and optimized for performance
- Use the browser's developer tools to test different screen sizes

## 🚀 Deployment

This site can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

For Netlify/Vercel:
1. Connect your repository
2. Build command: `bun run build`
3. Publish directory: `dist`

---

Built with ❤️ using Astro, Tailwind CSS, and Bun
