import { NavItem } from '../types'
import { services } from './services'
export const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services', children: services.map(s => ({ label: s.title, to: `/services/${s.slug}`, icon: s.icon })) },
  { label: 'Internships', to: '/internships', children: [
    { label: 'Internship Programs', to: '/internships#programs' },
    { label: 'Internship Benefits', to: '/internships#benefits' },
    { label: 'Application Process', to: '/internships#process' },
    { label: 'Apply Now', to: '/apply-internship' },
  ] },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]
