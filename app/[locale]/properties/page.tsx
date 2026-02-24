import GetinTouch from '@/components/GetinTouch';
import { PageWrapper } from '@/components/PageWrapper';
import PropertiesHeader from '@/components/Properties';
import PropertyGrid from '@/components/PropertyGrid';
import { properties1 } from '@/data/properties';

const Properties = () => {
  return (
    <PageWrapper>
      <main>
        <PropertiesHeader />
        <PropertyGrid property={properties1} />
        <GetinTouch />
      </main>
    </PageWrapper>
  );
};

export default Properties;
