import { Link } from 'react-router-dom'
import { BookOpen, Briefcase, Users } from 'lucide-react'
import student from '../../assets/images/intern-student.webp'
import { Reveal } from '../common/Reveal'

const cards = [
  [BookOpen, 'Practical Learning'],
  [Briefcase, 'Real-World Projects'],
  [Users, 'Technical Mentorship'],
] as const

export function InternshipBanner() {
  return (
    <section className="section relative isolate overflow-hidden bg-brand-soft">
      {/* ───────── Full Background Image ───────── */}
      <img
        src={student}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      {/* ───────── Dark / Brand Overlay for readability ───────── */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/75 to-[#0a0a0f]/40" />

      {/* Optional: brand glow tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-brand/10 mix-blend-overlay" />

      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow bg-white/10 text-white backdrop-blur-sm border border-white/15">
              Internship Programs
            </span>

            <h2 className="h-section mt-3 text-white">
              Build Your Future in Technology With ATS.
            </h2>

            <p className="mt-4 max-w-xl text-gray-300">
              Take your first step towards a successful IT career. Gain practical
              experience, develop industry-relevant skills and work on real-world
              projects through ATS internship opportunities.
            </p>

            {/* Feature cards — glass style */}
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {cards.map(([I, l]) => (
                <li
                  key={l}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  <I className="text-brand" size={26} aria-hidden />
                  <span className="text-sm font-semibold text-white">{l}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/internships" className="btn-primary">
                Explore Internship Programs
              </Link>
              <Link
                to="/apply-internship"
                className="btn-outline border-white/40 text-black hover:bg-white hover:text-brand"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}