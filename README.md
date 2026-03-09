# KOSMO Gulf Website

This project is a complete static website for **KOSMO GULF TRADING EST.** based on your company profile PDF.

## Project Files

- `index.html` - Main website page
- `styles.css` - Full website styling
- `script.js` - Menu + enquiry email draft logic
- `assets/kosmo-logo.png` - Extracted logo from your profile pages
- `assets/pdf-pages/` - Profile page images used in sections and gallery

## Run Locally

1. Open folder: `C:\Users\lenovo\Desktop\kosmo codex`
2. Double-click `index.html`

## Before Going Live

1. Replace WhatsApp link in `index.html`:
   - Find `https://wa.me/966000000000`
   - Replace with your real number in international format (no `+`, no spaces)
2. Optional: replace or remove external stock images in the **Industry Visuals** section.

## Host on GoDaddy (Shared Hosting / cPanel)

1. In GoDaddy, open your hosting account and click **Manage**.
2. Open **cPanel Admin**.
3. Go to **File Manager** > `public_html`.
4. Delete default GoDaddy placeholder files from `public_html` (if present).
5. Upload all files from this project into `public_html`:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets` folder (entire folder)
6. Confirm final structure in `public_html`:
   - `public_html/index.html`
   - `public_html/styles.css`
   - `public_html/script.js`
   - `public_html/assets/...`
7. Wait 2-10 minutes and open: `https://www.kosmogulf.com`

## Connect Domain (if not already linked)

In GoDaddy DNS for `kosmogulf.com`:

1. **A record** for `@` -> your hosting server IP
2. **CNAME** for `www` -> `@`
3. Save and wait for propagation (can take up to 24 hours)

## SSL (HTTPS)

1. In GoDaddy hosting dashboard, open **SSL/TLS** section.
2. Enable/install SSL certificate for `kosmogulf.com` and `www.kosmogulf.com`.
3. Force HTTPS (if option available).

## Quick Update Workflow

1. Edit files locally.
2. Re-upload changed files via cPanel File Manager.
3. Hard refresh browser (`Ctrl + F5`) to see changes.
