import BeforeAfter from '@/components/BeforeAfter.jsx'

const depoimentos = [
  {
    iniciais: 'R',
    nome: 'Rafael M.',
    resultado: '-12kg em 5 meses',
    quote: 'Nunca tinha conseguido resultado assim. O treino faz total sentido pra minha rotina de pai e trampo.',
    fotoAntes: '/avaliacoes/rafael-antes.svg',
    fotoDepois: '/avaliacoes/rafael-depois.svg',
  },
  {
    iniciais: 'J',
    nome: 'Juliana S.',
    resultado: '+6kg de massa magra',
    quote: 'Comecei achando que era pra homens. Hoje sou outra pessoa, mais forte, mais confiante.',
    fotoAntes: '/avaliacoes/juliana-antes.svg',
    fotoDepois: '/avaliacoes/juliana-depois.svg',
  },
  {
    iniciais: 'D',
    nome: 'Diego P.',
    resultado: 'Prep de estreia no físico',
    quote: 'O Siqueira sabe o que é subir no palco. Cada detalhe da preparação foi cirúrgico.',
    fotoAntes: '/avaliacoes/diego-antes.svg',
    fotoDepois: '/avaliacoes/diego-depois.svg',
  },
  {
    iniciais: 'C',
    nome: 'Carla T.',
    resultado: 'Voltou a treinar após lesão',
    quote: 'Respeitou minha limitação no joelho e mesmo assim me fez evoluir. Suporte no WhatsApp é diferenciado.',
    fotoAntes: '/avaliacoes/carla-antes.svg',
    fotoDepois: '/avaliacoes/carla-depois.svg',
  },
]

export default function Depoimentos() {
  return (
    <section id="depoimentos">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">Prova social</div>
          <h2>Evoluções reais do Team Siqueira</h2>
        </div>
        <div className="depo-grid">
          {depoimentos.map((d) => (
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
      </div>
    </section>
  )
}
