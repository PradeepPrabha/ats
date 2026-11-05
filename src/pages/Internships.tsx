import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/common/SectionHeading'
import { DemoNotice } from '../components/common/DemoNotice'
import { internships } from '../data/internships'
import { InternshipCard } from '../components/internships/InternshipCard'
import { InternshipBenefits } from '../components/internships/InternshipBenefits'
import { InternshipTimeline } from '../components/internships/InternshipTimeline'
import { CTASection } from '../components/common/CTABanner'

export default function Internships() {
  useSEO('Internships', 'Explore practical IT internship programs at Accent Techno Soft.')
  const [q, setQ] = useState('')
  const list = useMemo(() => internships.filter(i => `${i.title} ${i.skills.join(' ')}`.toLowerCase().includes(q.trim().toLowerCase())), [q])
  return (
    <>
      <PageHero title="Learn. Create. Grow. Start Your IT Career With ATS." subtitle="Develop practical technical skills, work on real-world projects and gain the confidence to begin your professional journey." crumbs={[{ label: 'Internships' }]}>
        <a href="#programs" className="btn-primary">Explore Programs</a>
        <Link to="/apply-internship" className="btn-outline">Apply Now</Link>
      </PageHero>
      <section id="programs" className="section scroll-mt-24"><div className="container-x">
        <SectionHeading eyebrow="Internship Domains" title="Choose Your Learning Path" />
        <div className="mb-6"><DemoNotice>Programs are proposed categories shown for demonstration. Duration and mode are placeholders until ATS confirms availability.</DemoNotice></div>
        <div className="relative mx-auto mb-8 max-w-md">
          <label htmlFor="intern-search" className="sr-only">Search programs</label>
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden />
          <input id="intern-search" type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Search by domain or skill…" className="input pl-11" />
        </div>
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">{list.map(i => <InternshipCard key={i.slug} item={i} />)}</AnimatePresence>
        </motion.div>
        {list.length === 0 && <p className="py-10 text-center text-muted">No programs match “{q}”.</p>}
      </div></section>
      <InternshipBenefits />
      <InternshipTimeline />
      <CTASection title="Ready to Start Your IT Career?" text="Pick a program and complete the application form." primary={{ label: 'Apply Now', to: '/apply-internship' }} secondary={{ label: 'Contact Us', to: '/contact' }} />
    </>
  )
}
