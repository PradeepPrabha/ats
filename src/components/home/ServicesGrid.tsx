import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../../data/services'
import { SectionHeading } from '../common/SectionHeading'

export function ServicesGrid() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Fallback images
  const fallbackImages = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  ]

  const items = services.map((service, index) => ({
    id: service.slug,
    title: service.title,
    subtitle: service.shortDescription || 'Digital Solution',
    image: service.image || fallbackImages[index % fallbackImages.length], 
  }))

  // Quadruple items for a much smoother, longer infinite loop
  const infiniteItems = [...items, ...items, ...items, ...items]

  // --- Auto Scroll Logic ---
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const oneSetWidth = carousel.scrollWidth / 4
    carousel.scrollLeft = oneSetWidth

    let animationFrameId: number

    const scroll = () => {
      if (!isHovered && !isDragging) {
        carousel.scrollLeft += 1.5 // Smooth, slow speed

        // Seamless infinite reset logic
        if (carousel.scrollLeft >= oneSetWidth * 3) {
          carousel.scrollLeft -= oneSetWidth
        } else if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft += oneSetWidth
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered, isDragging])

  // --- Drag to Scroll Logic ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setIsHovered(false)
  }

  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section className="relative overflow-hidden bg-[#0a0a0f] py-20">
      
      {/* Dynamic Background Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      {/* Header Container */}
      <div className="container-x relative z-10">
        <div className="text-center text-white">
          <div className="[&_h2]:text-white [&_p]:text-gray-400">
            <SectionHeading 
              eyebrow="Our Technology Services" 
              title="Our Technology Services" 
              subtitle="Complete Digital Solutions to Move Your Business Forward." 
            />
          </div>
        </div>
      </div>

      {/* FULL WIDTH 3D Carousel Container */}
      <div 
        className="relative mt-10 w-full cursor-grab active:cursor-grabbing"
        style={{ perspective: '1400px' }} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          // Reduced padding to fit smaller cards
          className="flex gap-5 overflow-x-auto px-4 sm:gap-6 sm:px-[10vw] py-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {infiniteItems.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              // 1. ENTRANCE ANIMATION: Spin & Flip in from 3D space
              initial={{ rotateY: 45, rotateX: -15, scale: 0.8, opacity: 0, y: 50 }}
              whileInView={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              
              // 2. HOVER ANIMATION: Bouncy pop with 3D tilt
              whileHover={{ 
                scale: 1.08, 
                y: -15, 
                rotateY: 0,
                rotateX: 5,
                zIndex: 50,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(233, 30, 99, 0.4)",
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              }}
              
              // 3. SMALLER CARD SIZE
              className="group relative flex h-[320px] w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12121a]/80 shadow-2xl backdrop-blur-xl transition-all duration-500 sm:h-[360px] sm:w-[260px]"
            >
              {/* Card Inner Glow Border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5 transition-all duration-500 group-hover:border-brand/60 group-hover:shadow-[inset_0_0_20px_rgba(233,30,99,0.1)] z-20" />

              {/* Image Area */}
              <div className="relative h-[50%] w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-1"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-[#12121a]/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              </div>

              {/* Content Area */}
              <div className="relative z-10 flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white transition-all duration-300 group-hover:text-brand sm:text-xl group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400 line-clamp-2 transition-colors duration-300 group-hover:text-gray-300">
                    {item.subtitle}
                  </p>
                </div>

                {/* Explore Button */}
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <Link 
                    to={`/services/${item.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white transition-colors hover:text-brand sm:text-sm"
                  >
                    Explore Service
                  </Link>
                  {/* Arrow animates on hover */}
                  <motion.span 
                    whileHover={{ scale: 1.1, rotate: -45 }}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_15px_rgba(233,30,99,0.6)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Edge Gradients (Matched to the dark background) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0f] to-transparent z-40 sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0f] to-transparent z-40 sm:w-40" />
      </div>

      {/* Button Container */}
      <div className="container-x relative z-10 mt-4 text-center">
        <Link 
          to="/services" 
          className="group inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-8 py-3.5 text-sm font-bold text-brand backdrop-blur-md transition-all hover:bg-brand hover:text-white hover:shadow-[0_0_20px_rgba(233,30,99,0.4)]"
        >
          View All Services
          <motion.span 
            animate={{ x: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block"
          >
            &rarr;
          </motion.span>
        </Link>
      </div>
    </section>
  )
}