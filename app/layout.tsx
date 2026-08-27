import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muntafid Islam Nafsi // Full-Stack Developer',
  description: 'Portfolio of Muntafid Islam Nafsi, a Computer Science student and full-stack developer in Dhaka.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
