'use client';
import styles from './PetalEffect.module.scss';

export default function PetalEffect() {
  return (
    <div className={styles.petalContainer}>
      <div className={styles.petal} style={{ left: '15%', animationDuration: '9s' }}></div>
      <div className={styles.petal} style={{ left: '45%', animationDuration: '12s' }}></div>
      <div className={styles.petal} style={{ left: '75%', animationDuration: '10s' }}></div>
    </div>
  );
}