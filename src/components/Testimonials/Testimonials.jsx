import { useReveal } from '../../hooks/useReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote:
      "1st Link handled our Iraq shipment when three other forwarders refused. They delivered on time and under budget — a genuinely rare combination.",
    name: 'Ahmed Al-Rashid',
    role: 'Trading Director',
    company: 'Gulf Import Co.',
    initials: 'AA',
  },
  {
    quote:
      "Their team navigated port congestion in Karachi like true professionals. Real communication, no surprises, and a result we could count on.",
    name: 'Tariq Mahmood',
    role: 'Supply Chain Manager',
    company: 'FMCG Exports Ltd.',
    initials: 'TM',
  },
  {
    quote:
      "Documentation, clearance, cross-border — they managed everything end-to-end. I didn't have to follow up once. That's the definition of true partnership.",
    name: 'Hassan Al-Farsi',
    role: 'Operations Head',
    company: 'Dubai Cargo Partners',
    initials: 'HA',
  },
];

const stars = Array(5).fill('★');

export default function Testimonials() {
  const headingRef = useReveal();
  const gridRef = useReveal({ threshold: 0.1 });

  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`} ref={headingRef}>
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-heading">Trusted by Traders &amp; Exporters</h2>
        </div>

        <div className={`${styles.grid} reveal`} ref={gridRef}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.openQuote}>&ldquo;</div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.bottom}>
                <div className={styles.avatar}>{t.initials}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>
                    {t.role}, {t.company}
                  </div>
                  <div className={styles.stars}>
                    {stars.map((s, j) => (
                      <span key={j} className={styles.star}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
