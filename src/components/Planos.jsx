import { montarLinkWhatsapp } from '@/lib/whatsapp.js'

const planos = [
  {
    id: 'padrao',
    nome: 'Plano Padrão',
    tipo: 'Consultoria',
    preco: 149,
    desc: 'Foco total em treino individualizado.',
    itens: [
      'Avaliação inicial completa (anamnese)',
      'Montagem de treino individualizado',
      'Acesso ao app com vídeos explicativos',
      'Ajuste mensal de treino',
    ],
  },
  {
    id: 'premium',
    nome: 'Plano Premium',
    tipo: 'Consultoria VIP',
    destaque: true,
    preco: 249,
    desc: 'Acompanhamento próximo e correção de execução.',
    itens: [
      'Tudo do Plano Padrão',
      'Suporte prioritário no WhatsApp',
      'Análise de vídeos de execução',
      'Correção de postura personalizada',
      'Ajustes quinzenais de treino',
    ],
  },
]

export default function Planos({ onEscolherPlano }) {
  return (
    <section id="planos">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">Planos</div>
          <h2>Escolha o seu nível de compromisso</h2>
          <p>Dois caminhos. Um objetivo: resultado real e sustentável.</p>
        </div>
        <div className="planos-grid">
          {planos.map((p) => (
            <div className={`plano${p.destaque ? ' destaque' : ''}`} key={p.id}>
              {p.destaque && <div className="plano-tag">Mais recomendado</div>}
              <div className="plano-nome">{p.tipo}</div>
              <div className="plano-tipo">{p.nome}</div>
              <div className="plano-preco">R$ {p.preco}<span>/mês</span></div>
              <ul className="plano-lista">
                {p.itens.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a
                href={montarLinkWhatsapp(`Olá! Quero assinar o ${p.nome} (R$ ${p.preco}/mês) do Team Siqueira.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="plano-btn"
                onClick={() => onEscolherPlano?.(p.nome)}
              >
                Assinar {p.nome}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
