import { useEffect, useRef, useState } from 'react';
import styles from './NumbersBar.module.css';

const stats = [
  { value: 20, suffix: '+', label: 'Trade Routes Served' },
  { value: 500, suffix: '+', label: 'Shipments Handled' },
  { value: 98, suffix: '%', label: 'On-Time Delivery Rate' },
  { value: 15, suffix: '+', label: 'Countries Covered' },
];

function CountUp({ target, suffix, active }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);

  return (
    <span>
      {current}{suffix}
    </span>
  );
}

export default function NumbersBar() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.bar} ref={ref}>
      <div className={`container ${styles.inner}`}>
        {stats.map((stat, i) => (
          <div key={stat.label} className={styles.item}>
            {i > 0 && <div className={styles.divider} />}
            <div className={styles.number}>
              <CountUp target={stat.value} suffix={stat.suffix} active={active} />
            </div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
