import { Target, Eye, Lightbulb, ShieldCheck, Handshake, Palette, Users, GraduationCap } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/common/SectionHeading'
import { Reveal } from '../components/common/Reveal'
import { CTASection } from '../components/common/CTABanner'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import team from '../assets/images/team-laptop.webp'
import devices from '../assets/images/devices-showcase.webp'
import office from '../assets/images/office-interior.webp'
import { services } from '../data/services'

const values = [[ShieldCheck, 'Quality'], [Lightbulb, 'Innovation'], [Handshake, 'Integrity'], [Palette, 'Creativity'], [Users, 'Collaboration'], [GraduationCap, 'Continuous Learning']] as const

export default function About() {
  useSEO('About Us', 'Learn about Accent Techno Soft – technology, creativity and quality driving digital progress.')
  return (
    <>
      <PageHero title="About Accent Techno Soft" subtitle="Technology, Creativity and Quality – Driving Digital Progress." crumbs={[{ label: 'About Us' }]} />
      <section className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal><span className="eyebrow">Company Introduction</span><h2 className="h-section mt-3">Technology Solutions Built Around You.</h2>
            <p className="mt-4 text-muted">Accent Techno Soft delivers modern software and digital solutions designed to help businesses simplify operations, improve productivity and establish a stronger digital presence.</p>
            <p className="mt-3 text-muted">Alongside client work, ATS offers practical internship opportunities that help aspiring professionals build real skills.</p></Reveal>
          <Reveal delay={0.1}><img src={devices} alt="Laptop and phone showing a modern building design" loading="lazy" className="w-full rounded-3xl shadow-card" /></Reveal>
        </div>
      </section>
      <section className="section bg-greylight">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="lg:order-2"><span className="eyebrow">Who We Are</span><h2 className="h-section mt-3">A Technology-Driven Team Focused on Quality.</h2>
            <p className="mt-4 text-muted">We are a team of developers, designers and learners who believe good technology should be practical, reliable and easy to use. Our motto, “Quality Matters…”, guides how we plan, build and support every project.</p></Reveal>
          <Reveal className="lg:order-1"><img src={team} alt="ATS team working together at a laptop" loading="lazy" className="w-full rounded-3xl shadow-card" /></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[[Target, 'Our Mission', 'To deliver innovative and reliable technology solutions while empowering aspiring professionals with practical technical knowledge.'], [Eye, 'Our Vision', 'To become a trusted technology partner recognized for quality, innovation and professional excellence.']].map(([I, t, d]) => {
            const Ic = I as typeof Target
            return <Reveal key={t as string}><div className="card h-full p-8"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white"><Ic size={26} aria-hidden /></span><h2 className="mt-4 font-heading text-2xl font-bold">{t as string}</h2><p className="mt-3 text-muted">{d as string}</p></div></Reveal>
          })}
        </div>
      </section>
      <section className="section bg-brand-soft">
        <div className="container-x"><SectionHeading eyebrow="Our Values" title="What Guides Everything We Do" />
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {values.map(([I, l], i) => <li key={l}><Reveal delay={i * 0.05}><div className="card flex h-full flex-col items-center gap-3 p-5 text-center"><I className="text-brand" size={28} aria-hidden /><span className="font-heading font-semibold">{l}</span></div></Reveal></li>)}
          </ul></div>
      </section>
      <section className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal><img src={office} alt="Bright modern ATS office interior" loading="lazy" className="w-full rounded-3xl shadow-card" /></Reveal>
          <Reveal delay={0.1}><span className="eyebrow">Our Expertise</span><h2 className="h-section mt-3">Services Across the Digital Spectrum.</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">{services.map(s => <li key={s.slug} className="flex items-center gap-2 text-sm font-medium"><span className="h-2 w-2 rounded-full bg-brand" aria-hidden />{s.title}</li>)}</ul></Reveal>
        </div>
      </section>
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
