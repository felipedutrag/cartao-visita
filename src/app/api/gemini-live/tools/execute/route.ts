import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, args } = body

    console.log('[ToolExecute] Executando tool:', name, args)

    return NextResponse.json({
      status: 'success',
      message: `Ferramenta ${name} executada com sucesso.`,
    })
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Falha ao processar ferramenta',
    })
  }
}
