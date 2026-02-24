import {  IconLocationPin } from '@tabler/icons-react'
import {  MailIcon, PhoneIcon } from 'lucide-react'
import { useTranslations } from 'next-intl';


type ConnectType = {
  icon: string;
  title: string;
  link: string;
  linkText: string;
};

const GetinTouch = () => {

    const iconMap = {
       IconLocationPin,
    MailIcon,
    PhoneIcon,
  };
    const t = useTranslations('getInTouch');
    const connects = t.raw('connects');
  
  return (
  <section className=" md:py-16 bg-[#f4f1ec] ">
  <div className="max-w-6xl mx-auto px-6">

    {/* Inner Box */}
   

   <div className="bg-white py-12 md:py-16 px-6 md:px-10 text-center">

  {/* Title */}
  <h2 className="text-2xl md:text-4xl md:font-semibold font-normal mb-10 md:mb-14">
   {t('title')}
  </h2>

  {/* Grid */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
  {connects.map((connect: ConnectType) => {
    const Icon = iconMap[connect.icon as keyof typeof iconMap];
const isPhone = connect.link.startsWith("tel:");
    return (
      <a
        key={connect.title}
        href={connect.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center text-center p-6 rounded-xl transition hover:shadow-lg"
      >
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gray-400 flex items-center justify-center mb-5 text-gray-600 group-hover:text-black transition">
          {Icon && <Icon size={22} />}
        </div>

        <h4 className="font-medium mb-2 text-base md:text-lg">
          {connect.title}
        </h4>

        <span  dir={isPhone ? "ltr" : "rtl"} className="text-sm text-gray-500 break-all">
          {connect.linkText}
        </span>
      </a>
    );
  })}
</div>
 


</div>
  </div>
</section>
  )
}

export default GetinTouch




