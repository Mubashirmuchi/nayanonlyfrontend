import { useTranslations } from 'next-intl';
import Marquee from 'react-fast-marquee';

const MarqueeBlock = () => {
  const t = useTranslations('global');
  return (
    <Marquee speed={50} loop={0} gradient={false} autoFill>
      <span className="mx-6 whitespace-nowrap ">{t('marquee')}</span>
    </Marquee>
  );
};

export default MarqueeBlock;
