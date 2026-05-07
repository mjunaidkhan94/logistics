import { useReveal } from '../../hooks/useReveal';
import styles from './Coverage.module.css';

const regions = [
  {
    flag: '🇦🇪',
    name: 'UAE',
    highlight: 'Key Hub',
    countries: ['Dubai', 'Sharjah', 'Abu Dhabi', 'Jebel Ali Port'],
  },
  {
    flag: '🇮🇶',
    name: 'Iraq',
    highlight: 'Corridor Specialist',
    countries: ['Umm Qasr', 'Baghdad', 'Basra'],
  },
  {
    flag: '🇵🇰',
    name: 'Pakistan',
    highlight: 'Home Base',
    countries: ['Karachi', 'Port Qasim', 'Lahore'],
  },
  {
    flag: '🌍',
    name: 'Africa',
    highlight: 'Growing Coverage',
    countries: ['Kenya', 'Tanzania', 'Ethiopia', 'Djibouti', 'Nigeria'],
  },
  {
    flag: '🌐',
    name: 'Middle East',
    highlight: 'Full Coverage',
    countries: ['Saudi Arabia', 'Kuwait', 'Oman', 'Bahrain', 'Jordan'],
  },
];

export default function Coverage() {
  const headingRef = useReveal();
  const gridRef = useReveal({ threshold: 0.08 });
  const statsRef = useReveal();

  return (
    <section id="coverage" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`} ref={headingRef}>
          <span className={styles.eyebrow}>Our Coverage</span>
          <h2 className={styles.heading}>Global Reach, Regional Expertise</h2>
          <p className={styles.subtext}>
            Deep knowledge of the trade lanes that matter most.
          </p>
        </div>

        <div className={`${styles.grid} reveal`} ref={gridRef}>
          {regions.map((region, i) => (
            <div key={region.name} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.flagRow}>
                <span className={styles.flag}>{region.flag}</span>
                <span className={styles.highlight}>{region.highlight}</span>
              </div>
              <h3 className={styles.regionName}>{region.name}</h3>
              <ul className={styles.countriesList}>
                {region.countries.map((c) => (
                  <li key={c} className={styles.countryItem}>
                    <span className={styles.dot}>·</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`${styles.statsStrip} reveal`} ref={statsRef}>
          <span className={styles.statsIcon}>🌐</span>
          <span className={styles.statsText}>
            Operating across <strong>15+ countries</strong> and <strong>20+ major sea ports</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
