import { MessageCircle, ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

const tags = [
  'Freight Forwarding',
  'NVOCC Operations',
  'Project & Breakbulk',
  'Cross-Border Experts',
];

const trustBadges = [
  { num: '20+', label: 'Trade Routes Served' },
  { num: '500+', label: 'Shipments Handled' },
  { num: '98%', label: 'On-Time Rate' },
];

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span>✦</span>
          Specialized Freight Forwarding
        </div>

        <h1 className={styles.headline}>
          Reliable Freight Solutions<br />
          <span className={styles.highlight}>Without Limits</span>
        </h1>

        <p className={styles.subheadline}>
          We specialize in complex, high-risk, and time-sensitive shipments across
          the Middle East, Africa, and Asia — delivering with precision and accountability.
        </p>

        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              ✓ {tag}
            </span>
          ))}
        </div>

        <div className={styles.ctas}>
          <a
            href="#contact"
            className={styles.btnPrimary}
            onClick={(e) => handleScroll(e, '#contact')}
          >
            Get a Quote Now
          </a>
          <a
            href="https://wa.me/923239255590?text=Hi,%20I%20need%20a%20freight%20quote"
            className={styles.btnSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className={styles.trustStrip}>
        <div className={`container ${styles.trustInner}`}>
          {trustBadges.map((badge, i) => (
            <div key={badge.label} className={styles.trustItem}>
              {i > 0 && <span className={styles.divider}>|</span>}
              <span className={styles.trustNum}>{badge.num}</span>
              <span className={styles.trustLabel}>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className={styles.scrollHint} onClick={(e) => handleScroll(e, '#about')}>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
