import { useTranslations } from 'next-intl';

type CoreValueType = {
  count: string;
  title: string;
  description: string;
};
const CoreValue = () => {
  const t = useTranslations('aboutPage.coreValues');
  const data = t.raw('values');
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* LEFT */}
        <div>
          <p className="uppercase text-sm text-gray-500 tracking-widest mb-4">
            {t('label')}
          </p>

          <h2 className="text-4xl font-semibold mb-6">{t('title')}</h2>

          <p className="text-gray-600">{t('description')}</p>
        </div>

        {/* RIGHT VALUES */}

        <div className="space-y-4">
          {data.map((coreValue: CoreValueType, i: number) => (
            <div
              key={i}
              className="relative bg-gray-100 p-5 rounded-md overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#c69c5d]/10 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />

              <div className="flex items-center gap-4 relative z-10">
                <span className="text-gray-400 font-semibold text-2xl">
                  {coreValue.count}
                </span>
                <div className="flex flex-col">
                  <span className="font-medium">{coreValue.title}</span>
                  <p className="font-light text-gray-500">
                    {coreValue.description}
                  </p>
                </div>

                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
