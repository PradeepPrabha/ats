import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { ApplicationForm } from '../components/forms/ApplicationForm'

export default function ApplyInternship() {
  useSEO('Apply for Internship', 'Apply for an internship at Accent Techno Soft (frontend demo form).')
  return (
    <>
      <PageHero title="Apply for an Internship" subtitle="Tell us about yourself and the domain you want to learn." crumbs={[{ label: 'Internships', to: '/internships' }, { label: 'Apply' }]} />
      <section className="section"><div className="container-x max-w-4xl"><ApplicationForm /></div></section>
    </>
  )
}
