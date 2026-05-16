'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import PortfolioSection from '@/components/PortfolioSection'
import ServicesSection from '@/components/ServicesSection'
import HumanSection from '@/components/HumanSection'
import ProcessSection from '@/components/ProcessSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

const marqueeItems = [
  'WEBSITE PREMIUM',
  'DESAIN MODERN',
  'FULLY RESPONSIVE',
  'SEO OPTIMIZED',
  'FAST LOADING',
  '100+ KLIEN PUAS',
  'NEXT.JS & REACT',
  'FRAMER MOTION',
]

function MarqueeStrip() {
  const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems]
  return (
    <div className="bg-rs-navy py-4 overflow-hidden border-y border-white/5">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex gap-0 whitespace-nowrap"
      >
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="text-white/70 text-xs font-bold font-jakarta uppercase tracking-[0.2em] px-6">
              {item}
            </span>
            <span className="text-rs-sky-400 text-sm">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-[#FDFAF7] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <PortfolioSection />
      <ServicesSection />
      <HumanSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}
