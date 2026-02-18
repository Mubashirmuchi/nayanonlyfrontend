import About from '@/components/AboutSection';
import ConnectUs from '@/components/ConnectUs';
import Hero from '@/components/Hero';
import { PageWrapper } from '@/components/PageWrapper';
import ServicesBlock from '@/components/Services';
import TestimonialsSwiper from '@/components/Testimonials';

export default async function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <ServicesBlock />
      <TestimonialsSwiper />
      <ConnectUs />
    </PageWrapper>
  );
}
