import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { ReactNode } from 'react'

interface PageHeroProps {
  title: ReactNode // <-- CHANGED FROM string TO ReactNode
  subtitle?: string
  crumbs?: { label: string; to?: string }[]
  children?: ReactNode
  backgroundimg?: string
}

export function PageHero({ title, subtitle, crumbs, children, backgroundimg }: PageHeroProps) {
  return (
    <section 
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-gray-100 bg-pink-50"
      style={
        backgroundimg
          ? { 
              // REMOVED the white gradient overlay. Image is now 100% visible.
              backgroundImage: `url(${backgroundimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <div className="container-x relative z-10">
        {/* Breadcrumbs */}
        {crumbs && (
          <nav className="flex items-center gap-2 text-sm text-gray-700 mb-4 font-medium drop-shadow-sm">
            <Link to="/" className="hover:text-pink-600 transition-colors flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            {crumbs.map((crumb, i) => (
              <div key={i} className="flex items-center gap-2">
                <ChevronRight size={14} />
                <span className="text-gray-900">{crumb.label}</span>
              </div>
            ))}
          </nav>
        )}

        {/* Title & Subtitle */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-black tracking-tight max-w-4xl drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-900 font-medium max-w-2xl drop-shadow-sm">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}