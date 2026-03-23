import { useState, FormEvent } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import ContactFireplaceHouseChairImg from '@/assets/pages/ContactsPage/ContactFireplaceHouseChairImg';
import { CONTACT, SERVICE_AREAS, HOURS, SERVICE_AREA_CODES_AMP } from '@/data/site';
import styles from './ContactPage.module.scss';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormValues = { name: '', email: '', phone: '', message: '' };

export const ContactPage = () => {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormValues> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <div className={styles.page}>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>Get in touch</p>
          <h1 className={styles.heroTitle}>Let's Talk Warmth</h1>
          <p className={styles.heroSubtitle}>
            Ready to upgrade your home with a beautiful fireplace or outdoor feature?
            We serve homeowners across {SERVICE_AREA_CODES_AMP}. Reach out for a free, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* ── Contact grid ──────────────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <div className={cn('container', styles.contactGrid)}>

          {/* Left: info column (desktop only) */}
          <div className={styles.infoCol}>
            <h2 className={styles.infoHeading}>Contact Information</h2>

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}><Phone size={20} /></div>
                <div>
                  <p className={styles.infoLabel}>Phone</p>
                  <a href={`tel:${CONTACT.phone.tel}`} className={styles.infoValue}>
                    {CONTACT.phone.display}
                  </a>
                </div>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail size={20} /></div>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <a href={`mailto:${CONTACT.email}`} className={styles.infoValue}>
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}><Clock size={20} /></div>
                <div>
                  <p className={styles.infoLabel}>Business Hours</p>
                  <p className={styles.infoValue}>{HOURS.weekday}</p>
                  <p className={styles.infoValueSub}>{HOURS.weekend}</p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}><MapPin size={20} /></div>
                <div>
                  <p className={styles.infoLabel}>Based in</p>
                  <p className={styles.infoValue}>{CONTACT.location}</p>
                </div>
              </li>
            </ul>

            <div className={styles.infoNote}>
              <p>
                We typically respond within <strong>1 business day</strong>. For urgent inquiries
                please call us directly.
              </p>
            </div>
          </div>

          {/* Right: orange form card */}
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successMessage}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>Message Sent!</h3>
                <p>
                  Thanks for reaching out. We'll get back to you within 1 business day to discuss
                  your project.
                </p>
                <button
                  className={styles.successBtn}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className={styles.cardTitle}>Contact us</h2>

                <p className={styles.cardInfo}>
                  Need assistance? Send us a message, call us at{' '}
                  <a href={`tel:${CONTACT.phone.tel}`} className={styles.cardInfoLink}>
                    {CONTACT.phone.display}
                  </a>
                  , or email us at{' '}
                  <a href={`mailto:${CONTACT.email}`} className={styles.cardInfoLink}>
                    {CONTACT.email}
                  </a>
                  —we're happy to help!
                </p>

                <p className={styles.cardBooking}>
                  Ready to book?{' '}
                  <a href="#" className={styles.cardBookingLink}>Secure a date with us</a>
                </p>

                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.formGroup}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className={cn(styles.input, errors.name && styles.inputError)}
                    />
                    {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={cn(styles.input, errors.email && styles.inputError)}
                    />
                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className={cn(styles.input, styles.textarea, errors.message && styles.inputError)}
                    />
                    {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send message
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>

      {/* ── Prominent image — full bleed ──────────────────────────────── */}
      <div className={styles.imageSection}>
        <ContactFireplaceHouseChairImg className={styles.image} alt="Cozy fireplace living room" />
        <div className={styles.imageOverlay} />
      </div>

      {/* ── Service areas: NJ · PA · NY ───────────────────────────────── */}
      <section className={styles.areas}>
        <div className="container">
          <h2 className={styles.areasHeading}>Where We Serve</h2>
          <p className={styles.areasSubtitle}>
            We proudly serve homeowners across three states in the Northeast.
          </p>
          <div className={styles.areasGrid}>
            {SERVICE_AREAS.map(({ code, name, note }) => (
              <div key={code} className={styles.areaCard}>
                <span className={styles.areaState}>{code}</span>
                <p className={styles.areaName}>{name}</p>
                <p className={styles.areaNote}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
