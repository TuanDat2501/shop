import Link from 'next/link';
import styles from './Blog.module.scss';

// Dữ liệu giả lập các bài viết
const DUMMY_ENTRIES = [
  {
    id: 'chieu-bac-giang',
    date: 'Thứ Hai, 02.03.2026',
    title: 'Chiều Bắc Giang mây tà tà...',
    excerpt: 'Hôm nay trời Bắc Giang mát mẻ lạ thường. Ngồi quán nước chè ven đường, tự nhiên nhớ lại mấy cái biển hiệu vẽ tay ngoài Hà Nội. Vậy là mình lôi giấy bút ra phác thảo mẫu áo mới...',
    mood: '☁️ Lơ lửng',
    music: 'Phố Cổ - Lofi'
  },
  {
    id: 'ky-uc-nhung-chiec-ao',
    date: 'Chủ Nhật, 22.02.2026',
    title: 'Gói ghém ký ức vào từng sợi vải',
    excerpt: 'Nhiều người hỏi mình tại sao lại chọn làm áo thun in Typography hoài niệm. Chắc tại mình già rồi (tâm hồn già thôi), thích nhặt nhạnh mấy thứ cũ kỹ. Mỗi chiếc áo bán ra, mình hay xịt một chút nước hoa mùi gỗ...',
    mood: '🍂 Trầm ngâm',
    music: 'Tình ca - Quốc Bảo'
  },
  {
    id: 'chuyen-lam-thu-cong',
    date: 'Thứ Năm, 14.02.2026',
    title: 'Kẻ lang thang đi in lụa',
    excerpt: 'Quyết định không in công nghiệp mà chọn in lụa kéo tay đúng là tự làm khổ mình. Mực dính lem luốc, hỏng mấy chục cái áo phôi. Nhưng đến khi nhìn cái chữ "Ký Ức" nổi cộm lên trên nền vải, mình biết mình đã đi đúng đường...',
    mood: '🔥 Nhiệt huyết',
    music: 'Đen Vâu'
  }
];

export default function BlogPage() {
  return (
    <main className={styles.blogPage}>
      <div className="container">
        
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Góc Tâm Sự</h1>
          <p className={styles.subtitle}>Nhật ký viết vội của Kẻ Lang Thang...</p>
        </div>

        <div className={styles.blogLayout}>
          
          {/* CỘT TRÁI: DANH SÁCH BÀI VIẾT */}
          <section className={styles.mainContent}>
            {DUMMY_ENTRIES.map((entry) => (
              <article key={entry.id} className={styles.entryCard}>
                <div className={styles.entryHeader}>
                  <div className={styles.dateStamp}>{entry.date}</div>
                  <h2 className={styles.entryTitle}>
                    <Link href={`/blog/${entry.id}`}>{entry.title}</Link>
                  </h2>
                </div>
                
                <div className={styles.entryMeta}>
                  <span><strong>Tâm trạng:</strong> {entry.mood}</span>
                  <span><strong>Đang nghe:</strong> {entry.music}</span>
                </div>

                <div className={styles.entryBody}>
                  <p>{entry.excerpt}</p>
                </div>

                <div className={styles.entryFooter}>
                  <Link href={`/blog/${entry.id}`} className={styles.readMoreBtn}>
                    Đọc tiếp trang này...
                  </Link>
                  <div className={styles.comments}>Bình luận (0)</div>
                </div>
              </article>
            ))}

            <div className={styles.pagination}>
              <button disabled>« Trang trước</button>
              <span>Trang 1 / 1</span>
              <button>Trang sau »</button>
            </div>
          </section>

          {/* CỘT PHẢI: SIDEBAR (PROFILE YAHOO 360) */}
          <aside className={styles.sidebar}>
            
            {/* Widget Profile */}
            <div className={styles.widget}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>[ Ảnh Chủ Nhà ]</div>
                <div className={styles.blastBubble}>
                  "Sống tà tà thôiii..."
                </div>
              </div>
              <h3 className={styles.authorName}>Kẻ Lang Thang</h3>
              <p className={styles.authorBio}>
                Chủ xưởng in mộc BeastLore. Thích lang thang phố cổ, nghiện mùi mực in và hay hoài niệm về những năm 2000.
              </p>
            </div>

            {/* Widget Hit Counter (Đặc sản) */}
            <div className={styles.widget}>
              <h4 className={styles.widgetTitle}>Lượt khách ghé chơi</h4>
              <div className={styles.hitCounter}>
                <span>0</span><span>0</span><span>2</span><span>0</span><span>2</span><span>6</span>
              </div>
            </div>

            {/* Widget Liên kết */}
            <div className={styles.widget}>
              <h4 className={styles.widgetTitle}>Linh tinh</h4>
              <ul className={styles.linkList}>
                <li><Link href="/shop">👉 Trở về Tủ Quần Áo</Link></li>
                <li><Link href="#">📸 Instagram ảnh film</Link></li>
                <li><Link href="#">🎵 Playlist nhạc chill</Link></li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}