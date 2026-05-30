interface FormData {
  name: string;
  current_location: string;
  tyre_size: string;
  whats_wrong: string;
  vehicle_details: string;
  phone_number: string;
  email: string;
  urgency_level: string;
}

export function getAdminNotificationTemplate(data: FormData): string {
  return `<!doctype html>
<html lang="en" style="margin:0;padding:0;">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>New Tyre Enquiry — Streat Motor Tyres</title>
    <style>
      @media (max-width:600px){
        .container{width:100% !important;}
        .px{padding-left:16px !important;padding-right:16px !important;}
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#f5f5f7;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f5f5f7;">
      <tr>
        <td align="center" style="padding:24px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="container" style="width:600px;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
            <!-- Header -->
            <tr>
              <td align="center" style="background:#111111;padding:28px 24px;">

              </td>
            </tr>

            <!-- Title -->
            <tr>
              <td class="px" style="padding:32px 32px 16px 32px;font-family:Arial,Helvetica,sans-serif;color:#111111;">
                <h1 style="margin:0;font-size:22px;line-height:1.3;">New Tyre Enquiry Received</h1>
                <p style="margin:8px 0 0 0;font-size:14px;color:#666666;">
                  Below are the details submitted from the website form.
                </p>
              </td>
            </tr>

            <!-- Details Table -->
            <tr>
              <td class="px" style="padding:16px 32px 32px 32px;font-family:Arial,Helvetica,sans-serif;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;"><strong>Name:</strong></td>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;"><strong>Current Location:</strong></td>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;">${data.current_location}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;"><strong>Tyre Size:</strong></td>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;">${data.tyre_size}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;"><strong>What's wrong:</strong></td>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;">${data.whats_wrong}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;"><strong>Vehicle Details:</strong></td>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;">${data.vehicle_details}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;"><strong>Phone Number:</strong></td>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;">${data.phone_number}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;"><strong>Email:</strong></td>
                    <td style="padding:8px;border-bottom:1px solid #e6e6e6;">${data.email}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px;"><strong>Urgency Level:</strong></td>
                    <td style="padding:8px;">${data.urgency_level}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background:#111111;color:#aaaaaa;padding:18px 24px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;">
                <p style="margin:0;">
                  This is an automated message from Streat Motor Tyres system.
                </p>
                <p style="margin:6px 0 0 0;">
                  Please do not reply directly to this email.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
