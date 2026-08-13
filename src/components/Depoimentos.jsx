import Link from 'next/link'
import BeforeAfter from '@/components/BeforeAfter.jsx'
import { depoimentos } from '@/data/depoimentos.js'

export default function Depoimentos() {
  const destaques = depoimentos.slice(0, 3)

  return (
    <section id="depoimentos">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">Prova social</div>
          <h2>Evoluções reais do Team Siqueira</h2>
        </div>
        <div className="depo-grid">
          {destaques.map((d) => (
            <div className="depo" key={d.nome}>
              <BeforeAfter antes={d.fotoAntes} depois={d.fotoDepois} nome={d.nome} />
              <div className="depo-result">{d.resultado}</div>
              <p className="depo-quote">&ldquo;{d.quote}&rdquo;</p>
              <div className="depo-meta">
                <div className="depo-avatar">{d.iniciais}</div>
                <div className="depo-name">{d.nome}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="depo-cta">
          <Link href="/depoimentos" className="depo-ver-mais">Ver todos os depoimentos ({depoimentos.length}) →</Link>
        </div>
      </div>
    </section>
  )
}
