import { Settings2, BadgeCheck, Cpu, PenTool, MonitorSmartphone, Wrench, LifeBuoy, RefreshCw } from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'

const items = [[Settings2, 'Customized Technology Solutions'], [BadgeCheck, 'Quality-Focused Development'], [Cpu, 'Modern Technologies'], [PenTool, 'Professional Design Approach'], [MonitorSmartphone, 'User-Friendly Applications'], [Wrench, 'Practical Technical Expertise'], [LifeBuoy, 'Reliable Support'], [RefreshCw, 'Continuous Innovation']] as const

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Why ATS" title="Why Choose Accent Techno Soft?" />
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(([I, l], i) => (
            <Reveal key={l} delay={(i % 2) * 0.06}>
              <div className="card flex items-center gap-4 p-4 transition-colors hover:border-brand/40">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-brand text-brand"><I size={22} aria-hidden /></span>
                <span className="font-heading font-semibold">{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
