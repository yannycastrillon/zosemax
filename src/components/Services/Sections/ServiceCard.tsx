import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './ServiceCard.module.scss';

export interface ServiceCardProps {
  slug: string;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  price: string;
  buttonText: 'Get a Quote' | 'COMING SOON';
}

const ServiceCard = ({ slug, imageUrl, altText, title, description, price, buttonText }: ServiceCardProps) => {
  const isComingSoon = buttonText === 'COMING SOON';

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={altText} className={styles.image} loading="lazy" />
        {isComingSoon && (
          <div className={styles.comingSoonBadge}>Coming Soon</div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>

          <div className={styles.actions}>
            {isComingSoon ? (
              <Button variant="outline" disabled className={styles.disabledButton}>
                Coming Soon
              </Button>
            ) : (
              <>
                <Button asChild variant="getQuoteButton">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Link to={`/services/${slug}`} className={styles.detailsLink}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
