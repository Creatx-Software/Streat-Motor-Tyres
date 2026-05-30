# Deployment Guide for cPanel WITHOUT Node.js

## ⚠️ Important Limitation
Without Node.js, you **cannot** use Next.js API routes. This means:
- ❌ Email form won't work as-is
- ✅ Static website will work perfectly
- ✅ You can use external form service (Formspree, Web3Forms, etc.)

## Option 1: Static Export (No Email Functionality)

### Step 1: Configure Next.js for Static Export

Edit `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### Step 2: Build Static Site

```bash
npm run build
```

This creates an `out` folder with static HTML/CSS/JS files.

### Step 3: Upload to cPanel

1. **Compress the `out` folder** contents (not the folder itself)
2. **Login to cPanel** → File Manager
3. Navigate to `public_html` (or your domain folder)
4. **Upload and extract** the zip file
5. Your site is now live!

### File Structure on Server:
```
public_html/
  ├── index.html
  ├── _next/
  ├── assets/
  ├── gallery.html
  └── ...
```

---

## Option 2: Static Export + External Form Service (RECOMMENDED)

Keep your static site AND working email form using a third-party service.

### Step A: Configure Next.js (same as Option 1)

Create/edit `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### Step B: Choose a Form Service

#### **Recommended: Web3Forms (Free, No Registration)**

1. Go to https://web3forms.com
2. Get your free access key
3. Update your form component

#### **Alternative: Formspree (Free tier available)**
- https://formspree.io
- Easy setup, handles email sending

### Step C: Update BookingForm Component

Replace the form submission in `src/components/BookingForm.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
        subject: 'New Tyre Enquiry from Website',
        from_name: formData.name,
        email: formData.email,
        message: \`
Name: \${formData.name}
Email: \${formData.email}
Phone: \${formData.phoneNumber}
Location: \${formData.location}
Tyre Size: \${formData.tyreSize}
Issue: \${formData.whatIsWrong}
Vehicle: \${formData.vehicleDetails}
Urgency: \${formData.urgencyLevel}
        \`,
        // This is where the form will be sent
        to: 'tyres@streatmotors.co.uk',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send enquiry');
    }

    alert('Booking request submitted! We will contact you shortly.');

    // Reset form
    setFormData({
      name: '',
      location: '',
      tyreSize: '',
      whatIsWrong: '',
      vehicleDetails: '',
      phoneNumber: '',
      email: '',
      urgencyLevel: ''
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Sorry, there was an error. Please try again or call us directly.');
  }
};
```

### Step D: Build and Deploy

```bash
# Build the static site
npm run build

# The 'out' folder now contains your static site
# Upload to cPanel as described in Step 3 of Option 1
```

---

## Option 3: PHP Contact Form (Traditional Way)

If you prefer PHP (most cPanel supports PHP):

### Step 1: Build Static Site (as in Option 1)

### Step 2: Create PHP Email Handler

Create `send-email.php` on your server:

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = htmlspecialchars($data['name'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$phone = htmlspecialchars($data['phone_number'] ?? '');
$location = htmlspecialchars($data['current_location'] ?? '');
$tyreSize = htmlspecialchars($data['tyre_size'] ?? '');
$issue = htmlspecialchars($data['whats_wrong'] ?? '');
$vehicle = htmlspecialchars($data['vehicle_details'] ?? '');
$urgency = htmlspecialchars($data['urgency_level'] ?? '');

$to = 'tyres@streatmotors.co.uk';
$subject = 'New Tyre Enquiry from ' . $name;
$headers = "From: noreply@streatmotortyres.co.uk\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$message = "
<html>
<body style='font-family: Arial, sans-serif;'>
    <h2>New Tyre Enquiry</h2>
    <table>
        <tr><td><strong>Name:</strong></td><td>$name</td></tr>
        <tr><td><strong>Email:</strong></td><td>$email</td></tr>
        <tr><td><strong>Phone:</strong></td><td>$phone</td></tr>
        <tr><td><strong>Location:</strong></td><td>$location</td></tr>
        <tr><td><strong>Tyre Size:</strong></td><td>$tyreSize</td></tr>
        <tr><td><strong>Issue:</strong></td><td>$issue</td></tr>
        <tr><td><strong>Vehicle:</strong></td><td>$vehicle</td></tr>
        <tr><td><strong>Urgency:</strong></td><td>$urgency</td></tr>
    </table>
</body>
</html>
";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>
```

### Step 3: Update Form to Use PHP

In `src/components/BookingForm.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        current_location: formData.location,
        tyre_size: formData.tyreSize,
        whats_wrong: formData.whatIsWrong,
        vehicle_details: formData.vehicleDetails,
        phone_number: formData.phoneNumber,
        email: formData.email,
        urgency_level: formData.urgencyLevel,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send enquiry');
    }

    alert('Booking request submitted! We will contact you shortly.');

    // Reset form...
  } catch (error) {
    console.error('Error:', error);
    alert('Sorry, there was an error. Please try again.');
  }
};
```

---

## Summary - Which Option to Choose?

| Option | Pros | Cons | Best For |
|--------|------|------|----------|
| **Option 1: Static Only** | Simple, fast | No form emails | Testing/demo sites |
| **Option 2: Web3Forms** | Easy, free, reliable | Third-party dependency | **RECOMMENDED** |
| **Option 3: PHP** | Full control, no external service | Need to maintain PHP code | Traditional hosting |

---

## Quick Deployment Checklist

- [ ] Choose your option (2 is recommended)
- [ ] Create `next.config.js` with `output: 'export'`
- [ ] Update form handling code
- [ ] Run `npm run build`
- [ ] Upload `out` folder contents to cPanel
- [ ] Test the form!

---

## Need Node.js Hosting Instead?

If you want to keep Next.js API routes, consider these alternatives:

1. **Vercel** - Free, built for Next.js (https://vercel.com)
2. **Netlify** - Free tier available
3. **Railway** - Free tier with Node.js support
4. **DigitalOcean App Platform** - $5/month
5. **Shared hosting with Node.js** - Look for "Node.js hosting" providers

All of these support Next.js fully and are easier than cPanel for Node.js apps.