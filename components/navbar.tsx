"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">CSS</div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-semibold text-foreground">
              Cooling Service System
            </span>
            <span className="text-xs text-muted-foreground">
              AC Repair • Installation • Service
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+917893002759"
            className="px-4 py-2 border border-border rounded-lg font-medium flex items-center gap-2 hover:bg-muted transition"
          >
            <Phone size={16} />
            Call
          </a>

          <a
            href="https://wa.me/917893002759?text=Hello%20Cooling%20Service%20System,%20I%20need%20AC%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#25D366] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#20ba5a] transition"
          >
            <MessageSquare size={16} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="tel:+917893002759"
                className="w-full px-6 py-2 border border-border rounded-lg font-medium text-center flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href="https://wa.me/917893002759?text=Hello%20Cooling%20Service%20System,%20I%20need%20AC%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-2 bg-[#25D366] text-white rounded-lg font-medium text-center flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition"
              >
                <MessageSquare size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
