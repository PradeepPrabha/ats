import { technologies } from '../../data/process'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'

export function TechnologiesGrid() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Technology Expertise" title="Technologies That Power Digital Innovation." />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {technologies.map((t, i) => (
            <li key={t}><Reveal delay={(i % 6) * 0.04}>
              <div className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-gray-100 bg-greylight transition-colors hover:border-brand/40 hover:bg-white">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white font-heading text-sm font-bold text-brand shadow-sm" aria-hidden>{t.slice(0, 2)}</span>
                <span className="text-sm font-semibold">{t}</span>
              </div></Reveal></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
