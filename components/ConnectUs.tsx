import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import { useTranslations } from 'next-intl';
const ConnectUs = () => {

      const t = useTranslations('homePage.connect');
    
        const imgUrl = "https://res.cloudinary.com/du8hedlvt/image/upload/v1771435820/lastsection_tsjv19.png"

  return (
       <section className="w-full bg-[#EDE9E4] py-12 lg:py-20 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Image */}
                    <div className="relative w-full lg:w-[60%] h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px]">
                        <Image
                              src={imgUrl}
                          
                            alt={'imgUrl'}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-[40%]  flex items-center">
                        <div className="p-6 md:p-10 lg:p-14 max-w-xl">
                            {/* Label */}
                            <span className="inline-block text-xs tracking-wider border border-gray-400 px-4 py-1 rounded-full mb-4">
                               {t('label')}
                            </span>

                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4 leading-snug">
                                {t('title')}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {t('description')}
                            </p>

                            {/* Button */}
                          <PrimaryButton text={t('cta')} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ConnectUs
