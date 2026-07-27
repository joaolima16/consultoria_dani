const metrics = [
  { num: '+300', label: 'alunos acompanhados' },
  { num: '+8', label: 'anos de experiência' },
  { num: '100%', label: 'Acompanhamento personalizado' },
]

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap">
        <div className="hero-eyebrow">Consultoria presencial &amp; online</div>
        <h1>Resultados reais começam com a <em>Estratégia certa</em></h1>
        <p className="hero-sub">Treinamento personalizado baseado em ciência, experiência prática e na vivência de quem alcançou a alta performance, sempre respeitando a individualidade de cada aluno.</p>
        <div className="hero-actions">
          <a href="#planos" className="btn-primary">Quero começar</a>
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
