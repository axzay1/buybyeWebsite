# Deployment Guide for buybye.in

This guide will help you deploy the Buybye website to your custom domain **buybye.in**.

## Prerequisites

- Domain name: **buybye.in** (already purchased)
- Access to domain DNS settings
- GitHub account with this repository

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

GitHub Pages is the easiest and free way to host your static website.

#### Steps:

1. **Enable GitHub Pages**
   - Go to your repository on GitHub: `https://github.com/axzay1/buybyeWebsite`
   - Click on **Settings**
   - Scroll down to **Pages** in the left sidebar
   - Under **Source**, select the branch you want to deploy (e.g., `main` or `master`)
   - Click **Save**

2. **Configure Custom Domain**
   - In the same GitHub Pages settings, under **Custom domain**, enter: `buybye.in`
   - Click **Save**
   - Check **Enforce HTTPS** (recommended for security)

3. **Update DNS Settings**
   - Log in to your domain registrar (where you bought buybye.in)
   - Go to DNS settings for buybye.in
   - Add the following DNS records:

   **For apex domain (buybye.in):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

   **For www subdomain (optional):**
   ```
   Type: CNAME
   Name: www
   Value: axzay1.github.io
   ```

4. **Verify DNS Propagation**
   - DNS changes can take up to 24-48 hours to propagate
   - You can check the status at: https://dnschecker.org/
   - Enter `buybye.in` and check if A records point to GitHub's IPs

5. **Test Your Website**
   - After DNS propagation, visit `https://buybye.in`
   - Your website should be live!

---

### Option 2: Netlify (Alternative - Free with Additional Features)

Netlify offers easy deployment with automatic HTTPS and continuous deployment.

#### Steps:

1. **Create Netlify Account**
   - Go to https://www.netlify.com/
   - Sign up using your GitHub account

2. **Deploy from GitHub**
   - Click **Add new site** → **Import an existing project**
   - Choose **GitHub** and authorize Netlify
   - Select your repository: `axzay1/buybyeWebsite`
   - Configure build settings (leave empty for static site)
   - Click **Deploy site**

3. **Configure Custom Domain**
   - Go to **Site settings** → **Domain management**
   - Click **Add custom domain**
   - Enter: `buybye.in`
   - Click **Verify**

4. **Update DNS Settings**
   - Netlify will provide you with DNS records to add
   - Log in to your domain registrar
   - Add the DNS records provided by Netlify (usually A and CNAME records)

5. **Enable HTTPS**
   - Netlify automatically provisions SSL certificate
   - Enable HTTPS in domain settings

---

### Option 3: Vercel (Alternative - Free with Excellent Performance)

#### Steps:

1. **Create Vercel Account**
   - Go to https://vercel.com/
   - Sign up using your GitHub account

2. **Import Project**
   - Click **Add New** → **Project**
   - Import your GitHub repository: `axzay1/buybyeWebsite`
   - Click **Deploy**

3. **Add Custom Domain**
   - Go to project **Settings** → **Domains**
   - Add `buybye.in`
   - Vercel will provide DNS records

4. **Update DNS Settings**
   - Add the provided DNS records to your domain registrar

---

## Post-Deployment Checklist

- [ ] Website loads at https://buybye.in
- [ ] SSL certificate is active (padlock icon in browser)
- [ ] All images load correctly
- [ ] Carousel transitions work smoothly
- [ ] Logo animation works (stays centered and scales down on slides 2 and 3)
- [ ] Contact button copies email address
- [ ] Website is responsive on mobile devices
- [ ] Google Font "Londrina Shadow" loads for logo text

## Troubleshooting

### Website Not Loading
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct using `nslookup buybye.in` or https://dnschecker.org/

### Images Not Loading
- Check that all images are committed to the repository
- Ensure image paths are relative (e.g., `images/home.png`)
- Check browser console for 404 errors

### HTTPS Not Working
- Enable "Enforce HTTPS" in GitHub Pages settings
- For Netlify/Vercel, SSL is automatic after DNS verification

### Font Not Loading
- Verify Google Fonts link in `index.html`
- Check browser console for font loading errors
- Some browsers may block external fonts - check CSP headers

## Maintenance

- **Updating Content**: Make changes to your repository and push to GitHub. Changes will auto-deploy.
- **Monitoring**: Use Google Analytics or similar tools to track visitors
- **Backup**: Your GitHub repository serves as your backup

## Support

If you need help with deployment:
- GitHub Pages Documentation: https://docs.github.com/en/pages
- Netlify Documentation: https://docs.netlify.com/
- Vercel Documentation: https://vercel.com/docs

---

**Your website is ready to go live! 🎉**
