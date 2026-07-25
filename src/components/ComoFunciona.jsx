const passos = [
  {
    num: '01',
    titulo: 'Primeiro Contato',
    texto: 'Conversamos para entender seu objetivo e explicar como funciona o acompanhamento.',
  },
  {
    num: '02',
    titulo: 'Escolha do plano',
    texto: 'pós definir o melhor plano para você, iniciamos o processo de acompanhamento.',
  },
  {
    num: '03',
    titulo: 'Avaliação completa',
    texto: 'Você preenche uma análise detalhada, envia fotos, medidas e informações da sua rotina para que tudo seja personalizado.',
  },
   {
    num: '04',
    titulo: 'Início da evolução',
    texto: 'Você recebe treino, acompanhamento contínuo e ajustes sempre que necessário.'
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
