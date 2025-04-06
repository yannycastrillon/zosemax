import { Link } from 'react-router-dom';
import ZosemaxLogoWhiteNoText from '@/assets/Logos/ZosemaxLogoWhiteNoText';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoContainer}>
            <ZosemaxLogoWhiteNoText className={styles.logoIcon} />
            <span className={styles.logoText}>ZOSEMAX</span>
          </div>
        </Link>

        <div className={styles.links}>
          <Link to="/services" className={styles.link}>Services</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};