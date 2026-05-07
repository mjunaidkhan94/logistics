import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Anchor } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, '#hero')}>
          <div className={styles.logoIcon}>
            <Anchor size={18} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>1st Link</span>
            <span className={styles.logoSub}>Logistics</span>
          </div>
        </a>

        <nav className={`${styles.navLinks} ${mobileOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <a
              href="https://wa.me/923239255590?text=Hi,%20I%20need%20a%20freight%20quote"
              className={styles.btnWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
            <a href="#contact" className={styles.btnQuote} onClick={(e) => handleNavClick(e, '#contact')}>
              Get a Quote
            </a>
          </div>
        </nav>

        <div className={styles.desktopActions}>
          <a
            href="https://wa.me/923239255590?text=Hi,%20I%20need%20a%20freight%20quote"
            className={styles.btnWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
          <a href="#contact" className={styles.btnQuote} onClick={(e) => handleNavClick(e, '#contact')}>
            Get a Quote
          </a>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
