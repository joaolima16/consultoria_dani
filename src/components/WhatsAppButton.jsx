"use client"

import { useState, useEffect } from 'react'
import { montarLinkWhatsapp } from '@/lib/whatsapp.js'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (pulse) {
      const timer = setTimeout(() => setPulse(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [pulse])

  if (!visible) return null

  return (
    <a
      href={montarLinkWhatsapp('Olá! Gostaria de saber mais sobre a consultoria do Team Siqueira.')}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float${pulse ? ' pulse' : ''}`}
      aria-label="Fale conosco no WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.376L1.054 31.2l6.012-1.97A15.92 15.92 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.334 22.594c-.39 1.1-1.932 2.014-3.168 2.28-.844.18-1.946.324-5.656-1.216-4.748-1.97-7.804-6.798-8.04-7.112-.228-.314-1.88-2.504-1.88-4.774s1.184-3.384 1.604-3.844c.42-.46.914-.574 1.218-.574.304 0 .608.002.874.016.282.014.66-.108 1.03.782.39.938 1.326 3.234 1.442 3.468.116.234.194.508.038.822-.156.314-.234.508-.468.782-.234.274-.492.612-.702.82-.234.234-.48.486-.208.954.274.468 1.218 2.008 2.614 3.25 1.796 1.6 3.316 2.096 3.784 2.33.468.234.742.196 1.016-.118.274-.314 1.174-1.368 1.486-1.836.314-.468.626-.39 1.056-.234.43.156 2.726 1.284 3.194 1.518.468.234.782.352.896.548.116.196.116 1.134-.274 2.234z"/>
      </svg>
      <span className="whatsapp-tooltip">Fale conosco</span>
    </a>
  )
}
