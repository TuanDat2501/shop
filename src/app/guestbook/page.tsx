'use client';

import { useState } from 'react';
import styles from './Guestbook.module.scss';

// Mock data: Những lời nhắn cũ
const INITIAL_NOTES = [
  { id: 1, name: 'Bé Heo 9x', text: 'Bóc tem nhà mới nha shop ơi! Áo mua đợt trước mặc đi Đà Lạt chụp bao cháy 🔥', color: 'pink', rotation: -3 },
  { id: 2, name: 'Kẻ Trú Mưa', text: 'Vô tình đi lạc vào web này, nghe bản lofi tự nhiên nhớ người yêu cũ quá...', color: 'yellow', rotation: 2 },
  { id: 3, name: 'Gió Mùa Đông Bắc', text: 'Bao giờ xưởng restock cái mẫu Hà Nội 1975 vậy ạ? Hóng bữa giờ T_T', color: 'blue', rotation: -5 },
  { id: 4, name: 'Stranger', text: 'Vibe xịn thực sự. Chúc xưởng buôn may bán đắt!', color: 'green', rotation: 4 },
];

export default function GuestbookPage() {
  const [notes, setNotes] = useState(INITIAL_NOTES);
  const [newMessage, setNewMessage] = useState('');
  const [newName, setNewName] = useState('');

  const handlePostNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !newName.trim()) return alert('Chưa viết tên hoặc lời nhắn kìa bồ!');
    
    const colors = ['pink', 'yellow', 'blue', 'green'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotation = Math.floor(Math.random() * 10) - 5; // Xoay random từ -5 đến 5 độ

    setNotes([{
      id: Date.now(),
      name: newName,
      text: newMessage,
      color: randomColor,
      rotation: randomRotation
    }, ...notes]);

    setNewMessage('');
    setNewName('');
  };

  return (
    <main className={styles.guestbookPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Bức Tường Lưu Bút</h1>
          <p className={styles.subtitle}>Ghé ngang qua thì để lại vài dòng chữ nhé...</p>
        </div>

        {/* Khung viết lưu bút */}
        <div className={styles.writeSection}>
          <form className={styles.noteForm} onSubmit={handlePostNote}>
            <input 
              type="text" 
              placeholder="Biệt danh của bồ..." 
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className={styles.nameInput}
              maxLength={20}
            />
            <textarea 
              placeholder="Ghi vài dòng tâm sự mỏng ở đây nè..." 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className={styles.msgInput}
              rows={3}
              maxLength={150}
            />
            <button type="submit" className={styles.submitBtn}>Dán lên tường 📌</button>
          </form>
        </div>

        {/* Bức tường dán note */}
        <div className={styles.corkBoard}>
          {notes.map((note) => (
            <div 
              key={note.id} 
              className={`${styles.stickyNote} ${styles[note.color]}`}
              style={{ transform: `rotate(${note.rotation}deg)` }}
            >
              <div className={styles.pin}></div>
              <p className={styles.noteText}>"{note.text}"</p>
              <p className={styles.noteAuthor}>-- {note.name} --</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}