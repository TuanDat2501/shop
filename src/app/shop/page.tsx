'use client';

import { useState } from 'react';
import styles from './Shop.module.scss';
import ProductItem from '@/src/component/ProductItem/ProductItem';


// Thêm các thuộc tính size, price (dạng số) vào data mẫu để test bộ lọc
const DUMMY_PRODUCTS = [
  { 
    id: 'ta-ta-ma-song', 
    name: 'Áo "Tà Tà Mà Sống"', 
    price: 250000, 
    category: 'typo', 
    size: ['M', 'L', 'XL'], 
    img: '[ Typo Áo 1 ]', 
    badges: ['Mới về ✨', 'Hot 🔥'] // Nhiều badges
  },
  { 
    id: 'di-dau-loanh-quanh', 
    name: 'Áo "Đi Đâu Loanh Quanh"', 
    price: 250000, 
    category: 'typo', 
    size: ['S', 'M'], 
    img: '[ Typo Áo 2 ]',
    badges: ['Freeship']
  },
  { 
    id: 'tote-pho-co', 
    name: 'Tote "Dạo Phố Cổ"', 
    price: 150000, 
    category: 'phukien', 
    size: ['Free'], 
    img: '[ Túi Tote ]', 
    badges: ['Sale Sập Sàn', 'Best Seller', 'Chỉ còn 2 chiếc'] // Dán 3 cái luôn cũng được
  },
  // ...
];

export default function ShopPage() {
  // Quản lý nhiều điều kiện lọc
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');

  // Hàm xử lý lọc sản phẩm (Logic tĩnh để test UI)
  const filteredProducts = DUMMY_PRODUCTS.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSize = selectedSize === 'all' || item.size.includes(selectedSize);
    
    let matchPrice = true;
    if (selectedPrice === 'under200') matchPrice = item.price < 200000;
    if (selectedPrice === 'over200') matchPrice = item.price >= 200000;

    return matchCategory && matchSize && matchPrice;
  });

  return (
    <main className={styles.shopPage}>
      
      {/* --- HERO SECTION HOÀI NIỆM (Giữ nguyên như cũ) --- */}
      <section className={styles.shopHero}>
        <div className={styles.floatingImages}>
          <div className={`${styles.polaroid} ${styles.heroImg1}`}>[ Ảnh SP 1 ]</div>
          <div className={`${styles.polaroid} ${styles.heroImg2}`}>[ Ảnh Vibe 1 ]</div>
          <div className={`${styles.polaroid} ${styles.heroImg3}`}>[ Ảnh Cận Vải ]</div>
          <div className={`${styles.polaroid} ${styles.heroImg4}`}>[ Ảnh Cận Vải ]</div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.tag}>BeastLore Wardrobe</div>
          <h1 className={styles.title}>
            Lật lại <span className={styles.highlight}>Ngăn Tủ</span><br />
            chứa thanh xuân.
          </h1>
        </div>
      </section>

      {/* --- PHẦN NỘI DUNG CHÍNH (2 CỘT) --- */}
      <div className="container">
        <div className={styles.shopLayout}>
          
          {/* CỘT TRÁI: Cuốn Sổ Bộ Lọc (Sticky Sidebar) */}
          <aside className={styles.sidebar}>
            <div className={styles.filterNotebook}>
              <h2 className={styles.filterTitle}>Mục lục tìm kiếm</h2>
              
              {/* Lọc theo Loại */}
              <div className={styles.filterGroup}>
                <h3 className={styles.groupTitle}>Kiểu đồ</h3>
                <div className={styles.optionsList}>
                  {[
                    { id: 'all', label: 'Tất cả' },
                    { id: 'typo', label: 'Áo Typo Ký Ức' },
                    { id: 'season', label: 'Đồ Theo Mùa' },
                    { id: 'phukien', label: 'Phụ Kiện' }
                  ].map(cat => (
                    <label key={cat.id} className={styles.customRadio}>
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                      />
                      <span className={styles.checkmark}></span>
                      {cat.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Lọc theo Size */}
              <div className={styles.filterGroup}>
                <h3 className={styles.groupTitle}>Kích cỡ</h3>
                <div className={styles.sizeGrid}>
                  {['all', 'S', 'M', 'L', 'XL'].map(size => (
                    <button 
                      key={size}
                      className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size === 'all' ? 'Mọi Size' : size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lọc theo Giá */}
              <div className={styles.filterGroup}>
                <h3 className={styles.groupTitle}>Hầu bao</h3>
                <div className={styles.optionsList}>
                  <label className={styles.customRadio}>
                    <input type="radio" checked={selectedPrice === 'all'} onChange={() => setSelectedPrice('all')} />
                    <span className={styles.checkmark}></span> Tất cả mức giá
                  </label>
                  <label className={styles.customRadio}>
                    <input type="radio" checked={selectedPrice === 'under200'} onChange={() => setSelectedPrice('under200')} />
                    <span className={styles.checkmark}></span> Dưới 200 cành
                  </label>
                  <label className={styles.customRadio}>
                    <input type="radio" checked={selectedPrice === 'over200'} onChange={() => setSelectedPrice('over200')} />
                    <span className={styles.checkmark}></span> Từ 200 cành trở lên
                  </label>
                </div>
              </div>

            </div>
          </aside>

          {/* CỘT PHẢI: Lưới sản phẩm */}
          <section className={styles.mainContent}>
            <div className={styles.productCount}>
              Đang có <strong>{filteredProducts.length}</strong> món đồ trong ngăn này.
            </div>

            <div className={styles.productGrid}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <ProductItem 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    img={item.img}
                    badges={item.badges}
                  />
                ))
              ) : (
                <div className={styles.emptyState}>
                  <p>Tiếc quá, xới tung cả tủ mà không có món nào khớp rùi... 🍂</p>
                  <button onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSize('all');
                    setSelectedPrice('all');
                  }}>Tìm lại từ đầu nghen</button>
                </div>
              )}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}