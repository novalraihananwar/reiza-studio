'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layout, Building2, Globe2, ShoppingCart, Wrench, Palette, ArrowRight, MessageCircle } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Landing Page',
    desc: 'Halaman penjualan yang dioptimalkan untuk konversi tinggi dengan desain yang menarik dan CTA yang kuat.',
    gradient: 'from-sky-400 to-blue-500',
    accentStrip: 'from-rs-sky-400 to-rs-sky-500',
    bg: 'bg-sky-50',
    iconBg: 'from-rs-sky-400 to-rs-sky-600',
    hoverBg: 'from-sky-400 to-blue-500',
    hoverShadow: 'hover:shadow-sky',
    tag: 'Populer',
    tagColor: 'bg-rs-sky-100 text-rs-sky-600',
    number: '01',
  },
  {
    icon: Building2,
    title: 'Company Profile',
    desc: 'Website profil perusahaan profesional yang membangun kredibilitas dan kepercayaan dengan desain premium.',
    gradient: 'from-violet-400 to-purple-500',
    accentStrip: 'from-violet-400 to-purple-500',
    bg: 'bg-violet-50',
    iconBg: 'from-violet-400 to-purple-500',
    hoverBg: 'from-violet-400 to-purple-500',
    hoverShadow: 'hover:shadow-[0_12px_40px_rgba(139,92,246,0.25)]',
    tag: null,
    tagColor: '',
    number: '02',
  },
  {
    icon: Globe2,
    title: 'Web Application',
    desc: 'Aplikasi web full-featured dengan database, autentikasi, dashboard admin, dan API yang scalable.',
    gradient: 'from-teal-400 to-emerald-500',
    accentStrip: 'from-rs-teal-400 to-rs-teal-600',
    bg: 'bg-teal-50',
    iconBg: 'from-rs-teal-400 to-rs-teal-600',
    hoverBg: 'from-teal-400 to-emerald-500',
    hoverShadow: 'hover:shadow-teal',
    tag: null,
    tagColor: '',
    number: '03',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    desc: 'Toko online modern dengan keranjang belanja, payment gateway, dan manajemen produk yang mudah.',
    gradient: 'from-orange-400 to-red-400',
    accentStrip: 'from-rs-orange to-rs-coral',
    bg: 'bg-orange-50',
    iconBg: 'from-rs-orange to-rs-coral',
    hoverBg: 'from-orange-400 to-red-400',
    hoverShadow: 'hover:shadow-[0_12px_40px_rgba(251,146,60,0.25)]',
    tag: null,
    tagColor: '',
    number: '04',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    desc: 'Layanan pemeliharaan website berkelanjutan meliputi update konten, keamanan, dan optimasi performa.',
    gradient: 'from-green-400 to-teal-400',
    accentStrip: 'from-green-400 to-teal-400',
    bg: 'bg-green-50',
    iconBg: 'from-green-400 to-teal-400',
    hoverBg: 'from-green-400 to-teal-400',
    hoverShadow: 'hover:shadow-[0_12px_40px_rgba(74,222,128,0.25)]',
    tag: null,
    tagColor: '',
    number: '05',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Desain antarmuka yang intuitif dan estetik berdasarkan riset pengguna dan prinsip desain modern.',
    gradient: 'from-pink-400 to-rose-500',
    accentStrip: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
    iconBg: 'from-pink-400 to-rose-500',
    hoverBg: 'from-pink-400 to-rose-500',
    hoverShadow: 'hover:shadow-[0_12px_40px_rgba(244,114,182,0.25)]',
    tag: 'New',
    tagColor: 'bg-pink-100 text-pink-600',
    number: '06',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="layanan" ref={ref} className="py-20 lg:py-28 bg-warm-white relative overflow-hidden">

      {/* Subtle section top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Ambient decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-rs-sky-100/40 to-rs-teal-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-violet-100/30 to-pink-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rs-teal-100 border border-rs-teal-400/30 mb-4">
            <div className="w-2 h-2 rounded-full bg-rs-teal-400 animate-pulse" />
            <span className="text-xs font-semibold text-rs-teal-600 font-jakarta">Layanan Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-rs-navy font-jakarta mb-4 leading-tight">
            Solusi Lengkap untuk<br />
            <span className="gradient-text-sky">Kebutuhan Digitalmu</span>
          </h2>
          <p className="text-rs-slate text-base sm:text-lg max-w-xl mx-auto font-inter leading-relaxed">
            Dari landing page sederhana hingga web application kompleks — kami hadirkan solusi yang tepat untuk setiap kebutuhan bisnismu.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
                className={`group relative bg-white rounded-3xl overflow-hidden border border-gray-100/80 shadow-soft ${svc.hoverShadow} transition-all duration-300 cursor-default`}
              >
                {/* 3px gradient accent strip at top */}
                <div className={`h-[3px] w-full bg-gradient-to-r ${svc.accentStrip}`} />

                {/* Card body */}
                <div className="p-6 relative">

                  {/* Decorative background number */}
                  <span
                    className="absolute top-3 right-3 text-8xl font-black leading-none select-none pointer-events-none"
                    style={{ opacity: 0.04, color: '#0F172A' }}
                  >
                    {svc.number}
                  </span>

                  {/* Top row: icon + tag badge */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon container — larger, stronger gradient */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.iconBg} flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Tag badge (if any) */}
                    {svc.tag && (
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${svc.tagColor} border border-current/20`}>
                        {svc.tag}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-rs-navy font-jakarta mb-2">{svc.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-rs-slate font-inter leading-relaxed">{svc.desc}</p>

                  {/* Bottom accent line (slides in on hover) */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${svc.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />

                  {/* Very subtle colored background tint on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${svc.hoverBg} opacity-0 group-hover:opacity-[0.035] transition-opacity duration-300 pointer-events-none`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Prominent Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col items-center text-center gap-5"
        >
          {/* Subtle divider line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

          <p className="text-rs-slate font-inter text-sm">
            Tidak yakin layanan mana yang tepat? Kami siap bantu konsultasi secara gratis.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-rs-sky-500 to-rs-teal-400 text-white font-bold font-jakarta text-sm shadow-sky btn-shine"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={17} />
              Diskusikan Kebutuhan Website Kamu
              <ArrowRight size={15} className="ml-0.5" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
