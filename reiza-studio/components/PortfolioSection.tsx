'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'

/* ── Mockup Components (kept exactly as original) ── */

function TravelMockupCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl overflow-hidden flex flex-col">
      <div className="h-1/2 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=75" alt="Travel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-[8px] font-bold text-sky-600">TravelBali</div>
        <div className="absolute bottom-3 left-3 text-white">
          <p className="text-[8px] opacity-80">Discover</p>
          <p className="text-sm font-bold">Bali Island</p>
        </div>
      </div>
      <div className="p-3 flex-1">
        <div className="flex gap-1.5 mb-2">
          {['Ubud','Seminyak','Nusa Dua'].map(n=>(
            <div key={n} className="px-2 py-0.5 bg-sky-100 rounded-full text-[7px] font-medium text-sky-600">{n}</div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-2 shadow-soft flex items-center gap-2">
          <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-sky-400 to-teal-400" />
          <div>
            <p className="text-[8px] font-semibold text-gray-700">Booking Cepat</p>
            <p className="text-[7px] text-gray-400">1000+ destinasi tersedia</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function KosMockupCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-10 bg-violet-600 flex flex-col items-center py-3 gap-3">
        {['H','K','P','R'].map((l,i)=>(
          <div key={i} className={`w-6 h-6 rounded-lg flex items-center justify-center text-[8px] font-bold ${i===0?'bg-white text-violet-600':'text-violet-300'}`}>{l}</div>
        ))}
      </div>
      {/* Content */}
      <div className="flex-1 p-3">
        <p className="text-[9px] font-bold text-gray-700 mb-2">Dashboard Kos</p>
        <div className="grid grid-cols-2 gap-1.5 mb-2">
          {[{l:'Total Kamar',v:'24',c:'bg-violet-100 text-violet-600'},{l:'Terisi',v:'19',c:'bg-green-100 text-green-600'},{l:'Kosong',v:'5',c:'bg-amber-100 text-amber-600'},{l:'Pendapatan',v:'19jt',c:'bg-sky-100 text-sky-600'}].map(s=>(
            <div key={s.l} className="bg-white rounded-xl p-2 shadow-soft">
              <p className="text-[7px] text-gray-500">{s.l}</p>
              <p className={`text-sm font-bold ${s.c.split(' ')[1]}`}>{s.v}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-2 shadow-soft">
          <div className="flex justify-between items-center mb-1.5">
            <p className="text-[8px] font-semibold text-gray-700">Data Kamar</p>
            <div className="px-1.5 py-0.5 bg-green-100 rounded text-[7px] text-green-600 font-medium">Live</div>
          </div>
          {[{r:'A1',n:'Budi S.',s:'Aktif'},{r:'A2',n:'Siti R.',s:'Aktif'},{r:'B1',n:'—',s:'Kosong'}].map(row=>(
            <div key={row.r} className="flex justify-between items-center py-0.5 border-b border-gray-50 last:border-0">
              <span className="text-[7px] font-semibold text-gray-600">{row.r}</span>
              <span className="text-[7px] text-gray-500">{row.n}</span>
              <span className={`text-[6px] px-1.5 py-0.5 rounded-full font-medium ${row.s==='Aktif'?'bg-green-100 text-green-600':'bg-amber-100 text-amber-600'}`}>{row.s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CoffeeMockupCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl overflow-hidden flex">
      {/* Menu grid */}
      <div className="flex-1 p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-lg bg-amber-500 flex items-center justify-center text-[8px] text-white font-bold">C</div>
          <p className="text-[9px] font-bold text-gray-700">Rehan Café POS</p>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            {n:'Espresso',p:'25k',img:'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=80&h=60&fit=crop&q=60'},
            {n:'Cappuccino',p:'32k',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=80&h=60&fit=crop&q=60'},
            {n:'Croissant',p:'18k',img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=80&h=60&fit=crop&q=60'},
            {n:'Matcha Latte',p:'35k',img:'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=80&h=60&fit=crop&q=60'},
          ].map(item=>(
            <div key={item.n} className="bg-white rounded-xl overflow-hidden shadow-soft">
              <img src={item.img} alt={item.n} className="w-full h-10 object-cover" />
              <div className="p-1.5">
                <p className="text-[7px] font-semibold text-gray-700">{item.n}</p>
                <p className="text-[7px] font-bold text-amber-600">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Cart */}
      <div className="w-24 bg-amber-600 p-2 flex flex-col">
        <p className="text-[8px] font-bold text-white mb-2">Order</p>
        {[{n:'Espresso',q:2},{n:'Croissant',q:1}].map(i=>(
          <div key={i.n} className="bg-white/20 rounded-lg p-1.5 mb-1.5">
            <p className="text-[7px] text-white font-medium">{i.n}</p>
            <p className="text-[7px] text-white/70">x{i.q}</p>
          </div>
        ))}
        <div className="mt-auto bg-white rounded-xl p-2">
          <p className="text-[7px] text-gray-500">Total</p>
          <p className="text-[10px] font-bold text-amber-600">Rp 68.000</p>
          <div className="mt-1 bg-amber-500 rounded-lg py-1 text-center text-[7px] text-white font-bold">Bayar</div>
        </div>
      </div>
    </div>
  )
}

function PropertyMockupCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl overflow-hidden flex flex-col">
      <div className="p-3 border-b border-white/60">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] font-bold text-gray-700">Rehan Properti</p>
          <div className="flex gap-1">
            {['Rumah','Apartemen','Tanah'].map(t=>(
              <div key={t} className="px-1.5 py-0.5 bg-teal-100 rounded-full text-[6px] font-medium text-teal-600">{t}</div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl px-2 py-1.5 flex items-center gap-1 shadow-soft">
          <div className="w-3 h-3 rounded-full bg-teal-200 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          </div>
          <span className="text-[8px] text-gray-400">Cari lokasi properti...</span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden p-3 flex flex-col gap-2">
        {[
          {name:'Villa Seminyak',price:'2.8 M',bed:3,img:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200&h=100&fit=crop&q=60'},
          {name:'Kos Elite Denpasar',price:'950 jt',bed:1,img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=100&fit=crop&q=60'},
        ].map(p=>(
          <div key={p.name} className="bg-white rounded-xl overflow-hidden shadow-soft flex">
            <img src={p.img} alt={p.name} className="w-20 h-14 object-cover" />
            <div className="p-2 flex-1">
              <p className="text-[8px] font-bold text-gray-700">{p.name}</p>
              <p className="text-[8px] font-bold text-teal-600 mt-0.5">Rp {p.price}</p>
              <div className="flex gap-1 mt-1">
                <span className="px-1 py-0.5 bg-teal-50 rounded text-[6px] text-teal-600">{p.bed} KT</span>
                <span className="px-1 py-0.5 bg-emerald-50 rounded text-[6px] text-emerald-600">Strategis</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnimeMockupCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-pink-50 to-purple-100 rounded-2xl overflow-hidden flex flex-col">
      <div className="p-3 border-b border-white/60 flex items-center justify-between">
        <p className="text-[9px] font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Anime Portfolio</p>
        <div className="flex gap-1 text-[7px] text-gray-500">
          <span className="px-1.5 py-0.5 bg-pink-100 rounded-full text-pink-600 font-medium">All</span>
          <span>Art</span><span>Chibi</span>
        </div>
      </div>
      <div className="flex-1 p-3 grid grid-cols-2 gap-2">
        {[
          {c:'from-pink-400 to-purple-500',n:'Character 1'},
          {c:'from-blue-400 to-cyan-400',n:'Character 2'},
          {c:'from-amber-400 to-orange-400',n:'Character 3'},
          {c:'from-green-400 to-teal-400',n:'Character 4'},
        ].map((ch,i)=>(
          <div key={i} className={`rounded-xl bg-gradient-to-br ${ch.c} p-3 flex flex-col items-center justify-center relative overflow-hidden`}>
            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="white" opacity="0.9">
                <circle cx="20" cy="15" r="6" />
                <ellipse cx="20" cy="30" rx="10" ry="8" />
              </svg>
            </div>
            <p className="text-[7px] text-white/90 font-semibold mt-1">{ch.n}</p>
            <div className="absolute top-1 right-1">
              <div className="w-2 h-2 rounded-full bg-white/50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Portfolio Data ── */

const portfolios = [
  {
    title: 'Website Travel',
    desc: 'Platform booking travel modern dengan UI yang immersive dan animasi smooth.',
    tag: 'Travel & Wisata',
    color: 'from-sky-400 to-blue-500',
    lightColor: 'bg-sky-50',
    Mockup: TravelMockupCard,
    link: '/demo/travel',
    featured: true,
  },
  {
    title: 'Management Kos',
    desc: 'Sistem manajemen kos digital lengkap dengan dashboard admin dan laporan keuangan.',
    tag: 'SaaS Dashboard',
    color: 'from-violet-500 to-purple-600',
    lightColor: 'bg-violet-50',
    Mockup: KosMockupCard,
    link: '/demo/kos',
  },
  {
    title: 'POS Coffee Shop',
    desc: 'Aplikasi point-of-sale untuk coffee shop dengan interface cepat dan real-time.',
    tag: 'Web Application',
    color: 'from-amber-500 to-orange-500',
    lightColor: 'bg-amber-50',
    Mockup: CoffeeMockupCard,
    link: '/demo/coffee',
  },
  {
    title: 'Website Properti',
    desc: 'Portal properti premium dengan fitur pencarian canggih dan galeri foto HD.',
    tag: 'Company Profile',
    color: 'from-teal-500 to-emerald-500',
    lightColor: 'bg-teal-50',
    Mockup: PropertyMockupCard,
    link: '/demo/properti',
  },
  {
    title: 'Portfolio Anime',
    desc: 'Website portfolio kreatif dengan gallery artwork interaktif dan animasi memukau.',
    tag: 'Creative Portfolio',
    color: 'from-pink-500 to-purple-500',
    lightColor: 'bg-pink-50',
    Mockup: AnimeMockupCard,
    link: '/demo/ryando',
  },
]

/* ── Main Component ── */

export default function PortfolioSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const featured = portfolios[0]
  const others = portfolios.slice(1)

  return (
    <section id="portfolio" ref={ref} className="py-24 lg:py-32 bg-mesh-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rs-sky-100 border border-rs-sky-200/60 mb-4">
              <div className="w-2 h-2 rounded-full bg-rs-sky-500 animate-pulse" />
              <span className="text-xs font-semibold text-rs-sky-600 font-jakarta">Portfolio Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-rs-navy font-jakarta leading-tight">
              Karya Terbaik<br />
              <span className="gradient-text-sky">Website Kami</span>
            </h2>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-rs-sky-500 hover:text-rs-sky-600 font-jakarta group"
          >
            Lihat Semua Proyek
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* Featured: Travel (col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 group cursor-pointer"
            whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-medium hover:shadow-large transition-shadow duration-300 border border-gray-100/80 h-full flex flex-col">
              {/* Mockup area — larger for featured */}
              <div className={`h-64 lg:h-80 p-4 lg:p-6 ${featured.lightColor} relative overflow-hidden flex-shrink-0`}>
                <featured.Mockup />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/95 flex items-center justify-center shadow-medium">
                    <ExternalLink size={16} className="text-rs-sky-500" />
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="p-5 lg:p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-black text-rs-navy font-jakarta">{featured.title}</h3>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl bg-gradient-to-r ${featured.color} text-white whitespace-nowrap flex-shrink-0`}>
                      {featured.tag}
                    </span>
                  </div>
                  <p className="text-sm text-rs-slate font-inter leading-relaxed">{featured.desc}</p>
                </div>
                <a
                  href={featured.link}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-rs-sky-500 hover:text-rs-sky-600 font-jakarta group/btn mt-4"
                >
                  Lihat Demo
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Other 4 cards */}
          {others.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + (i + 1) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-medium hover:shadow-large transition-shadow duration-300 border border-gray-100/80 h-full flex flex-col">
                {/* Mockup area */}
                <div className={`h-52 lg:h-56 p-3 lg:p-4 ${p.lightColor} relative overflow-hidden flex-shrink-0`}>
                  <p.Mockup />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                    <div className="w-8 h-8 rounded-xl bg-white/95 flex items-center justify-center shadow-medium">
                      <ExternalLink size={13} className="text-rs-sky-500" />
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4 lg:p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-black text-rs-navy font-jakarta">{p.title}</h3>
                    <span className={`text-[9px] font-bold px-2 py-1 rounded-lg bg-gradient-to-r ${p.color} text-white whitespace-nowrap flex-shrink-0`}>
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-xs text-rs-slate font-inter leading-relaxed mb-3 flex-1">{p.desc}</p>
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-rs-sky-500 hover:text-rs-sky-600 font-jakarta group/btn"
                  >
                    Lihat Demo
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile "Lihat Semua" link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex sm:hidden justify-center mt-8"
        >
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold text-rs-sky-500 hover:text-rs-sky-600 font-jakarta group"
          >
            Lihat Semua Proyek
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
