# Performance Optimization Guide

## Current Issues (from Lighthouse)
- Total network payload: 5,249 KiB (should be under 1,600 KiB)
- Unused JavaScript: 45 KiB
- Largest images:
  - HeroVehicle.webp: 811 KB
  - ServiceBg.webp: 682 KB
  - Tyre Diagram.webp: 526 KB

## Complete Optimization Steps

### Step 0: JavaScript Optimization (Already Done!)

I've created `next.config.js` with optimizations:
- ✅ Remove console.logs in production
- ✅ Optimize framer-motion imports
- ✅ Optimize lucide-react imports

This will automatically reduce JavaScript bundle size.

## Quick Fixes (Choose one or combine)

### Fix 1: Further Compress Large Images (EASIEST)

Run this command to re-compress large images more aggressively:

```bash
node optimize-large-images.js
```

This will:
- Reduce quality from 85% to 70% (minimal visual difference)
- Create backups of originals (*.backup files)
- Target only the largest images
- Expected result: 30-50% additional size reduction

### Fix 2: Add Lazy Loading (FASTEST)

Add `loading="lazy"` to all `<img>` tags that are below the fold:

**Before:**
```jsx
<img src="/assets/ServiceBg.webp" alt="..." />
```

**After:**
```jsx
<img src="/assets/ServiceBg.webp" alt="..." loading="lazy" />
```

Do NOT add to hero images (above the fold), only images that appear after scrolling.

### Fix 3: Use Next.js Image Component (BEST, but requires code changes)

Replace `<img>` tags with Next.js `<Image>` component:

```jsx
import Image from 'next/image';

// Instead of:
<img src="/assets/HeroVehicle.webp" alt="Van" className="w-full" />

// Use:
<Image
  src="/assets/HeroVehicle.webp"
  alt="Van"
  width={3004}
  height={3004}
  className="w-full"
  priority // Only for hero images
/>
```

Benefits:
- Automatic lazy loading
- Automatic responsive images
- Automatic format selection
- Better performance

**Note:** This requires converting ALL img tags in your components.

### Fix 4: Serve Images from CDN (ADVANCED)

Upload images to a CDN like Cloudflare or Vercel:
- Automatic optimization
- Global delivery
- Caching
- Faster load times

## Recommended Approach

**For Immediate Results (Do this now):**

1. Run the compression script:
```bash
node optimize-large-images.js
```

2. Add lazy loading to images manually:

**Files to update:**
- `src/components/ServiceFeatures.tsx` - Add `loading="lazy"` to ServiceBg, Repair, Balancing, Replacement images
- `src/components/Gallery.tsx` - Add `loading="lazy"` to all gallery images
- `src/components/ServiceArea.tsx` - Add `loading="lazy"` to Map and M25 images
- `src/components/TyreSizeGuide.tsx` - Add `loading="lazy"` to Tyre Diagram
- `src/components/BookingForm.tsx` - Add `loading="lazy"` to FormBg

**Keep these WITHOUT lazy loading (they're above the fold):**
- `src/components/HeroSection.tsx` - HeroVehicle (keep as is)
- `src/components/Navbar.tsx` - Logo (keep as is)

3. Rebuild and redeploy:
```bash
npm run build
# Upload to server
```

## Expected Results After Optimization

| Metric | Before | After Fix 1 | After Fix 1+2 |
|--------|--------|-------------|---------------|
| Total Size | 5.2 MB | ~3.5 MB | ~2.8 MB |
| Initial Load | 5.2 MB | 3.5 MB | ~800 KB |
| LCP | Slow | Better | Good |

## Advanced Optimization (Future)

1. **Implement Responsive Images**
   - Serve smaller images on mobile
   - Use `srcset` attribute

2. **Use Modern Formats**
   - Try AVIF format (even better than WebP)
   - Fallback to WebP, then JPEG

3. **Implement Image CDN**
   - Cloudflare Images
   - Vercel Image Optimization
   - imgix or Cloudinary

4. **Code Splitting**
   - Load gallery images only when gallery section is visible
   - Use dynamic imports

## Testing Your Changes

After making optimizations:

1. **Local test:**
```bash
npm run build
npm start
```

2. **Check Lighthouse:**
   - Open DevTools
   - Go to Lighthouse tab
   - Run Performance audit

3. **Target Scores:**
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 90+
   - SEO: 95+

## Quick Command Reference

```bash
# Further compress images
node optimize-large-images.js

# Build for production
npm run build

# Test production build locally
npm start

# Deploy to server
# (upload files as per DEPLOYMENT.md)
```

## If Images Look Bad After Compression

If quality is too low after running the optimization script:

1. Restore from backups:
```bash
cd public/assets
# For each image:
mv HeroVehicle.webp.backup HeroVehicle.webp
```

2. Try medium compression instead (edit optimize-large-images.js):
```javascript
quality: 75,  // Instead of 70
```

3. Re-run the script
