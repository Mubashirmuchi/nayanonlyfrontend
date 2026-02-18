// // import { NextResponse } from "next/server";
// // import { Resend } from "resend";

// // const resend = new Resend(process.env.RESEND_API_KEY);

// // export async function POST(req: Request) {
// //   try {
// //     const body = await req.json();
// //     const { name, email, phone, subject, message } = body;

// //     if (!name || !email || !message) {
// //       return NextResponse.json(
// //         { error: "Missing required fields" },
// //         { status: 400 }
// //       );
// //     }

// //     await resend.emails.send({
// //       from: "Nayan Website <onboarding@resend.dev>", // change later
// //       to: "info@nayan.com", // your inbox
// //       subject: subject || `New message from ${name}`,
// //       html: `
// //         <h2>New Contact Message</h2>
// //         <p><strong>Name:</strong> ${name}</p>
// //         <p><strong>Email:</strong> ${email}</p>
// //         <p><strong>Phone:</strong> ${phone || "N/A"}</p>
// //         <p><strong>Subject:</strong> ${subject || "N/A"}</p>
// //         <p><strong>Message:</strong></p>
// //         <p>${message}</p>
// //       `,
// //     });

// //     return NextResponse.json({ success: true });
// //   } catch (error) {
// //     console.error(error);
// //     return NextResponse.json(
// //       { error: "Email failed to send" },
// //       { status: 500 }
// //     );
// //   }
// // }


// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, subject, message, locale, honeypot } = body;

//     // 🛑 Spam protection
//     if (honeypot) {
//       return NextResponse.json({ success: true });
//     }

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // 🌍 Language-based content
//     const isArabic = locale === "ar";

//     const emailHtml = isArabic
//       ? `
//       <h2>رسالة جديدة من الموقع</h2>
//       <p><strong>الاسم:</strong> ${name}</p>
//       <p><strong>البريد:</strong> ${email}</p>
//       <p><strong>الهاتف:</strong> ${phone || "-"}</p>
//       <p><strong>الموضوع:</strong> ${subject || "-"}</p>
//       <p><strong>الرسالة:</strong></p>
//       <p>${message}</p>
//       `
//       : `
//       <h2>New Contact Message</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone || "-"}</p>
//       <p><strong>Subject:</strong> ${subject || "-"}</p>
//       <p><strong>Message:</strong></p>
//       <p>${message}</p>
//       `;

//     // 📩 Send to your inbox
//     await resend.emails.send({
//       from: "Nayan <mubashirfreston@gmail.com>",
//       to: "edygallery019@gmail.com",
//       subject: subject || `New message from ${name}`,
//       html: emailHtml,
//     });

//     // ✉️ Auto-reply to user
//     await resend.emails.send({
//       from: "Nayan <mubashirfreston@gmail.com>",
//       to: email,
//       subject: isArabic
//         ? "تم استلام رسالتك"
//         : "We received your message",
//       html: isArabic
//         ? `
//         <p>مرحبًا ${name},</p>
//         <p>شكرًا لتواصلك معنا. سنقوم بالرد عليك خلال 24 ساعة.</p>
//         <p>فريق نايان</p>
//         `
//         : `
//         <p>Hi ${name},</p>
//         <p>Thank you for contacting us. Our team will respond within 24 hours.</p>
//         <p>Nayan Team</p>
//         `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }


import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Nayan <mubashirfreston@gmail.com',
      to: ['mubashirfreston@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}