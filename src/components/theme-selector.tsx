'use client'

import React from 'react'
import { Palette, Moon, Sun, Sparkles, ShieldCheck } from 'lucide-react'
import { useTheme, Theme } from './theme-provider'
import { Button } from './ui/button'

const themes: { id: Theme; name: string; color: string }[] = [
  { id: 'dark-occult', name: 'Dark Occult', color: '#d4af37' },
  { id: 'emerald-luxury', name: 'Emerald Luxury', color: '#10b981' },
  { id: 'cyber-neon', name: 'Cyber Neon', color: '#ec4899' },
  { id: 'minimal-light', name: 'Minimal Light', color: '#171717' },
]

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        title="Alternar Tema / Paleta"
        className="bg-black/20 backdrop-blur-md border-[hsl(var(--border))]"
      >
        <Palette className="w-5 h-5 text-[hsl(var(--primary))]" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2">
          <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-1">
            Paletas Elegantes
          </div>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id)
                setIsOpen(false)
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                theme === t.id
                  ? 'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] font-medium'
                  : 'hover:bg-[hsl(var(--secondary)/0.5)] text-[hsl(var(--foreground))]'
              }`}
            >
              <span className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full border border-white/20"
                  style={{ backgroundColor: t.color }}
                />
                {t.name}
              </span>
              {theme === t.id && <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
