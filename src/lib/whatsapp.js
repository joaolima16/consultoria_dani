export const WHATSAPP_NUMBER = '5511900000000'

export function montarLinkWhatsapp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
}
