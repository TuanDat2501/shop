'use client'; // Bắt buộc phải có để dùng useState

import { useState } from 'react';
import styles from './ProductDetail.module.scss';

export default function ProductDetail({ params }: { params: { id: string } }) {
  // State lưu trữ size người dùng chọn
  const [selectedSize, setSelectedSize] = useState<string>('');
  
  // Danh sách các size
  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Bạn iu quên chọn size áo rùi kìa! T_T");
      return;
    }
    alert(`Meo... Đã bỏ áo size ${selectedSize} vào giỏ thành công rùi nha! 🌸`);
  };

  return (
    <main className={styles.productPage}>
      <div className="container">
        <div className={styles.entryLayout}>
          
          {/* CỘT TRÁI: Cuốn Album lộn xộn (Giữ nguyên như cũ) */}
          <div className={styles.albumColumn}>
            <div className={`${styles.polaroidFrame} ${styles.rotateLeft}`}>
              <div className={styles.imagePlaceholder}>[ Ảnh Áo Mặt Trước ]</div>
              <p className={styles.caption}>Góc phố quen ngày đầu tháng 3... 📸</p>
            </div>
            <div className={`${styles.polaroidFrame} ${styles.rotateRight}`}>
              <div className={styles.imagePlaceholder}>[ Ảnh Áo Mặt Sau ]</div>
              <p className={styles.caption}>Sau lưng áo có in typo nè 🍂</p>
            </div>
            <div className={`${styles.polaroidFrame} ${styles.rotateFarLeft}`}>
              <div className={styles.imagePlaceholder}>[ Ảnh Cận Vải/Mực In ]</div>
              <p className={styles.caption}>Zoom cận chất cotton mộc 🔍</p>
            </div>
            <div className={`${styles.polaroidFrame} ${styles.rotateRight}`}>
              <div className={styles.imagePlaceholder}>[ Ảnh Mẫu Mặc ]</div>
              <p className={styles.caption}>Tà tà mà dạo phố Bắc Giang thôiii 🛵</p>
            </div>
          </div>

          {/* CỘT PHẢI: Tâm sự (Sticky) */}
          <div className={styles.infoColumn}>
            <div className={styles.diaryHeader}>
              <span className={styles.date}>Thứ Hai, 02.03.2026</span>
              <h1 className={styles.productName}>Bản in: "Tà Tà Mà Sống"</h1>
            </div>

            <div className={styles.diaryContent}>
              <p>Mẫu áo này ra đời vào một buổi chiều mình ngồi trà đá vỉa hè. Nhìn dòng người hối hả, mình chỉ muốn nhắn nhủ bản thân và mọi người rằng: Cứ thong thả thôi, chuyện gì rồi cũng sẽ qua... ^^</p>
              
              <ul className={styles.specs}>
                <li>♥ Chất liệu: Cotton mộc, thoáng mát.</li>
                <li>♥ Kỹ thuật: In lụa nhám, mực thấm vào sợi vải.</li>
                <li>♥ Form áo: Oversize cho những tâm hồn tự do.</li>
              </ul>

              {/* KHU VỰC CHỌN SIZE MỚI THÊM VÀO */}
              <div className={styles.sizeWrapper}>
                <p className={styles.sizeLabel}>Kích cỡ (Form rộng rãi nha):</p>
                <div className={styles.sizeGrid}>
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`${styles.sizeBtn} ${selectedSize === s ? styles.activeSize : ''}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.priceTag}>
                Giá nhượng lại: <strong>250.000đ</strong>
              </div>

              <button className={styles.buyBtn} onClick={handleAddToCart}>
                Gửi yêu thương vào giỏ hàng ♥
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}