# Deployment Guide - Tasker

This guide covers all deployment options for the Tasker project.

## 🚀 Quick Deploy Options

### 1. GitHub Pages (Recommended for Demo)

The project is already configured for GitHub Pages deployment with automatic CI/CD.

**Steps:**
1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push to main branch

**Live URL:** `https://thecodedsurveyor.github.io/Tasker/`

### 2. Vercel (Recommended for Production)

Vercel provides the best performance and features for React applications.

**Steps:**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration
4. Get automatic HTTPS, CDN, and preview deployments

**Benefits:**
- Automatic deployments on git push
- Preview deployments for pull requests
- Global CDN
- Automatic HTTPS
- Custom domains
- Environment variables

### 3. Netlify

Netlify is another excellent option for static site hosting.

**Steps:**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure redirects for SPA routing

**Redirects Configuration:**
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 4. Firebase Hosting

Firebase provides Google's infrastructure for hosting.

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## 🔧 Configuration Files

### Vite Configuration (`vite.config.js`)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Tasker/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
        },
      },
    },
  },
})
```

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - name: Install dependencies
      run: npm ci
    - name: Build
      run: npm run build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🌐 SPA Routing Configuration

### For GitHub Pages

The project includes SPA routing scripts in both `index.html` and `404.html` to handle client-side routing properly.

### For Other Platforms

Add a redirect rule to serve `index.html` for all routes:

**Netlify (`_redirects`):**
```
/*    /index.html   200
```

**Vercel (`vercel.json`):**
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Firebase (`firebase.json`):**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## 🔒 Environment Variables

### Development
Create a `.env.local` file for local development:
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Tasker
```

### Production
Set environment variables in your hosting platform:

**Vercel:**
- Go to project settings → Environment Variables
- Add variables like `VITE_API_URL`, `VITE_APP_NAME`

**Netlify:**
- Go to site settings → Environment variables
- Add your environment variables

**GitHub Pages:**
- Go to repository settings → Secrets and variables → Actions
- Add repository secrets for sensitive data

## 📊 Performance Optimization

### Build Optimization

The project is configured with:
- Code splitting for vendor libraries
- Tree shaking for unused code
- Optimized asset loading
- Gzip compression (handled by hosting platform)

### Bundle Analysis

To analyze your bundle:
```bash
npm install --save-dev vite-bundle-analyzer
```

Add to `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'vite-bundle-analyzer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
})
```

## 🔍 Monitoring and Analytics

### Google Analytics

Add Google Analytics to your `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

Consider adding error tracking services:
- Sentry
- LogRocket
- Bugsnag

## 🚨 Troubleshooting

### Common Issues

1. **404 Errors on Refresh**
   - Ensure SPA routing is properly configured
   - Check redirect rules in hosting platform

2. **Build Failures**
   - Check Node.js version (requires 16+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

3. **Performance Issues**
   - Analyze bundle size
   - Optimize images
   - Enable compression

4. **Environment Variables Not Working**
   - Ensure variables start with `VITE_`
   - Check hosting platform configuration
   - Rebuild after adding variables

### Debug Commands

```bash
# Check build output
npm run build

# Preview production build
npm run preview

# Analyze bundle
npm run analyze

# Check for linting issues
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📈 Deployment Checklist

Before deploying to production:

- [ ] All tests pass
- [ ] Build completes successfully
- [ ] Environment variables are set
- [ ] SPA routing is configured
- [ ] Analytics are added (if needed)
- [ ] Error tracking is set up
- [ ] Performance is optimized
- [ ] SEO meta tags are correct
- [ ] Favicon and app icons are set
- [ ] Cross-browser testing is done

## 🔄 Continuous Deployment

The project is set up for continuous deployment:

1. **Push to main branch** triggers automatic build
2. **Pull requests** create preview deployments
3. **Successful builds** are automatically deployed
4. **Failed builds** are reported via email/notifications

## 📞 Support

For deployment issues:
- Check the hosting platform's documentation
- Review the troubleshooting section above
- Create an issue in the GitHub repository
- Contact the development team

---

**Last Updated:** January 2025  
**Version:** 1.0.0 