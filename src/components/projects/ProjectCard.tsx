import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Project } from '../../types'
import { ProjectThumb } from './ProjectThumb'

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} whileHover={{ y: -6 }} className="card group flex h-full flex-col overflow-hidden">
      <ProjectThumb icon={project.image} index={index} />
      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand">{project.category}</span>
        <h3 className="mt-3 font-heading text-lg font-bold">{project.title}</h3>
        <p className="mt-1.5 text-sm text-muted">{project.description}</p>
        
        {/* Tech tags */}
        <ul className="mt-3 mb-4 flex flex-wrap gap-1.5">
          {project.technologies.map(t => (
            <li key={t} className="rounded-md bg-greylight px-2 py-1 text-xs font-medium">{t}</li>
          ))}
        </ul>
        
        {/* Smaller Button with mt-auto to push to the bottom */}
        <Link 
          to={`/projects/${project.slug}`} 
          className="btn-outline mt-auto self-start !px-2.5 !py-1 !text-[11px] font-semibold"
        >
          View Details
        </Link>
      </div>
    </motion.article>
  )
}