import { type PointerEvent as ReactPointerEvent, type ReactNode, useRef } from 'react'

export function TiltCard({ children, className }: { children: ReactNode; className: string }) {
  const card = useRef<HTMLDivElement>(null)

  const onMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch' || !card.current) return
    const rect = card.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -8
    const rotateY = ((x - rect.width / 2) / rect.width) * 8
    card.current.style.setProperty('--rotate-x', `${rotateX}deg`)
    card.current.style.setProperty('--rotate-y', `${rotateY}deg`)
    card.current.style.setProperty('--shine-x', `${x}px`)
    card.current.style.setProperty('--shine-y', `${y}px`)
  }

  const reset = () => {
    card.current?.style.setProperty('--rotate-x', '0deg')
    card.current?.style.setProperty('--rotate-y', '0deg')
  }

  return (
    <div ref={card} className={`tilt-card ${className}`} onPointerMove={onMove} onPointerLeave={reset}>
      <span className="tilt-shine" />
      <div className="tilt-content">{children}</div>
    </div>
  )
}
