"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const menuItems = [
  { href: '/#inicio', label: 'Início', icon: '🏠' },
  { href: '/#sobre', label: 'Sobre', icon: '💪' },
  { href: '/#como-funciona', label: 'Como Funciona', icon: '⚡' },
  { href: '/#depoimentos', label: 'Depoimentos', icon: '⭐' },
  { href: '/#planos', label: 'Planos', icon: '📋' },
  { href: '/#contato', label: 'Contato', icon: '📩' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (aberto) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [aberto])

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape' && aberto) {
        fechar()
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [aberto])

  function fechar() {
    setAberto(false)
  }

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <nav className="wrap" role="navigation" aria-label="Menu principal">
          <Link href="/#inicio" className="logo" aria-label="Team Siqueira - Início">
            <img src="/file.png" alt="" className="logo-img" aria-hidden="true" />
            <span className="logo-text">TEAM <span>SIQUEIRA</span></span>
          </Link>
          <Link href="/#planos" className="nav-cta" onClick={fechar}>Quero começar</Link>
          <button
            ref={toggleRef}
            className={`nav-toggle${aberto ? ' open' : ''}`}
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
            aria-controls="nav-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <div
        className={`nav-overlay${aberto ? ' open' : ''}`}
        onClick={fechar}
        aria-hidden="true"
      />

      <div
        ref={menuRef}
        className={`chat-menu${aberto ? ' open' : ''}`}
        role="menu"
        id="nav-menu"
      >
        <div className="chat-menu-header">
          <div className="chat-menu-avatar">
            <img src="/file.png" alt="" />
          </div>
          <div className="chat-menu-info">
            <span className="chat-menu-name">Team Siqueira</span>
            <span className="chat-menu-status">
              <span className="status-dot"></span>
              Online
            </span>
          </div>
          <button className="chat-menu-close" onClick={fechar} aria-label="Fechar menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="chat-menu-body">
          <div className="chat-bubble chat-bubble-received">
            <span className="chat-bubble-text">Olá! Como posso te ajudar?</span>
            <span className="chat-bubble-time">agora</span>
          </div>

          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={fechar}
              className="chat-bubble chat-bubble-sent"
              role="menuitem"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="chat-bubble-icon">{item.icon}</span>
              <span className="chat-bubble-text">{item.label}</span>
              <svg className="chat-bubble-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          ))}

          <div className="chat-bubble chat-bubble-received chat-cta-bubble">
            <span className="chat-bubble-text">Pronto para começar sua transformação?</span>
            <span className="chat-bubble-time">agora</span>
          </div>
          <Link
            href="/#planos"
            onClick={fechar}
            className="chat-bubble chat-bubble-cta"
            role="menuitem"
            style={{ animationDelay: `${menuItems.length * 0.08}s` }}
          >
            <span className="chat-bubble-icon">🚀</span>
            <span className="chat-bubble-text">Quero começar agora</span>
          </Link>
        </div>
      </div>
    </>
  )
}
