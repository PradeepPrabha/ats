import { Link } from 'react-router-dom'
import { Lightbulb, ShieldCheck, HeartHandshake } from 'lucide-react'
import team from '../../assets/images/team-laptop.webp'
import { Reveal } from '../common/Reveal'

const labels = [[Lightbulb, 'Innovative Solutions'], [ShieldCheck, 'Quality-Focused Development'], [HeartHandshake, 'Customer-Centric Approach']] as const

export function AboutPreview() {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal><div className="relative"><div className="absolute -bottom-3 -left-3 h-full w-full rounded-3xl bg-brand-soft" aria-hidden />
          <img src={team} alt="ATS team collaborating around a laptop" loading="lazy" className="relative w-full rounded-3xl object-cover shadow-card" /></div></Reveal>
        <Reveal delay={0.1}>
          <span className="eyebrow">About ATS</span>
          <h2 className="h-section mt-3">Your Trusted Partner in Technology and Innovation.</h2>
          <p className="mt-4 text-muted">Accent Techno Soft delivers modern software and digital solutions designed to help businesses simplify operations, improve productivity and establish a stronger digital presence.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {labels.map(([I, l]) => <li key={l} className="flex items-center gap-2 rounded-xl bg-greylight p-3 text-sm font-semibold"><I size={18} className="shrink-0 text-brand" aria-hidden />{l}</li>)}
          </ul>
          <Link to="/about" className="btn-primary mt-7">Learn More About Us</Link>
        </Reveal>
      </div>
    </section>
  )
}
