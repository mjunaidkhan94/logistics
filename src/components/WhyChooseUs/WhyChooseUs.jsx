import { Route, Wrench, Clock, Network, TrendingDown, Shield } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import styles from './WhyChooseUs.module.css';

const cards = [
  {
    icon: Route,
    title: 'Expertise in Difficult Routes',
    body: "Specialized handling for Iraq, Iran corridor, and Africa-bound cargo — routes most forwarders won't touch.",
  },
  {
    icon: Wrench,
    title: 'Proven Problem-Solving',
    body: 'We manage detention issues, vessel delays, and port complications effectively, protecting your timeline and budget.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    body: "Your shipments don't wait — neither do we. Expect replies within hours and solutions within the day.",
  },
  {
    icon: Network,
    title: 'Reliable Global Network',
    body: 'Strong agents and partners across key trade lanes ensure seamless coordination from origin to destination.',
  },
  {
    icon: TrendingDown,
    title: 'Cost Control & Optimization',
    body: 'We minimize unnecessary charges, negotiate carrier rates, and protect your margins at every stage.',
  },
];

export default function WhyChooseUs() {
  const headingRef = useReveal();
  const gridRef = useReveal({ threshold: 0.08 });

  return (
    <section id="why" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`} ref={headingRef}>
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-heading">Built for Routes Others Won&apos;t Touch</h2>
          <p className="section-subtext" style={{ maxWidth: 540, margin: '16px auto 0' }}>
            Our competitive edge isn&apos;t just logistics expertise — it&apos;s the willingness to go where others stop.
          </p>
        </div>

        <div className={`${styles.grid} reveal`} ref={gridRef}>
          {cards.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}>
              <div className={styles.iconWrap}>
                <Icon size={22} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
              <div className={styles.hoverLine} />
            </div>
          ))}

          <div className={`${styles.card} ${styles.emphasisCard}`}>
            <div className={`${styles.iconWrap} ${styles.emphasisIcon}`}>
              <Shield size={24} />
            </div>
            <h3 className={styles.emphasisTitle}>Where Others Stop, We Begin</h3>
            <p className={styles.emphasisBody}>
              Our team understands port disruptions, detention disputes, and restricted trade routes.
              We provide practical solutions where others fail — because difficult routes are our specialty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
