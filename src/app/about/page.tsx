import styles from './About.module.scss';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <div className="container">
        <div className={styles.profileLayout}>
          
          {/* Box Thông tin cơ bản */}
          <section className={styles.infoBox}>
            <div className={styles.coverPhoto}>
              <div className={styles.avatar}>[ Logo Xưởng ]</div>
            </div>
            <div className={styles.details}>
              <h1 className={styles.brandName}>BeastLore Studio</h1>
              <p className={styles.slogan}>"Nhặt nhạnh ký ức, in lên áo thun."</p>
              
              <ul className={styles.bioList}>
                <li><strong>📍 Cứ địa:</strong> Một góc nhỏ Bắc Giang</li>
                <li><strong>🛠 Nghề nghiệp:</strong> Kéo lụa dạo, may vá lặt vặt. Không chỉ in áo, xưởng còn lọ mọ ngồi thiết kế và chạy máy in 3D FDM để làm mấy cái móc khóa sần sần tặng kèm cho anh em.</li>
                <li><strong>🎨 Đam mê:</strong> Nhạc lofi, gõ code, và lâu lâu lại lôi Premiere ra cắt ghép mấy chiếc video "khai xuân" tào lao cho xưởng.</li>
              </ul>

              <div className={styles.contactRow}>
                <button className={styles.pokeBtn}>👉 Chọc (Poke)</button>
                <Link href="/shop" className={styles.actionBtn}>Xem Tủ Đồ</Link>
              </div>
            </div>
          </section>

          {/* Box Hỏi - Đáp (FAQ) */}
          <section className={styles.faqBox}>
            <h2 className={styles.sectionTitle}>Hỏi Đáp Trà Đá vỉa hè</h2>
            
            <div className={styles.qnaWrapper}>
              <div className={styles.qnaItem}>
                <div className={styles.question}>Q: Xưởng mình in áo bằng gì vậy shop? Bền không?</div>
                <div className={styles.answer}>A: Áo được in lụa thủ công (kéo tay xước cả tay). Mực ngấm sâu vào sợi vải chứ không phải dán decal lên, nên bồ cứ vứt vào máy giặt quay tẹt ga đi, rách áo chứ chưa bong được hình đâu!</div>
              </div>

              <div className={styles.qnaItem}>
                <div className={styles.question}>Q: Sao áo bên mình sờ vải nó hơi nhám nhám?</div>
                <div className={styles.answer}>A: Bọn mình dùng dòng cotton mộc, giữ nguyên độ sần tự nhiên của sợi bông để hợp với vibe hoài niệm. Mặc mát rười rượi và thấm hút mồ hôi cực tốt.</div>
              </div>

              <div className={styles.qnaItem}>
                <div className={styles.question}>Q: Đặt áo bao lâu thì nhận được đồ?</div>
                <div className={styles.answer}>A: Nhận đơn xong mình mới lọc cọc lôi khung ra kéo mực, xong phơi khô các kiểu nên chắc mất cỡ 2-3 ngày áo mới giao cho bưu tá được. Bồ nào đang vội đi chơi thì thông cảm cho độ "tà tà" của xưởng nha 😅</div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}