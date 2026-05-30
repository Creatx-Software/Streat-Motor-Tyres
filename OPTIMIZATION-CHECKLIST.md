# Complete Optimization Checklist

Run these steps in order for maximum performance improvement.

## ✅ Step 1: Optimize Images (CRITICAL)

Run the image optimization script:

```bash
node optimize-large-images.js
```

**Expected Result:**
- Images reduced from ~4.2 MB to ~2 MB
- 50% faster initial load

---

## ✅ Step 2: Next.js Configuration (DONE)

The `next.config.js` file has been created with optimizations:
- Removes console.logs in production
- Optimizes library imports (framer-motion, lucide-react)

**No action needed - already configured!**

---

## ✅ Step 3: Rebuild with Optimizations

```bash
npm run build
```

This will:
- Apply next.config.js optimizations
- Tree-shake unused code
- Minify JavaScript
- Optimize CSS

---

## ✅ Step 4: Deploy to Server

Upload these files to your cPanel:

**Essential files:**
```
.next/          (entire folder)
node_modules/   (or run npm install on server)
public/assets/  (optimized images)
app/
src/
lib/
package.json
package-lock.json
next.config.js  (NEW - important!)
server.js
.htaccess
tsconfig.json
tailwind.config.ts
postcss.config.mjs
```

**Create on server:**
```
.env.production (with SMTP settings)
```

---

## 📊 Expected Performance Improvements

| Metric | Before | After All Optimizations |
|--------|--------|-------------------------|
| **Total Size** | 5.2 MB | ~2.5 MB (52% reduction) |
| **JavaScript** | 91.6 KB | ~50 KB (45% reduction) |
| **Images** | 4.2 MB | ~2 MB (52% reduction) |
| **LCP** | 4-6s | 1.5-2.5s |
| **Lighthouse Score** | 60-70 | 85-95 |

---

## 🚀 Quick Deploy Commands

```bash
# 1. Optimize images
node optimize-large-images.js

# 2. Build
npm run build

# 3. Zip for upload (exclude these)
# Compress project excluding: .git, node_modules, .env.local

# 4. On server (via SSH)
cd ~/public_html/your-domain
npm install --production
# Restart Node.js app in cPanel
```

---

## ✨ Additional Quick Wins (Optional)

### Add Lazy Loading to Images

Update these files to add `loading="lazy"` to img tags:

**src/components/ServiceFeatures.tsx:**
```jsx
// Line 70-72
<img
  src="/assets/ServiceBg.webp"
  alt="Service background"
  loading="lazy"  // ADD THIS
  className="..."
/>
```

**src/components/Gallery.tsx:**
```jsx
// Line 80
<img
  src={image}
  alt="Gallery"
  loading="lazy"  // ADD THIS
  className="..."
/>
```

**src/components/ServiceArea.tsx:**
```jsx
// Line 36
<img
  src="/assets/Map.webp"
  alt="M25 Service Area Map"
  loading="lazy"  // ADD THIS
  className="..."
/>
```

**src/components/TyreSizeGuide.tsx:**
```jsx
// Line 68
<img
  src="/assets/Tyre Diagram.webp"
  alt="Tyre Size Markings"
  loading="lazy"  // ADD THIS
  className="..."
/>
```

**Do NOT add to:**
- HeroSection.tsx (hero image needs to load immediately)
- Navbar.tsx (logo needs to load immediately)

---

## 🔍 Testing Your Optimizations

### 1. Test Build Locally
```bash
npm run build
npm start
# Open http://localhost:3000
```

### 2. Check Bundle Size
After build completes, look for output like:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    5 kB         90 kB    <- Should be ~90KB or less
└ ○ /gallery                             8 kB         93 kB
```

### 3. Run Lighthouse
- Open Chrome DevTools (F12)
- Click Lighthouse tab
- Click "Analyze page load"

**Target Scores:**
- Performance: 85+ (90+ is excellent)
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### 4. Check Image Sizes
```bash
# Check optimized sizes
ls -lh public/assets/*.webp
```

Should see sizes like:
- HeroVehicle.webp: ~400-500 KB (was 811 KB)
- ServiceBg.webp: ~350-400 KB (was 682 KB)
- Gallery images: ~80-150 KB each

---

## 🆘 Troubleshooting

### Images Look Blurry?
If quality is too low after optimization:

```bash
# Restore from backups
cd public/assets
mv HeroVehicle.webp.backup HeroVehicle.webp
# (repeat for other images)
```

Then edit `optimize-large-images.js`:
```javascript
quality: 75,  // Instead of 70
```

Re-run: `node optimize-large-images.js`

### Build Fails?
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Site Still Slow?
1. Check if images are actually replaced on server
2. Clear browser cache (Ctrl+Shift+R)
3. Check server compression (gzip/brotli enabled?)
4. Consider using a CDN

---

## 📈 Monitoring Performance

After deployment, monitor these:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Enter your URL
   - Check both Mobile and Desktop scores

2. **Real User Metrics**
   - Average page load time
   - Bounce rate (should decrease)
   - Time to interactive

3. **Server Metrics**
   - CPU usage
   - Memory usage
   - Response times

---

## 🎯 Next Steps After Basic Optimization

Once you've done all the above:

1. **Implement CDN** (Cloudflare, etc.)
2. **Enable HTTP/2** on server
3. **Add service worker** for offline support
4. **Implement code splitting** for routes
5. **Consider server-side rendering** for critical pages

---

## ✅ Final Checklist

Before deploying to production:

- [ ] Run `node optimize-large-images.js`
- [ ] Run `npm run build` successfully
- [ ] Test locally with `npm start`
- [ ] Check Lighthouse scores (85+ performance)
- [ ] Create `.env.production` with SMTP settings
- [ ] Upload all necessary files to server
- [ ] Run `npm install` on server
- [ ] Restart Node.js app in cPanel
- [ ] Test live site
- [ ] Check all images load correctly
- [ ] Test form submission
- [ ] Run final Lighthouse test on live site

---

## 🎉 You're Done!

Your site should now be:
- ✅ 50% smaller
- ✅ 2-3x faster
- ✅ Better Lighthouse scores
- ✅ Better user experience
- ✅ Better SEO rankings
