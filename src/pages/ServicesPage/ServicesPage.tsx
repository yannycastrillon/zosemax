import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import OurServices from '@/components/Services/OurServices';
import { Button } from '@/components/ui/Button/Button';
import { SERVICE_AREA_NAMES_COMMA } from '@/data/site';
import styles from './ServicesPage.module.scss';

export const ServicesPage = () => {
  return (
    <div className={styles.page}>
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>What we do</p>
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.heroSubtitle}>
              From classic wood-burning fireplaces to contemporary gas inserts and outdoor living
              features — we bring expert craftsmanship to every project across {SERVICE_AREA_NAMES_COMMA}.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className={styles.content}>
        <div className={cn('container', styles.contentInner)}>
          <OurServices />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Space?</h2>
            <p className={styles.ctaText}>
              Contact us today for a free consultation and estimate.
            </p>
            <div className={styles.ctaButtons}>
              <Button asChild variant="getQuoteButton">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="contactButton">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
