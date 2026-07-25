import './globals.css'
import './main.css'

export const metadata = {
  metadataBase: new URL('https://www.teamsiqueira.com'),
  title: {
    default: 'Team Siqueira | Consultoria Fitness Online de Alta Performance',
    template: '%s | Team Siqueira',
  },
  description:
    'Consultoria fitness online e presencial do fisiculturista Daniel Siqueira. Treinos 100% individualizados, acompanhamento real e resultados que aparecem.',
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
