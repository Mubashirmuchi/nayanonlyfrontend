import { useTranslations } from 'next-intl';

interface Edge {
  title: string;
  description: string;
}


export default function WhyChooseUS() {
  const t = useTranslations('homePage.whyChooseUS');
    const edges = t.raw('items') as Edge[];

  return (
    <section className={`py-16 md:py-24 'bg-[#f3efe9]'`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block border border-gray-400 rounded-full px-4 py-1 text-sm tracking-wide mb-4">
            {t('label')}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t('title')}
          </h2>

          <p className="text-gray-600">{t('description')}</p>
        </div>

        {/* Grid */}
        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {edges.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
