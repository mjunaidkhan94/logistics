import { Ship, Box, Package, Truck, FileCheck } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import styles from './Services.module.css';

const services = [
  {
    icon: Ship,
    title: 'Freight Forwarding',
    desc: 'Sea, air, and land freight solutions tailored to your cargo needs — from FCL to LCL and everything in between.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Box,
    title: 'NVOCC Services',
    desc: 'Flexible container solutions with reliable carrier partnerships and competitive rates across major trade lanes.',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Package,
    title: 'Project & Breakbulk Cargo',
    desc: 'Handling oversized and heavy cargo with precision planning, specialized equipment, and experienced project teams.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Truck,
    title: 'Cross-Border Transportation',
    desc: 'Smooth movement across regional borders — Iraq, Iran, and Africa corridors — with full end-to-end coordination.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance',
    desc: 'Efficient documentation, compliance support, and clearance handling at all major ports with zero surprises.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Services() {
  const headingRef = useReveal();
  const gridRef = useReveal({ threshold: 0.06 });

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`} ref={headingRef}>
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-heading">End-to-End Freight Solutions</h2>
          <p className="section-subtext" style={{ maxWidth: 520, margin: '16px auto 0' }}>
            From port to door, we manage every stage of your shipment with precision and accountability.
          </p>
        </div>

        <div className={`${styles.grid} reveal`} ref={gridRef}>
          {services.map(({ icon: Icon, title, desc, image }, i) => (
            <div key={title} className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}>
              <div className={styles.imageWrap}>
                <img src={image} alt={title} className={styles.cardImage} loading="lazy" />
                <div className={styles.iconBadge}>
                  <Icon size={18} />
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
                <a href="#contact" className={styles.learnMore} onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Get a Quote →
                </a>
              </div>
            </div>
          ))}

          <div className={`${styles.card} ${styles.ctaCard}`}>
            <h3 className={styles.ctaTitle}>Need a custom logistics solution?</h3>
            <p className={styles.ctaDesc}>
              Every shipment is unique. Tell us your challenge — we'll build the solution.
            </p>
            <a
              href="#contact"
              className={styles.ctaBtn}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Talk to Our Team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
