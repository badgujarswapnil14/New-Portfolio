import SectionHeading from './SectionHeading'
import { aboutHighlights } from '../data/portfolio'

function AboutSection() {
  return (
    <section id="about" className="section-shell" data-animate-section>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Technical depth built on systems thinking and modern frontend delivery."
          description="I completed B.Tech in Computer Science and currently work as a Linux Admin, where practical troubleshooting, system reliability, and infrastructure awareness shape how I solve problems. Alongside that foundation, I build polished web experiences using JavaScript, React, and Tailwind CSS."
        />

        <div className="grid gap-8 sm:grid-cols-2" data-animate-item>
          {aboutHighlights.map((item) => (
            <div key={item.title} className="space-y-4 border-l border-white/10 pl-5 sm:pl-6">
              <span className="inline-flex w-fit text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100/90">
                {item.title}
              </span>
              <p className="max-w-md text-base leading-8 text-slate-300">{item.description}</p>
            </div>
          ))}
          <div className="sm:col-span-2 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3" data-parallax>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Primary Domains</p>
              <p className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-white">Linux, Networking, AWS</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Frontend Stack</p>
              <p className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-white">JavaScript, React, Tailwind</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Approach</p>
              <p className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-white">Practical, clean, scalable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection