import CursorTrail from '../component/CursorTrail/CursorTrail'
import Footer from '../component/Footer/Footer'
import MusicWidget from '../component/MusicWidget/MusicWidget'
import Navbar from '../component/Navbar/Navbar'
import PetalEffect from '../component/PetalEffect/PetalEffect'
import RetroMarquee from '../component/RetroMarquee/RetroMarquee'
import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BeastLore Studio',
  description: 'Trạm lưu trữ ký ức',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Thay 'autumn', 'summer' hoặc để trống (Xuân) để đổi mùa
    <html lang="vi" data-theme="summer">
      <body>
        {/* Header */}
        {/* Các hiệu ứng toàn cục */}
        <PetalEffect />
        <MusicWidget />
        <CursorTrail />
        <Navbar />
        <RetroMarquee />
        {children}
        <Footer />
      </body>
    </html>
  )
}