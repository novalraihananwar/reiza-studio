'use client'
import { motion } from 'framer-motion'
import { Mail, Instagram, Facebook, Twitter, Linkedin, Heart, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proses', href: '#proses' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Kontak', href: '#kontak' },
]

const services = [
  'Landing Page',
  'Company Profile',
  'Web Application',
  'E-Commerce',
  'Maintenance',
  'UI/UX Design',
]

const socials = [
  {
    icon: Instagram,
    href: 'https://instagram.com/reizastudio',
    label: 'Instagram',
    hoverColor: 'hover:bg-gradient-to-br hover:from-pink-500 hover:via-rose-500 hover:to-orange-400',
  },
  {
    icon: Facebook,
    href: 'https://facebook.com/reizastudio',
    label: 'Facebook',
    hoverColor: 'hover:bg-blue-600',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/reizastudio',
    label: 'Twitter',
    hoverColor: 'hover:bg-sky-500',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/reizastudio',
    label: 'LinkedIn',
    hoverColor: 'hover:bg-blue-700',
  },
  {
    icon: Mail,
    href: 'mailto:hello@reizastudio.com',
    label: 'Email',
    hoverColor: 'hover:bg-rs-teal-500',
  },
]

export default function Footer() {
  return (
    <footer className="bg-rs-navy text-white">
      {/* Top gradient divider line */}
      <div className="h-[2px] bg-gradient-to-r from-rs-sky-400 via-rs-teal-400 to-rs-sky-500" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rs-sky-400 to-rs-teal-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-jakarta">R</span>
              </div>
              <span className="font-bold text-lg font-jakarta">
                Reiza<span className="gradient-text-sky">Studio</span>
              </span>
            </div>

            <p className="text-white/60 text-sm font-inter leading-relaxed mb-5">
              Studio kreatif digital modern yang membantu bisnis tampil lebih profesional dan menarik melalui website berkualitas tinggi.
            </p>

            {/* Social links with distinct hover colors */}
            <div className="flex gap-2 mb-6">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-200 ${s.hoverColor} hover:scale-110`}
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>

            {/* "Mulai Proyek" mini CTA card */}
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 bg-gradient-to-r from-rs-sky-500/20 to-rs-teal-500/20 border border-rs-sky-400/30 rounded-2xl px-4 py-3 group hover:border-rs-sky-400/60 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div>
                <p className="text-xs font-bold text-white font-jakarta">Mulai Proyek Barumu</p>
                <p className="text-[10px] text-white/50 font-inter">Konsultasi gratis sekarang</p>
              </div>
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-rs-sky-400 to-rs-teal-400 flex items-center justify-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={13} className="text-white" />
              </div>
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white font-jakarta mb-4 tracking-wide uppercase opacity-60">Menu</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-rs-sky-400 transition-colors duration-200 font-inter flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-rs-sky-500/0 group-hover:bg-rs-sky-500 transition-colors duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white font-jakarta mb-4 tracking-wide uppercase opacity-60">Layanan</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#layanan"
                    className="text-sm text-white/60 hover:text-rs-sky-400 transition-colors duration-200 font-inter flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-rs-sky-500/0 group-hover:bg-rs-sky-500 transition-colors duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white font-jakarta mb-4 tracking-wide uppercase opacity-60">Kontak</h4>
            <ul className="space-y-3">
              {[
                { icon: '📱', text: '+62 812-3456-7890', href: 'https://wa.me/6281234567890' },
                { icon: '✉️', text: 'hello@reizastudio.com', href: 'mailto:hello@reizastudio.com' },
                { icon: '📍', text: 'Bali, Indonesia', href: '#' },
              ].map((c) => (
                <li key={c.text}>
                  <a
                    href={c.href}
                    className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white transition-colors font-inter"
                  >
                    <span className="text-base flex-shrink-0 mt-0.5">{c.icon}</span>
                    {c.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Office hours info */}
            <div className="mt-6 p-3 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-[10px] text-white/40 font-inter uppercase tracking-wider mb-1">Jam Operasional</p>
              <p className="text-xs text-white/70 font-inter font-medium">Sen – Sab: 09.00 – 21.00 WIB</p>
              <p className="text-[10px] text-rs-teal-400 font-inter mt-1">● Online sekarang</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-inter text-center sm:text-left">
            © {new Date().getFullYear()} Reiza Studio. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-inter flex items-center gap-1">
            Made with <Heart size={11} className="text-rs-coral fill-rs-coral mx-0.5" /> in Bali, Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
