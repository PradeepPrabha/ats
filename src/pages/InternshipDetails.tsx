import { Link, Navigate, useParams } from 'react-router-dom'
import { Check, Clock, MapPin, GraduationCap } from 'lucide-react'
import { getInternship } from '../data/internships'
import { useSEO } from '../hooks/useSEO'
import { Breadcrumb } from '../components/common/Breadcrumb'
import { SectionHeading } from '../components/common/SectionHeading'
import { FAQ } from '../components/common/FAQ'
import { DemoNotice } from '../components/common/DemoNotice'
import { CTASection } from '../components/common/CTABanner'
import { Icon } from '../utils/icons'

const List = ({ title, items }: { title: string; items: string[] }) => (
  <div className="card p-6"><h2 className="font-heading text-xl font-bold">{title}</h2>
    <ul className="mt-3 space-y-2">{items.map(i => <li key={i} className="flex items-start gap-2"><Check size={16} className="mt-1 shrink-0 text-brand" aria-hidden />{i}</li>)}</ul></div>
)

export default function InternshipDetails() {
  const { slug } = useParams()
  const it = getInternship(slug)
  useSEO(it ? `${it.title} Internship` : 'Internship', it?.description ?? '')
  if (!it) return <Navigate to="/internships" replace />
  return (
    <>
      <section className="bg-gradient-to-br from-brand-soft via-white to-cyanlight"><div className="container-x py-12 sm:py-16">
        <Breadcrumb items={[{ label: 'Internships', to: '/internships' }, { label: it.title }]} />
        <div className="mt-6 flex items-start gap-5">
          <span className="hidden h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand text-white sm:grid"><Icon name={it.icon} size={30} /></span>
          <div><h1 className="font-heading text-3xl font-extrabold sm:text-5xl">{it.title} Internship</h1>
            <p className="mt-3 max-w-2xl text-lg text-muted">{it.description}</p>
            <Link to={`/apply-internship?domain=${it.slug}`} className="btn-primary mt-6">Apply Now</Link></div>
        </div>
      </div></section>
      <section className="section"><div className="container-x">
        <div className="mb-8"><DemoNotice>Sample program shown for demonstration. Duration, mode and eligibility will be confirmed by ATS.</DemoNotice></div>
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[[Clock, 'Duration', it.duration], [MapPin, 'Training Mode', it.mode], [GraduationCap, 'Eligibility', it.eligibility]].map(([I, l, v]) => { const Ic = I as typeof Clock; return (
            <div key={l as string} className="card flex gap-3 p-5"><Ic className="mt-0.5 shrink-0 text-brand" size={20} aria-hidden /><div><h2 className="text-sm font-semibold text-muted">{l as string}</h2><p className="font-medium">{v as string}</p></div></div>) })}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <List title="Skills Covered" items={it.skills} />
          <List title="Learning Outcomes" items={it.outcomes} />
          <List title="Project Examples" items={it.projects} />
        </div>
      </div></section>
      <section className="section bg-greylight"><div className="container-x"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" /><FAQ items={it.faqs} /></div></section>
      <CTASection title={`Start Your ${it.title} Journey`} text="Complete the application form to express your interest." primary={{ label: 'Apply Now', to: `/apply-internship?domain=${it.slug}` }} />
    </>
  )
}
