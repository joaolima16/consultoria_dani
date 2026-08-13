export default function Sobre() {
  return (
    <section id="sobre">
      <div className="wrap sobre-grid">
        <div className="sobre-left">
          <div className="sobre-photo">
            <div className="sobre-photo-inner">
              <img
                src="/assets/dani.jpeg"
                alt="Daniel Siqueira, treinador e ex-atleta de fisiculturismo"
                loading="lazy"
                width="420"
                height="525"
              />
            </div>
            <div className="sobre-badge">
              <span className="sobre-badge-num">+25</span>
              <span className="sobre-badge-label">anos de esporte</span>
            </div>
          </div>
          <div className="sobre-tags">
            <div className="sobre-tag">Atendimento presencial</div>
            <div className="sobre-tag">Online via chat</div>
          </div>
        </div>
        <div className="sobre-copy">
          <div className="sec-label">Sobre o método</div>
          <h2>Quem está por trás do seu resultado</h2>
          <p><strong>São mais de 25 anos dedicados ao esporte</strong>. Minha trajetória começou no futebol aos 5 anos de idade, passei pelo futebol profissional e, posteriormente, tive experiência no fisiculturismo.</p>
          <p>Hoje, aplico todo esse conhecimento, aliado à ciência, em um método de treinamento personalizado, focado em resultados reais e na individualidade de cada aluno.</p>
          <ul className="sobre-credenciais">
            <li>Ex-atleta de futebol profissional</li>
            <li>Fisiculturista competidor</li>
            <li>Consultoria 100% personalizada, baseada em ciência</li>
          </ul>
          <a href="#planos" className="btn-primary sobre-cta">Conhecer os planos</a>
        </div>
      </div>
    </section>
  )
}
