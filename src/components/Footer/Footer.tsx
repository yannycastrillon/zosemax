import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import ZosemaxLogoWhiteNoText from '@/assets/Logos/ZosemaxLogoWhiteNoText';
import { CONTACT, SERVICE_AREAS, COMPANY, SOCIALS } from '@/data/site';
import styles from './Footer.module.scss';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>

          {/* Brand column */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logoLink}>
              <ZosemaxLogoWhiteNoText className={styles.logoIcon} />
              <span className={styles.logoText}>ZOSEMAX</span>
            </Link>
            <p className={styles.tagline}>{COMPANY.tagline}</p>
            <div className={styles.socials}>
              {SOCIALS.map(({ platform, url, label }) => (
                <a key={platform} href={url} aria-label={label} className={styles.socialLink}>
                  {platform === 'instagram' ? <Instagram size={18} /> : <Facebook size={18} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Quick Links</h4>
            <ul className={styles.colList}>
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={styles.colLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Service Areas</h4>
            <ul className={styles.colList}>
              {SERVICE_AREAS.map(({ code, name }) => (
                <li key={code} className={styles.areaItem}>{name}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <a href={`tel:${CONTACT.phone.tel}`} className={styles.contactItem}>
                  <Phone size={15} />
                  {CONTACT.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className={styles.contactItem}>
                  <Mail size={15} />
                  {CONTACT.email}
                </a>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={15} className={styles.contactIcon} />
                {CONTACT.location}
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>© {year} {COMPANY.legalName}. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link to="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link to="/terms" className={styles.legalLink}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
