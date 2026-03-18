import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolio'

const heroStats = [
  { value: 'Linux', label: 'Admin Systems' },
  { value: 'AWS', label: 'Cloud Readiness' },
  { value: 'React', label: 'Frontend Delivery' },
]

function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 sm:pt-36 lg:pt-44">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="flex flex-col justify-center gap-10">
          <div className="overflow-hidden">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              data-hero-badge
            >
              <Sparkles size={14} />
              Linux Admin
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden">
              <p
                className="font-display text-5xl font-bold leading-none tracking-[-0.07em] text-white sm:text-6xl lg:text-[5.8rem]"
                data-hero-title-line
              >
                Swapnil
              </p>
            </div>
            <div className="overflow-hidden">
              <p
                className="font-display bg-gradient-to-r from-cyan-200 via-white to-orange-200 bg-clip-text text-5xl font-bold leading-none tracking-[-0.07em] text-transparent sm:text-6xl lg:text-[5.8rem]"
                data-hero-title-line
              >
                Badgujar
              </p>
            </div>
            <div className="overflow-hidden">
              <p
                className="text-base font-semibold uppercase tracking-[0.36em] text-slate-300 sm:text-lg"
                data-hero-title-line
              >
                {profile.title}
              </p>
            </div>
          </div>

          <div className="space-y-6" data-hero-copy>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span className="hero-inline-metric">Linux Admin</span>
              <span className="hero-inline-metric">Networking</span>
              <span className="hero-inline-metric">AWS</span>
              <span className="hero-inline-metric">React UI</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4" data-hero-cta>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:translate-y-[-2px] hover:shadow-[0_15px_40px_rgba(103,232,249,0.35)]"
              data-cursor-target="button"
            >
              Contact Me
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/10"
              data-cursor-target="button"
            >
              View Projects
            </a>
          </div>

          <div className="grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3" data-hero-cta>
            {heroStats.map((item) => (
              <div key={item.value} className="space-y-2">
                <p className="font-display text-3xl font-bold tracking-[-0.04em] text-white">{item.value}</p>
                <p className="text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center" data-hero-copy>
          <div className="hero-panel relative w-full max-w-xl" data-parallax>
            <div className="hero-orbit hero-orbit-large" />
            <div className="hero-orbit hero-orbit-medium" />
            <div className="hero-orbit hero-orbit-small" />
            <div className="hero-glow hero-glow-cyan" />
            <div className="hero-glow hero-glow-orange" />
            <div className="relative z-10 flex min-h-[440px] flex-col justify-center gap-10 px-6 py-8 sm:px-10">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.34em] text-cyan-100/75">Operational Focus</p>
                <p className="font-display text-4xl font-bold tracking-[-0.06em] text-white sm:text-5xl">
                  Linux . Networking . AWS
                </p>
                <p className="max-w-md text-base leading-8 text-slate-300">
                  Infrastructure discipline, reliable administration, and frontend craftsmanship in one profile.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-2 border-l border-white/15 pl-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Education</p>
                  <p className="text-lg font-semibold text-white">B.Tech in Computer Science</p>
                </div>
                <div className="space-y-2 border-l border-white/15 pl-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Strengths</p>
                  <p className="text-lg font-semibold text-white">Admin, Cloud, Web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center" data-hero-cta>
        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300 transition duration-300 hover:bg-white/10"
          data-cursor-target="button"
        >
          Scroll to Explore
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  )
}

export default HeroSection