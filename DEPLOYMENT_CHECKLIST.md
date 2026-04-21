# Deployment Checklist

Complete checklist for deploying to GitHub Pages.

## Pre-Deployment

### Testing

- [ ] Run `npm run build` successfully
- [ ] No build errors or warnings
- [ ] Run `npm run preview` and test locally
- [ ] Test all pages load correctly
- [ ] Test navigation works
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test form submissions work
- [ ] Test external links are valid

### Code Quality

- [ ] No console errors
- [ ] No console warnings (warnings are acceptable)
- [ ] TypeScript types check: `tsc --noEmit`
- [ ] No unused imports or variables
- [ ] All links use absolute paths for GitHub Pages
- [ ] Images are optimized
- [ ] CSS is minified in production
- [ ] No hardcoded credentials or secrets

### SEO & Metadata

- [ ] All pages have proper titles
- [ ] All pages have meta descriptions
- [ ] All pages have canonical URLs
- [ ] Open Graph tags are set correctly
- [ ] Twitter cards are configured
- [ ] robots.txt is present
- [ ] sitemap-index.xml is generated
- [ ] Structured data is valid (test with Google's Rich Results Test)

### Accessibility

- [ ] Run Lighthouse accessibility audit (target: 90+)
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Check color contrast
- [ ] Verify `lang` attribute on `<html>`
- [ ] Check ACCESSIBILITY_CHECKLIST.md compliance

### Performance

- [ ] Lighthouse Performance score (target: 90+)
- [ ] Lighthouse Best Practices score (target: 90+)
- [ ] Page load time under 3 seconds
- [ ] Core Web Vitals are good
- [ ] Images are lazy-loaded where appropriate
- [ ] CSS is critical path optimized

## Configuration

### GitHub Settings

- [ ] Repository is public
- [ ] "Pages" is enabled in Settings
- [ ] Source is set to "Deploy from a branch"
- [ ] Branch is set to `main` (or your deploy branch)
- [ ] Directory is set to `/ (root)`
- [ ] Custom domain is configured (if using one)
- [ ] HTTPS is enabled

### astro.config.mjs

```javascript
export default defineConfig({
  site: 'https://olanrewajufarooq.com',
  integrations: [react()],
  output: 'static', // or 'hybrid' if using SSR
});
```

### DNS Configuration (if using custom domain)

- [ ] DNS records point to GitHub Pages
- [ ] CNAME file exists in `public/` folder
- [ ] SSL certificate is valid

## Deployment Steps

1. Commit all changes: `git add . && git commit -m "Deploy updates"`
2. Push to main: `git push origin main`
3. GitHub Actions automatically builds and deploys
4. Check deployment status in repository Settings > Actions
5. Wait for green checkmark
6. Visit website to verify deployment

## Post-Deployment

### Verification

- [ ] Website is live and accessible
- [ ] All pages load correctly
- [ ] Links work (internal and external)
- [ ] Images load
- [ ] No 404 errors (check console)
- [ ] Responsive design works
- [ ] Forms work
- [ ] Mobile experience is good

### Monitoring

- [ ] Set up Google Analytics (if needed)
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Lighthouse scores
- [ ] Check GitHub Pages build logs regularly
- [ ] Monitor for broken links

### Updates

- [ ] Set up regular content updates
- [ ] Plan for security updates
- [ ] Review dependencies monthly
- [ ] Update Astro when major versions release
- [ ] Keep node packages updated

## Troubleshooting

### Build fails

1. Check build logs: Settings > Actions > Latest Workflow Run
2. Run `npm run build` locally to debug
3. Check for TypeScript errors
4. Verify all imports are correct
5. Check for environmental variables

### Site doesn't update after push

1. Check GitHub Actions have run
2. Clear browser cache (Ctrl+Shift+Delete)
3. Hard refresh (Ctrl+Shift+R)
4. Check deployment branch is correct
5. Verify build status is successful

### 404 errors

1. Check file exists in `src/pages/`
2. Verify file is named correctly
3. Check build output includes the page
4. Verify routing is correct for dynamic routes

### Styling issues

1. Check CSS modules are imported
2. Verify CSS custom properties are defined
3. Check for CSS conflicts
4. Test in different browsers
5. Check mobile viewport meta tag exists

## GitHub Actions Workflow

The deployment is automated via GitHub Actions. Workflow file should be at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Rollback

If issues occur after deployment:

1. Revert last commit: `git revert HEAD`
2. Push to main: `git push origin main`
3. GitHub Actions will redeploy previous version
4. Wait for green checkmark
5. Verify website is working

## Security

- [ ] No credentials in repository
- [ ] .env files are in .gitignore
- [ ] No API keys in public code
- [ ] HTTPS is enforced
- [ ] Sensitive data is not in git history
- [ ] Dependencies are from trusted sources
