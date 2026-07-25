export default function Sobre() {
  return (
    <section id="sobre">
      <div className="wrap sobre-grid">
        <div className="sobre-left">
          <div className="sobre-photo">
            <img src="/file.png" alt="Personal trainer" />
          </div>
          <div className="sobre-tags">
            <div className="sobre-tag">Atendimento presencial</div>
            <div className="sobre-tag">Online via chat</div>
          </div>
        </div>
        <div className="sobre-copy">
          <p><strong>São mais de 25 anos dedicados ao esporte</strong>. Minha trajetória começou no futebol aos 5 anos de idade, passei pelo futebol profissional e, posteriormente, tive experiência no fisiculturismo.</p>
          <p>Hoje, aplico todo esse conhecimento, aliado à ciência, em um método de treinamento personalizado, focado em resultados reais e na individualidade de cada aluno.</p>
        </div>
      </div>
    </section>
  )
}
