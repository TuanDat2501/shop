'use client';
import { useState, useRef } from 'react';
import styles from './MusicWidget.module.scss';

export default function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(() => {
        alert("Bạn hãy click vào trang một cái rồi mới bật nhạc được nha! :>");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.widget} onClick={toggleMusic}>
      <span className={styles.icon}>{isPlaying ? '⏸️' : '▶️'}</span>
      <span className={styles.text}>
        {isPlaying ? '♫ Hôm này bạn ổn không?' : 'Bật nhạc chill...'}
      </span>
      <audio ref={audioRef} loop src="1 au.mp3" autoPlay/>
    </div>
  );
}