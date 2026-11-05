import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { Internship } from '../../types'
import { Icon } from '../../utils/icons'

export function InternshipCard({ item }: { item: Internship }) {
  return (
    <motion.article layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} whileHover={{ y: -5 }} className="card flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={item.icon} size={24} /></span>
        <span className="rounded-full bg-cyanlight px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted ring-1 ring-cyan-100">Sample program</span>
      </div>
      <h3 className="mt-4 font-heading text-lg font-bold">{item.title}</h3>
      <p className="mt-2 text-sm text-muted">{item.description}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5">{item.skills.map(s => <li key={s} className="rounded-md bg-greylight px-2 py-1 text-xs font-medium">{s}</li>)}</ul>
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
        <span className="inline-flex items-center gap-1"><Clock size={13} aria-hidden /> Duration: {item.duration}</span>
        <span className="inline-flex items-center gap-1"><MapPin size={13} aria-hidden /> Mode: {item.mode}</span>
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <Link to={`/internships/${item.slug}`} className="btn-outline !px-4 !py-2">View Details</Link>
        <Link to={`/apply-internship?domain=${item.slug}`} className="btn-primary !px-4 !py-2">Apply Now</Link>
      </div>
    </motion.article>
  )
}
