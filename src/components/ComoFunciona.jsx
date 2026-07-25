const passos = [
  {
    num: '01',
    titulo: 'Treino Individualizado',
    texto: 'Nada de fichas prontas de gaveta. Seu treino é montado do zero com base nos seus objetivos, limitações e rotina.',
  },
  {
    num: '02',
    titulo: 'Presencial ou Online',
    texto: 'Escolha treinar presencialmente com o Siqueira ou seguir o plano à distância com acompanhamento total via chat.',
  },
  {
    num: '03',
    titulo: 'Suporte Direto no Chat',
    texto: 'Canal aberto para tirar dúvidas de execução, ajustes na rotina e motivação diária, onde você estiver.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">O diferencial</div>
          <h2>Como funciona a consultoria</h2>
          <p>Um processo desenhado para tirar você do zero e te levar ao próximo nível.</p>
        </div>
        <div className="passos">
          {passos.map((p) => (
            <div className="passo" key={p.num}>
              <div className="passo-num">{p.num}</div>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
