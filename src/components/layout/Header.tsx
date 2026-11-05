import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/logo/logo.webp'
import { navigation } from '../../data/navigation'
import { Icon } from '../../utils/icons'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const { pathname } = useLocation()
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => { setOpen(null); setMobile(false) }, [pathname])
  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(null) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('mousedown', onDoc); document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey) }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded focus:bg-brand focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link to="/" aria-label="ATS – Accent Techno Soft home" className="shrink-0">
          <img src={logo} alt="ATS – Accent Techno Soft, Quality Matters..." width={1600} height={304} className="h-10 w-auto sm:h-12" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex" ref={wrap}>
          {navigation.map(item => item.children ? (
            <div key={item.label} className="relative" onMouseEnter={() => setOpen(item.label)} onMouseLeave={() => setOpen(null)}>
              <div className="flex items-center">
                <NavLink to={item.to} end={false} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-brand ${isActive ? 'text-brand' : 'text-ink'}`}>{item.label}</NavLink>
                <button type="button" aria-label={`Toggle ${item.label} menu`} aria-expanded={open === item.label} onClick={() => setOpen(open === item.label ? null : item.label)} className="-ml-1 rounded p-1 text-ink hover:text-brand">
                  <ChevronDown size={14} aria-hidden className={`transition-transform ${open === item.label ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <AnimatePresence>
                {open === item.label && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                    className={`absolute left-0 top-full pt-2 ${item.label === 'Services' ? 'w-[520px]' : 'w-64'}`}>
                    <div className={`rounded-2xl border border-gray-100 bg-white p-3 shadow-xl ${item.label === 'Services' ? 'grid grid-cols-2 gap-1' : ''}`}>
                      {item.children.map(c => (
                        <Link key={c.to} to={c.to} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-brand-soft hover:text-brand">
                          {c.icon && <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={c.icon} size={16} /></span>}
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-brand ${isActive ? 'text-brand after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-brand' : 'text-ink'}`}>{item.label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-primary hidden !py-2.5 sm:inline-flex">Get a Quote <ArrowRight size={16} aria-hidden /></Link>
          <button type="button" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile} onClick={() => setMobile(v => !v)} className="grid h-11 w-11 place-items-center rounded-lg text-ink hover:bg-brand-soft lg:hidden">
            {mobile ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>
      <MobileMenu open={mobile} onClose={() => setMobile(false)} />
    </header>
  )
}
