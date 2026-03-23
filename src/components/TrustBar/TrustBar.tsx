import { Star, ShieldCheck, Award, Flame } from 'lucide-react';
import { SERVICE_AREA_CODES_DOT } from '@/data/site';
import styles from './TrustBar.module.scss';

const TRUST_ITEMS = [
  {
    icon: <Star size={16} fill="currentColor" />,
    value: '4.9★',
    label: 'Google Reviews',
  },
  {
    icon: <ShieldCheck size={16} />,
    value: 'Licensed & Insured',
    label: SERVICE_AREA_CODES_DOT,
  },
  {
    icon: <Award size={16} />,
    value: 'NFI Certified',
    label: 'Installers',
  },
  {
    icon: <Flame size={16} />,
    value: '500+',
    label: 'Fireplaces Installed',
  },
];

export const TrustBar = () => (
  <div className={styles.bar}>
    <div className={styles.inner}>
      {TRUST_ITEMS.map(({ icon, value, label }) => (
        <div key={label} className={styles.item}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.value}>{value}</span>
          <span className={styles.label}>{label}</span>
        </div>
      ))}
    </div>
  </div>
);
