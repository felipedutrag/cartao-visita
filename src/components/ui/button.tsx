'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'glow'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95'
  
  const variants = {
    default: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 shadow-md',
    outline: 'border border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))]',
    ghost: 'hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))]',
    glow: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] glow-effect hover:scale-[1.02]',
  }

  const sizes = {
    default: 'h-12 px-6 py-3 rounded-xl text-base',
    sm: 'h-9 px-3 rounded-lg text-sm',
    lg: 'h-14 px-8 rounded-2xl text-lg',
    icon: 'h-10 w-10 rounded-full p-0',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}
