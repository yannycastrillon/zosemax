import { useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckCircle, ChevronLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getServiceBySlug, serviceCategories } from '@/data/services';
import { SERVICE_AREA_NAMES_COMMA } from '@/data/site';
import { Button } from '@/components/ui/Button/Button';
import ServiceCard from '@/components/Services/Sections/ServiceCard';
import type { ServiceCardProps } from '@/components/Services/Sections/ServiceCard';
import styles from './ServiceDetailPage.module.scss';

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  // Drag-to-scroll for gallery
  const galleryRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragging, setDragging] = useState(false);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!galleryRef.current) return;
    isDragging.current = true;
    setDragging(true);
    startX.current = e.pageX - galleryRef.current.offsetLeft;
    scrollLeft.current = galleryRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    galleryRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    setDragging(false);
  };

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Category
  const category = serviceCategories.find((c) => c.slug === service.categorySlug);

  // Related services: up to 3 others from the same category
  const relatedCards: ServiceCardProps[] = (category?.services ?? [])
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3)
    .map((s) => ({
      slug: s.slug,
      imageUrl: s.imageUrl,
      altText: s.title,
      title: s.title,
      description: s.shortDescription,
      price: s.price,
      buttonText: s.buttonText,
    }));

  return (
    <div className={styles.page}>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <img
          src={service.imageUrl}
          alt={service.title}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={cn('container', styles.heroContent)}>
          <Link to="/services" className={styles.breadcrumb}>
            <ChevronLeft size={16} />
            {category?.title ?? 'Services'}
          </Link>
          <h1 className={styles.heroTitle}>{service.title}</h1>
          <p className={styles.heroPrice}>{service.price}</p>
          <Button asChild variant="getQuoteButton" className={styles.heroBtn}>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* ── Details ──────────────────────────────────────────────────── */}
      <section className={styles.details}>
        <div className={cn('container', styles.detailsInner)}>
          {/* Left: description + features */}
          <div className={styles.detailsMain}>
            <h2 className={styles.detailsHeading}>About this service</h2>
            <p className={styles.detailsDescription}>{service.fullDescription}</p>

            <h3 className={styles.featuresHeading}>What's included</h3>
            <ul className={styles.featuresList}>
              {service.features.map((feature, i) => (
                <li key={i} className={styles.featuresItem}>
                  <CheckCircle size={18} className={styles.featuresIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: sticky price card */}
          <aside className={styles.priceCard}>
            <p className={styles.priceCardLabel}>Starting at</p>
            <p className={styles.priceCardPrice}>{service.price}</p>
            <p className={styles.priceCardNote}>
              Final price depends on scope, materials, and site conditions. Contact us for a free,
              no-obligation estimate.
            </p>
            <div className={styles.priceCardActions}>
              <Button asChild variant="getQuoteButton" className={styles.priceCardBtn}>
                <Link to="/contact">
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="contactButton" className={styles.priceCardBtn}>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      {service.images.length > 0 && (
        <section className={styles.gallery}>
          <div className="container">
            <h2 className={styles.galleryHeading}>Project Gallery</h2>
            <p className={styles.galleryHint}>Drag to explore</p>
          </div>
          <div
            ref={galleryRef}
            className={cn(styles.galleryStrip, dragging && styles.galleryStripDragging)}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            {/* Padding element to start flush with container */}
            <div className={styles.galleryPadding} />
            {service.images.map((src, i) => (
              <div key={i} className={styles.galleryItem}>
                <img
                  src={src}
                  alt={`${service.title} — image ${i + 1}`}
                  className={styles.galleryImg}
                  draggable={false}
                />
              </div>
            ))}
            <div className={styles.galleryPadding} />
          </div>
        </section>
      )}

      {/* ── Related services ─────────────────────────────────────────── */}
      {relatedCards.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <h2 className={styles.relatedHeading}>Related Services</h2>
            <div className={styles.relatedGrid}>
              {relatedCards.map((card) => (
                <ServiceCard key={card.slug} {...card} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA banner ───────────────────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to get started?</h2>
            <p className={styles.ctaText}>
              Serving {SERVICE_AREA_NAMES_COMMA}.
            </p>
            <Button asChild variant="contactButton">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
