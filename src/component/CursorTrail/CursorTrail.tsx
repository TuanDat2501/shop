'use client';

import { useEffect } from 'react';
import './CursorTrail.scss';

export default function CursorTrail() {
  useEffect(() => {
    // Chỉ chạy hiệu ứng trên màn hình máy tính (bỏ qua mobile/touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Giới hạn số lượng hạt tạo ra để không bị lag web
      if (Math.random() > 0.5) return; 

      const star = document.createElement('div');
      star.className = 'magic-star';
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;

      // Random kích thước và góc xoay
      const size = Math.random() * 8 + 4;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.transform = `rotate(${Math.random() * 360}deg)`;

      document.body.appendChild(star);

      // Xóa hạt bụi sao sau 0.8 giây
      setTimeout(() => {
        star.remove();
      }, 800);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null; // Component này không hiển thị UI cố định
}