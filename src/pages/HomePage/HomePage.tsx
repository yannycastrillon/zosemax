import { Link } from "react-router-dom";
import { CheckCircleIcon } from "lucide-react";
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

import styles from "./HomePage.module.scss";

export const HomePage = () => {
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
      title: "Experienced Professionals",
      description: "Skilled technicians ensuring flawless installations.",
    },
    {
      title: "Top-Quality Materials",
      description: "Durable, stylish, and built to last.",
    },
    {
      title: "Seamless Process",
      description: "From consultation to final setup, we handle everything.",
    },
  ];

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={cn("container", styles.heroContainer)}>
          <FireplaceWoodBurningImg className={styles.heroImage} alt="Modern fireplace installation" />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Elevate Your Home with Expert Fireplace Installations</h1>
            <p className={styles.subTitle}>
              From cozy fireplaces to outdoor fire pits and custom grills, we
              bring warmth and style to your space with professional
              installation services.
            </p>
            <Button asChild variant="getQuoteButton">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
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
          </div>
        </div>
      </section>

      {/* Choose Us section */}
      <section className={styles.about}>
        <div className={cn("container", styles.aboutContainer)}>
          <div className={styles.aboutContent}>
            <h2>Your One-Stop Shop for Fireplace Solutions Designed for Modern Living</h2>
            <p className={styles.aboutContentDescription}>
              With years of experience in fireplace and outdoor living
              installations, we specialize in creating stunning and functional
              fire features. Whether you're looking for a traditional wood
              stove, a modern gas insert, or a stylish outdoor grill, our
              expert team ensures top-quality craftsmanship and hassle-free
              service.
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
              <FireplaceSecondImg className={styles.aboutImage2} alt="Custom fireplace installation"/>
            </div>
            <div className={styles.aboutImageContainerThree}>
              <FireplaceThirdColumnImg className={styles.aboutImage3} alt="Outdoor fire feature"/>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className={styles.cta}>
        <div className={cn("container", styles.ctaContactsContainer)}>
          <ContactFireplaceHouseChairImg className={styles.ctaImage} alt="Luxury fireplace installation"/>
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
}