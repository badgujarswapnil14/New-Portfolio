import { useRef } from 'react'
import { gsap } from 'gsap'

function TiltCard({ children, className = '', ...props }) {
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  const handleMove = (event) => {
    const card = cardRef.current
    if (!card) {
      return
    }

    const bounds = card.getBoundingClientRect()
    const offsetX = event.clientX - bounds.left
    const offsetY = event.clientY - bounds.top
    const rotateY = ((offsetX / bounds.width) - 0.5) * 16
    const rotateX = (0.5 - offsetY / bounds.height) * 14

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.015,
      duration: 0.35,
      ease: 'power2.out',
      transformPerspective: 900,
      transformOrigin: 'center',
    })

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 1,
        x: offsetX - bounds.width / 2,
        y: offsetY - bounds.height / 2,
        duration: 0.35,
        ease: 'power2.out',
      })
    }
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) {
      return
    }

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.45,
      ease: 'power3.out',
    })

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        x: 0,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      })
    }
  }

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-shadow duration-300 hover:shadow-glow ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor-target="card"
      {...props}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl opacity-0"
      />
      <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

export default TiltCard