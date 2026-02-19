'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageDropdown from '@/components/studio';
import { useTranslations } from 'next-intl';
import PrimaryButton from './PrimaryButton';
import { Globe } from 'lucide-react';

export function NavbarComponent({ locale }: { locale: string }) {
  const pathname = usePathname();
  const t = useTranslations('global.navbar');

  const forceVisibleTrue = ['/contact', '/inprogress'].some((path) =>
    pathname.endsWith(path)
  );

  const navItems = [
    {
      name: t('home'),
      link: '/',
      hideWhenVisible: false,
    },
    {
      name: t('about'),
      link: '/inprogress',
      hideWhenVisible: false,
    },
    {
      name: t('projects'),
      link: '/inprogress',
      hideWhenVisible: false,
    },
    {
      name: t('services'),
      link: '/inprogress',
      hideWhenVisible: false,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // <Navbar>
    <Navbar forceVisible={forceVisibleTrue}>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} locale={locale} />
        <div className="flex items-center gap-4">
          {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
          <LanguageDropdown
            defaultOpen={false}
            trigger={
              <NavbarButton
                className="capitalize flex gap-1"
                variant="secondary"
              >
                <Globe size={20} />
                {locale}
              </NavbarButton>
            }
          />

          <PrimaryButton href="/contact" text={t('consultation')} />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex justify-center items-center gap-4 ">
            <LanguageDropdown
              defaultOpen={false}
              trigger={
                <NavbarButton
                  className="capitalize flex gap-1"
                  variant="secondary"
                >
                  <Globe size={24} />
                  {locale}
                </NavbarButton>
              }
            />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <PrimaryButton href="/contact" text={t('consultation')} />
          {/* <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Login
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Book a call
            </NavbarButton>
          </div> */}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
