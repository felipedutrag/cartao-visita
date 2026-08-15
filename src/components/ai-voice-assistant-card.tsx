'use client'

import React from 'react'
import { Mic, MicOff, Volume2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLilithVoice } from '@/hooks/use-lilith-voice'

export function AiVoiceAssistantCard() {
  const {
    isRecordingVoice,
    isSpeaking,
    isSessionActive,
    isReadyToSpeak,
    toggleVoiceRecording,
  } = useLilithVoice(
    { nome: 'Cadelo', id: '123' },
    { sessionKey: 'card_voice_session' }
  )

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 md:p-8 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-3.5 w-3.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isSessionActive ? 'bg-emerald-500' : 'bg-emerald-500'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-3.5 w-3.5 ${
                isSessionActive ? 'bg-emerald-500' : 'bg-emerald-500'
              }`}
            />
          </div>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-500">
            IA de Voz Interativa
          </span>
        </div>

        {isSpeaking && (
          <span className="flex items-center gap-1.5 text-xs md:text-sm text-emerald-500 animate-pulse font-semibold">
            <Volume2 className="w-4 h-4" /> Falando...
          </span>
        )}
      </div>

      <div className="text-center py-4">
        <div className="relative inline-block">
          <Button
            onClick={toggleVoiceRecording}
            variant="glow"
            className={`w-20 h-20 md:w-24 md:h-24 rounded-full transition-all duration-500 flex items-center justify-center shadow-xl ${
              isRecordingVoice
                ? 'pulse-ring bg-red-600 hover:bg-red-700 text-white'
                : 'bg-emerald-500 hover:bg-emerald-600 text-white'
            }`}
          >
            {isRecordingVoice ? (
              <MicOff className="w-8 h-8 md:w-10 md:h-10" />
            ) : (
              <Mic className="w-8 h-8 md:w-10 md:h-10" />
            )}
          </Button>
        </div>

        <h4 className="mt-5 text-lg md:text-xl font-bold text-[hsl(var(--foreground))]">
          {isRecordingVoice
            ? isReadyToSpeak
              ? 'Pode falar, estou ouvindo...'
              : 'Conectando à IA...'
            : 'Fale com a Minha IA de Voz'}
        </h4>

        <p className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] max-w-sm mx-auto mt-1.5 leading-relaxed">
          {isRecordingVoice
            ? 'Tire dúvidas sobre meus serviços, projetos e disponibilidade em tempo real.'
            : 'Clique no microfone para iniciar uma conversa explicativa ao vivo via Gemini Live.'}
        </p>
      </div>

      {isRecordingVoice && !isReadyToSpeak && (
        <div className="flex items-center justify-center gap-2 mt-2 text-xs text-[hsl(var(--muted-foreground))]">
          <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-500" />
          Estabelecendo canal WebSocket...
        </div>
      )}
    </div>
  )
}
