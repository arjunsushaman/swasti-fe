# Deployment Guide: GoDaddy Domain + Vercel Hosting

## Overview

This guide walks you through deploying the Swasti Lifecare website using:
- **Domain Registrar:** GoDaddy (swastilifecare.in)
- **Hosting Platform:** Vercel (Next.js optimized, free tier)

**Benefits of This Setup:**
- ✅ Free SSL certificates (automatic renewal)
- ✅ Global CDN (70+ edge locations worldwide)
- ✅ Automatic image optimization (WebP/AVIF)
- ✅ Zero-config deployment
- ✅ Excellent Core Web Vitals scores
- ✅ Built-in analytics and performance monitoring
- ✅ Automatic scaling
- ✅ GitHub integration (automatic deployments)

---

## Prerequisites

Before you begin, ensure you have:
- [ ] GoDaddy account with swastilifecare.in registered
- [ ] GitHub account with repository access
- [ ] Access to GoDaddy DNS management
- [ ] Basic understanding of DNS records

**Estimated Time:** 1-2 hours + DNS propagation (up to 24 hours, usually 5-10 minutes)

---

## Step-by-Step Deployment

### Phase 1: Prepare Your Repository

**1. Ensure code is pushed to GitHub:**
```bash
git status
git add .
git commit -m "Prepare for deployment"
git push origin main
```

**2. Verify build works locally:**
```bash
npm run build
npm run start
```

**3. Check environment variables:**
Create `.env.local` for local testing (not committed to Git):
```
NEXT_PUBLIC_SITE_URL=https://swastilifecare.in
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

### Phase 2: Vercel Setup

**1. Sign Up / Log In to Vercel:**
- Go to https://vercel.com
- Sign up with GitHub (recommended)
- Authorize Vercel to access your repositories

**2. Import Your Project:**
- Click "Add New Project"
- Select your GitHub repository (swasti-ui/frontend)
- Click "Import"

**3. Configure Project Settings:**

**Framework Preset:** Next.js (auto-detected)

**Root Directory:**
- If your Next.js app is in `frontend/frontend/`, set that as root
- Otherwise, leave as default

**Build Command:**
```bash
npm run build
```

**Output Directory:**
```
.next
```

**Install Command:**
```bash
npm install
```

**4. Add Environment Variables:**

Click "Environment Variables" and add:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://swastilifecare.in` | Production |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Production |

**Important Notes:**
- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- `.env.local` only works locally - Vercel variables are for production
- You must redeploy after adding/changing environment variables

**5. Deploy:**
- Click "Deploy"
- Wait 2-5 minutes for build and deployment
- Note your temporary Vercel URL: `https://your-project.vercel.app`

**6. Test Temporary URL:**
- Visit the Vercel URL
- Verify site loads correctly
- Check browser console for errors
- Test all pages

---

### Phase 3: GoDaddy DNS Configuration

**1. Log in to GoDaddy:**
- Go to https://dcc.godaddy.com
- Sign in with your account
- Navigate to "My Products"
- Click "DNS" next to swastilifecare.in

**2. Add A Record (for root domain):**

Click "Add" and configure:
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600 (1 hour)
```

**What this does:** Points swastilifecare.in to Vercel's IP

**3. Add CNAME Record (for www subdomain):**

Click "Add" and configure:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (1 hour)
```

**What this does:** Points www.swastilifecare.in to Vercel

**4. Remove Conflicting Records:**

**Check for and remove:**
- Any existing A record for @ (except the one you just added)
- Any existing CNAME for www (except the one you just added)
- Any AAAA records (IPv6) for @ or www
- Parked domain forwarding

**Important:** Keep these records:
- MX records (email)
- TXT records (verification, SPF, DKIM)
- NS records (nameservers)

**5. Save Changes:**
- Click "Save"
- Wait 5-10 minutes for DNS propagation
- Check propagation: https://dnschecker.org

---

### Phase 4: Vercel Domain Configuration

**1. Go to Vercel Dashboard:**
- Project → Settings → Domains

**2. Add Root Domain:**
- Enter: `swastilifecare.in`
- Click "Add"
- Vercel will detect your DNS configuration
- Wait for verification (may take a few minutes)

**3. Add WWW Subdomain:**
- Enter: `www.swastilifecare.in`
- Click "Add"
- Vercel will detect your CNAME record
- Wait for verification

**4. Configure Redirects:**

**Option A: Redirect www → non-www (Recommended)**
- Primary: swastilifecare.in
- Redirect: www.swastilifecare.in → swastilifecare.in

**Option B: Redirect non-www → www**
- Primary: www.swastilifecare.in
- Redirect: swastilifecare.in → www.swastilifecare.in

**How to set:**
Vercel automatically handles this. The first domain you add becomes primary.

**5. Wait for SSL Certificate:**
- Vercel automatically provisions SSL (Let's Encrypt)
- Takes 5-10 minutes
- Status shows in Domains section
- Check for green "Valid Configuration" badge

---

### Phase 5: Verification & Testing

**1. Check DNS Propagation:**

Use https://dnschecker.org:
- Enter: swastilifecare.in
- Type: A
- Check: Should show 76.76.21.21 globally

- Enter: www.swastilifecare.in
- Type: CNAME
- Check: Should show cname.vercel-dns.com globally

**2. Test Domain:**

**Root domain:**
```
https://swastilifecare.in
```
✅ Should load with HTTPS
✅ Should show padlock icon
✅ Should load quickly

**WWW subdomain:**
```
https://www.swastilifecare.in
```
✅ Should redirect to non-www (or vice versa)
✅ Should load with HTTPS

**3. Test All Pages:**
- [ ] Homepage: https://swastilifecare.in
- [ ] Doctors: https://swastilifecare.in/doctors
- [ ] Booking: https://swastilifecare.in/booking
- [ ] Homecare: https://swastilifecare.in/homecare
- [ ] Contact: https://swastilifecare.in/contact

**4. Check SEO Elements:**
- [ ] Sitemap: https://swastilifecare.in/sitemap.xml
- [ ] Robots.txt: https://swastilifecare.in/robots.txt
- [ ] Favicon loads
- [ ] OG image in page source
- [ ] Meta tags in page source

**5. Browser Testing:**
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (iOS mobile)

**6. Performance Testing:**

Run Lighthouse audit:
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Desktop"
4. Click "Analyze page load"
5. Target scores: Performance 90+, SEO 100

**7. Check Analytics:**
- [ ] Google Analytics tracking works
- [ ] Vercel Analytics enabled
- [ ] Speed Insights data collecting

---

### Phase 6: Google Search Console Setup

**1. Create Search Console Property:**
- Go to https://search.google.com/search-console
- Click "Add Property"
- Select "Domain" property type
- Enter: swastilifecare.in

**2. Verify Domain (DNS Method - Recommended):**

Google will provide a TXT record:
```
google-site-verification=abc123xyz...
```

**3. Add TXT Record in GoDaddy:**
- Go to GoDaddy DNS Management
- Click "Add"
- Configure:
  ```
  Type: TXT
  Name: @
  Value: google-site-verification=abc123xyz...
  TTL: 3600
  ```
- Save

**4. Verify in Google:**
- Wait 5-10 minutes
- Click "Verify" in Search Console
- If fails, wait 24 hours and try again

**5. Submit Sitemap:**
- In Search Console, go to "Sitemaps"
- Enter: `https://swastilifecare.in/sitemap.xml`
- Click "Submit"
- Check status (should be "Success" within a few hours)

**Alternative: Meta Tag Verification**

If DNS method doesn't work:
1. Get meta tag from Search Console
2. Add to `app/layout.tsx` metadata:
   ```typescript
   verification: {
     google: 'YOUR_VERIFICATION_CODE_HERE',
   },
   ```
3. Redeploy
4. Click "Verify" in Search Console

---

### Phase 7: Post-Deployment Optimization

**1. Enable Vercel Speed Insights:**
Already configured via `@vercel/speed-insights` package.

**2. Enable Vercel Analytics:**
Already configured via `@vercel/analytics` package.

**3. Configure Deployment Protection (Optional):**
- Vercel Dashboard → Settings → Deployment Protection
- Enable password protection for preview deployments
- Keep production public

**4. Set Up GitHub Integration:**
- Automatic deployments on push to main branch
- Preview deployments for pull requests
- Configure in Vercel → Settings → Git

**5. Configure Custom Domains (if needed):**
- Add additional domains (e.g., alternate spellings)
- Set up redirects
- Managed in Vercel → Domains

---

## Troubleshooting Guide

### Issue 1: Domain Not Connecting

**Symptoms:**
- "This site can't be reached" error
- DNS_PROBE_FINISHED_NXDOMAIN error

**Solutions:**
1. **Check DNS Records:**
   - Verify A record: @ → 76.76.21.21
   - Verify CNAME: www → cname.vercel-dns.com
   - Check for typos

2. **Wait for Propagation:**
   - DNS changes take 5-10 minutes (up to 24 hours)
   - Check progress: https://dnschecker.org
   - Try incognito mode / clear browser cache

3. **Check GoDaddy Nameservers:**
   - Ensure using GoDaddy's default nameservers
   - If using custom nameservers, update DNS there

4. **Verify No Conflicts:**
   - Remove parked domain forwarding
   - Remove duplicate A/CNAME records
   - Check for AAAA records (IPv6)

### Issue 2: SSL Certificate Not Working

**Symptoms:**
- "Not Secure" warning in browser
- SSL certificate error
- Mixed content warnings

**Solutions:**
1. **Wait for Certificate Provisioning:**
   - Vercel takes 5-10 minutes to issue SSL
   - Check status: Vercel → Domains → Certificate

2. **Force Certificate Renewal:**
   - Vercel Dashboard → Domains
   - Click "Refresh" next to domain
   - Wait 5-10 minutes

3. **Check DNS Configuration:**
   - SSL won't provision until DNS is correct
   - Verify both A and CNAME records

4. **Remove and Re-add Domain:**
   - Vercel Dashboard → Domains
   - Remove domain
   - Wait 5 minutes
   - Re-add domain

### Issue 3: Google Search Console Verification Failing

**Symptoms:**
- Verification fails
- "Unable to verify ownership"

**Solutions:**
1. **DNS Method:**
   - Ensure TXT record added correctly in GoDaddy
   - No typos in verification code
   - Wait 24 hours for DNS propagation
   - Only ONE TXT verification record

2. **Alternative: Meta Tag Method:**
   - Use HTML tag verification instead
   - Add to app/layout.tsx metadata
   - Redeploy
   - Verify

3. **Check Nameservers:**
   - Verify using GoDaddy nameservers
   - If custom, update TXT record there

### Issue 4: Environment Variables Not Working

**Symptoms:**
- Google Analytics not tracking
- Features not working in production
- Undefined environment variables

**Solutions:**
1. **Check Vercel Dashboard:**
   - Settings → Environment Variables
   - Ensure variables added
   - Check spelling (case-sensitive)
   - Verify environment (Production, Preview, Development)

2. **Redeploy:**
   - Environment variable changes require redeployment
   - Vercel → Deployments → Redeploy

3. **Check Variable Names:**
   - Browser variables: NEXT_PUBLIC_*
   - Server variables: No prefix
   - Match exactly what's in code

4. **Local vs Production:**
   - `.env.local` only for local development
   - Vercel dashboard for production
   - Don't commit `.env.local` to Git

### Issue 5: 404 Errors on Refresh

**Symptoms:**
- Pages work when navigated to
- Direct URL or refresh gives 404

**Solutions:**
1. **Verify Next.js Config:**
   - Check next.config.js
   - Ensure no conflicting rewrites
   - Check app router structure

2. **Check Vercel Build:**
   - Vercel → Deployments → View Build Logs
   - Look for build errors
   - Verify all routes generated

3. **Clear Vercel Cache:**
   - Redeploy with "Clear cache and deploy"

### Issue 6: Slow Loading / Poor Performance

**Symptoms:**
- Slow page loads
- Low Lighthouse scores
- Poor Core Web Vitals

**Solutions:**
1. **Check Vercel Region:**
   - Default: Closest to your location
   - Optimize for global: Use Vercel Edge Network

2. **Optimize Images:**
   - Ensure using Next.js Image component
   - Compress images (< 500KB)
   - Use WebP/AVIF format

3. **Check Bundle Size:**
   - Run `npm run build` locally
   - Look for large bundles
   - Remove unused dependencies

4. **Verify CDN:**
   - Vercel automatically uses CDN
   - Check Response Headers for "x-vercel-cache"

### Issue 7: Redirect Loops

**Symptoms:**
- "Too many redirects" error
- Infinite redirect loop
- Browser says ERR_TOO_MANY_REDIRECTS

**Solutions:**
1. **Check Redirect Configuration:**
   - Vercel → Domains
   - Ensure only one redirect (www → non-www OR non-www → www)
   - Not both!

2. **Remove Conflicting Redirects:**
   - Check next.config.js for rewrites/redirects
   - Check GoDaddy for URL forwarding
   - Choose one redirect method

3. **Clear Browser Cache:**
   - Hard refresh (Ctrl+Shift+R)
   - Clear cookies and cache
   - Try incognito mode

### Issue 8: Images Not Loading

**Symptoms:**
- Broken image icons
- 404 errors for images
- Images work locally but not in production

**Solutions:**
1. **Check File Paths:**
   - Ensure images in public/ folder
   - Use correct paths (/images/file.jpg)
   - Check case sensitivity (Linux is case-sensitive)

2. **Verify Build:**
   - Check Vercel build logs
   - Ensure images committed to Git
   - Check .gitignore isn't excluding images

3. **Check Next.js Image Config:**
   - Verify next.config.js images configuration
   - Check for domain restrictions

### Issue 9: Sitemap Not Accessible

**Symptoms:**
- /sitemap.xml returns 404
- Sitemap not working

**Solutions:**
1. **Check Route File:**
   - Verify app/api/sitemap/route.ts exists
   - Check for build errors

2. **Verify Rewrite:**
   - Check next.config.js rewrites configuration
   - Ensure sitemap rewrite exists

3. **Check Deployment:**
   - View deployment logs
   - Ensure API route built correctly
   - Redeploy if needed

4. **Test Directly:**
   - Try: /api/sitemap
   - Should return XML

### Issue 10: Build Failures

**Symptoms:**
- Deployment fails
- Build errors in Vercel logs

**Common Causes & Solutions:**

**TypeScript Errors:**
```
Solution: Fix type errors or temporarily set:
typescript: {
  ignoreBuildErrors: true,
}
```

**Missing Dependencies:**
```bash
Solution:
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

**Environment Variables:**
```
Solution: Add all required variables in Vercel dashboard
```

**Out of Memory:**
```
Solution: Contact Vercel support to increase memory limit
```

---

## Post-Deployment Checklist

### Immediate (Day 1)
- [ ] Domain loads with HTTPS
- [ ] All pages accessible
- [ ] Redirects work correctly
- [ ] Analytics tracking
- [ ] Sitemap submitted to Google
- [ ] SSL certificate valid
- [ ] No console errors

### Week 1
- [ ] Google Search Console verified
- [ ] Sitemap indexed
- [ ] Google Business Profile created
- [ ] First analytics data available
- [ ] Performance metrics baseline
- [ ] All team members have access

### Month 1
- [ ] Ranking for brand name
- [ ] Traffic data collected
- [ ] Conversion tracking verified
- [ ] Backups configured
- [ ] Monitoring alerts set up
- [ ] Documentation complete

---

## Maintenance & Updates

### Automatic Updates (via Vercel)
- Git push to main branch → Auto-deploy
- Preview deployments for pull requests
- Rollback available in one click

### Manual Updates
1. Make changes locally
2. Test locally: `npm run build && npm run start`
3. Commit and push to GitHub
4. Vercel auto-deploys in 2-5 minutes
5. Verify deployment

### Rollback Procedure
1. Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "•••" → "Promote to Production"
4. Instant rollback (no downtime)

---

## Support Resources

**Vercel Documentation:**
- Next.js on Vercel: https://vercel.com/docs/frameworks/nextjs
- Custom Domains: https://vercel.com/docs/concepts/projects/domains
- Environment Variables: https://vercel.com/docs/concepts/projects/environment-variables

**GoDaddy Support:**
- DNS Management: https://www.godaddy.com/help/dns-management-19161
- DNS Records: https://www.godaddy.com/help/add-an-a-record-19238

**Community Help:**
- Vercel Community: https://github.com/vercel/vercel/discussions
- Next.js Discord: https://nextjs.org/discord

**Direct Support:**
- Vercel Support: help@vercel.com (Enterprise plans)
- GoDaddy Support: 24/7 phone support

---

## Cost Breakdown

**Domain (GoDaddy):**
- .com domain: $15-20/year
- Privacy protection: $10/year (optional)
- Total: ~$30/year

**Hosting (Vercel):**
- Free tier: $0/month (hobby projects)
- Includes: 100GB bandwidth, 100 builds/day, SSL, CDN
- Pro tier: $20/month (if needed for more features)

**Additional Services:**
- Google Workspace (email): $6/user/month (optional)
- Total monthly: $0-26

**Total Annual Cost:**
- Minimum: $30/year (domain only, Vercel free)
- With Pro: $270/year

---

**Document Version:** 1.0
**Last Updated:** January 2026
**Next Review:** March 2026
