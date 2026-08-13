"use client"

import { useState } from 'react'
import Header from '@/components/Header.jsx'
import Hero from '@/components/Hero.jsx'
import Sobre from '@/components/Sobre.jsx'
import ComoFunciona from '@/components/ComoFunciona.jsx'
import Depoimentos from '@/components/Depoimentos.jsx'
import Planos from '@/components/Planos.jsx'
import Contato from '@/components/Contato.jsx'
import Footer from '@/components/Footer.jsx'
import WhatsAppButton from '@/components/WhatsAppButton.jsx'

export default function Home() {
  const [planoSelecionado, setPlanoSelecionado] = useState(null)

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Sobre />
        <ComoFunciona />
        <Depoimentos />
        <Planos onEscolherPlano={setPlanoSelecionado} />
        <Contato planoSelecionado={planoSelecionado} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
