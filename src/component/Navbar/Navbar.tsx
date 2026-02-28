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
          <Link href="/blog" className={styles.link}>Tâm Sự</Link>
        </nav>

        {/* Nút giỏ hàng hiện đại nhưng màu sắc hoài niệm */}
        <div className={styles.actions}>
          <button className={styles.cartBtn}>
            Giỏ Đồ <span className={styles.count}>(0)</span>
          </button>
        </div>
      </div>
    </header>
  );
}