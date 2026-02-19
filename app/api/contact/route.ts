import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message, locale, honeypot } =
      await req.json();
    console.log('locale', locale);
    if (honeypot) {
      return Response.json({ success: true });
    }

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const isArabic = locale === 'ar';

    console.log('isArabic', isArabic);

    // Send to admin
    const { error: adminError } = await resend.emails.send({
      from: 'Nayan <onboarding@resend.dev>',
      to: ['mubashirfreston@gmail.com'],
      subject: subject || `New message from ${name}`,
      html: isArabic
        ? `<div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9; text-align: right;">
      <div style="background: white; padding: 30px; border-radius: 8px; max-width: 600px;">
        <h2 style="color: #C08E46; margin-bottom: 20px;">
          رسالة جديدة من الموقع
        </h2>

        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>الهاتف:</strong> ${phone || '-'}</p>
        <p><strong>الموضوع:</strong> ${subject || '-'}</p>

        <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
          <strong>الرسالة:</strong><br/>${message}
        </div>
      </div>
    </div>`
        : `<div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
            <div style="background: white; padding: 30px; border-radius: 8px; max-width: 600px;">
              <h2 style="color: #C08E46; margin-bottom: 20px;">New Contact Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || '-'}</p>
              <p><strong>Subject:</strong> ${subject || '-'}</p>
              <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
                <strong>Message:</strong><br/>${message}
              </div>
            </div>
          </div>`,
    });

    if (adminError) {
      return Response.json({ error: adminError }, { status: 500 });
    }

    // Auto-reply to user
    const { data: replyData, error: replyError } = await resend.emails.send({
      from: 'Nayan <onboarding@resend.dev>',
      to: email,
      subject: isArabic
        ? 'تم استلام رسالتك - نايان'
        : 'We received your message - Nayan',
      html: isArabic
        ? `<div dir="rtl" style="font-family: Arial, sans-serif; background:#f4f4f4; padding:30px;">
  <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:12px; text-align:right;">

    <h2 style="color:#C08E46;">مرحبًا ${name}،</h2>

    <p style="color:#333; font-size:16px;">
      شكرًا لتواصلك معنا. لقد استلمنا رسالتك بنجاح.
    </p>

    <p style="color:#333; font-size:16px;">
      سيقوم فريقنا بالرد عليك خلال 24 ساعة.
    </p>

    <hr style="margin:30px 0; border:none; border-top:1px solid #eee;" />

    <p style="color:#666;">
      مع أطيب التحيات،<br/>
      فريق نايان
    </p>

    <!-- CTA Buttons -->
    <div style="margin-top:25px;">
      <a href="https://nayan.sa"
         style="display:inline-block; background:#C08E46; color:white; padding:10px 18px; border-radius:999px; text-decoration:none; margin-left:10px;">
        زيارة الموقع
      </a>

      <a href="https://wa.me/966561291512?text=مرحبًا%20لقد%20قمت%20بإرسال%20رسالة"
         style="display:inline-block; background:#25D366; color:white; padding:10px 18px; border-radius:999px; text-decoration:none;">
        تواصل عبر واتساب
      </a>
    </div>

    <!-- Social Links -->
    <div style="margin-top:30px;">
      <p style="color:#888; font-size:14px; margin-bottom:10px;">تابعنا:</p>

      <a href="https://instagram.com" style="margin-left:10px;">إنستغرام</a>
      <a href="https://facebook.com" style="margin-left:10px;">فيسبوك</a>
      <a href="https://linkedin.com">لينكدإن</a>
    </div>

  </div>
</div>
`
        : `<div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:30px;">
  <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:12px;">

    <h2 style="color:#C08E46;">Hi ${name},</h2>

    <p style="color:#333; font-size:16px;">
      Thank you for contacting us. We have received your message successfully.
    </p>

    <p style="color:#333; font-size:16px;">
      Our team will respond to you within 24 hours.
    </p>

    <hr style="margin:30px 0; border:none; border-top:1px solid #eee;" />

    <p style="color:#666;">Best regards,<br/>Nayan Team</p>

    <!-- CTA Buttons -->
    <div style="margin-top:25px;">
      <a href="https://nayan.sa"
         style="display:inline-block; background:#C08E46; color:white; padding:10px 18px; border-radius:999px; text-decoration:none; margin-right:10px;">
        Visit Website
      </a>

      <a href="https://wa.me/966561291512?text=Hello%20I%20just%20submitted%20a%20form"
         style="display:inline-block; background:#25D366; color:white; padding:10px 18px; border-radius:999px; text-decoration:none;">
        Chat on WhatsApp
      </a>
    </div>

    <!-- Social Links -->
    <div style="margin-top:30px;">
      <p style="color:#888; font-size:14px; margin-bottom:10px;">Follow us:</p>

      <a href="https://instagram.com" style="margin-right:10px;">Instagram</a>
      <a href="https://facebook.com" style="margin-right:10px;">Facebook</a>
      <a href="https://linkedin.com">LinkedIn</a>
    </div>

  </div>
</div>`,
    });

    if (replyError) {
      console.error('Auto-reply error:', replyError);
      return Response.json({
        success: true,
        warning: 'Auto-reply failed',
        replyError,
      });
    }

    console.log('Auto-reply sent:', replyData);
    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
