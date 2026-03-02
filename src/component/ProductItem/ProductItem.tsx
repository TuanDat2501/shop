'use client';

import Link from 'next/link';
import styles from './ProductItem.module.scss';

export interface ProductProps {
  id: string | number;
  name: string;
  price: string | number;
  img?: string;
  badges?: string[]; // Đổi thành mảng chuỗi (VD: ['Hot', 'Mới về'])
}

export default function ProductItem({ id, name, price, img, badges }: ProductProps) {
  return (
    <Link href={`/products/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        
        {/* CONTAINER CHỨA NHIỀU STICKER */}
        {badges && badges.length > 0 && (
          <div className={styles.badgeContainer}>
            {badges.map((badge, index) => (
              <div 
                key={index} 
                // Thêm class động để mỗi sticker nghiêng một kiểu khác nhau
                className={`${styles.badgeSticker} ${styles[`stickerStyle${index % 3}`]}`}
              >
                {badge}
              </div>
            ))}
          </div>
        )}

        <div className={styles.imagePlaceholder}>{img || '[ Ảnh Sản Phẩm ]'}</div>
        
        <h3 className={styles.name}>{name}</h3>
        
        <div className={styles.bottom}>
          <span className={styles.price}>
            {typeof price === 'number' ? `${price.toLocaleString('vi-VN')}đ` : price}
          </span>
          <button 
            className={styles.addBtn}
            onClick={(e) => {
              e.preventDefault(); 
              alert(`Meo... Đã rinh "${name}" vào giỏ! ^^`);
            }}
          >
            Rinh về ♥
          </button>
        </div>
      </div>
    </Link>
  );
}