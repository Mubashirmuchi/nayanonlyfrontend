import { PageWrapper } from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import {getTranslations} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    <PageWrapper>
      <h1>{t('title')}</h1>

     

      {/* Hero section */}
      <div className="relative isolate px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 text-center">
          <h1 className="text-5xl font-semibold text-white sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-8 text-lg text-gray-400">
            Anim aute id magna aliqua ad ad non deserunt sunt.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-4 py-2 text-white"
            >
              Get started
            </a>
            <a href="#" className="text-white">
              Learn more →
            </a>
          </div>
        </div>
      </div>

         <div className="relative isolate px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 text-center">
          <h1 className="text-5xl font-semibold text-white sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-8 text-lg text-gray-400">
            Anim aute id magna aliqua ad ad non deserunt sunt.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button
      
              
              className="rounded-md bg-indigo-500 px-4 py-2 text-white"
            >
              Get started
            </Button>            <a href="#" className="text-white">
              Learn more →
            </a>
          </div>
        </div>
      </div>


     
    </PageWrapper>
  );
}


