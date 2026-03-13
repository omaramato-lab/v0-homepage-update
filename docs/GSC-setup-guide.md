# Google Search Console Setup Guide
## Omar Amato Portfolio Website

### Step 1: Create Google Search Console Property

1. **Go to Google Search Console**
   - Navigate to: https://search.google.com/search-console
   - Sign in with your Google account

2. **Add Property**
   - Click "Add Property" button
   - Select "URL prefix" property type
   - Enter: `https://omaramato.com`
   - Click "Continue"

### Step 2: Verify Ownership

**Option A: HTML Meta Tag (Recommended)**

1. Google will provide a meta tag like:
   \`\`\`html
   <meta name="google-site-verification" content="your-verification-code" />
   \`\`\`

2. This tag is already added to your Next.js site in `app/layout.tsx`

3. Click "Verify" button in GSC

4. Wait for confirmation (usually instant)

**Option B: DNS Verification**

1. Copy the TXT record provided by Google
2. Add to your domain DNS settings (omaramato.com)
3. Wait for DNS propagation (24-48 hours)
4. Return to GSC and click "Verify"

### Step 3: Submit Sitemap

1. **Navigate to Sitemaps Section**
   - In GSC left sidebar, click "Sitemaps"

2. **Add Sitemap URL**
   - Enter: `https://omaramato.com/sitemap.xml`
   - Click "Submit"

3. **Monitor Status**
   - Check "Last read" date
   - Verify "Discovered URLs" count
   - Monitor for errors

### Step 4: Set Up URL Inspection

1. Go to "URL Inspection" tool
2. Test key pages:
   - `https://omaramato.com/`
   - `https://omaramato.com/fractional-head-of-design.html`
   - `https://omaramato.com/ux-audit.html`
   - `https://omaramato.com/landing-page-design.html`

3. Request indexing for each page

### Step 5: Configure Settings

1. **Set Preferred Domain**
   - Go to Settings
   - Confirm canonical URL: `https://omaramato.com`

2. **International Targeting**
   - Set target country: Italy (primary)
   - Note: Site supports IT and EN languages

3. **Users and Permissions**
   - Add team members if needed
   - Set appropriate permission levels

### Step 6: Enable Email Notifications

1. Go to Settings → Users and permissions
2. Enable notifications for:
   - Critical indexing issues
   - Security issues
   - Manual actions
   - Coverage issues

### Verification Checklist

- ✓ Property verified successfully
- ✓ Sitemap submitted and processing
- ✓ Robots.txt accessible at `/robots.txt`
- ✓ Key pages indexed
- ✓ No security issues detected
- ✓ Email notifications enabled
- ✓ Mobile usability verified

### What to Monitor Weekly

1. **Performance Report**
   - Total clicks from search
   - Total impressions
   - Average CTR
   - Average position

2. **Coverage Report**
   - Valid pages count
   - Excluded pages (check if intentional)
   - Errors (fix immediately)

3. **Core Web Vitals**
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)

4. **Mobile Usability**
   - Mobile-friendly pages
   - Issues to fix

### Keywords to Monitor

**Italian:**
- fractional head of design
- ux designer freelance
- designer prodotti digitali
- ux audit
- landing page design

**English:**
- fractional head of design
- freelance ux designer
- b2b product designer
- ux audit service

### Common Issues and Solutions

**Issue: Sitemap not found**
- Solution: Verify sitemap.xml is accessible at root
- Check: https://omaramato.com/sitemap.xml

**Issue: Pages not indexed**
- Solution: Use URL Inspection tool
- Request indexing manually
- Check robots.txt for blocks

**Issue: Mobile usability errors**
- Solution: Test on Google Mobile-Friendly Test
- Fix viewport issues
- Ensure touch targets are large enough

**Issue: Duplicate content**
- Solution: Check canonical tags
- Verify hreflang tags for IT/EN versions

### Next Steps

After setup:
1. Wait 48 hours for initial data
2. Review first performance report
3. Identify top-performing pages
4. Find opportunities (high impressions, low CTR)
5. Optimize meta descriptions for low CTR pages

### Support Resources

- GSC Help Center: https://support.google.com/webmasters
- GSC Community: https://support.google.com/webmasters/community
- Status Dashboard: https://status.google.com/products

---

**Setup completed?** Proceed to GA4-setup-guide.md
