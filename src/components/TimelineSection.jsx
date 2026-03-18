import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from './SectionHeading'
import { timelineItems } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

function TimelineSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const context = gsap.context(() => {
      const items = gsap.utils.toArray('[data-timeline-item]', section)

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            y: 42,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: index * 0.05,
            scrollTrigger: {
              trigger: item,
              start: 'top 86%',
            },
          },
        )
      })
    }, section)

    return () => context.revert()
  }, [])
  return (
    <section id="timeline" ref={sectionRef} className="section-shell" data-animate-section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Timeline"
          title="A quick path through education and career milestones."
          description="Each step appears one by one while scrolling, so the timeline reads as a clean progression instead of a dense block."
        />

        <div className="mt-12 relative">
          <div className="absolute left-[1.1rem] top-0 h-full w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-transparent sm:left-28" />

          <div className="space-y-8">
            {timelineItems.map((item) => (
              <div
                key={`${item.period}-${item.summary}`}
                className="relative grid gap-4 pl-10 sm:grid-cols-[6rem_minmax(0,1fr)] sm:items-start sm:gap-8 sm:pl-0"
                data-timeline-item
              >
                <div className="absolute left-[0.7rem] top-2 h-3 w-3 rounded-full border border-cyan-200/40 bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.55)] sm:left-[6.65rem]" />
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 sm:pt-1">
                  {item.period}
                </div>
                <div className="border-b border-white/10 pb-8 text-lg leading-8 text-slate-200 sm:text-xl">
                  {item.summary}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection