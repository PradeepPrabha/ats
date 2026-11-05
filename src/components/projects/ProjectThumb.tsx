import { Icon } from '../../utils/icons'
const tones = ['from-brand-soft to-white', 'from-cyanlight to-brand-soft', 'from-pink-100 to-cyanlight', 'from-white to-brand-soft']
export function ProjectThumb({ icon, index = 0, large = false }: { icon: string; index?: number; large?: boolean }) {
  return (
    <div className={`relative grid place-items-center overflow-hidden bg-gradient-to-br ${tones[index % tones.length]} ${large ? 'h-64 sm:h-96' : 'h-44'}`} role="img" aria-label="Sample project illustration">
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand/10" aria-hidden />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand/10" aria-hidden />
      <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-white text-brand shadow-card transition-transform duration-300 group-hover:scale-110"><Icon name={icon} size={36} strokeWidth={1.6} /></div>
      <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">Sample</span>
    </div>
  )
}
