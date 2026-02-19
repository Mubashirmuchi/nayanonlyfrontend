import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { NavbarComponent } from '@/components/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import AnimatePresence from '@/components/AnimatePresence';
import { OrganizationJsonLd } from '@/components/SeoJsonLd';
import { cn } from '@/lib/utils';
import { SpeedInsights } from "@vercel/speed-insights/next"
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

import { Cairo } from 'next/font/google';
import Footer from '@/components/Footer';

const cairo = Cairo({
  variable: '--font-arabic',
  subsets: ['arabic'],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  // RTL detection
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          locale === 'ar' && cairo.variable,
          'antialiased'
        )}
      >
        <OrganizationJsonLd locale={locale} />

        <NextIntlClientProvider messages={messages}>
          <AnimatePresence itemKey={locale}>
            <NavbarComponent locale={locale} />
            {children}
            <Footer />
          </AnimatePresence>
        </NextIntlClientProvider>
         <SpeedInsights />
      </body>
    </html>
  );
}
