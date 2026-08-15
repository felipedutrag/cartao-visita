import { execSync } from 'child_process'
import { GoogleGenAI } from '@google/genai'

async function generateCommitAndPush() {
  try {
    // 1. Capturar o git diff dos arquivos alterados
    const diff = execSync('git diff --cached', { encoding: 'utf-8' }) || execSync('git diff', { encoding: 'utf-8' })
    const status = execSync('git status --porcelain', { encoding: 'utf-8' })

    if (!status.trim()) {
      console.log('⚠️ Nenhum arquivo alterado para fazer commit.')
      return
    }

    console.log('🔍 Analisando alterações com Gemini 3.1 Flash Lite...')

    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY
    if (!apiKey) {
      console.error('❌ Erro: GEMINI_API_KEY não encontrada no arquivo .env!')
      process.exit(1)
    }

    const ai = new GoogleGenAI({ apiKey })

    const prompt = `Você é um gerador automático de commit git.
Analise a seguinte alteração de código (diff/status) e gere UMA ÚNICA LINHA de mensagem de commit no padrão Conventional Commits (ex: feat: ..., fix: ..., style: ...).
Responda APENAS com a frase do commit, sem explicações, sem aspas e sem formatação markdown.

Status/Diff das alterações:
${status}
${diff.substring(0, 4000)}`

    // Usando o modelo gemini-3.1-flash-lite via SDK oficial da v1.0+
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents: prompt,
    })

    const commitMessage = response.text?.trim().replace(/^["']|["']$/g, '') || 'feat: atualizações no projeto'
    console.log(`📝 Mensagem de commit gerada: "${commitMessage}"`)

    // Configurar o autor correto
    execSync('git config user.email "felipedutra@outlook.com"')
    execSync('git config user.name "felipedutrag"')

    // Executar os comandos do Git
    console.log('📦 Adicionando arquivos (git add .)...')
    execSync('git add .')

    console.log('💾 Fazendo commit (git commit)...')
    execSync(`git commit -m "${commitMessage}"`)

    console.log('🚀 Publicando no repositório remoto (git push origin main)...')
    execSync('git push origin main')

    console.log('✅ Projeto publicado no Git e Vercel com sucesso!')
  } catch (error: any) {
    console.error('❌ Erro ao publicar no Git:', error.message || error)
  }
}

generateCommitAndPush()
