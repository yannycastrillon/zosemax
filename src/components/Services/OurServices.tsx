import { serviceCategories } from '@/data/services';
import ServiceSection from './Sections/ServiceSection';
import type { ServiceCardProps } from './Sections/ServiceCard';

const OurServices = () => {
  return (
    <>
      {serviceCategories.map((category) => {
        const cards: ServiceCardProps[] = category.services.map((s) => ({
          slug: s.slug,
          imageUrl: s.imageUrl,
          altText: s.title,
          title: s.title,
          description: s.shortDescription,
          price: s.price,
          buttonText: s.buttonText,
        }));

        return (
          <ServiceSection
            key={category.id}
            title={category.title}
            services={cards}
          />
        );
      })}
    </>
  );
};

export default OurServices;
