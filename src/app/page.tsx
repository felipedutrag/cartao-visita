'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  MessageCircle,
  Globe,
  MapPin,
  Mail,
  ExternalLink,
  Sparkles,
  Share,
  Code,
  Camera,
  Building2,
  Navigation,
  Clock,
  Compass,
  QrCode,
  Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AiVoiceAssistantCard } from '@/components/ai-voice-assistant-card'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  const [copiedPix, setCopiedPix] = useState(false)

  const handleCopyPix = () => {
    const pixKey = '407.501.898-94'
    navigator.clipboard.writeText(pixKey)
    setCopiedPix(true)
    setTimeout(() => setCopiedPix(false), 3000)
  }

  const socialLinks = [
    {
      title: 'WhatsApp Direto',
      subtitle: 'Atendimento e Orçamentos Rápidos',
      icon: <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />,
      url: 'https://wa.me/5500000000000',
      highlight: true,
    },
    {
      title: 'Instagram Oficial',
      subtitle: 'Bastidores, Projetos e Novidades',
      icon: <Camera className="w-6 h-6 text-pink-600 dark:text-pink-500" />,
      url: 'https://instagram.com',
    },
    {
      title: 'LinkedIn Profissional',
      subtitle: 'Conexões e Perfil Corporativo',
      icon: <Share className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      url: 'https://linkedin.com',
    },
    {
      title: 'Portfólio / GitHub',
      subtitle: 'Repositórios e Código Aberto',
      icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      url: 'https://github.com',
    },
    {
      title: 'Website Oficial',
      subtitle: 'Conheça o ecossistema completo',
      icon: <Globe className="w-6 h-6 text-amber-600 dark:text-amber-500" />,
      url: 'https://google.com',
    },
  ]

  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.097615234907!2d-46.65406082377227!3d-23.563124461748293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2d97107!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr`

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-500 flex flex-col justify-between relative overflow-hidden">
      
      {/* Botão de Tema Flutuante Fixo no Canto Superior Direito */}
      <div className="fixed top-6 right-6 z-50">
        <ModeToggle />
      </div>

      {/* Container da Capa Superior com Altura Reduzida */}
      <div className="w-full h-[180px] md:h-[220px] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&auto=format&fit=crop')`
          }}
        >
          {/* Sombra gradiente inferior para suavizar a transição */}
          <div className="w-full h-full bg-gradient-to-b from-black/40 via-transparent to-[hsl(var(--background))]" />
        </div>
      </div>

      {/* Hero Section / Conteúdo Principal sobreposto à metade da foto */}
      <header className="w-full relative z-10 -mt-16 md:-mt-20 px-6 md:px-16 lg:px-24 border-b border-[hsl(var(--border))] pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          
          {/* Lado Esquerdo: Foto sobrepondo a capa até a metade + Infos */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[hsl(var(--background))] shadow-[0_0_50px_-10px_hsl(var(--primary)/0.4)] overflow-hidden bg-[hsl(var(--card))] relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                  alt="Foto de Perfil"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 border-4 border-[hsl(var(--background))] rounded-full" title="Online Agora" />
            </div>

            <div className="space-y-2 pb-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.08)] text-xs font-semibold text-[hsl(var(--primary))] backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" /> Cartão Inteligente VIP
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[hsl(var(--foreground))]">
                Felipe Dutra
              </h1>
              
              <p className="text-lg md:text-xl font-semibold text-[hsl(var(--primary))]">
                Arquiteto de Software & Fundador
              </p>
              
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] max-w-2xl leading-relaxed">
                Especialista em Inteligência Artificial, Sistemas Escaláveis de Alta Performance e Experiências Digitais Luxuosas.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-2 text-xs md:text-sm text-[hsl(var(--muted-foreground))]">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[hsl(var(--primary))]" /> São Paulo, Brasil
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Mail className="w-4 h-4 text-[hsl(var(--primary))]" /> contato@felipe.com
                </span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Botão Copiar Chave PIX de Luxo */}
          <div className="flex items-center justify-center">
            <Button
              onClick={handleCopyPix}
              variant="glow"
              className="h-14 px-8 rounded-2xl text-base font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {copiedPix ? (
                <>
                  <Check className="w-5 h-5 text-emerald-400 animate-in zoom-in duration-300" />
                  <span>Chave Pix Copiada!</span>
                </>
              ) : (
                <>
                  <QrCode className="w-5 h-5" />
                  <span>Copiar Chave Pix</span>
                </>
              )}
            </Button>
          </div>

        </div>
      </header>

      {/* Seção Principal: Grid Full-Width */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12 space-y-16 z-10 flex-grow">
        
        {/* Bloco Destaque: IA de Voz Fluida em Largura Total */}
        <section className="w-full">
          <AiVoiceAssistantCard />
        </section>

        {/* Seção de Links & Redes Sociais Full-Width */}
        <section className="w-full space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Canais de Comunicação & Redes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group-hover:scale-[1.01] group-hover:border-[hsl(var(--primary))] shadow-sm ${
                    link.highlight
                      ? 'border-[hsl(var(--primary)/0.4)] bg-[hsl(var(--card))]'
                      : 'border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--background))]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[hsl(var(--background))] border border-[hsl(var(--border))] group-hover:bg-[hsl(var(--primary)/0.1)] transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-xs text-[hsl(var(--muted-foreground))]">
                        {link.subtitle}
                      </p>
                    </div>
                  </div>

                  <ExternalLink className="w-5 h-5 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Bloco Onde Nos Encontrar com Layout Full-Width Expandido */}
        <section className="w-full p-8 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] backdrop-blur-md space-y-6 shadow-sm">
          
          {/* Header Atualizado: Onde nos encontrar */}
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--primary))]">
              <Compass className="w-4 h-4" /> Atendimento Presencial
            </div>
            <h3 className="text-2xl font-black tracking-tight text-[hsl(var(--foreground))]">
              Onde nos encontrar
            </h3>
          </div>

          {/* Cards Informativos de Endereço e Detalhes Limpos e Claros */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-5 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center gap-4 shadow-sm hover:border-[hsl(var(--primary)/0.5)] transition-all">
              <div className="p-3 rounded-xl bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.2)]">
                <Navigation className="w-5 h-5 text-[hsl(var(--primary))]" />
              </div>
              <div>
                <p className="text-xs text-[hsl(var(--muted-foreground))] font-medium uppercase tracking-wider">Endereço Principal</p>
                <p className="font-bold text-sm text-[hsl(var(--foreground))]">Av. Paulista, 1000 — Bela Vista</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center gap-4 shadow-sm hover:border-[hsl(var(--primary)/0.5)] transition-all">
              <div className="p-3 rounded-xl bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.2)]">
                <Building2 className="w-5 h-5 text-[hsl(var(--primary))]" />
              </div>
              <div>
                <p className="text-xs text-[hsl(var(--muted-foreground))] font-medium uppercase tracking-wider">Edifício & Conjunto</p>
                <p className="font-bold text-sm text-[hsl(var(--foreground))]">Ed. Rochaverá • Conjunto 1402</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center gap-4 shadow-sm hover:border-[hsl(var(--primary)/0.5)] transition-all">
              <div className="p-3 rounded-xl bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.2)]">
                <Clock className="w-5 h-5 text-[hsl(var(--primary))]" />
              </div>
              <div>
                <p className="text-xs text-[hsl(var(--muted-foreground))] font-medium uppercase tracking-wider">Cidade & Horário</p>
                <p className="font-bold text-sm text-[hsl(var(--foreground))]">São Paulo - SP • Seg à Sex 09h-18h</p>
              </div>
            </div>
          </div>

          {/* Iframe do Google Maps Interativo */}
          <div className="w-full h-80 md:h-96 rounded-2xl border border-[hsl(var(--border))] overflow-hidden shadow-xl relative bg-[hsl(var(--card))]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>

          {/* Botão de Abrir Google Maps em Full-Width Abaixo do Mapa */}
          <a
            href="https://maps.google.com/?q=Av.+Paulista,+1000+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button
              variant="outline"
              className="w-full h-14 text-base font-bold border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.08)] transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5 text-[hsl(var(--primary))]" /> Abrir no Google Maps
            </Button>
          </a>
        </section>

      </main>

      {/* Footer Discreto e Elegante com Link sutil de Afiliado */}
      <footer className="w-full py-8 border-t border-[hsl(var(--border))] text-center text-xs text-[hsl(var(--muted-foreground))] z-10 space-y-2">
        <p>© 2026 Felipe Dutra • Todos os direitos reservados</p>
        <p className="text-[11px]">
          Desenvolvido com IA •{' '}
          <a
            href="https://wa.me/5500000000000?text=Quero%20ter%20meu%20Cart%C3%A3o%20Inteligente%20VIP%20com%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--primary))] font-semibold hover:underline transition-all"
          >
            Crie seu Cartão com IA de Voz aqui ⚡
          </a>
        </p>
      </footer>
    </div>
  )
}
