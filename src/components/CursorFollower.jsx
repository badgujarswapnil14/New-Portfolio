import { useEffect, useRef } from 'react'

function CursorFollower() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) {
      return undefined
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let currentX = mouseX
    let currentY = mouseY
    let scale = 1
    let frameId

    const tick = () => {
      currentX += (mouseX - currentX) * 0.18
      currentY += (mouseY - currentY) * 0.18
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`
      frameId = window.requestAnimationFrame(tick)
    }

    const handleMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      cursor.style.opacity = '1'
    }

    const interactiveElements = document.querySelectorAll('[data-cursor-target]')
    const activate = (event) => {
      scale = event.currentTarget.dataset.cursorTarget === 'card' ? 1.85 : 1.35
      cursor.dataset.mode = event.currentTarget.dataset.cursorTarget
    }
    const deactivate = () => {
      scale = 1
      cursor.dataset.mode = 'default'
    }

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', activate)
      element.addEventListener('mouseleave', deactivate)
    })

    window.addEventListener('mousemove', handleMove)
    frameId = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', activate)
        element.removeEventListener('mouseleave', deactivate)
      })
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div
        ref={cursorRef}
        data-mode="default"
        className="portfolio-cursor absolute left-0 top-0"
      />
    </div>
  )
}

export default CursorFollower