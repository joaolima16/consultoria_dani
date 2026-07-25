"use client"

import { useState, useEffect } from 'react'

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function fechar() {
    setAberto(false)
  }

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="wrap">
        <a href="#inicio" className="logo">
          <img src="/file.png" alt="Team Siqueira" className="logo-img" />
          <span className="logo-text">TEAM <span>SIQUEIRA</span></span>
        </a>
        <div className={`nav-links${aberto ? ' open' : ''}`}>
          <a href="#inicio" onClick={fechar}>Início</a>
          <a href="#sobre" onClick={fechar}>Sobre</a>
          <a href="#como-funciona" onClick={fechar}>Como Funciona</a>
          <a href="#planos" onClick={fechar}>Planos</a>
        </div>
        <a href="#planos" className="nav-cta" onClick={fechar}>Quero meus resultados</a>
        <button
          className={`nav-toggle${aberto ? ' open' : ''}`}
          onClick={() => setAberto((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={aberto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}
