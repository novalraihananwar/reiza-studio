'use client'
import React, { useEffect, useRef, ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'blue' | 'teal' | 'green' | 'orange' | 'pink'
  customSize?: boolean
}

const glowColorMap = {
  blue:   { base: 200, spread: 40 },
  teal:   { base: 175, spread: 30 },
  green:  { base: 140, spread: 30 },
  orange: { base: 30,  spread: 20 },
  pink:   { base: 330, spread: 20 },
}

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
  customSize = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', e.clientX.toFixed(2))
        cardRef.current.style.setProperty('--xp', (e.clientX / window.innerWidth).toFixed(2))
        cardRef.current.style.setProperty('--y', e.clientY.toFixed(2))
        cardRef.current.style.setProperty('--yp', (e.clientY / window.innerHeight).toFixed(2))
      }
    }
    document.addEventListener('pointermove', syncPointer)
    return () => document.removeEventListener('pointermove', syncPointer)
  }, [])

  const { base, spread } = glowColorMap[glowColor]

  const inlineStyles: React.CSSProperties & Record<string, string | number> = {
    '--base': base,
    '--spread': spread,
    '--radius': '20',
    '--border': '1.5',
    '--backdrop': 'rgba(255,255,255,0.7)',
    '--backup-border': 'rgba(255,255,255,0.5)',
    '--size': '220',
    '--outer': '1',
    '--border-size': 'calc(var(--border, 2) * 1px)',
    '--spotlight-size': 'calc(var(--size, 150) * 1px)',
    '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) 80% 70% / 0.08), transparent
    )`,
    backgroundColor: 'var(--backdrop, transparent)',
    backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
    backgroundPosition: '50% 50%',
    backgroundAttachment: 'fixed',
    border: 'var(--border-size) solid var(--backup-border)',
    position: 'relative',
    touchAction: 'none',
  }

  const cssStr = `
    [data-glow]::before,[data-glow]::after{
      pointer-events:none;content:"";position:absolute;
      inset:calc(var(--border-size)*-1);
      border:var(--border-size) solid transparent;
      border-radius:calc(var(--radius)*1px);
      background-attachment:fixed;
      background-size:calc(100%+(2*var(--border-size))) calc(100%+(2*var(--border-size)));
      background-repeat:no-repeat;background-position:50% 50%;
      mask:linear-gradient(transparent,transparent),linear-gradient(white,white);
      mask-clip:padding-box,border-box;mask-composite:intersect;
    }
    [data-glow]::before{
      background-image:radial-gradient(
        calc(var(--spotlight-size)*0.75) calc(var(--spotlight-size)*0.75) at
        calc(var(--x,0)*1px) calc(var(--y,0)*1px),
        hsl(var(--hue,210) 80% 55% / 0.9),transparent 100%
      );filter:brightness(1.5);
    }
    [data-glow]::after{
      background-image:radial-gradient(
        calc(var(--spotlight-size)*0.5) calc(var(--spotlight-size)*0.5) at
        calc(var(--x,0)*1px) calc(var(--y,0)*1px),
        hsl(0 100% 100%/0.8),transparent 100%
      );
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStr }} />
      <div ref={cardRef} data-glow style={inlineStyles} className={`rounded-3xl relative backdrop-blur-xl shadow-glass ${className}`}>
        <div data-glow className="absolute inset-0 rounded-3xl" />
        {children}
      </div>
    </>
  )
}

export { GlowCard }
