import { applicationSteps } from '../../data/internships'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'

export function InternshipTimeline() {
  return (
    <section id="process" className="section scroll-mt-24">
      <div className="container-x">
        <SectionHeading eyebrow="Application Process" title="Five Simple Steps to Get Started" />
        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
          <div className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-brand/30 md:block" aria-hidden />
          <div className="absolute bottom-6 left-6 top-6 w-0.5 bg-brand/30 md:hidden" aria-hidden />
          {applicationSteps.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 md:block md:text-center">
              <Reveal delay={i * 0.08} className="flex gap-4 md:block">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-heading font-bold text-white shadow-pink md:mx-auto">{String(i + 1).padStart(2, '0')}</span>
                <div className="md:mt-4"><h3 className="font-heading font-bold">{s.title}</h3><p className="mt-1 text-sm text-muted">{s.text}</p></div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
