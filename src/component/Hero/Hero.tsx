import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Các khối ảnh Polaroid trôi nổi kiểu Lookbook */}
      <div className={styles.floatingImg + " " + styles.img1}>[ Ảnh Mẫu 1 ]</div>
      <div className={styles.floatingImg + " " + styles.img2}>[ Ảnh Mẫu 2 ]</div>

      <div className={styles.heroContent}>
        <div className={styles.heroTag}>Lookbook 2026</div>
        <h1 className={styles.heroTitle}>
          Gói ghém <span className={styles.heroHighlight}>Ký ức</span><br />
          vào từng sợi vải.
        </h1>
        <p className={styles.heroSubtitle}>
          Những dòng chữ viết vội, những câu rao vang đầu ngõ của tuổi trẻ...
        </p>
        <button className={styles.heroBtn}>Ngắm Đồ Mới Nè ♥</button>
      </div>
    </section>
  );
}