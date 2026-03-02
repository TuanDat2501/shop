'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Cart.module.scss';

// Dữ liệu giả lập
const INITIAL_CART = [
  { id: '1', name: 'Áo "Tà Tà Mà Sống"', price: 250000, size: 'L', quantity: 1, img: '[ Mẫu 1 ]' },
  { id: '2', name: 'Tote "Dạo Phố Cổ"', price: 150000, size: 'Free', quantity: 2, img: '[ Tote ]' },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART);

  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 30000;
  const total = subTotal + shippingFee;

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <main className={styles.cartPage}>
      <div className="container">
        
        <div className={styles.pageHeader}>
          <div className={styles.pin}>📌</div>
          <h1 className={styles.title}>Gói Ghém Ký Ức</h1>
          <p className={styles.subtitle}>Chốt lại xem mình mang theo những gì nè...</p>
        </div>

        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <p>Trang giấy này đang trống không... 🍂</p>
            <Link href="/shop" className={styles.continueBtn}>Đi nhặt nhạnh ký ức thôiii</Link>
          </div>
        ) : (
          <div className={styles.scrapbookLayout}>
            
            {/* CỘT TRÁI: NHỮNG MÓN ĐỒ ĐƯỢC DÁN VÀO SỔ */}
            <div className={styles.leftItems}>
              {cartItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`${styles.scrapbookItem} ${index % 2 === 0 ? styles.tiltLeft : styles.tiltRight}`}
                >
                  {/* Miếng băng dính dán ảnh */}
                  <div className={styles.tape}></div>

                  <div className={styles.itemContent}>
                    <div className={styles.itemImg}>{item.img}</div>
                    
                    <div className={styles.itemInfo}>
                      <Link href={`/products/${item.id}`} className={styles.itemName}>
                        {item.name}
                      </Link>
                      <p className={styles.itemDesc}>Phân loại: Kích cỡ {item.size}</p>
                      <p className={styles.itemPrice}>{item.price.toLocaleString('vi-VN')}đ</p>
                      
                      <div className={styles.actionRow}>
                        <div className={styles.quantityCtrl}>
                          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                        <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                          Xóa bỏ ✖
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CỘT PHẢI: TRANG VỞ Ô LY GHI SỔ */}
            <aside className={styles.rightSlip}>
              <div className={styles.notebookPage}>
                <div className={styles.notebookContent}>
                  <h2 className={styles.slipTitle}>Bản Ghi Chép</h2>
                  <p className={styles.dateText}>Ngày: {new Date().toLocaleDateString('vi-VN')}</p>
                  
                  <ul className={styles.calcList}>
                    {cartItems.map(item => (
                      <li key={item.id}>
                        <span className={styles.dot}>•</span>
                        <span className={styles.label}>{item.quantity} áo {item.name.split('"')[1] || item.name}</span>
                        <span className={styles.value}>{(item.price * item.quantity).toLocaleString('vi-VN')}</span>
                      </li>
                    ))}
                    <li className={styles.shippingRow}>
                      <span className={styles.dot}>•</span>
                      <span className={styles.label}>Tiền đò (ship)</span>
                      <span className={styles.value}>{shippingFee.toLocaleString('vi-VN')}</span>
                    </li>
                  </ul>

                  <div className={styles.totalSection}>
                    <span>Thiệt hại:</span>
                    <strong className={styles.totalValue}>{total.toLocaleString('vi-VN')}đ</strong>
                  </div>

                  <p className={styles.signature}>Ký tên: BeastLore Studio ♥</p>
                </div>
              </div>

              <button className={styles.checkoutBtn}>
                Chốt Đơn Nghen!
              </button>
            </aside>

          </div>
        )}
      </div>
    </main>
  );
}