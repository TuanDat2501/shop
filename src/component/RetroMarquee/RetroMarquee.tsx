import styles from './RetroMarquee.module.scss';

export default function RetroMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeText}>
        {/* Lặp lại 2 lần để hiệu ứng chạy lặp đi lặp lại không bị đứt quãng */}
        <span>📢 Chào mừng mấy bồ ghé trạm dừng chân BeastLore Studio... 🌸 Nhớ bật loa nghe nhạc lofi nha... 🍂 Áo "Tà Tà Mà Sống" đang freeship mọi miền tổ quốc... 🎶 Chúc một ngày bình yên!</span>
        <span>📢 Chào mừng mấy bồ ghé trạm dừng chân BeastLore Studio... 🌸 Nhớ bật loa nghe nhạc lofi nha... 🍂 Áo "Tà Tà Mà Sống" đang freeship mọi miền tổ quốc... 🎶 Chúc một ngày bình yên!</span>
      </div>
    </div>
  );
}