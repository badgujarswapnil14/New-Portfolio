import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

function SkillsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const context = gsap.context(() => {
      const rows = gsap.utils.toArray('[data-skill-row]', section)

      rows.forEach((row, index) => {
        const direction = index % 2 === 0 ? -1 : 1
        const points = row.querySelectorAll('[data-skill-point]')
        const stack = row.querySelectorAll('[data-skill-stack]')

        gsap.fromTo(
          row,
          {
            y: 44,
            x: 28 * direction,
            opacity: 0,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 86%',
            },
          },
        )

        gsap.to(row, {
          yPercent: direction * -4,
          ease: 'none',
          scrollTrigger: {
            trigger: row,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })

        if (points.length) {
          gsap.fromTo(
            points,
            { y: 16, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 76%',
              },
            },
          )
        }

        if (stack.length) {
          gsap.fromTo(
            stack,
            { y: 12, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 72%',
              },
            },
          )
        }
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="section-shell overflow-hidden" data-animate-section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A stronger capability showcase with layered motion, cleaner hierarchy, and premium card structure."
          description="The skills section now reads like a polished capability deck instead of a simple grid. Each card carries clearer structure, stronger spacing, and a more cinematic scroll experience."
          align="center"
        />

        <div className="mt-14 space-y-10">
          <div className="flex flex-col gap-5 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">Capability Overview</p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Linux, networking, and AWS form the operational core. JavaScript, React, and Tailwind extend that profile into polished, recruiter-facing frontend work.
              </p>
            </div>
            <div className="grid max-w-xl grid-cols-3 gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Core Areas</p>
                <p className="mt-2 font-display text-2xl font-bold text-white">6</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Infra Focus</p>
                <p className="mt-2 font-display text-2xl font-bold text-white">3</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Frontend Focus</p>
                <p className="mt-2 font-display text-2xl font-bold text-white">3</p>
              </div>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-8 lg:grid-cols-2">
              {skills.map((skill, index) => {
                const Icon = skill.icon

                return (
                  <div
                    key={skill.title}
                    className="skill-row space-y-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-7"
                    data-animate-item
                    data-skill-row
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950/40 text-cyan-100 ring-1 ring-white/10">
                          <Icon size={26} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:tracking-[0.32em]">
                            {skill.category}
                          </p>
                          <h3 className="mt-2 break-words font-display text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
                            {skill.title}
                          </h3>
                        </div>
                      </div>
                      <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="max-w-2xl text-base leading-8 text-slate-300">{skill.overview}</p>

                    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(14rem,0.8fr)]">
                      <div className="space-y-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Key Focus</p>
                        <div className="space-y-3">
                          {skill.focus.map((point) => (
                            <div key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-200" data-skill-point>
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-5 border-l border-white/10 pl-5">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Stack</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {skill.stack.map((tool) => (
                              <span
                                key={tool}
                                className="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200"
                                data-skill-stack
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Impact</p>
                          <p className="mt-3 text-sm leading-7 text-slate-300">{skill.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection