import './globals.css'
import { IBM_Plex_Mono } from 'next/font/google'

const plexMono = IBM_Plex_Mono({
  subsets: ['latin-ext'],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata = {
  title: 'YonMiru',
  description: 'A portfolio website for YonMiru',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plexMono.className}>{children}</body>
    </html>
  )
}
