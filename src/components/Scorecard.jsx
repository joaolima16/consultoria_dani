export default function Scorecard() {
  const seguimentos = Array.from({ length: 10 })
  return (
    <div className="scorecard" aria-hidden="true">
      <div className="scorecard-inner">
        <span className="scorecard-label">Nota</span>
        {seguimentos.map((_, i) => (
          <div key={i} className={`scorecard-seg${i < 9 ? ' lit' : ''}`} />
        ))}
        <span className="scorecard-label">9.0</span>
      </div>
    </div>
  )
}
