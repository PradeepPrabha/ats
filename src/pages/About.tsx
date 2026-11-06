import {
  Check,
  Lightbulb,
  Target,
  ShieldCheck,
  Users,
  GraduationCap,
  Rocket,
  Eye,
  Gem,
  Code2,
  BarChart3,
  Layers,
  Laptop,
  RefreshCw,
  Star,
  Home,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const IMAGES = {
  hero: u('photo-1497366754035-f200968a6e72', 1600),
  teamWorking: u('photo-1522071820081-009f0129c71c', 1000),
  boardroom: u('photo-1497366811353-6870744d04b2', 1200),
  teamGroup: u('photo-1521737604893-d14cc237f11d', 1200),
}

const Pink = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#e6007e]">{children}</span>
)

const Bar = ({ className = '' }: { className?: string }) => (
  <div className={`h-[3px] w-10 rounded-full bg-[#e6007e] ${className}`} />
)

export default function About() {
  useSEO(
    'About Us',
    'Learn about Accent Techno Soft – technology, creativity and quality driving digital progress.'
  )

  return (
    <div
      className="overflow-hidden bg-white text-gray-800 antialiased"
      style={{ fontFamily: "'Poppins', 'Inter', system-ui, sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');`}</style>
      {/* 1. HERO */}
      <section className="relative bg-white pt-24 pb-10 md:pt-28 md:pb-14">
        {/* soft pink swoosh */}
        <div className="pointer-events-none absolute -left-24 top-0 h-full w-2/3 bg-gradient-to-r from-pink-100/70 via-pink-50/40 to-transparent" />
        <div
          className="pointer-events-none absolute right-[42%] top-0 hidden h-full w-24 bg-gradient-to-b from-pink-300/50 to-pink-100/20 md:block"
          style={{ clipPath: 'polygon(55% 0, 100% 0, 45% 100%, 0 100%)' }}
        />

        <div className="container-x relative z-10 grid items-center md:grid-cols-2">
          <div className="max-w-lg py-6">
            <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="flex items-center gap-1 font-medium text-[#e6007e]">
                <Home size={12} /> Home
              </Link>
              <span>/</span>
              <span>About Us</span>
            </nav>

            <div className="flex gap-3">
              <div className="mt-2 h-10 w-[3px] shrink-0 bg-[#e6007e]" />
              <h1 className="text-[40px] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[58px]">
                <span className="block text-gray-900">About</span>
                <span className="block text-[#e6007e]">Accent Techno Soft</span>
              </h1>
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-700">
              A technology solutions company delivering innovative software, digital services and
              practical learning opportunities.
            </p>
            <Bar className="mt-5 w-16" />
          </div>

          {/* spacer for the absolute image on desktop */}
          <div className="hidden md:block" />
        </div>

        {/* slanted hero image, bleeds to the right edge */}
        <div
          className="absolute right-0 top-0 hidden h-full w-[52%] md:block"
          style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <img src={IMAGES.hero} alt="ATS office" className="h-full w-full object-cover" />
        </div>
        <div className="container-x mt-6 md:hidden">
          <img src={IMAGES.hero} alt="ATS office" className="h-56 w-full rounded-2xl object-cover" />
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="relative bg-white py-10 md:py-14">
        <div className="container-x grid items-center gap-10 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <div className="absolute inset-0 -z-0 translate-x-2 translate-y-2 rounded-[2rem] rounded-tl-[4rem] border-[3px] border-[#e6007e]" />
            <img
              src={IMAGES.teamWorking}
              alt="Team working"
              className="relative z-10 h-[260px] w-full rounded-[2rem] rounded-tl-[4rem] object-cover shadow-md"
            />
          </div>

          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Who We <Pink>Are</Pink>
            </h2>
            <Bar className="my-4" />
            <p className="mb-6 text-[15px] leading-relaxed text-gray-600">
              Accent Techno Soft (ATS) is a forward-thinking IT company that provides comprehensive
              software development, digital services and industry-oriented internship programs. We
              help businesses grow with technology and empower students with practical, real-world
              experience.
            </p>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e6007e] to-[#c4006a] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-pink-300/50 transition hover:brightness-110"
            >
              Our Journey <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex flex-col gap-5 md:col-span-3 md:border-l md:border-gray-100 md:pl-8">
            {[
              { icon: Code2, title: 'IT Services & Solutions' },
              { icon: GraduationCap, title: 'Internship & Skill Development' },
              { icon: BarChart3, title: 'Business Digital Transformation' },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <item.icon size={34} strokeWidth={1.6} className="shrink-0 text-[#e6007e]" />
                <span className="text-[15px] font-semibold leading-snug text-gray-900">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION / VISION / VALUES */}
      <section className="bg-white pb-10 md:pb-14">
        <div className="container-x grid gap-5 md:grid-cols-3">
          <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-pink-100/80 to-pink-50 p-6">
            <Target size={38} strokeWidth={1.6} className="shrink-0 text-[#e6007e]" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Deliver innovative IT solutions and practical learning opportunities that create
                real value for businesses, students and the community.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 p-6">
            <Eye size={38} strokeWidth={1.6} className="shrink-0 text-[#e6007e]" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Our Vision</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                To be a trusted technology partner for businesses and a career enabler for aspiring
                IT professionals through continuous innovation and learning.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/80 p-6">
            <Gem size={38} strokeWidth={1.6} className="shrink-0 text-[#e6007e]" />
            <div className="flex-1">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Our Values</h3>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm text-gray-700">
                {['Innovation', 'Collaboration', 'Quality', 'Learning', 'Integrity', 'Customer Success'].map(
                  (v) => (
                    <li key={v} className="flex items-center gap-1.5">
                      <Check size={14} strokeWidth={3} className="shrink-0 text-[#e6007e]" /> {v}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR JOURNEY */}
      <section id="journey" className="relative bg-white py-10 md:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-pink-50 to-transparent" />
        <div className="container-x relative grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Bar className="mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our <Pink>Journey</Pink>
            </h2>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-gray-700">
              A growing journey of technology, learning and trust, built with a clear purpose to
              create real impact.
            </p>
          </div>

          <div className="relative grid gap-8 md:col-span-8 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-6 hidden border-t-2 border-dashed border-[#e6007e]/60 md:block" />
            {[
              {
                icon: Rocket,
                year: '2026',
                title: 'ATS Established',
                desc: 'Started with a vision to deliver quality technology solutions and practical learning.',
              },
              {
                icon: Users,
                year: 'Today',
                title: 'Growing with Trust',
                desc: 'Delivering software solutions, digital services and internship opportunities.',
              },
              {
                icon: Target,
                year: 'Our Goal',
                title: 'A Bigger Impact',
                desc: 'To become a leading technology partner for businesses and a career enabler for students.',
              },
            ].map((s) => (
              <div key={s.year} className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6007e] text-white shadow-md shadow-pink-300/60">
                  <s.icon size={22} />
                </div>
                <span className="text-xl font-bold text-gray-900">{s.year}</span>
                <h3 className="mb-1 text-base font-semibold text-gray-900">{s.title}</h3>
                <p className="max-w-[240px] text-sm leading-relaxed text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE ATS */}
      <section className="relative bg-white py-10 md:py-14">
        <div className="pointer-events-none absolute -left-20 top-0 h-full w-1/2 bg-gradient-to-r from-pink-50 to-transparent" />
        <div className="container-x relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose <Pink>ATS?</Pink>
            </h2>
            <p className="mb-7 mt-3 max-w-md text-[15px] leading-relaxed text-gray-700">
              A perfect blend of technology expertise, creative thinking and practical industry
              experience.
            </p>

            <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {[
                { icon: Layers, title: 'Industry Expertise', desc: 'Real-world knowledge and practical experience.' },
                { icon: Laptop, title: 'Learning Opportunities', desc: 'Industry-oriented internship programs and skill development.' },
                { icon: ShieldCheck, title: 'Quality Solutions', desc: 'Reliable, scalable and business-focused solutions.' },
                { icon: Target, title: 'Client-Centric Approach', desc: 'Solutions tailored to your business goals.' },
                { icon: Users, title: 'Experienced Team', desc: 'A skilled and passionate team of professionals.' },
                { icon: RefreshCw, title: 'Continuous Improvement', desc: 'Adopting new technologies to deliver better results.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100 text-[#e6007e]">
                    <f.icon size={20} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-[15px] font-semibold text-gray-900">{f.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-3 top-4 h-full w-full rounded-[3rem] rounded-r-3xl bg-gradient-to-br from-[#e6007e]/70 to-pink-200" />
            <img
              src={IMAGES.boardroom}
              alt="ATS boardroom"
              className="relative h-[300px] w-full rounded-[3rem] rounded-r-3xl object-cover shadow-lg md:h-[340px]"
            />
          </div>
        </div>
      </section>

      {/* 6. TEAM & CULTURE */}
      <section className="bg-white py-10 md:py-14">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our <Pink>Team</Pink>
            </h2>
            <p className="mb-5 mt-3 max-w-md text-[15px] leading-relaxed text-gray-700">
              A passionate team of developers, designers, marketers and mentors dedicated to
              building effective digital solutions.
            </p>
            <img
              src={IMAGES.teamGroup}
              alt="Our team"
              className="h-[230px] w-full rounded-2xl object-cover shadow-md"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our Work <Pink>Culture</Pink>
            </h2>
            <p className="mb-5 mt-3 max-w-md text-[15px] leading-relaxed text-gray-700">
              We believe in a positive, collaborative and learning-oriented work environment that
              drives creativity, innovation and growth.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: GraduationCap, title: 'Learn Continuously' },
                { icon: Users, title: 'Collaborate Effectively' },
                { icon: Lightbulb, title: 'Build Innovatively' },
                { icon: Star, title: 'Grow Together' },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex h-32 flex-col items-center justify-center rounded-xl bg-white p-3 text-center shadow-[0_4px_18px_rgba(0,0,0,0.08)]"
                >
                  <c.icon size={28} strokeWidth={1.6} className="mb-2 text-[#e6007e]" />
                  <span className="text-[13px] font-semibold leading-tight text-gray-900">{c.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="bg-gradient-to-r from-[#e6007e] via-[#d4006f] to-[#e6007e] py-8">
        <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to Work With Us?</h2>
            <p className="mt-1 text-base text-pink-100">Let's build something impactful together.</p>
          </div>
          <div className="hidden h-12 w-px bg-white/30 md:block" />
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-semibold text-[#e6007e] shadow-sm transition hover:bg-gray-50"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}