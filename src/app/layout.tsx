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
        {children}
      </body>
    </html>
  )
}