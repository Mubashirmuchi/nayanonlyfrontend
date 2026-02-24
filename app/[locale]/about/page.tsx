import AboutUs from '@/components/AboutUs';
import CoreValue from '@/components/CoreValue';
import LargeBanner from '@/components/LargeBanner';
import OurServices from '@/components/OurServices';
import WhyChooseUS from '@/components/WhyChooseUs';
import { PageWrapper } from '@/components/PageWrapper';

const AboutPage = () => {
  return (
    <PageWrapper>
      <main className=" py-20 pt-32 px-0">
        <AboutUs />
        <LargeBanner />
        <CoreValue />
        <OurServices />
        <WhyChooseUS />
      </main>
    </PageWrapper>
  );
};

export default AboutPage;
