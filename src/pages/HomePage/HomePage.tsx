import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Images
import FireplaceWoodBurningImg from "@/assets/pages/HomePage/header/FireplaceWoodBurningImg";
import ContactFireplaceHouseChairImg from "@/assets/pages/ContactsPage/ContactFireplaceHouseChairImg";

// Choose Us Images
import FireplaceFirstImg from "@/assets/pages/HomePage/ChooseUs/FireplaceFirstImg";
import FireplaceSecondImg from "@/assets/pages/HomePage/ChooseUs/FireplaceSecondImg";
import FireplaceThirdColumnImg from "@/assets/pages/HomePage/ChooseUs/FireplaceThirdColumnImg";

// Icons
import FireplaceIcon from "@/assets/pages/HomePage/icons/FireplaceIcon";
import DoorIcon from "@/assets/pages/HomePage/icons/DoorIcon";
import HouseIcon from "@/assets/pages/HomePage/icons/HouseIcon";

// Components
import { Button } from "@/components/ui/Button/Button";
import { TrustBar } from "@/components/TrustBar/TrustBar";
import { CONTACT, SERVICE_AREA_CODES_DOT, SERVICE_AREA_CODES_AMP } from "@/data/site";

import styles from "./HomePage.module.scss";

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Free In-Home Estimate',
    description: 'We visit your home, assess your space, and give you a clear written quote — no obligation, no pressure.',
  },
  {
    step: '02',
    title: 'Custom Installation',
    description: 'Our certified team handles everything from permits to final installation, typically completed in 1–2 days.',
  },
  {
    step: '03',
    title: 'Enjoy the Warmth',
    description: 'We walk you through your new fireplace, clean up completely, and back every job with our workmanship guarantee.',
  },
];

export const HomePage = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  const services = [
    {
      component: <FireplaceIcon />,
      title: "Fireplace Installations",
      description: "Gas inserts, wood stoves, fire logs, and custom surrounds.",
    },
    {
      component: <DoorIcon />,
      title: "Service Doors & Mantels",
      description: "Custom designs to complement your space.",
    },
    {
      component: <HouseIcon />,
      title: "Outdoor Living Features",
      description: "Fire pits, pizza ovens, and high-end grills.",
    },
  ];

  const benefits = [
    {
      title: "NFI-Certified Installers",
      description: "Every installation is performed by National Fireplace Institute-certified technicians.",
    },
    {
      title: `Licensed & Insured in ${SERVICE_AREA_CODES_AMP}`,
      description: "Fully licensed contractors with comprehensive liability coverage in every state we serve.",
    },
    {
      title: "1–2 Day Installation",
      description: "Most fireplaces are fully installed in one to two days with zero mess left behind.",
    },
  ];

  return (
    <div className={styles.home}>

      {/* ── Seasonal urgency banner ─────────────────────────────────────────── */}
      {bannerVisible && (
        <div className={styles.seasonalBanner}>
          <p className={styles.seasonalText}>
            <strong>Spring Special:</strong> Book your fireplace inspection or installation now — slots fill fast before summer.{' '}
            <Link to="/contact" className={styles.seasonalLink}>Reserve your date →</Link>
          </p>
          <button
            className={styles.seasonalDismiss}
            onClick={() => setBannerVisible(false)}
            aria-label="Dismiss banner"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={cn("container", styles.heroContainer)}>
          <FireplaceWoodBurningImg className={styles.heroImage} alt="Modern fireplace installation" />
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Serving {SERVICE_AREA_CODES_DOT}</p>
            <h1 className={styles.title}>
              NJ's Trusted Fireplace & Chimney Specialists
            </h1>
            <p className={styles.subTitle}>
              From custom indoor fireplaces to outdoor fire pits and chimney repairs — our certified team installs it right the first time.
            </p>
            <div className={styles.heroCtas}>
              <Button asChild variant="getQuoteButton">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Link to="/services" className={styles.heroSecondaryBtn}>
                View Our Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ───────────────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── Our Services ────────────────────────────────────────────────────── */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.servicesCard}>
            <h2>Our Services</h2>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={index} className={styles.servicesItem}>
                  <div className={styles.servicesIcon}>
                    {service.component}
                  </div>
                  <h3 className={styles.servicesTitle}>{service.title}</h3>
                  <p className={styles.servicesDescription}>{service.description}</p>
                </div>
              ))}
            </div>
            <Link to="/services" className={styles.servicesViewAll}>
              View all services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────────────── */}
      <section className={styles.howItWorks}>
        <div className="container">
          <p className={styles.sectionEyebrow}>Simple process</p>
          <h2 className={styles.sectionHeading}>From Estimate to Fire in 3 Steps</h2>
          <div className={styles.howGrid}>
            {HOW_IT_WORKS.map(({ step, title, description }, i) => (
              <div key={step} className={styles.howItem}>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className={styles.howConnector} aria-hidden="true" />
                )}
                <div className={styles.howStepNumber}>{step}</div>
                <h3 className={styles.howTitle}>{title}</h3>
                <p className={styles.howDesc}>{description}</p>
              </div>
            ))}
          </div>
          <div className={styles.howCta}>
            <Button asChild variant="getQuoteButton">
              <Link to="/contact">Start With a Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Choose Us ───────────────────────────────────────────────────────── */}
      <section className={styles.about}>
        <div className={cn("container", styles.aboutContainer)}>
          <div className={styles.aboutContent}>
            <h2>Your One-Stop Shop for Fireplace Solutions Designed for Modern Living</h2>
            <p className={styles.aboutContentDescription}>
              With over a decade of experience in fireplace and outdoor living
              installations across {CONTACT.location}, we specialize in creating
              stunning and functional fire features. Whether you're looking for a
              traditional wood stove, a modern gas insert, or a stylish outdoor
              grill, our certified team delivers top-quality craftsmanship every time.
            </p>
            <h3>Why Choose Us?</h3>
            <div className={styles.benefits}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefit}>
                  <CheckCircleIcon className={styles.benefitIcon} />
                  <div className={styles.benefitContent}>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.aboutImages}>
            <div className={styles.aboutImageContainerOneTwo}>
              <FireplaceFirstImg className={styles.aboutImage1} alt="Modern fireplace design" />
              <FireplaceSecondImg className={styles.aboutImage2} alt="Custom fireplace installation" />
            </div>
            <div className={styles.aboutImageContainerThree}>
              <FireplaceThirdColumnImg className={styles.aboutImage3} alt="Outdoor fire feature" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Gallery ──────────────────────────────────────────────────── */}
      <section className={styles.gallery}>
        <div className="container">
          <p className={styles.sectionEyebrow}>Our work</p>
          <h2 className={styles.sectionHeading}>Recent Projects</h2>
          <p className={styles.gallerySubtitle}>
            Every fireplace we install is built to last and designed to impress.
          </p>
        </div>
        <div className={styles.galleryStrip}>
          <div className={styles.galleryItem}>
            <FireplaceFirstImg className={styles.galleryImage} alt="Custom wood-burning fireplace" />
          </div>
          <div className={styles.galleryItem}>
            <FireplaceWoodBurningImg className={styles.galleryImage} alt="Modern gas fireplace insert" />
          </div>
          <div className={styles.galleryItem}>
            <FireplaceSecondImg className={styles.galleryImage} alt="Built-in fireplace with stone surround" />
          </div>
          <div className={styles.galleryItem}>
            <FireplaceThirdColumnImg className={styles.galleryImage} alt="Outdoor fire feature" />
          </div>
          <div className={styles.galleryItem}>
            <ContactFireplaceHouseChairImg className={styles.galleryImage} alt="Cozy living room fireplace" />
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={cn("container", styles.ctaContactsContainer)}>
          <ContactFireplaceHouseChairImg className={styles.ctaImage} alt="Luxury fireplace installation" />
          <div className={styles.ctaCard}>
            <h2>Ready to upgrade your space?</h2>
            <p>Call us today or request a free estimate!</p>
            <div className={styles.ctaButtons}>
              <Button asChild variant="contactButton">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="link" className={styles.customContactAllServicesLink}>
                <Link to="/services">See All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
