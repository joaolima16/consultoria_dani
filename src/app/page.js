import Home from '@/components/Home.jsx'

export const metadata = {
  title: 'Team Siqueira | Consultoria Fitness Online de Alta Performance',
  description:
    'Consultoria fitness online do fisiculturista Daniel Siqueira. Treinos 100% individualizados, acompanhamento real e resultados que aparecem.',
  openGraph: {
    title: 'Team Siqueira | Consultoria Fitness Online de Alta Performance',
    description:
      'Treinos 100% individualizados, acompanhamento real e resultados que aparecem.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function Page() {
  return <Home />
}
