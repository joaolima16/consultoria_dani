const metrics = [
  { num: '500+', label: 'alunos ativos' },
  { num: '10+', label: 'anos de palco' },
  { num: '100%', label: 'individualizado' },
]

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap">
        <div className="hero-eyebrow">Consultoria presencial &amp; online</div>
        <h1>Transforme seu corpo com a <em>experiência</em> de um fisiculturista.</h1>
        <p className="hero-sub">Chega de treinos genéricos. Entre para o Team Siqueira e receba um planejamento 100% individualizado — presencial ou com acompanhamento online via chat.</p>
        <div className="hero-actions">
          <a href="#planos" className="btn-primary">Quero meus resultados</a>
          <a href="#sobre" className="hero-metric-link">conheça o método ↓</a>
        </div>
        <div className="hero-metrics">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="hm-num">{m.num}</div>
              <div className="hm-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
