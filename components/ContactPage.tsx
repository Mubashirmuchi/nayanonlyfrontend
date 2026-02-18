// 'use client';

// import Image from 'next/image';
// import { IconPhone, IconMail, IconMapPin, IconArrowUpRight } from '@tabler/icons-react';

// export default function ContactSection() {
    
//     const imageUrl = "https://res.cloudinary.com/du8hedlvt/image/upload/v1771440343/contactpage_n284nq.png"
  

//     const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const formData = new FormData(e.currentTarget as HTMLFormElement);

//   const data = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     phone: formData.get("phone"),
//     subject: formData.get("subject"),
//     message: formData.get("message"),
//   };

//   const res = await fetch("/api/contact", {
//     method: "POST",
//     body: JSON.stringify(data),
//   });

//   const result = await res.json();

//   if (result.success) {
//     alert("Message sent successfully!");
//   } else {
//     alert("Something went wrong.");
//   }
// };

  
//     return (
//     <section className="bg-[#EDE9E3] py-20 px-6">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

//         {/* LEFT SIDE */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-6">
//             Begin Your Journey <br /> with NAYAN
//           </h2>

//           <p className="text-gray-600 mb-10 max-w-md">
//             Get in touch with us to learn more about our projects,
//             discuss investment opportunities, or receive personalized
//             support from our team.
//           </p>

//           {/* FORM */}
//           <form className="space-y-6">

//             <div className="grid sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="text-sm text-gray-700 mb-2 block">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your name..."
//                   className="w-full bg-white/60 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#C08E46]"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-700 mb-2 block">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="name@gmail.com"
//                   className="w-full bg-white/60 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#C08E46]"
//                 />
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="text-sm text-gray-700 mb-2 block">
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="+008 xxx xx"
//                   className="w-full bg-white/60 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#C08E46]"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-700 mb-2 block">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="w-full bg-white/60 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#C08E46]"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="text-sm text-gray-700 mb-2 block">
//                 Message
//               </label>
//               <textarea
//                 rows={5}
//                 placeholder="Type your message here..."
//                 className="w-full bg-white/60 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#C08E46]"
//               />
//             </div>

//             {/* CTA BUTTON */}
//             <button
//               type="submit"
//               className="group relative inline-flex items-center gap-4 bg-[#C08E46] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
//             >
//               Send Message
//               <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
//                 <IconArrowUpRight size={18} className="text-black" />
//               </span>
//             </button>

//           </form>
//         </div>

//         {/* RIGHT SIDE */}
//         <div>
//           <div className="relative w-full h-[400px] mb-8">
//             <Image
//               src={imageUrl}// replace with your image
//               alt="Interior"
//               fill
//               className="object-cover rounded-md"
//             />
//           </div>

//           <div className="border-t border-gray-400 pt-6 grid sm:grid-cols-3 gap-6 text-sm text-gray-700">

//             <div className="flex items-start gap-3">
//               <IconPhone size={20} />
//               <div>
//                 <p className="font-medium">Phone</p>
//                 <p>+1 123 567 88554</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <IconMail size={20} />
//               <div>
//                 <p className="font-medium">Email</p>
//                 <p>office@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <IconMapPin size={20} />
//               <div>
//                 <p className="font-medium">Visit Us</p>
//                 <p>Office: Riyadh, Saudi Arabia</p>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(5, "Message is required"),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection({ locale = "en" }) {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, locale }),
    });

    const result = await res.json();

    if (result.success) {
      setSuccess(true);
      reset();
    }
  };

  return (
    <section className="bg-[#EDE9E3] py-40 px-6">
      <div className="max-w-2xl mx-auto">

        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg"
          >
            {locale === "ar"
              ? "تم إرسال رسالتك بنجاح!"
              : "Your message has been sent successfully!"}
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Honeypot (hidden spam field) */}
          <input
            type="text"
            {...register("honeypot")}
            className="hidden"
          />

          <input
            {...register("name")}
            placeholder="Your name"
            className="w-full p-3 rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full p-3 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <textarea
            {...register("message")}
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-md"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center gap-3 bg-[#C08E46] text-white px-6 py-3 rounded-full"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <span className="bg-white rounded-full p-2">
              <IconArrowUpRight size={16} className="text-black" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
