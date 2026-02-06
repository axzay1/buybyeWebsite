# Deployment Guide for buybye.in

This guide will help you deploy the Buybye website to your custom domain **buybye.in** hosted on GoDaddy.

## Prerequisites
- GitHub repository: `axzay1/buybyeWebsite`
- Custom domain: `buybye.in` (registered on GoDaddy)
- GitHub Pages enabled on the repository

## Deployment Steps

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub: https://github.com/axzay1/buybyeWebsite
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select the branch you want to deploy (e.g., `main` or `copilot/air-website-on-domain`)
5. Select the root folder (`/`)
6. Click **Save**

### Step 2: Configure DNS on GoDaddy
You need to configure your DNS settings on GoDaddy to point to GitHub Pages.

#### Option A: Using A Records (Apex Domain - buybye.in)
1. Log in to your GoDaddy account
2. Go to **My Products** > **DNS** for buybye.in
3. Add the following **A Records**:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 600 seconds (or default)
   
   Type: A
   Name: @
   Value: 185.199.109.153
   TTL: 600 seconds (or default)
   
   Type: A
   Name: @
   Value: 185.199.110.153
   TTL: 600 seconds (or default)
   
   Type: A
   Name: @
   Value: 185.199.111.153
   TTL: 600 seconds (or default)
   ```

4. Add a **CNAME Record** for www subdomain (optional but recommended):
   ```
   Type: CNAME
   Name: www
   Value: axzay1.github.io
   TTL: 1 Hour (or default)
   ```

#### Option B: Using CNAME Record (www subdomain)
If you prefer to use www.buybye.in:
```
Type: CNAME
Name: www
Value: axzay1.github.io
TTL: 1 Hour
```

### Step 3: Verify Configuration
1. The CNAME file in this repository contains `buybye.in`
2. The .nojekyll file ensures GitHub Pages serves all files correctly
3. Wait 24-48 hours for DNS propagation (though it usually takes less time)

### Step 4: Enable HTTPS (Recommended)
1. Once DNS is configured and propagated, go back to GitHub Pages settings
2. Check the **Enforce HTTPS** checkbox
3. GitHub will automatically provision an SSL certificate for your domain

## Verification
After DNS propagation, you can verify the setup:

1. **Check DNS propagation**: Use tools like https://dnschecker.org or run:
   ```bash
   nslookup buybye.in
   dig buybye.in
   ```

2. **Test the website**: Visit https://buybye.in in your browser

3. **Check HTTPS**: Ensure the site loads with HTTPS and shows a secure padlock icon

## Troubleshooting

### DNS Not Resolving
- Wait up to 48 hours for DNS propagation
- Clear your browser cache and DNS cache
- Try accessing from a different network or device

### 404 Error
- Ensure GitHub Pages is enabled and the branch is correctly selected
- Verify the CNAME file contains only `buybye.in` (no http:// or trailing slash)
- Check that the branch contains all necessary files (index.html, etc.)

### SSL Certificate Issues
- DNS must be properly configured before GitHub can issue an SSL certificate
- Wait for DNS propagation, then enable "Enforce HTTPS" in GitHub Pages settings
- SSL certificate provisioning can take a few minutes to a few hours

## Important Notes
- The CNAME file must contain only the domain name: `buybye.in`
- Do not include `http://`, `https://`, or `www.`
- The .nojekyll file is empty but tells GitHub Pages not to use Jekyll processing
- DNS changes can take anywhere from a few minutes to 48 hours to propagate worldwide

## Repository Files
The following files have been added for deployment:
- `CNAME` - Contains the custom domain configuration
- `.nojekyll` - Disables Jekyll processing for GitHub Pages

## Contact
For issues or questions, contact: axzay@buybye.in

---

**Deployment Status**: Ready for deployment once GitHub Pages is enabled and DNS is configured
