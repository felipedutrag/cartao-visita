'use client'

import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from './ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark-occult'

  const toggleMode = () => {
    setTheme(isDark ? 'minimal-light' : 'dark-occult')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleMode}
      title={isDark ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro'}
      className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] shadow-md transition-all duration-300 hover:scale-105"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 animate-in fade-in zoom-in spin-in-90 duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 animate-in fade-in zoom-in spin-in-90 duration-300" />
      )}
    </Button>
  )
}
