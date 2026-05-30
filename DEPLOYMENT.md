# Deployment Guide for cPanel

## Prerequisites
- cPanel with Node.js support (version 18 or higher)
- SSH access to your hosting account
- Domain/subdomain configured in cPanel

## Step 1: Prepare Your Project

### 1.1 Create production environment file
Create `.env.production` file with your production SMTP settings:

```env
SMTP_HOST=smtp.zoho.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@creatxsoftware.com
SMTP_PASSWORD=your_password_here
SMTP_FROM=info@creatxsoftware.com
```

### 1.2 Build the project locally (optional, to test)
```bash
npm run build
```

## Step 2: Upload Files to cPanel

### Option A: Using File Manager
1. Compress your project (exclude node_modules, .next, .git folders)
2. Upload the zip file to your domain's directory (usually `public_html` or a subdomain folder)
3. Extract the zip file

### Option B: Using Git (Recommended)
1. Push your code to GitHub/GitLab
2. Clone the repository on your server via SSH:
```bash
cd ~/public_html/your-domain
git clone https://github.com/yourusername/Streat-Motor-Tyres.git .
```

## Step 3: Configure Node.js Application in cPanel

1. **Login to cPanel** → Find "Setup Node.js App" or "Node.js Selector"

2. **Create Node.js Application:**
   - **Node.js version:** 18.x or higher
   - **Application mode:** Production
   - **Application root:** Path to your uploaded files (e.g., `public_html/streatmotortyres`)
   - **Application URL:** Your domain (e.g., streatmotortyres.co.uk)
   - **Application startup file:** `server.js` (we'll create this)
   - **Passenger log file:** Leave default

3. Click **Create**

## Step 4: Create Server File

Create `server.js` in your project root:

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(\`> Ready on http://\${hostname}:\${port}\`);
  });
});
```

## Step 5: Install Dependencies via SSH

Connect via SSH and run:

```bash
cd ~/public_html/your-domain
npm install --production
npm run build
```

## Step 6: Set Environment Variables in cPanel

In the Node.js App settings, add environment variables:
- `SMTP_HOST` = smtp.zoho.eu
- `SMTP_PORT` = 465
- `SMTP_SECURE` = true
- `SMTP_USER` = info@creatxsoftware.com
- `SMTP_PASSWORD` = your_password
- `SMTP_FROM` = info@creatxsoftware.com
- `NODE_ENV` = production

## Step 7: Start the Application

1. In cPanel Node.js App manager, click **Start App** or **Restart**
2. Your application should now be running!

## Step 8: Configure .htaccess (if needed)

If using a subdomain or need URL rewrites, create/edit `.htaccess`:

```apache
# Prevent directory listing
Options -Indexes

# Redirect all traffic to Node.js app
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
</IfModule>
```

## Troubleshooting

### Application won't start
- Check Node.js version is 18+
- Verify all environment variables are set
- Check error logs in cPanel

### Emails not sending
- Verify SMTP credentials
- Check that port 465 is not blocked by hosting
- Try port 587 with SMTP_SECURE=false

### 404 errors
- Ensure build was successful
- Check .htaccess configuration
- Verify application root path

### Images not loading
- Check file permissions (755 for folders, 644 for files)
- Verify paths are correct
- Ensure WebP images are uploaded

## Alternative: Using Vercel (Recommended for Next.js)

If your cPanel hosting doesn't support Node.js well, consider Vercel:

1. Push your code to GitHub
2. Import project on Vercel (vercel.com)
3. Add environment variables
4. Deploy automatically

Vercel is specifically built for Next.js and handles everything automatically.

## Updates and Maintenance

To update your site:
1. Make changes locally
2. Test thoroughly
3. Push to Git repository
4. Pull changes on server: \`git pull\`
5. Rebuild: \`npm run build\`
6. Restart app in cPanel Node.js manager