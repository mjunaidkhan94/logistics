import { useState } from 'react';
import { AlertTriangle, Lightbulb, CheckCircle } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import styles from './Portfolio.module.css';

const cases = [
  {
    region: 'Middle East',
    color: '#C9882A',
    route: 'UAE → Iraq (Umm Qasr)',
    cargo: 'Industrial Machinery',
    challenge: 'Vessel delay due to geopolitical disruptions at port',
    solution: 'Alternate vessel planning + detention negotiation with carrier',
    result: 'Delivered on schedule with full cost control',
  },
  {
    region: 'Africa',
    color: '#0D9488',
    route: 'Dubai → East Africa',
    cargo: 'FMCG Containers',
    challenge: 'Tight schedule combined with port congestion',
    solution: 'Priority booking + real-time live tracking coordination',
    result: 'On-time delivery with zero delays',
  },
  {
    region: 'Asia',
    color: '#1A73E8',
    route: 'Pakistan → Middle East',
    cargo: 'General Cargo',
    challenge: 'Complex documentation and multi-agency compliance',
    solution: 'End-to-end documentation handling and liaison',
    result: 'Smooth, dispute-free execution',
  },
  {
    region: 'Asia',
    color: '#1A73E8',
    route: 'China → Iraq',
    cargo: 'Auto Parts',
    challenge: 'Multi-leg routing with cross-border permits required',
    solution: 'Pre-clearance documentation and route optimization',
    result: 'Zero detention charges, seamless delivery',
  },
  {
    region: 'Middle East',
    color: '#C9882A',
    route: 'UAE → Pakistan',
    cargo: 'Construction Materials',
    challenge: 'Overweight containers failing port compliance checks',
    solution: 'Breakbulk repackaging and weight redistribution',
    result: 'Compliant delivery, no penalties',
  },
  {
    region: 'Africa',
    color: '#0D9488',
    route: 'Saudi Arabia → Africa',
    cargo: 'Industrial Equipment',
    challenge: 'Limited carrier options on the trade lane',
    solution: 'NVOCC consolidation to secure competitive capacity',
    result: 'Cost-optimized, on-schedule delivery',
  },
];

const cargoTypes = [
  'Industrial Equipment',
  'FMCG Cargo',
  'Auto Parts',
  'Construction Materials',
  'Hazardous Goods',
  'Oversized Cargo',
  'General Freight',
];

const TABS = ['All', 'Middle East', 'Africa', 'Asia'];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const headingRef = useReveal();
  const stripRef = useReveal();

  const filtered = activeTab === 'All' ? cases : cases.filter((c) => c.region === activeTab);

  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`} ref={headingRef}>
          <span className="section-eyebrow">Our Portfolio</span>
          <h2 className="section-heading">Shipments That Prove Our Capability</h2>
          <p className="section-subtext" style={{ maxWidth: 480, margin: '16px auto 0' }}>
            Real challenges. Real solutions. Delivered.
          </p>
        </div>

        <div className={styles.filterTabs}>
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              <span className={styles.tabCount}>
                {tab === 'All' ? cases.length : cases.filter((c) => c.region === tab).length}
              </span>
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((c, i) => (
            <div key={`${c.route}-${i}`} className={styles.card}>
              <div className={styles.colorBar} style={{ background: c.color }} />
              <div className={styles.cardInner}>
                <div className={styles.routeRow}>
                  <span className={styles.routeIcon}>🚢</span>
                  <span className={styles.route}>{c.route}</span>
                </div>
                <span className={styles.cargoBadge}>{c.cargo}</span>
                <div className={styles.details}>
                  <div className={styles.detailRow}>
                    <AlertTriangle size={14} className={styles.iconWarning} />
                    <div>
                      <span className={styles.detailLabel}>Challenge: </span>
                      <span className={styles.detailText}>{c.challenge}</span>
                    </div>
                  </div>
                  <div className={styles.detailRow}>
                    <Lightbulb size={14} className={styles.iconInfo} />
                    <div>
                      <span className={styles.detailLabel}>Solution: </span>
                      <span className={styles.detailText}>{c.solution}</span>
                    </div>
                  </div>
                  <div className={styles.detailRow}>
                    <CheckCircle size={14} className={styles.iconSuccess} />
                    <div>
                      <span className={styles.detailLabel}>Result: </span>
                      <span className={`${styles.detailText} ${styles.resultText}`}>{c.result}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.deliveredBadge}>
                  <CheckCircle size={13} />
                  Delivered ✓
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.cargoStrip} reveal`} ref={stripRef}>
          <span className={styles.cargoStripLabel}>What We Handle:</span>
          <div className={styles.cargoChips}>
            {cargoTypes.map((type) => (
              <span key={type} className={styles.chip}>{type}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
