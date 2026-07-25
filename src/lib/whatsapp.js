export const WHATSAPP_NUMBER = '+551191090-1120'

export function montarLinkWhatsapp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
}
