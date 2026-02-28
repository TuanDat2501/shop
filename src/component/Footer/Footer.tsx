'use client';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.streetLabel}>Vỉa hè BeastLore Studio...</p>
        
        <div className={styles.catContainer}>
          {/* Bong bóng chat ẩn hiện */}
          <div className={styles.speechBubble}>
            Meo... Bạn lướt mỏi tay chưa? Tặng bạn mã <strong>CHILL10</strong> chốt đơn cho vui vẻ nha! 🐾
          </div>
          
          {/* Bé mèo nháy mắt */}
          <div className={styles.catEmoji}>
            <span className={styles.sleeping}>🐈💤</span>
            <span className={styles.winking}>🐈✨</span>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Design by <strong>Kẻ Lang Thang</strong> - 2026</p>
          <p>~ Gói ghém ký ức vào từng sợi vải ~</p>
        </div>
      </div>
    </footer>
  );
}