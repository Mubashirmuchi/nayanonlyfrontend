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
import { Link } from '@/i18n/navigation';
import LanguageDropdown from '@/components/studio';
import { useTranslations } from 'next-intl';
import PrimaryButton from './PrimaryButton';
import { IconChevronDown, IconSquareRoundedChevronDown } from '@tabler/icons-react';

export function NavbarComponent({ locale }: { locale: string }) {
  const t = useTranslations('global.navbar');

  const navItems = [
    {
      name: t('home'),
      link: '/',
      hideWhenVisible: false,
    },
    {
      name: t('about'),
      link: '/',
      hideWhenVisible: false,
    },
    {
      name: t('contact'),
      link: '/',
      hideWhenVisible: false,
    },

    {
      name: t('blogs'),
      link: '/blogs',
      hideWhenVisible: true,
    },
    {
      name: t('services'),
      link: '/',
      hideWhenVisible: false,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} locale={locale} />
        <div className="flex items-center gap-4">
          {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
          <LanguageDropdown
            defaultOpen={false}
            trigger={
                
                <NavbarButton className='capitalize flex ' variant="secondary">{locale}<IconChevronDown size={20}/></NavbarButton>}
          />

          <PrimaryButton text={t('consultation')} />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
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
          <div className="flex w-full flex-col gap-4">
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
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
