import Link from 'next/link';
import styles from './ProductGrid.module.scss';
import ProductItem from '../ProductItem/ProductItem';

const HOME_PRODUCTS = [
  { id: 'ta-ta-ma-song', name: 'Áo "Tà Tà Mà Sống"', price: '250.000đ', img: '[ Ảnh Mẫu 1 ]' },
  { id: 'di-dau-loanh-quanh', name: 'Áo "Đi Đâu Loanh Quanh"', price: '250.000đ', img: '[ Ảnh Mẫu 2 ]' },
  { id: 'tote-pho-co', name: 'Tote "Dạo Phố Cổ"', price: '150.000đ', img: '[ Túi Tote ]' },
];

export default function ProductGrid() {
  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    alert("Đã bỏ vào giỏ sản phẩm " + productId + " nha!");
  }
  
  return (
    <div className={styles.grid}>
      {HOME_PRODUCTS.map((item) => (
        <ProductItem 
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  );
}