import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reiza Studio — Creative Digital Studio',
  description: 'Studio kreatif digital modern yang membantu bisnis tampil lebih profesional, modern, dan menarik melalui website berkualitas tinggi.',
  keywords: ['website', 'desain website', 'digital studio', 'landing page', 'web development', 'UI/UX'],
  icons: {
    icon: '/reiza-logo.jpeg',
  },
  openGraph: {
    title: 'Reiza Studio — Creative Digital Studio',
    description: 'Kami desain website yang bikin bisnismu berkembang.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
