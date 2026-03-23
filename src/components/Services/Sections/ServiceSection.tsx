import { useRef, useState, useCallback } from 'react';
import ServiceCard from './ServiceCard';
import type { ServiceCardProps } from './ServiceCard';
import styles from './ServiceSection.module.scss';

interface ServiceSectionProps {
  title: string;
  services: ServiceCardProps[];
}

const ServiceSection = ({ title, services }: ServiceSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / offsetWidth);
    setActiveIndex(Math.max(0, Math.min(index, services.length - 1)));
  }, [services.length]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * scrollRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      {/* Desktop: 3-col grid */}
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
      </div>

      {/* Mobile: snap carousel */}
      <div
        ref={scrollRef}
        className={styles.carousel}
        onScroll={handleScroll}
      >
        {services.map((service) => (
          <div key={service.slug} className={styles.carouselItem}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      {/* Dots — mobile only */}
      {services.length > 1 && (
        <div className={styles.dots} aria-hidden="true">
          {services.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ServiceSection;
