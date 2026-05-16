'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Lightbulb, Code2, TestTube2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Consultation',
    desc: 'We have an in-depth discussion about your needs, target market, and your dream website vision — completely free.',
    gradient: 'from-rs-sky-400 to-rs-sky-500',
    lightBg: 'bg-rs-sky-100/60',
    iconBg: 'bg-gradient-to-br from-rs-sky-400 to-rs-sky-500',
    accentBar: 'from-rs-sky-400 to-rs-sky-500',
    textAccent: 'text-rs-sky-500',
    numberColor: '#0EA5E9',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Planning',
    desc: 'We create a sitemap, wireframe, and complete design proposal before development begins.',
    gradient: 'from-violet-400 to-purple-500',
    lightBg: 'bg-violet-50/60',
    iconBg: 'bg-gradient-to-br from-violet-400 to-purple-500',
    accentBar: 'from-violet-400 to-purple-500',
    textAccent: 'text-violet-500',
    numberColor: '#8B5CF6',
  },
  {
    icon: Code2,
    step: '03',
    title: 'Development',
    desc: 'Our developer team builds your website with the latest technologies, clean code, and high quality standards.',
    gradient: 'from-rs-teal-400 to-rs-teal-500',
    lightBg: 'bg-rs-teal-100/60',
    iconBg: 'bg-gradient-to-br from-rs-teal-400 to-rs-teal-500',
    accentBar: 'from-rs-teal-400 to-rs-teal-500',
    textAccent: 'text-rs-teal-500',
    numberColor: '#14B8A6',
  },
  {
    icon: TestTube2,
    step: '04',
    title: 'Revision & Testing',
    desc: "You can request unlimited revisions until you're satisfied. We also test performance, security, and responsiveness.",
    gradient: 'from-rs-orange to-rs-coral',
    lightBg: 'bg-orange-50/60',
    iconBg: 'bg-gradient-to-br from-rs-orange to-rs-coral',
    accentBar: 'from-rs-orange to-rs-coral',
    textAccent: 'text-orange-500',
    numberColor: '#FB923C',
  },
  {
    icon: Rocket,
    step: '05',
    title: 'Launch',
    desc: 'Website goes live! We help with domain setup, hosting, SSL, and provide post-launch technical support.',
    gradient: 'from-pink-400 to-rose-500',
    lightBg: 'bg-pink-50/60',
    iconBg: 'bg-gradient-to-br from-pink-400 to-rose-500',
    accentBar: 'from-pink-400 to-rose-500',
    textAccent: 'text-pink-500',
    numberColor: '#F472B6',
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} className="py-20 lg:py-28 bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rs-peach/40 border border-rs-peach/60 mb-4">
            <div className="w-2 h-2 rounded-full bg-rs-coral animate-pulse" />
            <span className="text-xs font-semibold text-rs-coral font-jakarta">How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-rs-navy font-jakarta mb-4 leading-tight">
            Simple, Structured,<br />
            <span className="gradient-text-sky">&amp; Effective</span>
          </h2>
          <p className="text-rs-slate text-base max-w-lg mx-auto font-inter leading-relaxed">
            Our workflow is designed so you always know what&apos;s happening — transparent and collaborative every step of the way.
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="relative mb-0">
            <div className="absolute top-[88px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-rs-sky-400 via-rs-teal-400 via-rs-orange to-pink-400 origin-left"
              />
            </div>
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {steps.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.2 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                    className="group"
                  >
                    <div className="relative bg-white rounded-3xl p-5 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden flex flex-col min-h-[280px]">
                      <div
                        className="absolute -top-4 -right-2 font-extrabold font-jakarta leading-none pointer-events-none select-none"
                        style={{ fontSize: '120px', color: s.numberColor, opacity: 0.07, lineHeight: 1 }}
                        aria-hidden="true"
                      >
                        {s.step}
                      </div>
                      <div className="relative z-10 mb-4">
                        <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                          <Icon size={24} className="text-white" />
                        </div>
                      </div>
                      <div className={`inline-flex items-center self-start mb-3 px-2.5 py-1 rounded-full bg-gradient-to-r ${s.gradient} z-10 relative`}>
                        <span className="text-[10px] font-bold text-white font-jakarta">{s.step}</span>
                      </div>
                      <h3 className="text-sm font-extrabold text-rs-navy font-jakarta mb-2 relative z-10">{s.title}</h3>
                      <p className="text-xs text-rs-slate font-inter leading-relaxed flex-1 relative z-10">{s.desc}</p>
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${s.accentBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-4">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative bg-white rounded-3xl p-5 shadow-soft border border-gray-100 overflow-hidden flex gap-4 items-start">
                  <div
                    className="absolute -top-2 right-2 font-extrabold font-jakarta leading-none pointer-events-none select-none"
                    style={{ fontSize: '80px', color: s.numberColor, opacity: 0.07, lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {s.step}
                  </div>
                  <div className={`w-12 h-12 rounded-2xl ${s.iconBg} flex items-center justify-center flex-shrink-0 shadow-soft z-10`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1 z-10 relative">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold font-jakarta ${s.textAccent}`}>{s.step}</span>
                      <h3 className="text-sm font-bold text-rs-navy font-jakarta">{s.title}</h3>
                    </div>
                    <p className="text-xs text-rs-slate font-inter leading-relaxed">{s.desc}</p>
                  </div>
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${s.accentBar}`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
