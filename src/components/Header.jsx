export default function Header() {
  return (
    <header>
      <nav className="wrap">
        <div className="logo">TEAM <span>SIQUEIRA</span></div>
        <div className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#planos">Planos</a>
        </div>
        <a href="#planos" className="nav-cta">Quero meus resultados</a>
      </nav>
    </header>
  )
}
