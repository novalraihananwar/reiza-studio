'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

/* ── MOCKUP COMPONENTS ── */

function TravelMockupCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl overflow-hidden flex flex-col">
      <div className="h-[55%] relative overflow-hidden flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=75"
          alt="Travel Bali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          <span className="text-[8px] font-bold text-sky-600">TravelBali</span>
        </div>
        <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm rounded-lg px-1.5 py-1 flex items-center gap-0.5">
          <span className="text-amber-400 text-[8px]">★</span>
          <span className="text-[7px] font-bold text-gray-700">4.8</span>
        </div>
        <div className="absolute bottom-3 left-3">
          <p className="text-white/60 text-[7px] mb-0.5">✈ Explore Indonesia</p>
          <p className="text-white font-black text-sm">Bali Island</p>
        </div>
      </div>
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {['Ubud', 'Seminyak', 'Nusa Dua'].map(n => (
            <span key={n} className="px-2 py-0.5 bg-sky-100 rounded-full text-[7px] font-semibold text-sky-600">{n}</span>
          ))}
        </div>
        <div className="bg-white rounded-xl p-2 shadow-sm flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-sky-400 to-teal-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[8px] font-semibold text-gray-700">Booking Cepat</p>
            <p className="text-[7px] text-gray-400">1000+ destinasi</p>
          </div>
          <div className="px-2 py-0.5 bg-gradient-to-r from-sky-500 to-teal-400 rounded-lg flex-shrink-0">
            <span className="text-[7px] font-bold text-white">Book</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SmartAptMockupCard() {
  const units = [
    { id: 'A1-01', s: 'paid' }, { id: 'A1-02', s: 'pending' }, { id: 'A1-03', s: 'vacant' }, { id: 'A1-04', s: 'paid' },
    { id: 'A2-01', s: 'paid' }, { id: 'A2-02', s: 'overdue' }, { id: 'A2-03', s: 'paid' }, { id: 'A2-04', s: 'paid' },
  ] as const
  const dot: Record<string, string> = {
    paid: '#059669', pending: '#d97706', overdue: '#dc2626', vacant: '#6b7280',
  }
  const label: Record<string, string> = {
    paid: 'Lunas', pending: 'Pending', overdue: 'Telat', vacant: 'Kosong',
  }
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden flex flex-col" style={{ background: '#151b27' }}>
      {/* Top bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="w-4 h-4 rounded-[4px] flex items-center justify-center text-white text-[7px] font-black" style={{ background: '#059669' }}>S</div>
        <span className="text-[8px] font-bold text-white/80">SmartApt</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#059669' }} />
          <span className="text-[6px] font-medium" style={{ color: '#059669' }}>Live</span>
        </div>
      </div>
      {/* KPI row */}
      <div className="grid grid-cols-3 gap-1.5 px-3 py-2 flex-shrink-0">
        {[
          { l: 'Total Unit', v: '248', c: 'rgba(255,255,255,0.9)' },
          { l: 'Aktif', v: '231', c: '#34d399' },
          { l: 'Pendapatan', v: '138jt', c: '#34d399' },
        ].map(s => (
          <div key={s.l} className="rounded-lg p-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <p className="text-[5.5px] text-white/40 mb-0.5">{s.l}</p>
            <p className="text-[10px] font-bold font-mono leading-none" style={{ color: s.c }}>{s.v}</p>
          </div>
        ))}
      </div>
      {/* Unit grid */}
      <div className="flex-1 px-3 pb-3 overflow-hidden">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[7px] font-semibold text-white/50">Status Unit</p>
          <div className="flex gap-1">
            {(['paid','pending','overdue','vacant'] as const).map(s => (
              <div key={s} className="flex items-center gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: dot[s] }} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {units.map(u => (
            <div key={u.id} className="rounded-md p-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[5.5px] font-mono text-white/50">{u.id}</span>
                <div className="w-1 h-1 rounded-full" style={{ background: dot[u.s] }} />
              </div>
              <p className="text-[5px] font-medium" style={{ color: dot[u.s] }}>{label[u.s]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CoffeeMockupCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden flex">
      <div className="flex-1 p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-lg bg-amber-500 flex items-center justify-center text-[8px] text-white font-bold">C</div>
          <p className="text-[9px] font-bold text-gray-700">Rehan Café POS</p>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { n: 'Espresso', p: '25k', img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=80&h=60&fit=crop&q=60' },
            { n: 'Cappuccino', p: '32k', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=80&h=60&fit=crop&q=60' },
            { n: 'Croissant', p: '18k', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=80&h=60&fit=crop&q=60' },
            { n: 'Matcha Latte', p: '35k', img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=80&h=60&fit=crop&q=60' },
          ].map(item => (
            <div key={item.n} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img src={item.img} alt={item.n} className="w-full h-10 object-cover" />
              <div className="p-1.5">
                <p className="text-[7px] font-semibold text-gray-700">{item.n}</p>
                <p className="text-[7px] font-bold text-amber-600">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-24 bg-amber-600 p-2 flex flex-col flex-shrink-0">
        <p className="text-[8px] font-bold text-white mb-2">Order</p>
        {[{ n: 'Espresso', q: 2 }, { n: 'Croissant', q: 1 }].map(i => (
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

function CoffeeCustomerMockupCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden flex flex-col">
      <div className="bg-white border-b border-amber-100 px-3 pt-3 pb-2 flex-shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <div>
            <p className="text-[7px] font-semibold text-amber-700 tracking-widest uppercase">Rehan Cafe & Eatery</p>
            <p className="text-[10px] font-bold text-amber-900">Meja 1</p>
          </div>
          <span className="px-2 py-0.5 bg-amber-100 rounded-full text-[7px] font-semibold text-amber-700">Dine In</span>
        </div>
        <div className="flex gap-1 overflow-hidden">
          {['✨ Semua', '☕ Kopi', '🍵 Non-Kopi', '🍝 Makanan'].map((c, i) => (
            <div key={c} className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[6px] font-semibold ${i === 0 ? 'bg-amber-800 text-white' : 'bg-amber-100 text-amber-700'}`}>{c}</div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-2 grid grid-cols-2 gap-1.5 overflow-hidden">
        {[
          { n: 'Espresso', p: '25k', img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=80&h=60&fit=crop&q=60' },
          { n: 'Cappuccino', p: '32k', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=80&h=60&fit=crop&q=60' },
          { n: 'Croissant', p: '18k', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=80&h=60&fit=crop&q=60' },
          { n: 'Matcha Latte', p: '35k', img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=80&h=60&fit=crop&q=60' },
        ].map(item => (
          <div key={item.n} className="bg-white rounded-xl overflow-hidden shadow-sm border border-amber-50">
            <img src={item.img} alt={item.n} className="w-full h-10 object-cover" />
            <div className="p-1.5">
              <p className="text-[7px] font-semibold text-amber-900">{item.n}</p>
              <div className="flex items-center justify-between mt-0.5">
                <p className="text-[7px] font-bold text-amber-600">{item.p}</p>
                <div className="w-4 h-4 rounded-full bg-amber-800 flex items-center justify-center text-white text-[8px] font-bold">+</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-amber-800 mx-2 mb-2 rounded-xl px-3 py-1.5 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[7px] font-bold text-amber-800">2</div>
          <p className="text-[7px] text-white font-semibold">Lihat Keranjang</p>
        </div>
        <p className="text-[7px] font-bold text-amber-200">Rp 57.000</p>
      </div>
    </div>
  )
}

function PropertyMockupCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl overflow-hidden flex flex-col">
      <div className="p-3 border-b border-white/60 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-lg bg-teal-500 flex items-center justify-center">
              <span className="text-[7px] text-white font-bold">P</span>
            </div>
            <p className="text-[9px] font-bold text-gray-700">Rehan Properti</p>
          </div>
          <div className="flex gap-1">
            {['Rumah', 'Apt.', 'Tanah'].map(t => (
              <div key={t} className="px-1.5 py-0.5 bg-teal-100 rounded-full text-[6px] font-medium text-teal-600">{t}</div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl px-2 py-1.5 flex items-center gap-1.5 shadow-sm">
          <div className="w-3 h-3 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          </div>
          <span className="text-[8px] text-gray-400 flex-1">Cari lokasi properti...</span>
          <div className="px-2 py-0.5 bg-teal-500 rounded-lg flex-shrink-0">
            <span className="text-[6px] text-white font-bold">Cari</span>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden p-3 flex flex-col gap-2">
        {[
          { name: 'Villa Seminyak', price: '2.8 M', bed: 3, type: 'Villa', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200&h=100&fit=crop&q=60' },
          { name: 'Kos Elite Denpasar', price: '950 jt', bed: 1, type: 'Kos', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=100&fit=crop&q=60' },
        ].map(p => (
          <div key={p.name} className="bg-white rounded-xl overflow-hidden shadow-sm flex">
            <img src={p.img} alt={p.name} className="w-20 h-14 object-cover flex-shrink-0" />
            <div className="p-2 flex-1 min-w-0">
              <p className="text-[8px] font-bold text-gray-700 truncate">{p.name}</p>
              <p className="text-[8px] font-bold text-teal-600 mt-0.5">Rp {p.price}</p>
              <div className="flex gap-1 mt-1">
                <span className="px-1 py-0.5 bg-teal-50 rounded text-[6px] text-teal-600">{p.bed} KT</span>
                <span className="px-1 py-0.5 bg-emerald-50 rounded text-[6px] text-emerald-600">{p.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DigitalArtistMockupCard() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden flex flex-col" style={{ background: '#0d0d0f' }}>
      {/* Artist header */}
      <div className="px-3 py-2.5 flex items-center justify-between flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-2">
          <div className="p-[1.5px] rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899, #f97316)' }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#0d0d0f' }}>
              <span className="text-[8px] font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>R</span>
            </div>
          </div>
          <div>
            <p className="text-[8px] font-bold leading-none" style={{ color: 'rgba(255,255,255,0.92)' }}>Ryando</p>
            <p className="text-[6px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Digital Illustrator · Malang</p>
          </div>
        </div>
        <div className="flex gap-1">
          {['Illus.', 'Char.', 'Abstract'].map(t => (
            <span key={t} className="px-1.5 py-0.5 rounded-full text-[5.5px] font-medium" style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.45)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Artwork gallery */}
      <div className="flex-1 p-2.5 grid grid-cols-2 gap-1.5 overflow-hidden">

        {/* Artwork 1: Neon Dreams */}
        <div className="relative rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #2d1b69 0%, #1e1b4b 100%)' }}>
          <svg viewBox="0 0 120 90" className="absolute inset-0 w-full h-full" fill="none">
            <circle cx="85" cy="20" r="55" fill="rgba(139,92,246,0.3)" />
            <circle cx="25" cy="65" r="40" fill="rgba(109,40,217,0.35)" />
            <ellipse cx="60" cy="45" rx="58" ry="32" fill="rgba(167,139,250,0.12)" />
            <path d="M0 50 Q40 10 85 50 Q115 80 100 90 L0 90Z" fill="rgba(91,33,182,0.25)" />
            <circle cx="95" cy="72" r="16" fill="rgba(196,181,253,0.12)" />
          </svg>
          <div className="absolute inset-0 flex flex-col justify-end p-2">
            <p className="text-[6.5px] font-bold" style={{ color: 'rgba(255,255,255,0.9)' }}>Neon Dreams</p>
            <p className="text-[5.5px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Illustration</p>
          </div>
        </div>

        {/* Artwork 2: Solar Bloom */}
        <div className="relative rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #7c1445 0%, #9a3412 100%)' }}>
          <svg viewBox="0 0 120 90" className="absolute inset-0 w-full h-full" fill="none">
            <circle cx="60" cy="45" r="48" fill="rgba(236,72,153,0.22)" />
            <circle cx="22" cy="18" r="30" fill="rgba(251,113,133,0.28)" />
            <circle cx="95" cy="68" r="35" fill="rgba(249,115,22,0.18)" />
            <path d="M35 0 Q80 18 105 60 Q82 90 38 90 Q8 72 18 28Z" fill="rgba(252,165,165,0.13)" />
            <circle cx="60" cy="45" r="20" fill="rgba(255,200,200,0.1)" />
          </svg>
          <div className="absolute inset-0 flex flex-col justify-end p-2">
            <p className="text-[6.5px] font-bold" style={{ color: 'rgba(255,255,255,0.9)' }}>Solar Bloom</p>
            <p className="text-[5.5px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Character</p>
          </div>
        </div>

        {/* Artwork 3: Crystal Wave */}
        <div className="relative rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d3d3a 0%, #064e3b 100%)' }}>
          <svg viewBox="0 0 120 90" className="absolute inset-0 w-full h-full" fill="none">
            <path d="M0 65 Q30 25 65 48 Q95 68 120 38 L120 90 L0 90Z" fill="rgba(45,212,191,0.18)" />
            <path d="M0 78 Q42 42 82 62 Q112 76 120 55 L120 90 L0 90Z" fill="rgba(16,185,129,0.22)" />
            <circle cx="28" cy="33" r="24" fill="rgba(52,211,153,0.18)" />
            <circle cx="92" cy="22" r="32" fill="rgba(6,182,212,0.13)" />
            <polygon points="60,5 108,32 88,78 32,78 12,32" fill="rgba(167,243,208,0.08)" />
          </svg>
          <div className="absolute inset-0 flex flex-col justify-end p-2">
            <p className="text-[6.5px] font-bold" style={{ color: 'rgba(255,255,255,0.9)' }}>Crystal Wave</p>
            <p className="text-[5.5px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Abstract</p>
          </div>
        </div>

        {/* Artwork 4: Golden Void - Featured */}
        <div className="relative rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #451a03 0%, #78350f 100%)' }}>
          <svg viewBox="0 0 120 90" className="absolute inset-0 w-full h-full" fill="none">
            <circle cx="60" cy="45" r="44" fill="rgba(245,158,11,0.18)" />
            <path d="M60 5 L112 45 L88 85 L32 85 L8 45Z" fill="rgba(251,191,36,0.15)" />
            <circle cx="60" cy="45" r="26" fill="rgba(253,224,71,0.1)" />
            <circle cx="60" cy="45" r="12" fill="rgba(255,255,200,0.13)" />
            <circle cx="60" cy="45" r="5" fill="rgba(255,255,255,0.18)" />
            <circle cx="22" cy="14" r="10" fill="rgba(245,158,11,0.18)" />
            <circle cx="98" cy="76" r="12" fill="rgba(251,191,36,0.13)" />
          </svg>
          <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-md" style={{ background: 'rgba(217,119,6,0.75)', backdropFilter: 'blur(4px)' }}>
            <span className="text-[5.5px] font-bold text-white">Featured</span>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-2">
            <p className="text-[6.5px] font-bold" style={{ color: 'rgba(255,255,255,0.9)' }}>Golden Void</p>
            <p className="text-[5.5px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Illustration</p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="px-3 py-2 flex items-center justify-between flex-shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-4">
          {[{ v: '24', l: 'Works' }, { v: '1.2k', l: 'Views' }, { v: '89', l: 'Saves' }].map(s => (
            <div key={s.l}>
              <p className="text-[8px] font-bold leading-none" style={{ color: 'rgba(255,255,255,0.92)' }}>{s.v}</p>
              <p className="text-[6px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.l}</p>
            </div>
          ))}
        </div>
        <div className="px-2.5 py-1 rounded-full text-[6px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
          View Portfolio →
        </div>
      </div>
    </div>
  )
}

/* ── PORTFOLIO DATA ── */

const portfolios = [
  {
    title: 'Website Travel',
    desc: 'Platform booking travel modern dengan UI yang immersive dan animasi smooth.',
    tag: 'Travel & Wisata',
    color: 'from-sky-400 to-blue-500',
    topBar: 'from-sky-400 to-teal-400',
    hoverShadow: '0 20px 60px rgba(14,165,233,0.18)',
    lightColor: 'bg-sky-50',
    Mockup: TravelMockupCard,
    link: '/demo/travel',
    wide: true,
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'SmartApt',
    desc: 'Platform manajemen apartemen modern dengan QR tenant portal, smart payment, dan laporan keuangan real-time.',
    tag: 'SaaS Dashboard',
    color: 'from-emerald-500 to-teal-600',
    topBar: 'from-emerald-400 to-teal-500',
    hoverShadow: '0 20px 60px rgba(5,150,105,0.2)',
    lightColor: 'bg-[#151b27]',
    Mockup: SmartAptMockupCard,
    link: '/demo/smartapt',
    wide: false,
    tech: ['Next.js', 'Tailwind', 'Supabase'],
  },
  {
    title: 'POS Coffee Shop',
    desc: 'Dashboard admin untuk kelola order masuk, status meja, inventori, dan laporan real-time.',
    tag: 'POS Admin',
    color: 'from-amber-500 to-orange-500',
    topBar: 'from-amber-400 to-orange-400',
    hoverShadow: '0 20px 60px rgba(245,158,11,0.18)',
    lightColor: 'bg-amber-50',
    Mockup: CoffeeMockupCard,
    link: '/demo/coffee',
    wide: false,
    tech: ['Next.js', 'WebSocket', 'PWA'],
  },
  {
    title: 'Menu Digital — Customer',
    desc: 'Tampilan pelanggan via QR code di meja. Pesan, bayar, dan tracking pesanan langsung dari HP.',
    tag: 'Customer View',
    color: 'from-orange-400 to-amber-500',
    topBar: 'from-orange-400 to-amber-400',
    hoverShadow: '0 20px 60px rgba(251,146,60,0.18)',
    lightColor: 'bg-orange-50',
    Mockup: CoffeeCustomerMockupCard,
    link: '/demo/coffee-customer',
    wide: true,
    tech: ['QR Code', 'PWA', 'Tailwind'],
  },
  {
    title: 'Website Properti',
    desc: 'Portal properti premium dengan fitur pencarian canggih dan galeri foto HD.',
    tag: 'Company Profile',
    color: 'from-teal-500 to-emerald-500',
    topBar: 'from-teal-400 to-emerald-400',
    hoverShadow: '0 20px 60px rgba(20,184,166,0.18)',
    lightColor: 'bg-emerald-50',
    Mockup: PropertyMockupCard,
    link: '/demo/properti',
    wide: false,
    tech: ['Next.js', 'Maps API', 'SEO'],
  },
  {
    title: 'Digital Artist Portfolio',
    desc: 'Website portfolio kreatif dengan gallery artwork interaktif dan animasi memukau.',
    tag: 'Creative Portfolio',
    color: 'from-violet-500 to-pink-500',
    topBar: 'from-violet-500 to-pink-500',
    hoverShadow: '0 20px 60px rgba(139,92,246,0.22)',
    lightColor: 'bg-[#0d0d0f]',
    Mockup: DigitalArtistMockupCard,
    link: '/demo/ryando',
    wide: true,
    tech: ['Next.js', 'GSAP', 'Framer Motion'],
  },
]

/* ── PORTFOLIO CARD ── */

function PortfolioCard({ p, i, inView }: { p: typeof portfolios[0]; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 + i * 0.09, ease }}
      className={`group cursor-pointer ${p.wide ? 'lg:col-span-2' : 'lg:col-span-1'}`}
      whileHover={{ y: -7, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden border border-gray-100/80 h-full flex flex-col transition-shadow duration-300"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = p.hoverShadow)}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)')}
      >
        {/* Colored top accent */}
        <div className={`h-[3px] bg-gradient-to-r ${p.topBar} flex-shrink-0`} />

        {/* Mockup area */}
        <div className={`${p.wide ? 'h-64 lg:h-[22rem]' : 'h-52 lg:h-64'} p-3 lg:p-4 ${p.lightColor} relative overflow-hidden flex-shrink-0`}>
          <p.Mockup />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 lg:p-4">
            <div className="w-9 h-9 rounded-xl bg-white/95 flex items-center justify-center shadow-lg">
              <ExternalLink size={14} className="text-rs-sky-500" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 lg:p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className={`font-black text-rs-navy font-jakarta leading-tight ${p.wide ? 'text-lg' : 'text-base'}`}>{p.title}</h3>
            <span className={`text-[9px] font-bold px-2.5 py-1 rounded-xl bg-gradient-to-r ${p.color} text-white whitespace-nowrap flex-shrink-0 shadow-sm`}>
              {p.tag}
            </span>
          </div>
          <p className="text-xs text-rs-slate font-inter leading-relaxed mb-3 flex-1">{p.desc}</p>

          {/* Tech chips */}
          <div className="flex gap-1.5 flex-wrap mb-3">
            {p.tech.map(t => (
              <span key={t} className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-inter">{t}</span>
            ))}
          </div>

          <a
            href={p.link}
            className="inline-flex items-center gap-1 text-xs font-bold text-rs-sky-500 hover:text-rs-sky-600 font-jakarta group/btn"
          >
            View Demo
            <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* ── MAIN COMPONENT ── */

export default function PortfolioSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F0EBE3 0%, #FDFAF7 40%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rs-sky-100 border border-rs-sky-200/60 mb-5">
              <div className="w-2 h-2 rounded-full bg-rs-sky-500 animate-pulse" />
              <span className="text-xs font-semibold text-rs-sky-600 font-jakarta">Our Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-rs-navy font-jakarta leading-[0.95] tracking-tight">
              Our Best<br />
              <span className="gradient-text-sky">Work</span>
            </h2>
            <p className="mt-3 text-sm text-rs-slate font-inter max-w-xs leading-relaxed">
              Real projects, real results — built with passion and precision.
            </p>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-rs-sky-500 hover:text-rs-sky-600 font-jakarta group flex-shrink-0"
          >
            View All Projects
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Alternating featured bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {portfolios.map((p, i) => (
            <PortfolioCard key={p.title} p={p} i={i} inView={inView} />
          ))}
        </div>

        {/* Mobile view all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex sm:hidden justify-center mt-8"
        >
          <a href="#" className="flex items-center gap-1.5 text-sm font-semibold text-rs-sky-500 hover:text-rs-sky-600 font-jakarta group">
            View All Projects
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
