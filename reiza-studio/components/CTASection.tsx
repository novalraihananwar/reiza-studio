'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Instagram, Facebook } from 'lucide-react'

const socials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.24 12.24 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.871L.057 23.552a.5.5 0 0 0 .609.61l5.848-1.528A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.969 0-3.807-.538-5.38-1.47l-.38-.229-3.884 1.015.999-3.801-.25-.39A9.956 9.956 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
      </svg>
    ),
    label: 'WhatsApp',
    href: 'https://wa.me/6281234567890',
    bg: 'bg-green-500 hover:bg-green-600',
    shadow: 'hover:shadow-[0_8px_32px_rgba(34,197,94,0.45)]',
  },
  {
    icon: <Instagram size={20} />,
    label: 'Instagram',
    href: 'https://instagram.com/reizastudio',
    bg: 'bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 hover:from-pink-600 hover:via-rose-600 hover:to-orange-500',
    shadow: 'hover:shadow-[0_8px_32px_rgba(244,114,182,0.45)]',
  },
  {
    icon: <Facebook size={20} />,
    label: 'Facebook',
    href: 'https://facebook.com/reizastudio',
    bg: 'bg-blue-600 hover:bg-blue-700',
    shadow: 'hover:shadow-[0_8px_32px_rgba(59,130,246,0.45)]',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    href: 'mailto:hello@reizastudio.com',
    bg: 'bg-rs-teal-500 hover:bg-rs-teal-600',
    shadow: 'hover:shadow-teal',
  },
]

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-warm-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-mesh-cta rounded-5xl overflow-hidden p-12 sm:p-16 lg:p-24 text-center"
        >
          {/* Animated background orbs */}
          {/* Large blur — top left */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"
          />
          {/* Large blur — bottom right */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.13, 0.08] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-20 -right-12 w-96 h-96 rounded-full bg-white/8 blur-3xl pointer-events-none"
          />
          {/* Mid blur — center */}
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          {/* Small blur — top center */}
          <div className="absolute top-8 right-1/3 w-16 h-16 rounded-full bg-rs-peach/30 blur-xl pointer-events-none" />
          {/* Mint pulse circle */}
          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-1/3 right-10 w-6 h-6 rounded-full bg-rs-mint/40 pointer-events-none"
          />

          {/* Rotating square — top right */}
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [0, 45, 90, 45, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-10 w-10 h-10 rounded-2xl bg-white/20 pointer-events-none"
          />
          {/* Floating square — bottom left area */}
          <motion.div
            animate={{ y: [6, -8, 6], rotate: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-16 right-16 w-8 h-8 rounded-xl bg-white/25 pointer-events-none"
          />
          {/* Small floating square — left side */}
          <motion.div
            animate={{ y: [4, -6, 4], rotate: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute top-1/2 left-8 w-5 h-5 rounded-lg bg-white/20 pointer-events-none"
          />

          {/* Sparkle stars */}
          {[
            { top: '15%', left: '20%', delay: 0 },
            { top: '75%', left: '15%', delay: 1.2 },
            { top: '20%', right: '18%', delay: 0.6 },
            { top: '70%', right: '12%', delay: 1.8 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: pos.delay }}
              className="absolute w-2 h-2 text-white/60 pointer-events-none select-none"
              style={{ top: pos.top, left: (pos as any).left, right: (pos as any).right }}
            >
              ✦
            </motion.div>
          ))}

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-semibold text-white/90 font-jakarta">Hubungi Kami Sekarang</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-jakarta leading-tight mb-5 max-w-3xl mx-auto"
            >
              Yuk, Wujudkan Ide<br />
              Brilianmu Bersama<br />
              <span className="text-white/80">Reiza Studio!</span>
            </motion.h2>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/80 text-base sm:text-lg font-inter max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Konsultasi gratis, no commitment. Ceritakan ide websitemu dan kami siap membuatnya jadi kenyataan.
            </motion.p>

            {/* Social buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-10"
            >
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.08, duration: 0.4 }}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-white font-semibold font-jakarta text-sm transition-all duration-300 ${s.bg} ${s.shadow} shadow-lg`}
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                  {s.label}
                </motion.a>
              ))}
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-6"
            >
              {[
                'Respon dalam 1×24 jam',
                'Konsultasi 100% Gratis',
                'No Hidden Fee',
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span className="text-rs-mint text-sm font-bold">✓</span>
                  <span className="text-white/70 text-xs font-inter font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
