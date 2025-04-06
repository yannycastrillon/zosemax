import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>Copyright © All rights reserved</p>
        <div className={styles.links}>
          <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
          <Link to="/terms" className={styles.link}>Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
};