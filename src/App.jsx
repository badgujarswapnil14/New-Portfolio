import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AboutSection from './components/AboutSection'
import AnimatedBackground from './components/AnimatedBackground'
import ContactSection from './components/ContactSection'
import CursorFollower from './components/CursorFollower'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import TimelineSection from './components/TimelineSection'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-badge]',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
      )

      gsap.fromTo(
        '[data-hero-title-line]',
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power4.out',
          delay: 0.12,
        },
      )

      gsap.fromTo(
        '[data-hero-copy]',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.18, ease: 'power3.out', delay: 0.4 },
      )

      gsap.fromTo(
        '.hero-panel',
        { y: 48, opacity: 0, scale: 0.94, rotate: 4 },
        { y: 0, opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: 'power4.out', delay: 0.28 },
      )

      gsap.fromTo(
        '[data-hero-cta]',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.14, ease: 'power3.out', delay: 0.65 },
      )

      gsap.utils.toArray('[data-parallax]').forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 0 },
          {
            y: -50 - index * 12,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          },
        )
      })

      gsap.utils.toArray('[data-animate-section]').forEach((section) => {
        const items = section.querySelectorAll('[data-animate-item]')

        gsap.fromTo(
          items,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 78%',
            },
          },
        )
      })

      gsap.utils.toArray('#projects [data-cursor-target="card"]').forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
            },
            duration: 0.9,
            delay: index * 0.08,
          },
        )
      })
    })

    return () => {
      context.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-mesh text-white">
      <AnimatedBackground />
      <CursorFollower />
      <Navigation />

      <main className="relative z-10 pb-10">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App