import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectCategories } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'

export function ProjectGallery({ limit }: { limit?: number }) {
  const [cat, setCat] = useState('All')
  const list = projects.filter(p => cat === 'All' || p.category === cat).slice(0, limit)
  return (
    <div>
      <ProjectFilter categories={projectCategories} active={cat} onChange={setCat} />
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">{list.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}</AnimatePresence>
      </motion.div>
      {list.length === 0 && <p className="py-12 text-center text-muted">No sample projects in this category yet.</p>}
    </div>
  )
}
