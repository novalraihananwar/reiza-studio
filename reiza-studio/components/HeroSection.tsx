'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Star, MapPin, TrendingUp, Calendar, Zap, Search, Users } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

function TravelMockup() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto">
      {/* Decorative blob background */}
      <div className="absolute inset-[-15%] bg-gradient-to-br from-rs-sky-100/80 via-rs-teal-100/50 to-rs-peach/30 rounded-full blur-3xl -z-10" />
      {/* Decorative spinning ring */}
      <svg className="absolute -top-6 -right-6 opacity-20 -z-10 animate-spin-slow" width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="65" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="10 6" />
        <circle cx="70" cy="70" r="45" fill="none" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="6 10" />
      </svg>
      <svg className="absolute -bottom-4 -left-6 opacity-15 -z-10" width="90" height="90" viewBox="0 0 90 90">
        <rect x="10" y="10" width="70" height="70" rx="10" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="6 5" transform="rotate(15 45 45)" />
      </svg>

      {/* Main browser mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease }}
        className="relative rounded-3xl overflow-hidden border border-white/80"
        style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.14), 0 8px 24px rgba(56,189,248,0.14), 0 2px 0 rgba(255,255,255,0.9) inset' }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50/95 border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-2 bg-white rounded-lg px-3 py-1.5 text-[10px] text-gray-400 border border-gray-100 font-inter flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
            travelbali.reizastudio.com
          </div>
          <div className="flex gap-1 opacity-50">
            <div className="w-4 h-4 rounded bg-gray-200" />
            <div className="w-4 h-4 rounded bg-gray-200" />
          </div>
        </div>

        {/* Website content */}
        <div className="bg-white">
          {/* Inner navbar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-50">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-sky-400 to-teal-400 flex items-center justify-center">
                <span className="text-white text-[6px] font-black">TB</span>
              </div>
              <span className="font-black text-[11px] text-sky-500" style={{ fontFamily: 'Outfit, sans-serif' }}>TravelBali</span>
            </div>
            <div className="hidden sm:flex gap-4 text-[9px] text-gray-400 font-inter">
              <span>Destinasi</span><span>Hotel</span><span>Paket</span>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 text-white text-[8px] font-bold">
              Book Now
            </div>
          </div>

          {/* Hero banner */}
          <div className="relative h-44 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
              alt="Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white/60 text-[8px] font-inter mb-0.5">✈ Explore Indonesia</p>
              <p className="text-white font-black text-2xl leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>Bali</p>
              <p className="text-white/80 text-[9px] font-medium">1,240+ destinations available</p>
            </div>
            <div className="absolute bottom-4 right-3 bg-white/95 backdrop-blur-sm rounded-xl px-2.5 py-2 flex items-center gap-1.5 shadow-lg">
              <Search size={9} className="text-gray-400" />
              <span className="text-[9px] text-gray-500 font-inter">Search destinations...</span>
            </div>
            {/* Rating badge on image */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1 shadow-soft">
              <Star size={8} className="text-amber-400 fill-amber-400" />
              <span className="text-[8px] font-bold text-gray-700">4.9</span>
            </div>
          </div>

          {/* Destination cards */}
          <div className="p-4 pb-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] font-bold text-gray-700" style={{ fontFamily: 'Outfit, sans-serif' }}>Popular This Week</p>
              <span className="text-[8px] text-sky-500 font-semibold">View All →</span>
            </div>
            <div className="flex gap-2.5 overflow-hidden">
              {[
                { name: 'Ubud', img: 'photo-1558618666-fcd25c85cd64', price: 'Rp 2.4jt', rating: '4.8' },
                { name: 'Seminyak', img: 'photo-1577717903315-1691ae25ab3f', price: 'Rp 3.1jt', rating: '4.9' },
                { name: 'Penida', img: 'photo-1548574505-5e239809ee19', price: 'Rp 1.8jt', rating: '4.7' },
              ].map((d) => (
                <div key={d.name} className="flex-shrink-0 w-[88px] rounded-xl overflow-hidden border border-gray-100 shadow-soft">
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/${d.img}?auto=format&fit=crop&w=200&q=70`}
                      alt={d.name}
                      className="w-full h-[52px] object-cover"
                    />
                    <div className="absolute bottom-1 right-1 bg-white/90 rounded-md px-1 py-0.5 flex items-center gap-0.5">
                      <Star size={5} className="text-amber-400 fill-amber-400" />
                      <span className="text-[6px] font-bold text-gray-600">{d.rating}</span>
                    </div>
                  </div>
                  <div className="p-1.5 bg-white">
                    <p className="text-[8px] font-bold text-gray-700">{d.name}</p>
                    <p className="text-[7px] text-sky-500 font-bold">{d.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── FLOATING BADGES ── */}

      {/* 1: Top-right — Projects counter */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-5 -right-7 glass-card rounded-2xl px-4 py-3 shadow-medium flex items-center gap-3 z-10"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rs-sky-400 to-rs-sky-600 flex items-center justify-center flex-shrink-0">
          <TrendingUp size={17} className="text-white" />
        </div>
        <div>
          <p className="text-lg font-black text-rs-navy font-jakarta leading-none">120+</p>
          <p className="text-[9px] text-rs-slate font-inter">Websites Built</p>
        </div>
      </motion.div>

      {/* 2: Left-center — Star rating card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute top-[30%] -left-10 glass-card rounded-2xl px-3.5 py-3 shadow-medium z-10"
      >
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-amber-400 fill-amber-400" />)}
        </div>
        <p className="text-xl font-black text-rs-navy leading-none font-jakarta">4.9</p>
        <p className="text-[8px] text-rs-slate font-inter mt-0.5">200+ reviews</p>
      </motion.div>

      {/* 3: Bottom-left — Booking/launch */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-5 -left-7 glass-card rounded-2xl px-4 py-3 shadow-medium flex items-center gap-3 z-10"
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #FB923C, #FF8C7A)' }}
        >
          <Calendar size={15} className="text-white" />
        </div>
        <div>
          <p className="text-[9px] text-rs-slate font-inter">Est. Completion</p>
          <p className="text-xs font-bold text-rs-navy font-jakarta">14 Working Days</p>
        </div>
      </motion.div>

      {/* 4: Bottom-right — Location */}
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
        className="absolute -bottom-2 -right-5 glass-card rounded-xl px-3 py-2 shadow-soft flex items-center gap-2 z-10"
      >
        <MapPin size={12} className="text-rs-coral flex-shrink-0" />
        <span className="text-[9px] font-bold text-rs-navy font-jakarta">Bali, Indonesia</span>
      </motion.div>

      {/* 5: Live status */}
      <motion.div
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[12%] -left-4 glass-card rounded-xl px-2.5 py-1.5 shadow-soft flex items-center gap-1.5 z-10"
      >
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[8px] font-bold text-rs-navy font-jakarta">Live Updates</span>
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  const clients = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&q=80',
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 bg-[#FDFAF7]">
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-60" />
        {/* Gradient blobs */}
        <div
          className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full blur-[140px] opacity-70"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.25), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.2), transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-[500px] h-[400px] rounded-full blur-[100px] opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.15), transparent 70%)' }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[80px] opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(167,243,208,0.25), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.2), transparent 70%)' }}
        />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorative abstract shapes */}
      <div className="absolute top-28 right-20 hidden xl:block">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="36" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="8 5" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-16 hidden xl:block">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <rect x="8" y="8" width="44" height="44" rx="6" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" transform="rotate(20 30 30)" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="space-y-7 lg:space-y-8">

            {/* Badge pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-gray-200/80 shadow-soft backdrop-blur-sm"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center flex-shrink-0">
                <Star size={9} className="text-white fill-white" />
              </div>
              <span className="text-sm font-semibold text-rs-navy font-jakarta">
                Creative Digital Studio
              </span>
              <span className="w-px h-4 bg-gray-300" />
              <span className="text-sm text-rs-sky-500 font-bold font-jakarta">100+ Happy Clients</span>
            </motion.div>

            {/* EDITORIAL HEADLINE */}
            <div className="space-y-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease }}
                className="text-xl sm:text-2xl font-medium text-rs-slate font-jakarta"
              >
                We Design
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease }}
              >
                <span
                  className="block font-black gradient-text-sky leading-[0.92] tracking-tight"
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(64px, 10vw, 112px)' }}
                >
                  Websites
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26, ease }}
                className="text-xl sm:text-2xl font-medium text-rs-slate font-jakarta pt-2"
              >
                That Make
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease }}
              >
                <span
                  className="block font-black text-rs-navy leading-tight tracking-tight"
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5.5vw, 64px)' }}
                >
                  Your Business{' '}
                  <span className="gradient-text-warm">Grow</span>
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48, ease }}
              className="text-base sm:text-lg text-rs-slate font-inter leading-relaxed max-w-lg"
            >
              A creative digital studio helping businesses look more{' '}
              <span className="text-rs-navy font-semibold">professional</span>,{' '}
              <span className="text-rs-sky-500 font-semibold">modern</span>, and{' '}
              <span className="text-rs-teal-500 font-semibold">compelling</span>{' '}
              through high-quality websites. Real results, stunning design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.a
                href="#portfolio"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-rs-sky-500 to-rs-teal-400 text-white font-bold font-jakarta text-sm shadow-sky btn-shine"
                whileHover={{ scale: 1.04, y: -3, boxShadow: '0 20px 50px rgba(14,165,233,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                View Portfolio
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-white border border-gray-200 text-rs-navy font-bold font-jakarta text-sm shadow-soft hover:border-rs-sky-200 hover:shadow-medium transition-all"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg viewBox="0 0 24 24" fill="#22C55E" className="w-5 h-5 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.871L.057 23.552a.5.5 0 0 0 .609.61l5.848-1.528A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.969 0-3.807-.538-5.38-1.47l-.38-.229-3.884 1.015.999-3.801-.25-.39A9.956 9.956 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Free Consultation
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {clients.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-soft"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-rs-navy font-jakarta ml-1">4.9</span>
                </div>
                <p className="text-xs text-rs-slate font-inter">
                  <span className="font-semibold text-rs-navy">100+ clients</span> across Indonesia
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: MOCKUP ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <TravelMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDFAF7] to-transparent pointer-events-none" />
    </section>
  )
}
