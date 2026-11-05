import { useSEO } from '../hooks/useSEO'
import { HeroSection } from '../components/home/HeroSection'
import { AboutPreview } from '../components/home/AboutPreview'
import { ServicesGrid } from '../components/home/ServicesGrid'
// import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { InternshipBanner } from '../components/home/InternshipBanner'
import { TechnologiesGrid } from '../components/home/TechnologiesGrid'
import { ProcessTimeline } from '../components/home/ProcessTimeline'
import { ProjectGallery } from '../components/projects/ProjectGallery'
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel'
import { CTASection } from '../components/common/CTABanner'
import { ContactPreview } from '../components/home/ContactPreview'
import { SectionHeading } from '../components/common/SectionHeading'
import { DemoNotice } from '../components/common/DemoNotice'

export default function Home() {
  useSEO('Home', 'ATS – Accent Techno Soft delivers software development, IT services, digital solutions and internships from Coimbatore.')
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesGrid />
      {/* <WhyChooseUs /> */}
      
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Portfolio" title="Our Creative Work and Projects." />
          <div className="mb-8"><DemoNotice>The projects shown are sample demonstration projects until actual ATS projects are added.</DemoNotice></div>
          <ProjectGallery limit={6} />
        </div>
      </section>
      <InternshipBanner />
      <TechnologiesGrid />
      {/* <ProcessTimeline /> */}
      
      <TestimonialsCarousel />
      <CTASection />
      <ContactPreview />
    </>
  )
}
