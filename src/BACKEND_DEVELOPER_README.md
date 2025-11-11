# Löyly Studio Website - Backend Developer Guide

## Project Overview
This is a complete sauna studio website for **Löyly Studio** featuring a minimalist, clean design with the Quicksand font family. The project includes both a React/TypeScript version and a WordPress theme conversion.

## Brand Identity
- **Name**: Löyly Studio
- **Font**: Quicksand (Google Fonts)
- **Color Palette**:
  - Deep Forest Green: `#004d40`
  - Charcoal Black: `#2b2b2b`
  - Light Gray: `#d1d1d1`
  - White: `#ffffff`

## Project Structure

### React Application (Main Version)
Located in the root directory, this is the primary React + TypeScript application.

#### Key Files:
- **`/App.tsx`** - Main application component with routing logic
- **`/styles/globals.css`** - Global styles, brand colors, and typography
- **`/components/`** - All React components

#### Main Components:
- **Header.tsx** - Floating navigation with semi-transparent background
- **Hero.tsx** - Auto-playing carousel with 3 custom sauna images
- **WhatWeAreAbout.tsx** - Mission statement with navigation button
- **Benefits.tsx** - Benefits overview section
- **SaunaExperience.tsx** - Experience description
- **Rituals.tsx** - Finnish sauna ritual cycle in triangle/pyramid layout
- **Services.tsx** - Services showcase
- **Pricing.tsx** - Membership pricing tiers
- **Contact.tsx** - Contact form section
- **Footer.tsx** - Footer with internal navigation
- **FloatingSocial.tsx** - Social media icons (centered bottom on mobile, right side on desktop)

#### Pages:
- **About.tsx** - Full about page
- **Blog.tsx** - Blog section
- **Gallery.tsx** - Image gallery
- **ContactPage.tsx** - Dedicated contact page
- **MemberPage.tsx** - Membership information
- **SupplierPage.tsx** - SteamSauna.sg supplier information
- **FinnishLegacy.tsx** - Finnish heritage content

### WordPress Theme
Located in `/wordpress-theme/` directory - Complete JavaScript conversion for WordPress integration.

#### WordPress Theme Files:
- **style.css** - Theme metadata and styles
- **functions.php** - Theme setup and enqueuing
- **header.php** - WordPress header
- **footer.php** - WordPress footer
- **index.php** - Main template file
- **screenshot.png** - Theme screenshot
- **/components/** - JavaScript versions of all React components
- **/inc/** - WordPress customizer and template tags

## Technology Stack

### Frontend (React Version):
- **React 18** with TypeScript
- **Tailwind CSS v4.0** for styling
- **Motion (Framer Motion)** for animations
- **Lucide React** for icons
- **Recharts** for potential data visualization
- **Shadcn/ui** component library

### WordPress Version:
- **JavaScript** (converted from TypeScript)
- **WordPress 6.0+** compatible
- **Tailwind CSS** integrated
- All React features adapted for WordPress

## Key Features

### 1. Responsive Design
- Mobile-first approach
- Responsive typography (smaller headers on mobile)
- Adaptive layouts for all screen sizes

### 2. Animations
- Smooth page transitions using Motion
- Scroll-triggered animations
- Hover effects and interactive elements

### 3. Navigation
- Single-page application with client-side routing
- Floating header with semi-transparent background
- Internal page navigation (Home, About, Member, Blog, Gallery, Contact, Supplier)

### 4. Hero Section
- Auto-playing image carousel
- 3 custom sauna images
- Responsive text overlay
- Smooth transitions

### 5. Rituals Section
- Triangle/pyramid layout on desktop
- Shows complete Finnish sauna ritual cycle
- Arrow flow indicators
- Responsive mobile layout

### 6. Social Media
- Floating social icons
- Centered at bottom on mobile
- Vertically centered on right side on desktop

## Setup Instructions

### React Version:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### WordPress Theme:
1. Copy the entire `/wordpress-theme/` folder to `/wp-content/themes/`
2. Rename folder to `loyly-studio`
3. Activate theme in WordPress admin
4. Configure theme settings in Customizer

## Important Notes

### Typography
- Base font size: 18px
- Mobile headers are scaled down (h1: 2rem, h2: 1.5rem, h3: 1.25rem, h4: 1.125rem)
- Desktop headers: (h1: 3rem, h2: 2.25rem, h3: 1.75rem, h4: 1.5rem)
- Quicksand font loaded from Google Fonts

### Colors
All colors are defined in CSS custom properties in `/styles/globals.css`:
```css
--brand-forest-green: #004d40;
--brand-charcoal: #2b2b2b;
--brand-light-gray: #d1d1d1;
--brand-white: #ffffff;
```

### Images
- Hero carousel requires 3 sauna images
- Images should be optimized for web
- Recommended size: 1920x1080px or similar aspect ratio

### Components Library
- Shadcn/ui components located in `/components/ui/`
- Do not modify these files directly
- Use Tailwind classes for customization

## File Structure Details

```
├── App.tsx                          # Main app with routing
├── components/
│   ├── Header.tsx                   # Navigation header
│   ├── Hero.tsx                     # Hero carousel
│   ├── WhatWeAreAbout.tsx          # About section with button
│   ├── Benefits.tsx                 # Benefits grid
│   ├── SaunaExperience.tsx         # Experience section
│   ├── Rituals.tsx                  # Triangle ritual layout
│   ├── Services.tsx                 # Services showcase
│   ├── Pricing.tsx                  # Pricing tiers
│   ├── Contact.tsx                  # Contact form
│   ├── Footer.tsx                   # Footer with links
│   ├── FloatingSocial.tsx          # Social media icons
│   ├── About.tsx                    # Full about page
│   ├── Blog.tsx                     # Blog page
│   ├── Gallery.tsx                  # Gallery page
│   ├── ContactPage.tsx             # Contact page
│   ├── MemberPage.tsx              # Membership page
│   ├── SupplierPage.tsx            # Supplier page
│   ├── FinnishLegacy.tsx           # Finnish heritage
│   ├── figma/
│   │   └── ImageWithFallback.tsx   # Protected component
│   └── ui/                          # Shadcn components
├── styles/
│   └── globals.css                  # Global styles and tokens
└── wordpress-theme/                 # Complete WordPress version
```

## Backend Integration Points

### API Endpoints Needed:
1. **Contact Form Submission**
   - Endpoint: `/api/contact`
   - Method: POST
   - Fields: name, email, phone, message

2. **Blog Posts**
   - Endpoint: `/api/posts`
   - Method: GET
   - Returns: Array of blog posts

3. **Gallery Images**
   - Endpoint: `/api/gallery`
   - Method: GET
   - Returns: Array of image URLs

4. **Membership Registration**
   - Endpoint: `/api/membership`
   - Method: POST
   - Fields: name, email, membership tier

### WordPress Integration:
- Theme uses WordPress REST API
- Custom post types may be needed for:
  - Services
  - Testimonials
  - Gallery images
  - Blog posts

## Deployment Checklist

### React Version:
- [ ] Build production bundle
- [ ] Optimize images
- [ ] Configure environment variables
- [ ] Set up hosting (Vercel, Netlify, etc.)
- [ ] Configure domain and SSL

### WordPress Version:
- [ ] Upload theme to WordPress
- [ ] Install required plugins
- [ ] Configure permalink structure
- [ ] Set up custom post types
- [ ] Add content through admin
- [ ] Test all pages and forms

## Support & Documentation

### Additional Documentation:
- `/wordpress-theme/README.md` - WordPress specific guide
- `/wordpress-theme/INSTALLATION.md` - Installation instructions
- `/guidelines/Guidelines.md` - Design guidelines
- `/Attributions.md` - Image and resource credits

### Key Technologies Documentation:
- [React Documentation](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion (Framer Motion)](https://motion.dev/)
- [WordPress Theme Development](https://developer.wordpress.org/themes/)
- [Shadcn/ui](https://ui.shadcn.com/)

## Recent Updates

1. ✅ Mobile header typography reduced for better mobile experience
2. ✅ FloatingSocial component centered on mobile (bottom), right side on desktop
3. ✅ "Learn More About Us" button added to WhatWeAreAbout section
4. ✅ All references to "Helsinki" changed to "Finland"
5. ✅ Complete TypeScript to JavaScript conversion for WordPress
6. ✅ Supplier page created for SteamSauna.sg
7. ✅ Hero carousel implemented with 3 images
8. ✅ Rituals section restructured to triangle/pyramid layout

## Contact

For questions about the frontend implementation, refer to this documentation.
For backend integration support, coordinate with the frontend team.

---

**Last Updated**: November 11, 2025
**Version**: 1.0
**Project**: Löyly Studio Website
