import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  
  IconMapPin,
} from '@tabler/icons-react';
import {  MailIcon, PhoneIcon } from 'lucide-react'

import MarqueeBlock from './Marquee';
import { useLocale } from 'next-intl';

const Footer = () => {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('global.footer');
  const message = encodeURIComponent(t('whatsappMessage'));

  const socialLinks = [
    {
      icon: IconBrandFacebook,
      url: 'https://facebook.com',
    },
    {
      icon: IconBrandX,
      url: 'https://x.com',
    },
    {
      icon: IconBrandInstagram,
      url: 'https://www.instagram.com/nayan_ltd?igsh=MXRrbmtxNDU2NWthbw==',
    },
    {
      icon: IconBrandLinkedin,
      url: 'https://www.linkedin.com/company/mrac-nayan/',
    },
    {
      icon: IconBrandYoutube,
      url: 'https://youtube.com',
    },
  ];


  return (
    <footer className="bg-black text-white">
      {/* Top scrolling bar */}

      <div className="bg-[#C08E46] text-white text-sm py-3 overflow-hidden whitespace-nowrap">
        <MarqueeBlock />
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Newsletter */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-medium mb-2">
            {t('tagline1')}
            <br />
            {t('tagline2')}
          </h3>

          <p className="text-gray-400 mb-4">{t('subscribe')}</p>

          <div className="flex items-center border border-gray-600 rounded-full overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder={t('email-placeholder')}
              className="bg-transparent px-4 py-2 flex-1 outline-none text-sm"
            />
            <button className="bg-white text-black px-4 py-2">→</button>
          </div>
        </div>

        {/* Browse */}
        <div>
          <h4 className="font-semibold mb-3">{t('browsenayan.title')}</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="#">{t('browsenayan.for-rent')}</Link>
            </li>
            <li>
              <Link href="#">{t('browsenayan.office')}</Link>
            </li>
            <li>
              <Link href="#">{t('browsenayan.apartments')}</Link>
            </li>
            <li>
              <Link href="#">{t('browsenayan.villa')}</Link>
            </li>
          </ul>
        </div>

        {/* Work */}
        <div>
          <h4 className="font-semibold mb-3">{t('workatnayan.title')}</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="#">{t('workatnayan.agent')}</Link>
            </li>
            <li>
              <Link href="#">{t('workatnayan.photographer')}</Link>
            </li>
          </ul>
        </div>

        {/* Useful links */}
        <div>
          <h4 className="font-semibold mb-3">{t('usefullinks.title')}</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="#">{t('usefullinks.home')}</Link>
            </li>
            <li>
              <Link href="#">{t('usefullinks.about')}</Link>
            </li>
            <li>
              <Link href="#">{t('usefullinks.services')}</Link>
            </li>
            <li>
              <Link href="#">{t('usefullinks.blogs')}</Link>
            </li>
            <li>
              <Link href="#">{t('usefullinks.faq')}</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
      
<div className="space-y-6">

  {/* Email */}
  <div className="space-y-2">
    <h4 className="font-semibold">
      {t('usefullinks.email')}
    </h4>

    <a
      dir="ltr"
      href="mailto:admin@nayan.sa"
      className={`text-gray-400 text-sm flex items-center gap-3 hover:text-white transition
        ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}
    >
      <MailIcon size={18} className="shrink-0" />
      <span>admin@nayan.sa</span>
    </a>
  </div>

  {/* Phone */}
  <div className="space-y-2">
    <h4 className="font-semibold">
      {t('usefullinks.phone')}
    </h4>

    <a
      dir="ltr"
      href={`https://wa.me/966561291512?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 text-sm flex items-center gap-3 hover:text-white transition
        ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}
    >
      <PhoneIcon size={18} className="shrink-0" />
      <span>  +966 56 129 1512</span>
    </a>
  </div>

  {/* Address */}
  <div className="space-y-2">
    <h4 className="font-semibold">
      {t('headquarters')}
    </h4>

    <a
      dir={ 'ltr'}
      href="https://maps.app.goo.gl/nh7h5ykDu9TPRgHH7"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 text-sm flex items-start gap-3 hover:text-white transition
        ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}
    >
      <IconMapPin size={18} className="mt-1 shrink-0" />
      <span className="leading-relaxed">
        {t('headquartersAddress')}
      </span>
    </a>
  </div>

</div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">{t('usefullinks.copyright')}</p>

        {/* Social icons */}

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#C08E46] transition"
            >
              <Icon size={18} stroke={1.8} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
