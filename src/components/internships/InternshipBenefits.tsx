import { motion } from 'framer-motion'
import { internshipBenefits } from '../../data/internships'
import { SectionHeading } from '../common/SectionHeading'
import { Icon } from '../../utils/icons'
import { stagger, fadeUp, viewOnce } from '../../utils/motion'

export function InternshipBenefits() {
  return (
    <section id="benefits" className="section scroll-mt-24 bg-greylight">
      <div className="container-x">
        <SectionHeading eyebrow="Internship Benefits" title="What You Gain With ATS" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewOnce} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {internshipBenefits.map(b => (
            <motion.div key={b.title} variants={fadeUp} className="card p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={b.icon} size={22} /></span>
              <h3 className="mt-3 font-heading font-bold">{b.title}</h3>
              <p className="mt-1 text-sm text-muted">{b.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
