export const WHATSAPP_NUMBER = '+5511910901120'

export function montarLinkWhatsapp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
}
