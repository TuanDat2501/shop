import styles from './ProductGrid.module.scss';

const PRODUCTS = [
  { id: 1, name: 'Áo "Tà Tà Mà Sống"', price: '250.000đ' },
  { id: 2, name: 'Áo "Đi Đâu Loanh Quanh"', price: '250.000đ' },
  { id: 3, name: 'Tote "Dạo Phố Cổ"', price: '150.000đ' },
];

export default function ProductGrid() {
  return (
    <div className={styles.grid}>
      {PRODUCTS.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.imagePlaceholder}>
            [ Ảnh Sản Phẩm ]
          </div>
          <h3 className={styles.name}>{item.name}</h3>
          <div className={styles.bottom}>
            <span className={styles.price}>{item.price}</span>
            <button className={styles.addBtn}>Rinh về ♥</button>
          </div>
        </div>
      ))}
    </div>
  );
}