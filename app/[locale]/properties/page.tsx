import GetinTouch from '@/components/GetinTouch';
import { PageWrapper } from '@/components/PageWrapper';
import PropertiesComponent from '@/components/Properties';
import PropertyGrid from '@/components/PropertyGrid';

const Properties = () => {
  return (
    <PageWrapper>
      <main>
        <PropertiesComponent />
        <PropertyGrid />
        <GetinTouch />
      </main>
    </PageWrapper>
  );
};

export default Properties;
