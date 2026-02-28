import styles from './BlogEntry.module.scss';

export default function BlogEntry() {
  return (
    <section className={styles.blogBanner}>
      <div className={styles.pin}>📌</div>
      <h2 className={styles.title}>Mấy dòng tâm sự tháng Hai...</h2>
      <span className={styles.date}>28.02.2026 - Tà tà mà sống thôiii :&gt;</span>
      
      <div className={styles.content}>
        <p>Nay trời Bắc Giang trong veo, tự nhiên nhớ lại mấy cái biển hiệu ngoài Hà Nội.</p>
        <p>Mình in mấy dòng Typography đó lên áo thun cotton, bạn nào thương chủ nhà thì rinh một em về mặc cho mát mẻ nha. Cảm ơn mọi người nhiều lắm! ^^</p>
      </div>

      <div className={styles.marqueeContainer}>
        {/* Trong React/Nextjs thẻ marquee vẫn dùng được hoặc giả lập bằng CSS */}
        <div className={styles.marqueeText}>
          ♥ MỞ BÁN BỘ SƯU TẬP "KÝ ỨC" - TẶNG NGAY MÃ GIẢM 10% KHI NHẬP CHILL10 ♥
        </div>
      </div>
    </section>
  );
}