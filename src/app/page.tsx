'use client';
import BlogEntry from '../component/BlogEntry/BlogEntry';

import Hero from '../component/Hero/Hero';

import ProductGrid from '../component/ProductGrid/ProductGrid';
import styles from './page.module.scss';


export default function Home() {
  return (
    <div className={styles.pageWrapper}>


      {/* Hero Section (Hiện đại x Lookbook) */}
      <Hero />

      {/* Nội dung chính (Container ở giữa) */}
      <main className="container">
        <div className={styles.contentLayout}>
          
          {/* Phần Blog Tâm Sự (Kiểu Yahoo 360) */}
          <BlogEntry />

          {/* Tiêu đề phần Shop */}
          <h2 className={styles.sectionTitle}>HÀNG MỚI LÊN KỆ</h2>

          {/* Lưới sản phẩm hiện đại */}
          <ProductGrid />
          
        </div>
      </main>
    </div>
  );
}