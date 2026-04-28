import { useTranslations } from 'next-intl';
import Image from 'next/image';

type counts = {
  title: string;
  description: string;
};

const AboutUs = () => {
  const t = useTranslations('aboutPage');
  const data = t.raw('counts');

  const image1 = '/heroimage.webp';
  const image2 = '/heroimage.webp';
  const image3 = '/heroimage.webp';
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
            {t('label')}
          </p>

          <h2 className="text-4xl font-semibold leading-tight mb-6">
            {t('title')}
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {t('description')}{' '}
          </p>

          {/* Stats */}
          <div className="flex gap-12 mt-8">
            {data.map((item: counts, index: number) => (
              <div key={index}>
                <h3 className="text-3xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGES GRID */}

        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="relative h-48">
            <Image
              src={image1}
              alt="Interior 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Image 2 */}
          <div className="relative h-48">
            <Image
              src={image2}
              alt="Interior 2"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Image 3 Full Width */}
          <div className="relative h-60 col-span-2">
            <Image
              src={image3}
              alt="Interior 3"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
