import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigationItems, profile } from '../data/portfolio'

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[24px] border border-white/10 bg-slate-950/60 px-4 py-3 shadow-ambient backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#hero"
            className="font-display text-sm font-bold uppercase tracking-[0.26em] text-white sm:text-base sm:tracking-[0.28em]"
            data-cursor-target="button"
            onClick={closeMenu}
          >
            {profile.name}
          </a>

          <nav className="hidden items-center gap-2 text-sm text-slate-300 md:flex md:justify-center">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 transition duration-300 hover:border-cyan-300/30 hover:bg-white/5 hover:text-white"
                data-cursor-target="button"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-100 transition duration-300 hover:border-white/30 hover:bg-white/10 md:hidden"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-slate-950/60 md:hidden"
            aria-label="Close mobile menu"
            onClick={closeMenu}
          />
          <div className="fixed inset-x-4 top-24 z-50 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-ambient backdrop-blur-2xl md:hidden">
            <nav className="grid gap-2 text-sm text-slate-200">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base font-semibold transition duration-300 hover:border-cyan-300/35 hover:text-white"
                  data-cursor-target="button"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </header>
  )
}

export default Navigation
