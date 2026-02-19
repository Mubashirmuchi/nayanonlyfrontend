import ContactSection from '@/components/ContactPage';
import { PageWrapper } from '@/components/PageWrapper';

const ContactPage = async ({ params }: { params: { locale: string } }) => {
  const { locale } = await params;

  return (
    <PageWrapper>
      <ContactSection locale={locale} />
    </PageWrapper>
  );
};

export default ContactPage;
