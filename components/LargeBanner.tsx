import React from 'react';
import Image from 'next/image';
import { IconEyeSearch, IconTargetArrow } from '@tabler/icons-react';
import { Flag } from 'lucide-react';
import { useTranslations } from 'next-intl';

type visions = {
  icon: string;
  title: string;
  description: string;
};

const LargeBanner = () => {
  const image3 = '/image3.webp';

  const t = useTranslations('aboutPage');
  const data = t.raw('vision');


  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Outer Border Container */}
        <div className="border border-[#d6b98c] p-6">
          {/* Top Image */}
          <div className="relative w-full h-[350px] mb-12">
            <Image
              src={image3}
              alt="Luxury Building"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            {data.map((visions: visions, index: number) => (
              <div key={index} className="bg-[#efefef] p-8">
                <div className="w-14 h-14 bg-[#c69c5d] rounded-full flex items-center justify-center mb-6">
                  <Icon icon={visions.icon} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{visions.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                {visions.description}
                </p>
              </div>
            ))}

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeBanner;


const Icon =({icon}:{icon:string})=>{

  switch(icon){
    case 'IconTargetArrow':
      return(
        <IconTargetArrow color='white'/>
      )
    case 'Flag':
      return(
        <Flag color='white'/>
      )
    case 'IconEyeSearch':
      return(
        <IconEyeSearch color='white'/>
      )
  }

}