import { motion } from 'framer-motion'
import { Breadcrumb } from './Breadcrumb'
export function PageHero({ title, subtitle, crumbs, children }: { title: string; subtitle?: string; crumbs?: { label: string; to?: string }[]; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-soft via-white to-cyanlight">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" aria-hidden />
      <div className="container-x relative py-14 sm:py-20">
        {crumbs && <div className="mb-5"><Breadcrumb items={crumbs} /></div>}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
          <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
          {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
