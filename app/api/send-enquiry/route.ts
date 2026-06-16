import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getAdminNotificationTemplate } from '@/lib/email-templates/admin-notification';
import { getCustomerConfirmationTemplate } from '@/lib/email-templates/customer-confirmation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      current_location,
      tyre_size,
      whats_wrong,
      vehicle_details,
      phone_number,
      email,
      urgency_level,
    } = body;

    // Validate required fields
    if (!name || !email || !phone_number) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD;

    if (!smtpConfigured) {
      console.log('SMTP not configured. Form data:', body);
      console.log('⚠️ To enable email functionality, please configure SMTP settings in .env.local');

      return NextResponse.json(
        {
          message: 'Form submitted successfully (emails disabled in development)',
          warning: 'SMTP not configured - emails will not be sent'
        },
        { status: 200 }
      );
    }

    // Create transporter using SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Prepare form data for templates
    const formData = {
      name,
      current_location: current_location || 'Not provided',
      tyre_size: tyre_size || 'Not provided',
      whats_wrong: whats_wrong || 'Not provided',
      vehicle_details: vehicle_details || 'Not provided',
      phone_number,
      email,
      urgency_level: urgency_level || 'Not specified',
    };

    // Send email to admin (tyres@streatmotortyres.co.uk)
    const adminMailOptions = {
      from: process.env.SMTP_FROM || 'tyres@streatmotortyres.co.uk',
      to: 'tyres@streatmotortyres.co.uk',
      subject: `New Tyre Enquiry from ${name}`,
      html: getAdminNotificationTemplate(formData),
    };

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.SMTP_FROM || 'tyres@streatmotortyres.co.uk',
      to: email,
      subject: 'Thank you for contacting Streat Motor Tyres',
      html: getCustomerConfirmationTemplate(),
    };

    // Send both emails
    try {
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(customerMailOptions),
      ]);

      console.log('✅ Emails sent successfully to:', email);

      return NextResponse.json(
        { message: 'Emails sent successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('❌ Error sending email:', emailError);
      throw emailError;
    }
  } catch (error) {
    console.error('Error in send-enquiry API:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: errorMessage,
        hint: 'Check server logs and verify SMTP configuration'
      },
      { status: 500 }
    );
  }
}
