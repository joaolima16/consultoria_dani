export default function Footer() {
  return (
    <footer>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src="/file.png" alt="Team Siqueira" style={{ height: 40, width: 'auto' }} />
          <span>© 2026 Team Siqueira — Personal Trainer.</span>
        </div>
        <div>Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}
