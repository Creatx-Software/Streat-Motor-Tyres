export function getCustomerConfirmationTemplate(): string {
  const currentYear = new Date().getFullYear();

  return `<!doctype html>
<html lang="en" style="margin:0;padding:0;">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Thank You — Streat Motor Tyres</title>
    <style>
      /* Clients that respect <style> will use these; all critical styles are also inline */
      @media (max-width:600px){
        .container{width:100% !important;}
        .px{padding-left:16px !important;padding-right:16px !important;}
        .stack{display:block !important;width:100% !important;}
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#f5f5f7;">
    <!-- Preheader (hidden in most clients) -->
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
      Thank you for your message. We'll get back to you soon.
    </div>

    <!-- Wrapper -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f5f5f7;">
      <tr>
        <td align="center" style="padding:24px;">
          <!-- Card -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="container" style="width:600px;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
            <!-- Header -->
            <tr>
              <td align="center" style="background:#111111;padding:28px 24px;">

              </td>
            </tr>

            <!-- Hero -->
            <tr>
              <td class="px" style="padding:32px 32px 8px 32px;font-family:Arial,Helvetica,sans-serif;color:#111111;">
                <h1 style="margin:0;font-size:24px;line-height:1.3;">Thank you — we'll contact you soon</h1>
              </td>
            </tr>

            <!-- Body copy -->
            <tr>
              <td class="px" style="padding:8px 32px 24px 32px;font-family:Arial,Helvetica,sans-serif;color:#333333;">
                <p style="margin:0 0 12px 0;font-size:16px;line-height:1.6;">
                  Hi,
                </p>
                <p style="margin:0 0 12px 0;font-size:16px;line-height:1.6;">
                  Thanks for getting in touch with <strong>Streat Motor Tyres</strong>.
                  We have received your message. Our team will review it and contact you soon.
                </p>
                <p style="margin:0 0 12px 0;font-size:16px;line-height:1.6;">
                  If your enquiry is urgent, please call us using the number below.
                </p>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td align="center" style="padding:0 32px 28px 32px;">
                <!-- Button -->
                <a href="https://streatmotortyres.co.uk" target="_blank"
                   style="display:inline-block;background:#f7c700;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.2;padding:14px 22px;border-radius:8px;color:#111111;">
                  Visit our website
                </a>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:0 32px;">
                <hr style="border:none;border-top:1px solid #e6e6e6;margin:0;">
              </td>
            </tr>

            <!-- Contact block -->
            <tr>
              <td class="px" style="padding:20px 32px 28px 32px;font-family:Arial,Helvetica,sans-serif;color:#333333;">
                <p style="margin:0 0 6px 0;font-size:14px;line-height:1.6;">
                  <strong>Streat Motor Tyres</strong>
                </p>
                <p style="margin:0 0 6px 0;font-size:14px;line-height:1.6;">
                 2a Linkfield Cor, Redhill RH1 1BB
                </p>
                <p style="margin:0 0 6px 0;font-size:14px;line-height:1.6;">
                  Phone: <a href="tel:+447960902731" style="color:#111111;text-decoration:underline;">07960 902731</a>
                </p>
                <p style="margin:0;font-size:14px;line-height:1.6;">
                  Email: <a href="mailto:tyres@streatmotors.co.uk" style="color:#111111;text-decoration:underline;">tyres@streatmotors.co.uk</a>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background:#111111;color:#aaaaaa;padding:18px 24px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;">
                <p style="margin:0;">
                  You're receiving this email because you contacted Streat Motor Tyres.
                </p>
                <p style="margin:6px 0 0 0;">
                  © ${currentYear} Streat Motor Tyres. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
          <!-- /Card -->
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
