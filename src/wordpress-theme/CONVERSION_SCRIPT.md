# Automated TypeScript to JavaScript Conversion Script

## Quick Conversion Script (Run in Terminal)

If you have Node.js installed, you can use this script to automate the conversion:

```bash
#!/bin/bash

# Navigate to your project root
cd /path/to/your/project

# Create the wordpress-theme/components directory if it doesn't exist
mkdir -p wordpress-theme/components
mkdir -p wordpress-theme/components/ui
mkdir -p wordpress-theme/components/figma
mkdir -p wordpress-theme/styles

# Copy and convert main components
for file in components/*.tsx; do
  filename=$(basename "$file" .tsx)
  # Remove TypeScript syntax and save as .js
  sed -E 's/: [A-Za-z<>|&\[\]{}]+//g; s/interface [A-Za-z]+ \{[^}]+\}//g; s/type [A-Za-z]+ = [^;]+;//g; s/\.tsx/.js/g; s/<[A-Za-z]+>//g' "$file" > "wordpress-theme/components/$filename.js"
done

# Copy UI components
for file in components/ui/*.tsx; do
  filename=$(basename "$file" .tsx)
  sed -E 's/: [A-Za-z<>|&\[\]{}]+//g; s/interface [A-Za-z]+ \{[^}]+\}//g; s/type [A-Za-z]+ = [^;]+;//g; s/\.tsx/.js/g; s/<[A-Za-z]+>//g' "$file" > "wordpress-theme/components/ui/$filename.js"
done

# Copy figma components
for file in components/figma/*.tsx; do
  filename=$(basename "$file" .tsx)
  sed -E 's/: [A-Za-z<>|&\[\]{}]+//g; s/interface [A-Za-z]+ \{[^}]+\}//g; s/type [A-Za-z]+ = [^;]+;//g; s/\.tsx/.js/g; s/<[A-Za-z]+>//g' "$file" > "wordpress-theme/components/figma/$filename.js"
done

# Copy styles
cp -r styles/* wordpress-theme/styles/

echo "Conversion complete! Check wordpress-theme/ folder"
```

## Manual Conversion Steps

If the script doesn't work perfectly (TypeScript can be complex), here's what you need to do for each file:

### 1. Remove Interface/Type Definitions

**Before:**
```typescript
interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}
```

**After:**
```javascript
// Remove completely
```

### 2. Remove Type Annotations from Function Parameters

**Before:**
```typescript
export function Header({ currentPage, onNavigate }: HeaderProps) {
```

**After:**
```javascript
export function Header({ currentPage, onNavigate }) {
```

### 3. Remove Type Annotations from Variables

**Before:**
```typescript
const [current, setCurrent] = useState<number>(0);
const [api, setApi] = useState<CarouselApi>();
```

**After:**
```javascript
const [current, setCurrent] = useState(0);
const [api, setApi] = useState();
```

### 4. Update Import Statements

**Before:**
```typescript
import { Header } from "./components/Header";
import type { CarouselApi } from "./ui/carousel";
```

**After:**
```javascript
import { Header } from "./components/Header.js";
// Remove 'type' imports completely
```

### 5. Remove Generic Types

**Before:**
```typescript
Array<string>
Promise<void>
React.FC<Props>
```

**After:**
```javascript
// Just remove the generic part
Array
Promise
```

## Files That Need Conversion

### Main Components (Priority 1 - Required)
- [x] App.tsx → App.js (Already done)
- [x] Header.tsx → Header.js (Already done)
- [x] Hero.tsx → Hero.js (Already done)
- [x] Benefits.tsx → Benefits.js (Already done)
- [x] WhatWeAreAbout.tsx → WhatWeAreAbout.js (Already done)
- [x] Footer.tsx → Footer.js (Already done)
- [ ] Contact.tsx → Contact.js
- [ ] Services.tsx → Services.js
- [ ] Pricing.tsx → Pricing.js
- [ ] Rituals.tsx → Rituals.js
- [ ] SaunaExperience.tsx → SaunaExperience.js

### Page Components (Priority 2)
- [ ] About.tsx → About.js
- [ ] Blog.tsx → Blog.js
- [ ] Gallery.tsx → Gallery.js
- [ ] ContactPage.tsx → ContactPage.js
- [ ] MemberPage.tsx → MemberPage.js
- [ ] FloatingSocial.tsx → FloatingSocial.js
- [ ] FinnishLegacy.tsx → FinnishLegacy.js

### UI Components (Priority 3 - Can copy as-is initially)
All files in `/components/ui/` - These shadcn components may work without conversion, but you should:
1. Change .tsx to .js extension
2. Remove type imports
3. Keep the rest mostly the same

### Figma Components (Priority 4)
- [ ] ImageWithFallback.tsx → ImageWithFallback.js

## Quick Test After Conversion

1. Open any converted .js file
2. Search for these TypeScript patterns (should find ZERO):
   - `interface `
   - `type `
   - `: string`
   - `: number`
   - `: boolean`
   - `<string>`
   - `<number>`
   - `.tsx"`

3. All imports should end with `.js`:
   - ✅ `from "./Header.js"`
   - ❌ `from "./Header"`
   - ❌ `from "./Header.tsx"`

## After Conversion Checklist

- [ ] All .tsx files converted to .js
- [ ] All type annotations removed
- [ ] All import paths updated to .js
- [ ] styles/globals.css copied to wordpress-theme/styles/
- [ ] All custom images/assets copied if needed
- [ ] Screenshot.png created (1200x900)
- [ ] Ready to ZIP and upload!
