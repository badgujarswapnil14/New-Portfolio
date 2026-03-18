import { FolderKanban, PenSquare } from 'lucide-react'
import SectionHeading from './SectionHeading'
import TiltCard from './TiltCard'
import { projectPlaceholders } from '../data/portfolio'

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell" data-animate-section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="A clean, empty project grid reserved for future work."
          description="The cards stay intentionally minimal for now so you can add real projects later without restructuring the portfolio."
        />

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {projectPlaceholders.map((project, index) => (
            <TiltCard
              key={`${project.title}-${index}`}
              className="project-card min-h-[280px] p-6"
              data-animate-item
            >
              <div className="flex h-full flex-col gap-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-100">
                    <FolderKanban size={26} />
                  </div>
                  <span className="rounded-full border border-orange-300/15 bg-orange-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-100">
                    {project.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-3xl font-bold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                </div>

                <div className="mt-auto min-h-[120px] rounded-3xl border border-dashed border-white/15 bg-slate-950/25" />

                <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-slate-950/25 px-4 py-3 text-sm text-slate-400">
                  <PenSquare size={16} />
                  Add project content later in src/data/portfolio.js.
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection