import { Eye, Zap, Globe, MessageSquare, Package } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import styles from './About.module.css';

const values = [
  { icon: Eye, label: 'Transparency' },
  { icon: Zap, label: 'Speed' },
  { icon: Globe, label: 'Strong Global Network' },
  { icon: MessageSquare, label: 'Clear Communication' },
];

export default function About() {
  const headingRef = useReveal();
  const contentRef = useReveal({ threshold: 0.1 });
  const imageRef = useReveal({ threshold: 0.1 });

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.left} reveal`} ref={contentRef}>
          <span className="section-eyebrow">About Us</span>
          <h2 className={`section-heading ${styles.heading}`}>
            We're Not Just Freight Forwarders —<br />
            We're Logistics Problem-Solvers
          </h2>
          <p className={styles.body}>
            Founded in 2024 and headquartered in Karachi, Pakistan, 1st Link Logistics
            was built to serve the routes that others consider too complex or too risky.
            We combine deep regional knowledge with a global network of trusted partners
            to move cargo across the Middle East, Africa, and Asia — reliably, efficiently,
            and with full accountability at every step.
          </p>
          <p className={styles.body} style={{ marginTop: '16px' }}>
            From managing multi-leg shipments through Iraq's Umm Qasr port to coordinating
            breakbulk cargo for East Africa, our team has the experience, the relationships,
            and the resolve to deliver — when others stop, we begin.
          </p>

          <div className={styles.values}>
            {values.map(({ icon: Icon, label }) => (
              <div key={label} className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <Icon size={18} />
                </div>
                <span className={styles.valueLabel}>{label}</span>
              </div>
            ))}
          </div>

          <blockquote className={styles.quote}>
            "We don't just move cargo — we solve logistics challenges others avoid."
          </blockquote>
        </div>

        <div className={`${styles.right} reveal`} ref={imageRef}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
              alt="Freight and shipping operations"
              className={styles.mainImage}
              loading="lazy"
            />
            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>
                <Package size={20} />
              </div>
              <div>
                <div className={styles.floatingStat}>500+ Shipments</div>
                <div className={styles.floatingMeta}>Est. 2024 · Karachi, Pakistan</div>
              </div>
            </div>
            <div className={styles.establishedBadge}>
              Global Operations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
