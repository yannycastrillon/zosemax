// ── Interfaces ────────────────────────────────────────────────────────────────

export interface ContactPhone {
  display: string;
  tel: string;
}

export interface ContactInfo {
  phone: ContactPhone;
  email: string;
  location: string;
}

export interface ServiceArea {
  code: string;
  name: string;
  note: string;
}

export interface BusinessHours {
  weekday: string;
  weekend: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  foundedYear: number;
}

// ── Constants ─────────────────────────────────────────────────────────────────

export const CONTACT: ContactInfo = {
  phone: {
    display: '(908) 400-2723',
    tel: '9084002723',
  },
  email: 'contact@zosemax.com',
  location: 'Northern New Jersey',
};

export const SERVICE_AREAS: ServiceArea[] = [
  { code: 'NJ', name: 'New Jersey', note: 'Primary service area' },
  { code: 'PA', name: 'Pennsylvania', note: 'Eastern Pennsylvania' },
  { code: 'NY', name: 'New York', note: 'Upstate New York' },
];

export const HOURS: BusinessHours = {
  weekday: 'Mon \u2013 Fri: 8:00 AM \u2013 6:00 PM',
  weekend: 'Sat: 9:00 AM \u2013 3:00 PM',
};

export const SOCIALS: SocialLink[] = [
  { platform: 'instagram', url: '#', label: 'Instagram' },
  { platform: 'facebook', url: '#', label: 'Facebook' },
];

export const COMPANY: CompanyInfo = {
  name: 'Zosemax',
  legalName: 'Zosemax Fireplaces',
  tagline: `Fireplace & chimney specialists serving NJ, PA & NY since 2012.`,
  foundedYear: 2012,
};

// ── Derived helpers ───────────────────────────────────────────────────────────

/** Dot-separated abbreviations: "NJ \u00b7 PA \u00b7 NY" */
export const SERVICE_AREA_CODES_DOT = SERVICE_AREAS.map((a) => a.code).join(' \u00b7 ');

/** Comma-separated full names with "and": "New Jersey, Pennsylvania, and New York" */
export const SERVICE_AREA_NAMES_COMMA = SERVICE_AREAS.map((a, i, arr) =>
  i === arr.length - 1 ? `and ${a.name}` : a.name,
).join(', ');

/** Ampersand-separated abbreviations: "NJ, PA & NY" */
export const SERVICE_AREA_CODES_AMP = SERVICE_AREAS.map((a, i, arr) =>
  i === arr.length - 1 ? `& ${a.code}` : a.code,
).join(', ').replace(', &', ' &');
