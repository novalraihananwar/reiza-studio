'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Zap, Shield, Smartphone, Search, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Zap,
    label: 'Creative Design',
    desc: 'Every pixel crafted with purpose and high aesthetic value',
    iconBg: 'bg-gradient-to-br from-rs-sky-400 to-rs-sky-500',
  },
  {
    icon: Shield,
    label: 'Fast Performance',
    desc: 'Websites with loading time < 2 seconds on all devices',
    iconBg: 'bg-gradient-to-br from-rs-teal-400 to-rs-teal-500',
  },
  {
    icon: Smartphone,
    label: 'Fully Responsive',
    desc: 'Looks perfect on desktop, tablet, and mobile',
    iconBg: 'bg-gradient-to-br from-violet-400 to-purple-500',
  },
  {
    icon: Search,
    label: 'SEO Optimized',
    desc: 'Built to rank high on search engines',
    iconBg: 'bg-gradient-to-br from-rs-orange to-rs-coral',
  },
]

const guarantees = [
  { icon: '🔄', title: 'Revisi Sampai Puas', desc: 'Tanpa batasan revisi hingga kamu puas' },
  { icon: '💬', title: 'Konsultasi Gratis', desc: 'Diskusi kebutuhanmu tanpa biaya' },
  { icon: '⚡', title: '14 Hari Pengerjaan', desc: 'Estimasi rata-rata per project' },
  { icon: '🛡️', title: 'Garansi 30 Hari', desc: 'Support & perbaikan pasca launch' },
]

export default function HumanSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-[#F5F0EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-[500px] mx-auto">
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
                aria-hidden="true"
              >
                <span
                  className="text-rs-navy font-extrabold font-jakarta uppercase leading-none"
                  style={{ fontSize: '110px', opacity: 0.05, letterSpacing: '-0.02em' }}
                >
                  STUDIO
                </span>
              </div>
              <div className="absolute -inset-8 bg-gradient-to-br from-rs-sky-100/80 to-rs-teal-400/20 rounded-full blur-3xl -z-10" />
              <div className="relative rounded-4xl overflow-hidden shadow-large border-4 border-white/90 ring-4 ring-rs-sky-400/20 z-10">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rs-sky-400 via-rs-teal-400 to-rs-sky-400 z-20" />
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80"
                  alt="Creative workspace"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rs-navy/20 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-4 sm:-right-10 glass-card rounded-2xl px-5 py-3.5 shadow-medium flex items-center gap-3 z-20"
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rs-sky-400 to-rs-sky-500 flex items-center justify-center shadow-sky">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-base font-extrabold text-rs-navy font-jakarta leading-none">Malang</p>
                  <p className="text-[10px] text-rs-slate font-inter mt-0.5">East Java, Indonesia</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -bottom-6 -left-4 sm:-left-10 glass-card rounded-2xl px-5 py-3.5 shadow-medium flex items-center gap-3 z-20"
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rs-teal-400 to-rs-teal-500 flex items-center justify-center shadow-teal">
                  <Zap size={18} className="text-white fill-white" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-rs-navy font-jakarta leading-none">14 Hari</p>
                  <p className="text-[10px] text-rs-slate font-inter mt-0.5">Est. Pengerjaan</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 glass-card rounded-2xl px-4 py-3.5 shadow-medium z-20"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Shield size={14} className="text-rs-teal-500" />
                  <p className="text-xs font-bold text-rs-navy font-jakarta">Garansi</p>
                </div>
                <p className="text-xl font-extrabold text-rs-navy font-jakarta leading-none">30 Hari</p>
                <p className="text-[9px] text-rs-slate font-inter mt-0.5">Revisi gratis</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-14 right-0 sm:-right-8 glass-card rounded-2xl px-4 py-3 shadow-medium flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rs-sky-400 to-rs-teal-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={15} className="text-white" />
                </div>
                <p className="text-[10px] font-semibold text-rs-navy font-jakarta">Revisi Sampai Puas</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rs-peach/30 border border-rs-peach/50">
              <div className="w-2 h-2 rounded-full bg-rs-coral animate-pulse" />
              <span className="text-xs font-semibold text-rs-coral font-jakarta">Our Creative Team</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-rs-navy font-jakarta leading-tight">
              More Than Developers —<br />
              We&apos;re Your <span className="gradient-text-sky">Business Partner</span>
            </h2>

            <p className="text-base text-rs-slate font-inter leading-relaxed max-w-lg">
              Reiza Studio is a creative digital studio combining deep technical expertise with modern design sensibility. We don&apos;t just build websites — we create digital experiences that drive real business growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="bg-white rounded-2xl p-4 border border-gray-100 shadow-soft hover:shadow-medium transition-shadow flex gap-3 items-start"
                  >
                    <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 shadow-soft`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-rs-navy font-jakarta mb-1">{item.label}</p>
                      <p className="text-xs text-rs-slate font-inter leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <motion.a
              href="https://wa.me/6285236933017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rs-sky-500 to-rs-teal-400 text-white font-semibold font-jakarta text-sm shadow-sky"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get to Know Us
            </motion.a>

            {/* Tech Stack */}
            <div className="pt-5 border-t border-gray-200/60">
              <p className="text-xs text-rs-slate font-inter mb-3">Built with modern tech</p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vercel'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-xl bg-white border border-gray-100 text-[11px] font-semibold text-gray-500 font-inter shadow-soft">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-soft hover:shadow-medium transition-shadow"
            >
              <span className="text-2xl mb-3 block">{g.icon}</span>
              <p className="text-sm font-bold text-rs-navy font-jakarta leading-tight mb-1">{g.title}</p>
              <p className="text-xs text-rs-slate font-inter leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
