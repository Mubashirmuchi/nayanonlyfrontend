import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { IconArrowUpRight } from '@tabler/icons-react';
import { PageWrapper } from '@/components/PageWrapper';

import '../../globals.css';

export default function InProgress() {
  const t = useTranslations('notFound');
  const w = useTranslations();

  return (
    <PageWrapper>
      <section className="min-h-screen bg-[#EDE9E3] flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <h1 className="text-7xl md:text-8xl font-semibold text-[#C08E46] mb-6">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            {t('title')}
          </h2>

          <p className="text-gray-600 mb-10">{w('workinprogress')}</p>

          <Link
            href="/"
            className="group inline-flex items-center gap-4 bg-[#C08E46] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            {t('button')}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
              <IconArrowUpRight size={18} className="text-black" />
            </span>
          </Link>
        </div>
      </section>{' '}
    </PageWrapper>
  );
}
