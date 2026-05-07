import { MessageCircle, Mail, MapPin, Anchor } from 'lucide-react';
import styles from './Footer.module.css';

const services = [
  'Freight Forwarding',
  'NVOCC Services',
  'Project Cargo',
  'Cross-Border Transport',
  'Customs Clearance',
];

const coverage = [
  'UAE',
  'Iraq',
  'Pakistan',
  'Africa',
  'Middle East',
  'Saudi Arabia',
];

const WHATSAPP_NUMBER = '923239255590';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}><Anchor size={18} /></div>
              <div>
                <div className={styles.logoMain}>1st Link</div>
                <div className={styles.logoSub}>Logistics</div>
              </div>
            </div>
            <p className={styles.tagline}>
              Reliable Freight Solutions Without Limits
            </p>
            <p className={styles.brandBody}>
              Specialized in complex and high-risk freight forwarding across
              the Middle East, Africa, and Asia. Iraq corridor experts since 2024.
            </p>
            <div className={styles.socials}>
              <a
                href="#"
                className={styles.socialIcon}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="#"
                className={styles.socialIcon}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className={styles.link} onClick={(e) => handleNavClick(e, '#services')}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Coverage</h4>
            <ul className={styles.linkList}>
              {coverage.map((c) => (
                <li key={c}>
                  <a href="#coverage" className={styles.link} onClick={(e) => handleNavClick(e, '#coverage')}>
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactList}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20need%20a%20freight%20quote`}
                className={styles.contactItem}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={15} className={styles.contactIcon} />
                +92 323 9255590
              </a>
              <div className={styles.contactItem}>
                <Mail size={15} className={styles.contactIcon} />
                inquiry@1stlinklogistics.com
              </div>
              <div className={styles.contactItem}>
                <MapPin size={15} className={styles.contactIcon} />
                Karachi, Pakistan
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>© 2024 1st Link Logistics. All rights reserved.</span>
          <span className={styles.bottomRight}>Karachi, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
