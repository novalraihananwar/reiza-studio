'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proses', href: '#proses' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      setHidden(y > lastY + 10 && y > 180)
      if (y < lastY) setHidden(false)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        style={{ paddingTop: scrolled ? '12px' : '0' }}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'max-w-3xl w-[calc(100%-2rem)] mx-4 rounded-2xl bg-white/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,0.8)_inset] border border-white/70'
              : 'w-full bg-transparent'
          }`}
        >
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 ${scrolled ? 'lg:px-5' : 'lg:px-8'}`}>
            <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16 lg:h-20'}`}>
              {/* Logo */}
              <motion.a
                href="#beranda"
                className="flex items-center gap-2.5 flex-shrink-0"
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rs-sky-500 to-rs-teal-400 flex items-center justify-center shadow-sky">
                  <span className="text-white font-black text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>R</span>
                </div>
                <span className="font-black text-rs-navy tracking-tight" style={{ fontFamily: 'Outfit, sans-serif', fontSize: scrolled ? '16px' : '18px' }}>
                  Reiza<span className="gradient-text-sky">Studio</span>
                </span>
              </motion.a>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3.5 py-2 rounded-xl text-rs-navy-light hover:text-rs-sky-500 hover:bg-rs-sky-50 transition-all duration-200 text-sm font-medium font-jakarta"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* CTA */}
              <div className="flex items-center gap-2.5">
                <motion.a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rs-sky-500 to-rs-teal-400 text-white text-sm font-bold font-jakarta shadow-sky btn-shine"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Zap size={13} className="fill-white" />
                  Konsultasi Gratis
                </motion.a>
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors text-rs-navy"
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-[72px] left-3 right-3 z-40 bg-white/96 backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/80 p-4"
          >
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-rs-navy font-medium font-jakarta hover:bg-rs-sky-50 hover:text-rs-sky-500 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-rs-sky-500 to-rs-teal-400 text-white font-bold font-jakarta shadow-sky"
              >
                <Zap size={14} className="fill-white" />
                Konsultasi Gratis
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
