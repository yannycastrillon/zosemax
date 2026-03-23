import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import ZosemaxLogoWhiteNoText from '@/assets/Logos/ZosemaxLogoWhiteNoText';
import { CONTACT } from '@/data/site';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoContainer}>
            <ZosemaxLogoWhiteNoText className={styles.logoIcon} />
            <span className={styles.logoText}>ZOSEMAX</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className={styles.desktopLinks}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`${styles.link} ${location.pathname === to ? styles.linkActive : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop: phone + CTA | Mobile: hamburger */}
        <div className={styles.navRight}>
          <a href={`tel:${CONTACT.phone.tel}`} className={styles.phoneLink}>
            <Phone size={15} strokeWidth={2.5} />
            <span>{CONTACT.phone.display}</span>
          </a>
          <Link to="/contact" className={styles.quoteBtn}>Get a Quote</Link>

          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile slide-over menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        {/* Phone prominently at top */}
        <a href={`tel:${CONTACT.phone.tel}`} className={styles.mobilePhone}>
          <Phone size={18} strokeWidth={2.5} />
          {CONTACT.phone.display}
        </a>

        <nav className={styles.mobileNav}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`${styles.mobileLink} ${location.pathname === to ? styles.mobileLinkActive : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className={styles.mobileQuoteBtn} onClick={() => setIsOpen(false)}>
          Get a Free Quote
        </Link>
      </div>
    </header>
  );
};
