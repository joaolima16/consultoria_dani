"use client"

import { useRef, useState } from 'react'

export default function BeforeAfter({ antes, depois, nome }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  function atualizar(clientX) {
    const rect = containerRef.current.getBoundingClientRect()
    let pct = ((clientX - rect.left) / rect.width) * 100
    pct = Math.max(0, Math.min(100, pct))
    setPos(pct)
  }

  function onPointerDown(e) {
    dragging.current = true
    atualizar(e.clientX)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
  }

  function onPointerMove(e) {
    if (dragging.current) atualizar(e.clientX)
  }

  function onPointerUp() {
    dragging.current = false
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
  }

  return (
    <div
      className="ba"
      ref={containerRef}
      onPointerDown={onPointerDown}
      role="slider"
      aria-label={`Antes e depois de ${nome}`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <img className="ba-img ba-depois" src={depois} alt={`Depois - ${nome}`} draggable={false} />
      <img
        className="ba-img ba-antes"
        src={antes}
        alt={`Antes - ${nome}`}
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="ba-tag ba-tag-antes">Antes</span>
      <span className="ba-tag ba-tag-depois">Depois</span>
      <div className="ba-handle" style={{ left: `${pos}%` }}>
        <span className="ba-handle-grip" aria-hidden="true">⟷</span>
      </div>
    </div>
  )
}
