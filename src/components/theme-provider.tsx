'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'dark-occult' | 'emerald-luxury' | 'cyber-neon' | 'minimal-light'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark-occult')

  useEffect(() => {
    const saved = localStorage.getItem('card_theme') as Theme
    if (saved) {
      setThemeState(saved)
      document.documentElement.setAttribute('data-theme', saved)
    } else {
      document.documentElement.setAttribute('data-theme', 'dark-occult')
    }
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('card_theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
