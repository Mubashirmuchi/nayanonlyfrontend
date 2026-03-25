'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconArrowUpRight, IconCheck } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ContactSection({ locale }: { locale: string }) {
  const [success, setSuccess] = useState(false);
  const t = useTranslations('contact');

  const schema = z.object({
    name: z.string().min(2, t('validation.nameRequired')),
    email: z
      .string()
      .min(1, t('validation.emailRequired'))
      .email(t('validation.emailRequired')),
    phone: z.string().optional(),
    subject: z.string().optional(),
    message: z.string().min(5, t('validation.messageRequired')),
    honeypot: z.string().optional(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, locale }),
    });

    const result = await res.json();

    if (result.success) {
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section className="bg-[#EDE9E3] py-20 pt-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE - FORM */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-6">
            {t('title')}
          </h2>

          <p className="text-gray-600 mb-10 max-w-md">{t('description')} </p>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="bg-green-500 rounded-full p-1"
                >
                  <IconCheck size={20} className="text-white" />
                </motion.div>
                <p className="text-green-700 font-medium">
                  {t('form.thankYou')}{' '}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input
              type="text"
              {...register('honeypot')}
              className="hidden"
              aria-hidden="true"
              tabIndex={-1}
            />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder={t('form.namePlaceholder')}
                  className="w-full bg-white/60 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#C08E46]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder={'name@example.com'}
                  className="w-full bg-white/60 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#C08E46]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  {t('form.phone')}
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder="+966 xxx xxx"
                  className="w-full bg-white/60 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#C08E46]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  {t('form.subject')}{' '}
                </label>
                <input
                  type="text"
                  {...register('subject')}
                  placeholder={t('form.subject')}
                  className="w-full bg-white/60 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#C08E46]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                {t('form.message')}{' '}
              </label>
              <textarea
                {...register('message')}
                rows={5}
                placeholder={t('form.messagePlaceholder')}
                className="w-full bg-white/60 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#C08E46]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-4  bg-[#935b40] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting ? t('form.sending') : t('form.submit')}
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                <IconArrowUpRight size={18} className="text-black" />
              </span>
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div>
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src="/contactpage_n284nq.webp"
              alt="Interior"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
