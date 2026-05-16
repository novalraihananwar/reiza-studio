'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, TrendingUp, Users, Award, Zap, Shield, Smartphone, Search } from 'lucide-react'

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

const stats = [
  { number: '120+', label: 'Websites Built' },
  { number: '4.9 ★', label: 'Client Rating' },
  { number: '2+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
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
                  <Users size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-rs-navy font-jakarta leading-none">12,540</p>
                  <p className="text-[10px] text-rs-slate font-inter mt-0.5">Total Clients</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -bottom-6 -left-4 sm:-left-10 glass-card rounded-2xl px-5 py-3.5 shadow-medium flex items-center gap-3 z-20"
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rs-teal-400 to-rs-teal-500 flex items-center justify-center shadow-teal">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-rs-navy font-jakarta leading-none">28</p>
                  <p className="text-[10px] text-rs-slate font-inter mt-0.5">Active Projects</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 glass-card rounded-2xl px-4 py-3.5 shadow-medium z-20"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Award size={14} className="text-amber-400" />
                  <p className="text-xs font-bold text-rs-navy font-jakarta">Rating</p>
                </div>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xl font-extrabold text-rs-navy font-jakarta leading-none">4.9</p>
                <p className="text-[9px] text-rs-slate font-inter mt-0.5">from 200+ reviews</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-14 right-0 sm:-right-8 glass-card rounded-2xl px-4 py-3 shadow-medium flex items-center gap-2.5 z-20"
              >
                <div className="flex -space-x-2.5">
                  {[
                    'photo-1494790108377-be9c29b29330',
                    'photo-1507003211169-0a1dd7228f2d',
                    'photo-1438761681033-6461ffad8d80',
                    'photo-1472099645785-5658abf4ff4e',
                  ].map((id, i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/${id}?w=36&h=36&fit=crop&crop=face&q=80`}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-[10px] font-semibold text-rs-navy font-jakarta">+98 joined</p>
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
              We're Your <span className="gradient-text-sky">Business Partner</span>
            </h2>

            <p className="text-base text-rs-slate font-inter leading-relaxed max-w-lg">
              Reiza Studio is a creative digital studio combining deep technical expertise with modern design sensibility. We don't just build websites — we create digital experiences that drive real business growth.
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
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rs-sky-500 to-rs-teal-400 text-white font-semibold font-jakarta text-sm shadow-sky"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get to Know Us
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-6 text-center border border-gray-100 shadow-soft hover:shadow-medium transition-shadow"
            >
              <p className="text-2xl sm:text-3xl font-extrabold font-jakarta gradient-text-sky leading-none mb-2">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-rs-slate font-inter font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
