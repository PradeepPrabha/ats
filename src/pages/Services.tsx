import { motion } from 'framer-motion'
import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { services } from '../data/services'
import { ServiceCard } from '../components/services/ServiceCard'
import { CTASection } from '../components/common/CTABanner'
import { stagger, viewOnce } from '../utils/motion'

export default function Services() {
  useSEO('Services', 'ERP, mobile, desktop, web, e-commerce, digital marketing and branding services from Accent Techno Soft.')
  return (
    <>
      <PageHero title="Complete Technology Solutions for Modern Businesses." subtitle="From custom software to digital marketing, discover solutions that help your business grow." crumbs={[{ label: 'Services' }]} />

      {/* Full opacity image section */}
      <section className="w-full">
        <img
          src="/images/services-banner.jpg"
          alt="Our services"
          className="w-full h-auto block opacity-100"
        />
      </section>

      <section className="section"><div className="container-x">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewOnce} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(s => <ServiceCard key={s.slug} service={s} detailed />)}
        </motion.div>
      </div></section>
      <CTASection />
    </>
  )
}