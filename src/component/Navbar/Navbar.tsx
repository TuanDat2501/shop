import styles from './Navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo với font xì tin ngày xưa */}
        <div className={styles.logo}>
          <Link href="/">~ BeastLore ~</Link>
        </div>

        {/* Menu điều hướng */}
        <nav className={styles.navLinks}>
          <Link href="/shop" className={styles.link}>Tủ Quần Áo</Link>
          <Link href="/shop?category=phukien" className={styles.link}>Góc Tạp Hóa</Link>
          <Link href="/lookbook" className={styles.link}>Phòng Rửa Ảnh</Link>
          <Link href="/blog" className={styles.link}>Tâm Sự</Link>
          <Link href="/guestbook" className={styles.link}>Lưu Bút</Link>
          <Link href="/about" className={styles.link}>Lai Lịch</Link>
        </nav>

        {/* Nút giỏ hàng hiện đại nhưng màu sắc hoài niệm */}
        <Link className={styles.actions} href="/cart">
          <button className={styles.cartBtn}>
            Giỏ Đồ <span className={styles.count}>(0)</span>
          </button>
        </Link>
      </div>
    </header>
  );
}