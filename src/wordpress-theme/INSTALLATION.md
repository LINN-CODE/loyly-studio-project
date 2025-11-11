# WordPress Theme Installation Guide

## Complete Step-by-Step Instructions

### Prerequisites
- WordPress 6.0+ installed
- Access to WordPress Admin Dashboard
- FTP access or file manager (optional, for manual installation)

---

## Method 1: Automated Installation (Recommended)

### Step 1: Prepare Theme Package

1. **Download or copy all your current project files** into a folder named `loyly-studio`

2. **Copy the WordPress theme files** from `/wordpress-theme/` into the main folder:
   ```
   loyly-studio/
   ├── style.css (from /wordpress-theme/)
   ├── functions.php (from /wordpress-theme/)
   ├── index.php (from /wordpress-theme/)
   ├── header.php (from /wordpress-theme/)
   ├── footer.php (from /wordpress-theme/)
   ├── App.js (from /wordpress-theme/)
   ├── inc/ (from /wordpress-theme/inc/)
   ├── components/ (copy from your /components/ folder)
   ├── styles/ (copy from your /styles/ folder)
   └── screenshot.png (optional - add a 1200x900 theme preview image)
   ```

3. **Important**: You need to convert your React components from TypeScript to JavaScript:
   - All `.tsx` files need to become `.js` files
   - Remove TypeScript type annotations (like `: string`, `: number`, etc.)
   - Update imports to use `.js` extensions

### Step 2: Convert Components (Choose One Option)

#### Option A: Manual Conversion (Simpler)
For each `.tsx` file in `/components/`:
1. Rename the file extension from `.tsx` to `.js`
2. Remove all TypeScript type annotations:
   - Remove `interface` and `type` definitions
   - Remove type annotations like `: string`, `: number`, `: React.FC`, etc.
   - Remove generic type parameters like `<string>`, `<number>`, etc.
3. Update all import paths to use `.js` instead of `.tsx`:
   - Change: `import { Header } from "./components/Header"`
   - To: `import { Header } from "./components/Header.js"`

**Example Conversion:**
```typescript
// Before (Header.tsx)
interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  // component code
}
```

```javascript
// After (Header.js)
export function Header({ currentPage, onNavigate }) {
  // component code
}
```

#### Option B: Using a Build Tool (Advanced)
If you're comfortable with Node.js:

1. Install dependencies:
   ```bash
   npm install --save-dev @babel/core @babel/preset-react @babel/preset-typescript
   ```

2. Create a build script to convert files automatically

3. Bundle all components into a single file

### Step 3: Create Screenshot (Optional but Recommended)

Create a screenshot image named `screenshot.png`:
- Dimensions: 1200 x 900 pixels
- Take a screenshot of your homepage
- Place it in the root of your theme folder

### Step 4: Compress Theme

1. Select all files in your `loyly-studio` folder
2. Create a ZIP archive named `loyly-studio.zip`
3. **Important**: Make sure the files are in the root of the ZIP, not in a subfolder

### Step 5: Upload to WordPress

1. Log in to your WordPress Admin Dashboard
2. Go to **Appearance → Themes**
3. Click **Add New** → **Upload Theme**
4. Click **Choose File** and select your `loyly-studio.zip`
5. Click **Install Now**
6. Once installed, click **Activate**

---

## Method 2: Manual Installation via FTP

1. Connect to your server via FTP
2. Navigate to `/wp-content/themes/`
3. Create a new folder named `loyly-studio`
4. Upload all your theme files to this folder
5. Go to WordPress Admin → **Appearance → Themes**
6. Find "Löyly Studio" and click **Activate**

---

## Post-Installation Configuration

### 1. Update Image Paths

Your hero carousel uses custom images. Update these in `/components/Hero.js`:

```javascript
// Replace the image URLs with your WordPress media library URLs
const images = [
  "/wp-content/uploads/2024/your-image-1.jpg",
  "/wp-content/uploads/2024/your-image-2.jpg",
  "/wp-content/uploads/2024/your-image-3.jpg"
];
```

### 2. Configure Navigation Menu

1. Go to **Appearance → Menus**
2. Create a new menu called "Primary Menu"
3. Add pages/links matching your navigation: Home, About, Member, Contact, Blog, Gallery
4. Assign to "Primary Menu" location

### 3. Set Up Logo

1. Go to **Appearance → Customize**
2. Click **Site Identity**
3. Upload your Löyly Studio logo
4. Save changes

---

## Troubleshooting

### Theme doesn't appear in WordPress
- Check that `style.css` has the proper WordPress theme header
- Ensure all required files are present (style.css, index.php, functions.php)
- Check file permissions (should be 644 for files, 755 for directories)

### React components not loading
- Open browser console (F12) and check for JavaScript errors
- Verify that `App.js` is loading correctly
- Check that all import paths use `.js` extensions
- Ensure Import Maps are supported by your browser (use Chrome/Edge/Firefox latest)

### Styling issues
- Clear WordPress cache (if using a caching plugin)
- Clear browser cache
- Check that `styles/globals.css` is loading
- Verify Quicksand font is loading from Google Fonts

### Images not displaying
- Upload images to WordPress Media Library
- Update image paths in your components
- Check that image URLs are correct and accessible

---

## Browser Compatibility

This theme uses modern JavaScript features and requires:
- Chrome 89+
- Firefox 108+
- Safari 16.4+
- Edge 89+

For older browser support, you would need to add polyfills or use a build tool to transpile the code.

---

## Need Help?

If you encounter issues:
1. Check WordPress debug log (enable `WP_DEBUG` in wp-config.php)
2. Check browser console for JavaScript errors
3. Verify all component files are converted to `.js` and have proper imports
4. Ensure your hosting supports modern PHP (7.4+)

---

## File Checklist

Before uploading, ensure you have:
- [ ] `style.css` with WordPress theme header
- [ ] `functions.php` for enqueuing scripts
- [ ] `index.php` main template
- [ ] `header.php` HTML head section
- [ ] `footer.php` closing HTML tags
- [ ] `App.js` converted from TypeScript
- [ ] All components in `/components/` as `.js` files
- [ ] `/styles/globals.css` stylesheet
- [ ] `/inc/template-tags.php` helper functions
- [ ] `/inc/customizer.php` customizer settings
- [ ] `screenshot.png` (optional but recommended)

---

## Quick Start for Developers

If you're comfortable with the command line and Node.js, here's the fastest approach:

```bash
# 1. Install dependencies
npm install

# 2. Build the theme (if you have a build script)
npm run build

# 3. Copy WordPress files
cp -r wordpress-theme/* build/

# 4. Create ZIP
cd build && zip -r loyly-studio.zip . && cd ..

# 5. Upload to WordPress
# Use the ZIP file in WordPress Admin → Themes → Add New → Upload
```

This assumes you have a build process set up. If not, follow Method 1 above for manual conversion.
