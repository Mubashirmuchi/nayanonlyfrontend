import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL = 'https://res.cloudinary.com/du8hedlvt/image/upload/v1772102825/logowhite_yifkuy.png';

/* ================================================================
   ENGLISH TEMPLATE
================================================================ */
function getEnglishTemplate(name: string): string {
  return `
  <!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <title>Nayan Real Estate</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');
    body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
    table,td{mso-table-lspace:0pt;mso-table-rspace:0pt;}
    img{-ms-interpolation-mode:bicubic;border:0;outline:none;text-decoration:none;}
    body{margin:0!important;padding:0!important;background-color:#f7f6f3;}
    a{color:#b8973e;}
    @media screen and (max-width:600px){
      .container{width:100%!important;max-width:100%!important;}
      .content-pad{padding:28px 20px!important;}
      .sig-pad{padding:20px!important;}
      .sig-grid td{display:block!important;width:100%!important;padding:0 0 8px 0!important;}
      .logo-img{width:110px!important;}
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f7f6f3;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f7f6f3;">
  <tr><td align="center" style="padding:28px 12px;">

    <table class="container" role="presentation" cellspacing="0" cellpadding="0" border="0" width="620"
      style="max-width:620px;width:100%;background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.06);">

      <!-- TOP BAR -->
      <tr>
        <td style="background:#111111;padding:20px 32px;border-bottom:3px solid #b8973e;">
          <img class="logo-img" src="${LOGO_URL}" width="130" alt="Nayan" style="display:block;width:130px;max-width:130px;" />
        </td>
      </tr>

      <!-- MAIN CONTENT -->
      <tr>
        <td class="content-pad" style="padding:36px 40px 28px;background:#ffffff;">

          <p style="font-family:'Jost',Arial,sans-serif;font-size:16px;font-weight:400;color:#1a1a1a;margin:0 0 20px 0;line-height:1.5;">
            Hi <strong>${name}</strong>, great to meet you!
          </p>

          <p style="font-family:'Jost',Arial,sans-serif;font-size:15px;font-weight:300;color:#333333;margin:0 0 16px 0;line-height:1.8;">
            Thank you for your interest in <strong style="font-weight:500;color:#1a1a1a;">Nayan Real Estate</strong>. We specialize in premium residential and commercial properties designed for comfort, investment growth, and long-term value — and we'd love to help you find the perfect opportunity.
          </p>

          <p style="font-family:'Jost',Arial,sans-serif;font-size:15px;font-weight:300;color:#333333;margin:0 0 16px 0;line-height:1.8;">
            Whether you're searching for a modern apartment, luxury villa, or commercial space, our team is ready to guide you every step of the way.
          </p>

          <p style="font-family:'Jost',Arial,sans-serif;font-size:15px;font-weight:300;color:#333333;margin:0 0 28px 0;line-height:1.8;">
            To help us match you with the perfect property, please let us know:
          </p>

          <!-- Checklist -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:28px;">
            <tr><td style="padding:0 0 10px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:1px;">
                    <div style="width:18px;height:18px;background:#b8973e;border-radius:50%;text-align:center;line-height:18px;font-family:Arial;font-size:11px;color:#ffffff;font-weight:bold;">&#10003;</div>
                  </td>
                  <td style="padding-left:10px;font-family:'Jost',Arial,sans-serif;font-size:14px;font-weight:300;color:#333333;line-height:1.6;">Preferred property type (apartment, villa, commercial)?</td>
                </tr>
              </table>
            </td></tr>
            <tr><td style="padding:0 0 10px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:1px;">
                    <div style="width:18px;height:18px;background:#b8973e;border-radius:50%;text-align:center;line-height:18px;font-family:Arial;font-size:11px;color:#ffffff;font-weight:bold;">&#10003;</div>
                  </td>
                  <td style="padding-left:10px;font-family:'Jost',Arial,sans-serif;font-size:14px;font-weight:300;color:#333333;line-height:1.6;">Intended use — personal living or investment?</td>
                </tr>
              </table>
            </td></tr>
            <tr><td style="padding:0 0 10px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:1px;">
                    <div style="width:18px;height:18px;background:#b8973e;border-radius:50%;text-align:center;line-height:18px;font-family:Arial;font-size:11px;color:#ffffff;font-weight:bold;">&#10003;</div>
                  </td>
                  <td style="padding-left:10px;font-family:'Jost',Arial,sans-serif;font-size:14px;font-weight:300;color:#333333;line-height:1.6;">Target budget?</td>
                </tr>
              </table>
            </td></tr>
            <tr><td style="padding:0 0 0 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:1px;">
                    <div style="width:18px;height:18px;background:#b8973e;border-radius:50%;text-align:center;line-height:18px;font-family:Arial;font-size:11px;color:#ffffff;font-weight:bold;">&#10003;</div>
                  </td>
                  <td style="padding-left:10px;font-family:'Jost',Arial,sans-serif;font-size:14px;font-weight:300;color:#333333;line-height:1.6;">Any must-haves for your next property?</td>
                </tr>
              </table>
            </td></tr>
          </table>

          <p style="font-family:'Jost',Arial,sans-serif;font-size:15px;font-weight:300;color:#333333;margin:0 0 8px 0;line-height:1.8;">
            The fastest way to explore your options?
          </p>
          <p style="font-family:'Jost',Arial,sans-serif;font-size:15px;font-weight:400;margin:0 0 28px 0;line-height:1.8;">
            <a href="https://www.nayan.sa" style="color:#b8973e;text-decoration:underline;font-weight:500;">Browse our latest properties &rarr;</a>
          </p>

          <p style="font-family:'Jost',Arial,sans-serif;font-size:15px;font-weight:300;color:#333333;margin:0;line-height:1.8;">
            Looking forward to hearing from you and helping you find your ideal property!
          </p>

        </td>
      </tr>

      <!-- DIVIDER -->
      <tr><td style="padding:0 40px;"><div style="height:1px;background:#eeeeee;"></div></td></tr>

      <!-- SIGNATURE BLOCK -->
      <tr>
        <td style="padding:28px 40px 0;background:#ffffff;">

          <!-- "Best Regards, / Name" -->
          <p style="font-family:Arial,sans-serif;font-size:13px;color:#1a1a1a;margin:0 0 2px 0;line-height:1.5;">Best Regards,</p>
          <!-- Bold name -->
          <div style="font-size:22px;font-family:Arial,sans-serif;font-weight:bold;color:#1a1a1a;margin:0 0 4px 0;">Nayan Team</div>
          <!-- Role -->
          <div style="font-size:15px;font-family:Arial,sans-serif;color:#555555;margin:0 0 14px 0;">Real Estate Consultants</div>

          <!-- Logo -->
          <div style="margin:0 0 16px 0;">
            <img src="${LOGO_URL}" width="180" alt="Nayan" style="display:block;width:180px;max-width:180px;background:#111111;padding:10px 16px;border-radius:3px;" />
          </div>

          <!-- Address | Email + Phone two-column -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 14px 0;">
            <tr>
              <!-- Address -->
              <td style="vertical-align:top;padding-right:16px;font-size:12px;font-family:Arial,sans-serif;color:#333333;line-height:1.4;width:240px;">
                Riyadh, Kingdom of Saudi Arabia
              </td>
              <!-- Divider column (empty, acts as visual gap) -->
              <td style="vertical-align:top;width:15px;padding-right:15px;padding-left:15px;"></td>
              <!-- Email + Phone -->
              <td style="vertical-align:top;">
                <!-- Email row -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:10px;">
                  <tr>
                    <td style="vertical-align:middle;width:23px;padding-right:5px;">
                      <img src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772110966/mail-svgrepo-com_dnhpu4.png" width="18" height="18" alt="Email" style="display:block;width:18px;" />
                    </td>
                    <td style="vertical-align:middle;font-size:12px;font-family:Arial,sans-serif;color:#1a1a1a;">
                      <a href="mailto:admin@nayan.sa" style="color:#1a1a1a;text-decoration:none;">admin@nayan.sa</a>
                    </td>
                  </tr>
                </table>
                <!-- Phone row -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="vertical-align:middle;width:23px;padding-right:5px;">
                      <img src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772110913/call-192-svgrepo-com_oii5og.png" width="18" height="18" alt="Phone" style="display:block;width:18px;" />
                    </td>
                    <td style="vertical-align:middle;font-size:12px;font-family:Arial,sans-serif;color:#1a1a1a;">
                      <a href="tel:+966561291512" style="color:#1a1a1a;text-decoration:none;">+966 56 129 1512</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Social icons row -->
         <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:10px 0 8px 0;">
  <tr style="font-size:0;line-height:0;">

    <!-- WhatsApp -->
    <td style="padding-right:8px;">
      <a href="https://wa.me/966561291512" style="text-decoration:none;display:inline-block;">
        <img 
          src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772110783/whatsapp-svgrepo-com_iczebb.png"
          width="30"
          height="30"
          alt="WhatsApp"
          style="display:block;width:30px;height:30px;border:0;"
        />
      </a>
    </td>

    <!-- Instagram -->
    <td style="padding-right:8px;">
      <a href="https://www.instagram.com/nayan_ltd?igsh=cm5rYnhzcmhnaW4z" style="text-decoration:none;display:inline-block;">
        <img 
          src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772111090/insta-svgrepo-com_pshgp4.png"
          width="30"
          height="30"
          alt="Instagram"
          style="display:block;width:30px;height:30px;border:0;"
        />
      </a>
    </td>

    <!-- Facebook -->
    <td style="padding-right:8px;">
      <a href="https://www.facebook.com/share/1XKcBY1sXC/" style="text-decoration:none;display:inline-block;">
        <img 
          src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772111027/facebook-176-svgrepo-com_dgl1gx.png"
          width="30"
          height="30"
          alt="Facebook"
          style="display:block;width:30px;height:30px;border:0;"
        />
      </a>
    </td>

    <!-- LinkedIn -->
    <td>
      <a href="https://www.linkedin.com/company/mrac-nayan" style="text-decoration:none;display:inline-block;">
        <img 
          src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772111037/linkedin-svgrepo-com_sqodlk.png"
          width="50"
          height="50"
          alt="LinkedIn"
          style="display:block;width:50px;height:50px;border:0;"
          
        />
      </a>
    </td>

  </tr>
</table>

          <!-- Website -->
          <div style="font-size:14px;font-family:Arial,sans-serif;padding:5px 0 0 0;">
            <a href="https://www.nayan.sa" style="color:#1a1a1a;text-decoration:none;">www.nayan.sa</a>
          </div>

        </td>
      </tr>

      <!-- GOLD BAR -->
      <tr>
        <td style="padding:10px 0 0 0;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr style="background-color:#b8973e;">
              <td style="padding:7px 40px;text-align:right;">
                <div style="font-size:14px;font-family:Arial,sans-serif;font-weight:bold;color:#ffffff;text-align:right;">
                  RIYADH &nbsp;|&nbsp; JEDDAH &nbsp;|&nbsp; KINGDOM OF SAUDI ARABIA
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- DISCLAIMER -->
      <tr>
        <td style="padding:12px 40px 24px;background:#ffffff;">
          <p style="font-size:12px;font-family:Arial,sans-serif;color:#555555;margin:0;line-height:1.4;">
            This e-mail and its attachments are confidential and intended for the above-named recipient only. If you are not the intended recipient, you are not authorised to retain, read, copy or distribute this message or any part of it. If you receive this e-mail in error, please notify the sender and delete it immediately. Thank you.
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/* ================================================================
   ARABIC TEMPLATE
================================================================ */
function getArabicTemplate(name: string): string {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <title>نايان للعقارات</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap');
    body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
    table,td{mso-table-lspace:0pt;mso-table-rspace:0pt;}
    img{-ms-interpolation-mode:bicubic;border:0;outline:none;text-decoration:none;}
    body{margin:0!important;padding:0!important;background-color:#f7f6f3;direction:rtl;}
    a{color:#b8973e;}
    @media screen and (max-width:600px){
      .container{width:100%!important;max-width:100%!important;}
      .content-pad{padding:28px 20px!important;}
      .sig-pad{padding:20px!important;}
      .sig-grid td{display:block!important;width:100%!important;padding:0 0 16px 0!important;border:none!important;text-align:right!important;}
      .logo-img{width:110px!important;}
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f7f6f3;direction:rtl;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f7f6f3;" dir="rtl">
  <tr><td align="center" style="padding:28px 12px;">

    <table class="container" role="presentation" cellspacing="0" cellpadding="0" border="0" width="620"
      style="max-width:620px;width:100%;background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.06);" dir="rtl">

      <!-- TOP BAR -->
      <tr>
        <td style="background:#111111;padding:20px 32px;border-bottom:3px solid #b8973e;">
          <img class="logo-img" src="${LOGO_URL}" width="130" alt="نايان" style="display:block;width:130px;max-width:130px;" />
        </td>
      </tr>

      <!-- MAIN CONTENT -->
      <tr>
        <td class="content-pad" style="padding:36px 40px 28px;background:#ffffff;text-align:right;">

          <p style="font-family:'Tajawal',Arial,sans-serif;font-size:16px;font-weight:400;color:#1a1a1a;margin:0 0 20px 0;line-height:1.6;text-align:right;">
            مرحبًا <strong>${name}</strong>، يسعدنا التواصل معك!
          </p>

          <p style="font-family:'Tajawal',Arial,sans-serif;font-size:15px;font-weight:300;color:#333333;margin:0 0 16px 0;line-height:1.9;text-align:right;">
            شكرًا لاهتمامك بـ <strong style="font-weight:500;color:#1a1a1a;">نايان للعقارات</strong>. نحن متخصصون في العقارات السكنية والتجارية المتميزة، المصممة لتوفر لك الراحة والقيمة الاستثمارية على المدى الطويل — ونتطلع لمساعدتك في إيجاد الفرصة المثالية.
          </p>

          <p style="font-family:'Tajawal',Arial,sans-serif;font-size:15px;font-weight:300;color:#333333;margin:0 0 16px 0;line-height:1.9;text-align:right;">
            سواء كنت تبحث عن شقة عصرية أو فيلا فاخرة أو مساحة تجارية، فريقنا مستعد لإرشادك في كل خطوة.
          </p>

          <p style="font-family:'Tajawal',Arial,sans-serif;font-size:15px;font-weight:300;color:#333333;margin:0 0 28px 0;line-height:1.9;text-align:right;">
            لنتمكن من مساعدتك بشكل أفضل، نودّ معرفة:
          </p>

          <!-- Checklist -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:28px;" dir="rtl">
            <tr><td style="padding:0 0 10px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" dir="rtl">
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;">
                    <div style="width:18px;height:18px;background:#b8973e;border-radius:50%;text-align:center;line-height:18px;font-family:Arial;font-size:11px;color:#ffffff;font-weight:bold;">&#10003;</div>
                  </td>
                  <td style="padding-right:10px;font-family:'Tajawal',Arial,sans-serif;font-size:14px;font-weight:300;color:#333333;line-height:1.7;">نوع العقار المفضّل (شقة، فيلا، تجاري)؟</td>
                </tr>
              </table>
            </td></tr>
            <tr><td style="padding:0 0 10px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" dir="rtl">
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;">
                    <div style="width:18px;height:18px;background:#b8973e;border-radius:50%;text-align:center;line-height:18px;font-family:Arial;font-size:11px;color:#ffffff;font-weight:bold;">&#10003;</div>
                  </td>
                  <td style="padding-right:10px;font-family:'Tajawal',Arial,sans-serif;font-size:14px;font-weight:300;color:#333333;line-height:1.7;">الغرض من العقار — للسكن أم للاستثمار؟</td>
                </tr>
              </table>
            </td></tr>
            <tr><td style="padding:0 0 10px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" dir="rtl">
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;">
                    <div style="width:18px;height:18px;background:#b8973e;border-radius:50%;text-align:center;line-height:18px;font-family:Arial;font-size:11px;color:#ffffff;font-weight:bold;">&#10003;</div>
                  </td>
                  <td style="padding-right:10px;font-family:'Tajawal',Arial,sans-serif;font-size:14px;font-weight:300;color:#333333;line-height:1.7;">الميزانية المستهدفة؟</td>
                </tr>
              </table>
            </td></tr>
            <tr><td>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" dir="rtl">
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;">
                    <div style="width:18px;height:18px;background:#b8973e;border-radius:50%;text-align:center;line-height:18px;font-family:Arial;font-size:11px;color:#ffffff;font-weight:bold;">&#10003;</div>
                  </td>
                  <td style="padding-right:10px;font-family:'Tajawal',Arial,sans-serif;font-size:14px;font-weight:300;color:#333333;line-height:1.7;">أي متطلبات أساسية لعقارك القادم؟</td>
                </tr>
              </table>
            </td></tr>
          </table>

          <p style="font-family:'Tajawal',Arial,sans-serif;font-size:15px;font-weight:300;color:#333333;margin:0 0 8px 0;line-height:1.9;text-align:right;">
            أسرع طريقة لاستكشاف الخيارات المتاحة؟
          </p>
          <p style="font-family:'Tajawal',Arial,sans-serif;font-size:15px;font-weight:400;margin:0 0 28px 0;line-height:1.9;text-align:right;">
            <a href="https://www.nayan.sa" style="color:#b8973e;text-decoration:underline;font-weight:500;">تصفّح أحدث عقاراتنا &larr;</a>
          </p>

          <p style="font-family:'Tajawal',Arial,sans-serif;font-size:15px;font-weight:300;color:#333333;margin:0;line-height:1.9;text-align:right;">
            نتطلع للتواصل معك ومساعدتك في إيجاد العقار المثالي!
          </p>

        </td>
      </tr>

      <!-- DIVIDER -->
      <tr><td style="padding:0 40px;"><div style="height:1px;background:#eeeeee;"></div></td></tr>

      <!-- SIGNATURE BLOCK -->
      <tr>
              <td style="padding: 28px 40px 0; background: #ffffff">
                <!-- "Best Regards, / Name" -->
                <p
                  style="
                    font-family: Arial, sans-serif;
                    font-size: 13px;
                    color: #1a1a1a;
                    margin: 0 0 2px 0;
                    line-height: 1.5;
                  "
                >
                  Best Regards,
                </p>
                <!-- Bold name -->
                <div
                  style="
                    font-size: 22px;
                    font-family: Arial, sans-serif;
                    font-weight: bold;
                    color: #1a1a1a;
                    margin: 0 0 4px 0;
                  "
                >
                  Nayan Team
                </div>
                <!-- Role -->
                <div
                  style="
                    font-size: 15px;
                    font-family: Arial, sans-serif;
                    color: #555555;
                    margin: 0 0 14px 0;
                  "
                >
                  Real Estate Consultants
                </div>

                <!-- Logo -->
                <div style="margin: 0 0 16px 0">
                  <img
                    src="${LOGO_URL}"
                    width="180"
                    alt="Nayan"
                    style="
                      display: block;
                      width: 180px;
                      max-width: 180px;
                      background: #111111;
                      padding: 10px 16px;
                      border-radius: 3px;
                    "
                  />
                </div>

                <!-- Address | Email + Phone two-column -->
                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="margin: 0 0 14px 0"
                >
                  <tr>
                    <!-- Address -->
                    <td
                      style="
                        vertical-align: top;
                        padding-right: 16px;
                        font-size: 12px;
                        font-family: Arial, sans-serif;
                        color: #333333;
                        line-height: 1.4;
                        width: 240px;
                      "
                    >
                      Riyadh, Kingdom of Saudi Arabia
                    </td>
                    <!-- Divider column (empty, acts as visual gap) -->
                    <td
                      style="
                        vertical-align: top;
                        width: 15px;
                        padding-right: 15px;
                        padding-left: 15px;
                      "
                    ></td>
                    <!-- Email + Phone -->
                    <td style="vertical-align: top">
                      <!-- Email row -->
                      <table
                        role="presentation"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="margin-bottom: 10px"
                      >
                        <tr>
                          <td
                            style="
                              vertical-align: middle;
                              width: 23px;
                              padding-right: 5px;
                            "
                          >
                            <img
                              src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772110966/mail-svgrepo-com_dnhpu4.png"
                              width="18"
                              height="18"
                              alt="Email"
                              style="display: block; width: 18px"
                            />
                          </td>
                          <td
                            style="
                              vertical-align: middle;
                              font-size: 12px;
                              font-family: Arial, sans-serif;
                              color: #1a1a1a;
                            "
                          >
                            <a
                              href="mailto:admin@nayan.sa"
                              style="color: #1a1a1a; text-decoration: none"
                              >admin@nayan.sa</a
                            >
                          </td>
                        </tr>
                      </table>
                      <!-- Phone row -->
                      <table
                        role="presentation"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                      >
                        <tr>
                          <td
                            style="
                              vertical-align: middle;
                              width: 23px;
                              padding-right: 5px;
                            "
                          >
                            <img
                              src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772110913/call-192-svgrepo-com_oii5og.png"
                              width="18"
                              height="18"
                              alt="Phone"
                              style="display: block; width: 18px"
                            />
                          </td>
                          <td
                            style="
                              vertical-align: middle;
                              font-size: 12px;
                              font-family: Arial, sans-serif;
                              color: #1a1a1a;
                            "
                          >
                            <a
                              href="tel:+966561291512"
                              style="color: #1a1a1a; text-decoration: none"
                              >+966 56 129 1512</a
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Social icons row -->
                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="margin: 10px 0 8px 0"
                >
                  <tr style="font-size: 0; line-height: 0">
                    <!-- WhatsApp -->
                    <td style="padding-right: 8px">
                      <a
                        href="https://wa.me/966561291512"
                        style="text-decoration: none; display: inline-block"
                      >
                        <img
                          src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772110783/whatsapp-svgrepo-com_iczebb.png"
                          width="30"
                          height="30"
                          alt="WhatsApp"
                          style="
                            display: block;
                            width: 30px;
                            height: 30px;
                            border: 0;
                          "
                        />
                      </a>
                    </td>

                    <!-- Instagram -->
                    <td style="padding-right: 8px">
                      <a
                        href="https://www.instagram.com/nayan_ltd?igsh=cm5rYnhzcmhnaW4z"
                        style="text-decoration: none; display: inline-block"
                      >
                        <img
                          src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772111090/insta-svgrepo-com_pshgp4.png"
                          width="30"
                          height="30"
                          alt="Instagram"
                          style="
                            display: block;
                            width: 30px;
                            height: 30px;
                            border: 0;
                          "
                        />
                      </a>
                    </td>

                    <!-- Facebook -->
                    <td style="padding-right: 8px">
                      <a
                        href="https://www.facebook.com/share/1XKcBY1sXC/"
                        style="text-decoration: none; display: inline-block"
                      >
                        <img
                          src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772111027/facebook-176-svgrepo-com_dgl1gx.png"
                          width="30"
                          height="30"
                          alt="Facebook"
                          style="
                            display: block;
                            width: 30px;
                            height: 30px;
                            border: 0;
                          "
                        />
                      </a>
                    </td>

                    <!-- LinkedIn -->
                    <td>
                      <a
                        href="https://www.linkedin.com/company/mrac-nayan"
                        style="text-decoration: none; display: inline-block"
                      >
                        <img
                          src="https://res.cloudinary.com/du8hedlvt/image/upload/v1772111037/linkedin-svgrepo-com_sqodlk.png"
                          width="50"
                          height="50"
                          alt="LinkedIn"
                          style="
                            display: block;
                            width: 50px;
                            height: 50px;
                            border: 0;
                          "
                        />
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Website -->
                <div
                  style="
                    font-size: 14px;
                    font-family: Arial, sans-serif;
                    padding: 5px 0 0 0;
                  "
                >
                  <a
                    href="https://www.nayan.sa"
                    style="color: #1a1a1a; text-decoration: none"
                    >www.nayan.sa</a
                  >
                </div>
              </td>
            </tr>

      <!-- GOLD BAR -->
      <tr>
        <td style="padding:10px 0 0 0;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr style="background-color:#b8973e;">
              <td style="padding:7px 40px;text-align:right;">
                <div style="font-size:14px;font-family:Arial,sans-serif;font-weight:bold;color:#ffffff;text-align:right;">
                  الرياض &nbsp;|&nbsp; جدة &nbsp;|&nbsp; المملكة العربية السعودية
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- DISCLAIMER -->
      <tr>
        <td style="padding:12px 40px 24px;background:#ffffff;text-align:right;">
          <p style="font-size:12px;font-family:Arial,sans-serif;color:#555555;margin:0;line-height:1.4;text-align:right;">
            هذا البريد الإلكتروني ومرفقاته سرية ومخصصة للمستلم المذكور أعلاه فقط. إذا لم تكن المستلم المقصود، فلا يحق لك الاحتفاظ بهذه الرسالة أو قراءتها أو نسخها أو توزيعها. إذا تلقيت هذا البريد الإلكتروني عن طريق الخطأ، يرجى إبلاغ المرسل وحذفه فوراً. شكراً لك.
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/* ================================================================
   ROUTE HANDLER
================================================================ */
export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message, locale, honeypot } =
      await req.json();

    if (honeypot) {
      return Response.json({ success: true });
    }

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const isArabic = locale === 'ar';
    const filePath = path.join(process.cwd(), 'public', 'nayan.pdf');
    const fileBuffer = fs.readFileSync(filePath);

    /* 1️⃣ EMAIL TO ADMIN */
    const { error: adminError } = await resend.emails.send({
      from: 'Nayan <admin@nayan.sa>',
      to: ['admin@nayan.sa'],
      subject: subject || `New message from ${name}`,
      replyTo: email,
      html: isArabic
        ? `<div dir="rtl" style="font-family:Arial,sans-serif;padding:20px;background:#f9f9f9;text-align:right;">
            <div style="background:white;padding:30px;border-radius:8px;max-width:600px;margin:auto;">
              <h2 style="color:#C08E46;margin-bottom:20px;">رسالة جديدة من الموقع</h2>
              <p><strong>الاسم:</strong> ${name}</p>
              <p><strong>البريد الإلكتروني:</strong> ${email}</p>
              <p><strong>الهاتف:</strong> ${phone || '-'}</p>
              <p><strong>الموضوع:</strong> ${subject || '-'}</p>
              <div style="margin-top:20px;padding:15px;background:#f5f5f5;border-radius:5px;">
                <strong>الرسالة:</strong><br/>${message}
              </div>
            </div>
          </div>`
        : `<div style="font-family:Arial,sans-serif;padding:20px;background:#f9f9f9;">
            <div style="background:white;padding:30px;border-radius:8px;max-width:600px;margin:auto;">
              <h2 style="color:#C08E46;margin-bottom:20px;">New Contact Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || '-'}</p>
              <p><strong>Subject:</strong> ${subject || '-'}</p>
              <div style="margin-top:20px;padding:15px;background:#f5f5f5;border-radius:5px;">
                <strong>Message:</strong><br/>${message}
              </div>
            </div>
          </div>`,
    });

    if (adminError) {
      console.error('Admin email error:', adminError);
      return Response.json({ error: adminError }, { status: 500 });
    }

    /* 2️⃣ AUTO REPLY TO USER */
    const { data: replyData, error: replyError } = await resend.emails.send({
      from: 'Nayan <admin@nayan.sa>',
      to: email,
      replyTo: 'admin@nayan.sa',
      subject: isArabic
        ? 'تم استلام رسالتك - نايان'
        : 'We received your message - Nayan',
      html: isArabic ? getArabicTemplate(name) : getEnglishTemplate(name),
      attachments: [
        {
          filename: 'Nayan Brochure.pdf',
          content: fileBuffer.toString('base64'),
        },
      ],
    });

    console.log('Reply Data:', replyData);
    console.log('Reply Error:', replyError);

    if (replyError) {
      console.error('Auto-reply error:', replyError);
      return Response.json({ success: true, warning: 'Auto-reply failed' });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}