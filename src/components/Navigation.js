'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* ── Desktop Cylindrical Navbar ── */}
      <div className="fixed top-0 inset-x-0 z-50 hidden lg:flex justify-center pointer-events-none px-6 lg:px-12 pt-3">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`
            pointer-events-auto flex items-center justify-between
            w-full max-w-7xl
            rounded-full border px-4 py-2.5
            transition-all duration-500
            ${scrolled
              ? 'bg-white/85 backdrop-blur-xl border-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.14)]'
              : 'bg-white/75 backdrop-blur-md border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
            }
          `}
          style={{
            /* subtle inner bevel to reinforce the cylindrical feel */
            boxShadow: scrolled
              ? '0 8px 40px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.04)'
              : '0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          {/* Logo pill */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center rounded-full px-3 py-1.5 mr-3 cursor-pointer"
            >
              <img
                src="/intellosoft-logoooo.png"
                alt="Intellosoft logo"
                className="h-12 w-auto object-contain"
              />
              <span className="sr-only">Intellosoft Infotech</span>
            </motion.div>
          </Link>

          {/* Divider */}
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-1" />

          {/* Nav links - centered group */}
          <div className="flex items-center gap-1 flex-1 justify-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`
                    relative px-5 py-2.5 rounded-full text-[15px] font-semibold cursor-pointer
                    transition-colors duration-200 select-none
                    ${isActive
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  {/* Active background pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600"
                      style={{
                        boxShadow: '0 2px 12px rgba(99,102,241,0.45), inset 0 1px 0 rgba(255,255,255,0.2)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.div>
              </Link>
            )
          })}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-1" />

          {/* CTA */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="
                ml-1 px-6 py-2.5 rounded-full text-[15px] font-bold text-white
                bg-gradient-to-r from-primary-600 to-secondary-600
                transition-all duration-200
              "
              style={{
                boxShadow: '0 2px 14px rgba(99,102,241,0.5), inset 0 1px 0 rgba(255,255,255,0.18)',
              }}
            >
              Let's Connect
            </motion.button>
          </Link>
        </motion.nav>
      </div>

      {/* ── Mobile Top Bar ── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed top-0 left-0 right-0 z-50 flex lg:hidden items-center justify-between
          px-5 py-3 transition-all duration-300
          ${scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-white/60'
            : 'bg-white/80 backdrop-blur-md'
          }
        `}
      >
        <Link href="/">
          <img
            src="/intellosoft-logoooo.png"
            alt="Intellosoft logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="
            w-10 h-10 rounded-full flex items-center justify-center
            bg-gradient-to-br from-primary-600 to-secondary-600 text-white shadow-md
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="
              fixed top-[64px] left-4 right-4 z-40 lg:hidden
              bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl
              border border-white/70 overflow-hidden
            "
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
          >
            <div className="p-4 space-y-1">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center px-5 py-3 rounded-2xl font-semibold text-sm
                        transition-all duration-200 cursor-pointer
                        ${isActive
                          ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                )
              })}

              <div className="pt-2 pb-1">
                <Link href="/contact">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.07 }}
                    onClick={() => setIsOpen(false)}
                    className="
                      w-full py-3 rounded-2xl font-bold text-sm text-white
                      bg-gradient-to-r from-primary-600 to-secondary-600
                    "
                    style={{
                      boxShadow: '0 4px 16px rgba(99,102,241,0.4)',
                    }}
                  >
                    Let's Connect
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}