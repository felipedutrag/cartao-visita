'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import {
  MessageCircle,
  Globe,
  MapPin,
  Mail,
  ExternalLink,
  Share,
  Code,
  Camera,
  Building2,
  Navigation,
  Clock,
  Compass,
  QrCode,
  Check,
  ShoppingBag,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AiVoiceAssistantCard } from '@/components/ai-voice-assistant-card'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  const [copiedPix, setCopiedPix] = useState(false)
  const [copiedProductPix, setCopiedProductPix] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleCopyPix = () => {
    const pixKey = '407.501.898-94'
    navigator.clipboard.writeText(pixKey)
    setCopiedPix(true)
    setTimeout(() => setCopiedPix(false), 3000)
  }

  const handleBuyProduct = (index: number, productName: string, price: string) => {
    const pixKey = '407.501.898-94'
    navigator.clipboard.writeText(pixKey)
    setCopiedProductPix(index)
    setTimeout(() => setCopiedProductPix(null), 3000)
    
    const message = encodeURIComponent(`Olá Felipe! Fiz o Pix para adquirir o serviço: ${productName} (${price}). Segue o comprovante:`)
    window.open(`https://wa.me/5500000000000?text=${message}`, '_blank')
  }

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const storeProducts = [
    {
      title: 'Consultoria Estratégica de IA',
      price: 'R$ 497,00',
      description: 'Sessão individual de 1 hora para implementar automação e IA de voz no seu negócio.',
      badge: 'Mais Vendido',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Cartão VIP com IA Personalizado',
      price: 'R$ 297,00',
      description: 'Desenvolvimento do seu cartão de visitas inteligente com assistente de voz exclusivo.',
      badge: 'Lançamento',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Masterclass Automação 24h',
      price: 'R$ 97,00',
      description: 'Treinamento completo para transformar seu WhatsApp e redes sociais em máquinas de vendas.',
      badge: 'Curso',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Pacote Tráfego & Funil VIP',
      price: 'R$ 897,00',
      description: 'Setup completo de anúncios e direcionamento direto para seu atendimento de IA.',
      badge: 'Escala',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=600&auto=format&fit=crop',
    },
  ]

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

      {/* Container da Capa Superior com Efeito de Neblina Cinematográfica */}
      <div className="w-full h-[180px] md:h-[220px] relative overflow-hidden bg-zinc-950">
        {/* Imagem de Fundo com Animação Suave de Neblina */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fog"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&auto=format&fit=crop')`
          }}
        />

        {/* Camada Dupla de Neblina Flutuante (Fog Gradient Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-white/5 to-black/40 backdrop-blur-[1px] pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[hsl(var(--background))]" />
      </div>

      {/* Hero Section / Conteúdo Principal sobreposto à metade da foto */}
      <header className="w-full relative z-10 -mt-16 md:-mt-20 px-6 md:px-16 lg:px-24 border-b border-[hsl(var(--border))] pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          
          {/* Lado Esquerdo: Foto com tratamento visual cinematográfico */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[hsl(var(--background))] shadow-[0_0_50px_-10px_hsl(var(--primary)/0.5)] overflow-hidden bg-zinc-950 relative">
                <img
                  src="/felipe.jpg"
                  alt="Felipe Dutra"
                  className="w-full h-full object-cover object-top contrast-[1.12] brightness-[0.92] saturate-[0.85] transition-all duration-500 group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-radial-vignette pointer-events-none ring-1 ring-inset ring-black/20" />
              </div>
              <span className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 border-4 border-[hsl(var(--background))] rounded-full z-20" title="Online Agora" />
            </div>

            <div className="space-y-2 pb-2">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.08)] text-xs font-semibold text-[hsl(var(--primary))] backdrop-blur-md">
                Cartão Inteligente VIP
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

          {/* Lado Direito: Botões WhatsApp e Copiar Pix idênticos em tamanho (h-14, px-7) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Botão WhatsApp Verde VIP */}
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1%20Felipe!%20Vim%20pelo%20seu%20Cart%C3%A3o%20Inteligente."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                className="h-14 px-7 rounded-2xl text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2.5 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </Button>
            </a>

            {/* Botão Copiar Chave Pix com Borda Fina e Cor Exata do Subtítulo */}
            <Button
              onClick={handleCopyPix}
              variant="gold"
              className="h-14 px-7 rounded-2xl text-base font-bold flex items-center gap-2.5 shadow-lg"
            >
              {copiedPix ? (
                <>
                  <Check className="w-5 h-5 text-emerald-400 animate-in zoom-in duration-300" />
                  <span>Pix Copiado!</span>
                </>
              ) : (
                <>
                  <QrCode className="w-5 h-5 text-[hsl(var(--primary))]" />
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

        {/* SEÇÃO MINI-LOJA / VITRINE EM CARROSSEL FLUIDO */}
        <section className="w-full space-y-6">
          <div className="flex items-center justify-between border-b border-[hsl(var(--border))] pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--primary))] mb-1">
                <ShoppingBag className="w-4 h-4" /> Soluções Exclusivas
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[hsl(var(--foreground))]">
                Serviços em Destaque
              </h2>
            </div>

            {/* Botões de Navegação do Carrossel */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollCarousel('left')}
                className="h-10 w-10 rounded-full border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]"
                title="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollCarousel('right')}
                className="h-10 w-10 rounded-full border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]"
                title="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Container do Carrossel com Scroll Horizontal Suave */}
          <div
            ref={carouselRef}
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {storeProducts.map((prod, idx) => (
              <div
                key={idx}
                className="min-w-[300px] md:min-w-[360px] max-w-[360px] snap-start group relative overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-sm transition-all duration-500 hover:scale-[1.02] hover:border-[hsl(var(--primary)/0.6)] flex flex-col justify-between shrink-0"
              >
                <div>
                  {/* Banner do Produto */}
                  <div className="w-full h-48 relative overflow-hidden bg-zinc-900">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.3)]">
                      {prod.badge}
                    </span>
                  </div>

                  {/* Informações do Produto */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-bold text-lg text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-2xl font-black text-[hsl(var(--primary))]">
                      {prod.price}
                    </p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {prod.description}
                    </p>
                  </div>
                </div>

                {/* Botão de Compra Direta por Pix + WhatsApp */}
                <div className="p-6 pt-0">
                  <Button
                    onClick={() => handleBuyProduct(idx, prod.title, prod.price)}
                    className="w-full h-12 rounded-xl text-sm font-bold flex items-center justify-center gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 transition-all shadow-md"
                  >
                    {copiedProductPix === idx ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Pix Copiado! Abrindo WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <QrCode className="w-4 h-4" />
                        <span>Comprar via Pix</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
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

            <div className="p-5 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center gap-4 shadow-sm hover:border-[hsl(var(--primary)/0.1)] transition-all">
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
