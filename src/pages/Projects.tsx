import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { ProjectGallery } from '../components/projects/ProjectGallery'
import { DemoNotice } from '../components/common/DemoNotice'
import { CTASection } from '../components/common/CTABanner'

export default function Projects() {
  useSEO('Projects', 'Explore sample projects and creative work from Accent Techno Soft.')
  return (
    <>
      <PageHero title="Our Projects and Creative Work." subtitle="A look at the kinds of solutions we design and build." crumbs={[{ label: 'Projects' }]} />
      <section className="section"><div className="container-x">
        <div className="mb-8"><DemoNotice>These are sample demonstration projects, shown until actual ATS projects are added.</DemoNotice></div>
        <ProjectGallery />
      </div></section>
      <CTASection />
    </>
  )
}
