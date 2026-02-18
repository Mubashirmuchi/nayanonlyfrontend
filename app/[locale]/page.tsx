import About from '@/components/AboutSection';
import ConnectUs from '@/components/ConnectUs';
import Hero from '@/components/Hero';
import { PageWrapper } from '@/components/PageWrapper';
import ServicesBlock from '@/components/Services';
import TestimonialsSwiper from '@/components/Testimonials';
import WhyChooseUS from '@/components/WhyChooseUs';

export default async function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <ServicesBlock />
      <WhyChooseUS />
      <TestimonialsSwiper />
      <ConnectUs />
    </PageWrapper>
  );
}
