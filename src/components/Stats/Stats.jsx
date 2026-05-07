import styles from './Stats.module.css';

const items = [
  '⚓ Iraq & Iran Corridor Specialists',
  '🌍 UAE · Pakistan · Africa · Middle East',
  '📦 FCL · LCL · Breakbulk · Project Cargo',
  '⚡ Fast Response Guaranteed',
];

export default function Stats() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
