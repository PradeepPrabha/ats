import { Link } from 'react-router-dom'
import { BookOpen, Briefcase, Users } from 'lucide-react'
import { Reveal } from '../common/Reveal'

const cards = [
  [BookOpen, 'Practical Learning'], 
  [Briefcase, 'Real-World Projects'], 
  [Users, 'Technical Mentorship']
] as const

export function InternshipBanner() {
  return (
    <section className="section bg-brand-soft">
      {/* Removed grid lg:grid-cols-2 to make content full width */}
      <div className="container-x">
        <Reveal>
          {/* Centered the content to look good without the image */}
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow bg-white">Internship Programs</span>
            
            <h2 className="h-section mt-3 max-w-4xl text-balance">
              Build Your Future in Technology With ATS.
            </h2>
            
            <p className="mt-4 max-w-3xl text-muted text-balance">
              Take your first step towards a successful IT career. Gain practical experience, develop industry-relevant skills and work on real-world projects through ATS internship opportunities.
            </p>
            
            {/* Expanded the cards to span full width nicely */}
            <ul className="mt-8 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
              {cards.map(([I, l]) => (
                <li key={l} className="card flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <I className="text-brand" size={32} aria-hidden />
                  <span className="text-sm font-semibold">{l}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/internships" className="btn-primary">
                Explore Internship Programs
              </Link>
              <Link to="/apply-internship" className="btn-outline">
                Apply Now
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}