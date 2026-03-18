function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start'

  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignment}`} data-animate-item>
      <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-100/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        {eyebrow}
      </span>
      <div className="space-y-4">
        <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.02]">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      </div>
    </div>
  )
}

export default SectionHeading