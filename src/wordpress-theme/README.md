# Löyly Studio WordPress Theme

A minimalist Finnish sauna website theme built with React components and modern animations.

## Installation Instructions

### Step 1: Prepare the Theme Files

1. Copy all files from your current project into the `/wordpress-theme/` directory:
   - Copy `/App.tsx` → `/wordpress-theme/App.tsx`
   - Copy `/components/` → `/wordpress-theme/components/`
   - Copy `/styles/` → `/wordpress-theme/styles/`
   - The WordPress-specific files (style.css, functions.php, etc.) are already in place

2. **Important**: You need to convert your `.tsx` files to `.js` files for WordPress compatibility:
   - Rename `App.tsx` to `App.js`
   - Remove TypeScript type annotations
   - Update all component imports to use `.js` extensions instead of `.tsx`

### Step 2: Build Process (Required)

Since WordPress doesn't natively support React/JSX, you have two options:

#### Option A: Use a Build Tool (Recommended)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add a build script to compile your React code:
   - Use tools like Webpack, Vite, or Rollup to bundle your React app
   - Output the bundled file as `/wordpress-theme/App.js`

3. The bundled file should be a single JavaScript file that WordPress can load

#### Option B: Manual Conversion

1. Convert all `.tsx` files to `.js` manually
2. Remove all TypeScript syntax
3. Use React.createElement instead of JSX, or use Babel to compile JSX

### Step 3: Upload to WordPress

1. Compress the entire `/wordpress-theme/` folder as a ZIP file
2. In WordPress Admin, go to **Appearance → Themes → Add New → Upload Theme**
3. Upload the ZIP file
4. Click **Activate**

### Step 4: Configure Your Images

Since the theme uses custom sauna images, you'll need to:

1. Upload your custom images to WordPress Media Library
2. Update the image URLs in your Hero component to point to the WordPress media files
3. Alternatively, keep them as external URLs if they're hosted elsewhere

## Theme Features

- **React-Powered**: Full React application running within WordPress
- **Minimalist Design**: Clean white and gray tones with generous white space
- **Quicksand Font**: Custom typography throughout
- **Animated Components**: Smooth Motion (Framer Motion) transitions
- **Responsive**: Mobile-friendly design
- **Auto-Playing Gallery**: Hero carousel with custom sauna images

## Sections Included

- Header with navigation
- Hero section with image carousel
- What We Are About
- Health Benefits
- Finnish Sauna Ritual
- Facilities (Services)
- Membership Pricing
- Contact Form
- Footer

## Requirements

- WordPress 6.0 or higher
- PHP 7.4 or higher
- Modern browser with ES6+ support

## Support

For questions or issues, please contact the theme developer.

## License

This theme is licensed under the GNU General Public License v2 or later.

---

## Quick Notes for Developers

### File Structure in WordPress Theme:
```
wordpress-theme/
├── style.css (WordPress theme header)
├── functions.php (Enqueue scripts & styles)
├── index.php (Main template)
├── header.php (HTML head)
├── footer.php (Closing tags)
├── inc/
│   ├── template-tags.php
│   └── customizer.php
├── App.js (Your React app - converted from App.tsx)
├── components/ (All your React components as .js files)
├── styles/
│   └── globals.css
└── README.md
```

### Import Maps

The theme uses Import Maps to load React and dependencies from CDN (esm.sh). This eliminates the need for a complex build process but requires modern browsers.

### Customization

- Edit colors and typography in `/styles/globals.css`
- Modify components in `/components/` directory
- Update theme info in `style.css` header
- Configure scripts in `functions.php`
