import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('sessionId') || 'default_session'
  const voiceName = searchParams.get('voiceName') || 'Kore'

  const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || ''

  const systemInstruction = `Você é a assistente de voz com IA do cartão de visitas de Felipe Dutra (Arquiteto de Software & Fundador).
Responda de forma extremamente elegante, educada, concisa e objetiva.
Explique aos visitantes que Felipe é especialista em IA, desenvolvimento de sistemas escaláveis e soluções de alto impacto.
Ajude os visitantes a entenderem os serviços dele, agendamentos e como entrar em contato.`

  return NextResponse.json({
    key: apiKey,
    voiceName,
    systemInstruction,
    tools: [],
  })
}
