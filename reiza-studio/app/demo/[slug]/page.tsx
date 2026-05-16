'use client'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ArrowLeft, ExternalLink, Monitor, Smartphone, Tablet, RefreshCw, Terminal, CheckCircle2, Loader2 } from 'lucide-react'

type DemoEntry = {
  title: string
  desc: string
  iframeSrc: string
  isStatic: boolean
  localPort?: number
  folderName?: string
  tag: string
  gradient: string
}

const demos: Record<string, DemoEntry> = {
  travel: {
    title: 'Website Travel — Rehan Tour & Travel',
    desc: 'Platform booking travel modern dengan UI immersive',
    iframeSrc: 'https://rehan-tour-travel-prototype.vercel.app',
    isStatic: true,
    tag: 'Travel & Wisata',
    gradient: 'from-sky-500 to-blue-600',
  },
  kos: {
    title: 'Management Kos — Kos Rehan',
    desc: 'Sistem manajemen kos digital dengan dashboard admin lengkap',
    iframeSrc: 'https://kos-rehan-prototype.netlify.app',
    isStatic: true,
    tag: 'SaaS Dashboard',
    gradient: 'from-violet-500 to-purple-600',
  },
  coffee: {
    title: 'POS Coffee Shop — Rehan Café',
    desc: 'Aplikasi point-of-sale untuk coffee shop modern',
    iframeSrc: 'https://rehan-coffeshop-system-prototype.vercel.app',
    isStatic: true,
    tag: 'Web Application',
    gradient: 'from-amber-500 to-orange-500',
  },
  properti: {
    title: 'Website Properti — Rehan Properti',
    desc: 'Portal properti premium dengan fitur pencarian canggih',
    iframeSrc: 'https://rehan-property-prototype.vercel.app',
    isStatic: true,
    tag: 'Company Profile',
    gradient: 'from-teal-500 to-emerald-600',
  },
  ryando: {
    title: 'Portfolio Anime — Ryando',
    desc: 'Website portfolio kreatif dengan galeri artwork interaktif',
    iframeSrc: 'https://rytopen-landing-page.netlify.app',
    isStatic: true,
    tag: 'Creative Portfolio',
    gradient: 'from-pink-500 to-purple-600',
  },
}

const viewports = [
  { key: 'desktop', icon: Monitor, label: 'Desktop', width: '100%' },
  { key: 'tablet', icon: Tablet, label: 'Tablet', width: '768px' },
  { key: 'mobile', icon: Smartphone, label: 'Mobile', width: '390px' },
]

function ServerRequiredScreen({ demo }: { demo: DemoEntry }) {
  const [checking, setChecking] = useState(false)
  const [serverUp, setServerUp] = useState(false)

  const checkServer = async () => {
    setChecking(true)
    try {
      const ctrl = new AbortController()
      const timeout = setTimeout(() => ctrl.abort(), 3000)
      await fetch(demo.iframeSrc, { signal: ctrl.signal, mode: 'no-cors' })
      clearTimeout(timeout)
      setServerUp(true)
    } catch {
      setServerUp(false)
    }
    setChecking(false)
  }

  useEffect(() => {
    if (!demo.isStatic) checkServer()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (serverUp) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-130px)] gap-4">
        <CheckCircle2 size={40} className="text-green-400" />
        <p className="text-white font-semibold font-jakarta">Server aktif! Me-refresh iframe...</p>
        <a
          href={window.location.href}
          className="px-5 py-2.5 rounded-xl bg-white/10 text-white text-sm font-jakarta hover:bg-white/20 transition-colors"
        >
          Refresh Halaman
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-130px)] gap-5 text-center px-6 py-10">
      <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${demo.gradient} flex items-center justify-center shadow-lg`}>
        <Terminal size={28} className="text-white" />
      </div>

      <div>
        <h2 className="text-xl font-bold text-white font-jakarta mb-1">{demo.title}</h2>
        <p className="text-white/60 text-sm font-inter max-w-xs">{demo.desc}</p>
      </div>

      {/* Step 1: Double click script */}
      <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-left max-w-sm w-full">
        <p className="text-white/90 text-sm font-semibold font-jakarta mb-3">
          Cara cepat — double-click file ini:
        </p>
        <div className="bg-black/30 rounded-xl px-4 py-3 font-mono text-sm text-green-300 mb-3">
          📄 reiza-studio/start-demos.bat
        </div>
        <p className="text-white/50 text-xs font-inter">
          Akan membuka 2 server (coffee + properti) sekaligus di background.
        </p>
      </div>

      <div className="text-white/40 text-xs font-inter">— atau manual —</div>

      {/* Manual command */}
      <div className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-left max-w-sm w-full">
        <p className="text-white/80 text-xs font-inter mb-2">
          Jalankan di terminal dari folder <code className="bg-white/20 px-1 rounded">{demo.folderName}</code>:
        </p>
        <code className="block bg-black/30 rounded-xl px-3 py-2 text-green-300 font-mono text-xs">
          npm run dev -- --port {demo.localPort}
        </code>
        <p className="text-white/40 text-xs mt-2 font-inter">Tunggu ~15 detik, lalu klik tombol di bawah.</p>
      </div>

      <button
        onClick={checkServer}
        disabled={checking}
        className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r ${demo.gradient} text-white font-semibold font-jakarta text-sm shadow-lg hover:opacity-90 transition-opacity disabled:opacity-60`}
      >
        {checking ? <Loader2 size={16} className="animate-spin" /> : <RefreshCw size={16} />}
        {checking ? 'Mengecek server...' : 'Cek & Buka Demo'}
      </button>

      <a
        href={demo.iframeSrc}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/40 hover:text-white/70 text-xs font-inter underline transition-colors"
      >
        Buka langsung di tab baru ↗
      </a>
    </div>
  )
}

export default function DemoPage() {
  const params = useParams()
  const slug = params.slug as string
  const demo = demos[slug]
  const [viewport, setViewport] = useState('desktop')
  const [iframeKey, setIframeKey] = useState(0)
  const [serverLive, setServerLive] = useState<boolean | null>(null)

  useEffect(() => {
    if (!demo || demo.isStatic) { setServerLive(true); return }
    const check = async () => {
      try {
        const ctrl = new AbortController()
        setTimeout(() => ctrl.abort(), 3000)
        await fetch(demo.iframeSrc, { signal: ctrl.signal, mode: 'no-cors' })
        setServerLive(true)
      } catch {
        setServerLive(false)
      }
    }
    check()
  }, [demo])

  if (!demo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-warm-white gap-4">
        <p className="text-2xl font-bold text-rs-navy font-jakarta">Demo tidak ditemukan</p>
        <a href="/#portfolio" className="text-rs-sky-500 font-semibold font-jakarta hover:underline">← Kembali ke Portfolio</a>
      </div>
    )
  }

  const currentWidth = viewports.find(v => v.key === viewport)?.width ?? '100%'
  const showIframe = demo.isStatic || serverLive === true

  return (
    <div className="min-h-screen flex flex-col bg-rs-navy">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-rs-navy-medium border-b border-white/10">
        <a href="/#portfolio" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium font-jakarta">
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Kembali</span>
        </a>

        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${demo.gradient} text-white`}>
            {demo.tag}
          </div>
          <span className="text-white text-sm font-semibold font-jakarta hidden sm:inline truncate max-w-xs">
            {demo.title}
          </span>
          {!demo.isStatic && (
            <div className={`flex items-center gap-1.5 text-xs ${serverLive === true ? 'text-green-400' : serverLive === false ? 'text-red-400' : 'text-yellow-400'}`}>
              <div className={`w-2 h-2 rounded-full ${serverLive === true ? 'bg-green-400 animate-pulse' : serverLive === false ? 'bg-red-400' : 'bg-yellow-400 animate-pulse'}`} />
              <span className="hidden sm:inline font-inter text-xs">
                {serverLive === true ? 'Server aktif' : serverLive === false ? 'Server offline' : 'Mengecek...'}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 bg-white/10 rounded-xl p-1">
            {viewports.map(v => {
              const Icon = v.icon
              return (
                <button key={v.key} onClick={() => setViewport(v.key)} title={v.label}
                  className={`w-8 h-7 rounded-lg flex items-center justify-center transition-all ${viewport === v.key ? 'bg-white text-rs-navy' : 'text-white/60 hover:text-white'}`}>
                  <Icon size={14} />
                </button>
              )
            })}
          </div>
          <button onClick={() => setIframeKey(k => k + 1)} title="Refresh"
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all">
            <RefreshCw size={13} />
          </button>
          <a href={demo.iframeSrc} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all" title="Buka di tab baru">
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Browser chrome */}
      <div className="bg-rs-navy-medium px-4 py-2 flex items-center gap-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 bg-white/10 rounded-lg px-4 py-1.5 text-xs text-white/50 font-mono truncate max-w-sm mx-auto">
          {demo.iframeSrc.startsWith('http') ? demo.iframeSrc.replace('https://', '') : `reizastudio.com/demo/${slug}`}
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 bg-rs-navy-medium flex items-start justify-center overflow-auto">
        {serverLive === null && !demo.isStatic ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-130px)] gap-3 text-white/60">
            <Loader2 size={28} className="animate-spin" />
            <p className="text-sm font-inter">Mengecek koneksi server...</p>
          </div>
        ) : showIframe ? (
          <div className="flex-shrink-0 bg-white transition-all duration-500 shadow-2xl" style={{ width: currentWidth, minHeight: '100%' }}>
            <iframe
              key={iframeKey}
              src={demo.iframeSrc}
              title={demo.title}
              className="w-full border-0"
              style={{ height: 'calc(100vh - 130px)', minHeight: 600 }}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
          </div>
        ) : (
          <div className="w-full max-w-lg">
            <ServerRequiredScreen demo={demo} />
          </div>
        )}
      </div>
    </div>
  )
}
