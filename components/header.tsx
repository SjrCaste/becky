"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, MapPin, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/colecciones", label: "Colecciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
]

const WA_NUMBER = "5491100000000"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // On non-home pages the header is always solid
  const solid = !isHome || isScrolled

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        solid ? "bg-card/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar — only visible on home hero */}
        <div
          className={cn(
            "flex justify-between items-center text-xs transition-all duration-300",
            solid ? "opacity-0 h-0 mb-0 overflow-hidden" : "opacity-100 mb-3"
          )}
        >
          <div className="flex items-center gap-4 text-primary-foreground/80">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Paso 481, CABA
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Lun–Vie 10–19 · Sáb 10–14
            </span>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <span
              className={cn(
                "font-serif text-2xl md:text-3xl tracking-wide transition-colors duration-300 block",
                solid ? "text-foreground" : "text-primary-foreground"
              )}
            >
              E &amp; T
            </span>
            <span
              className={cn(
                "block text-xs font-sans font-light tracking-[0.3em] uppercase transition-colors duration-300",
                solid ? "text-muted-foreground" : "text-primary-foreground/70"
              )}
            >
              Modas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300 relative pb-0.5",
                  solid ? "text-foreground hover:text-foreground/60" : "text-primary-foreground hover:text-primary-foreground/70",
                  pathname === link.href &&
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-current"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quisiera%20agendar%20una%20cita`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-300",
                solid
                  ? "bg-foreground text-card hover:bg-foreground/85"
                  : "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
              )}
            >
              Agendar cita
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              solid ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300",
                  solid ? "text-foreground" : "text-primary-foreground",
                  pathname === link.href && "font-semibold"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quisiera%20agendar%20una%20cita`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "px-6 py-3 text-xs tracking-widest uppercase text-center mt-2 transition-all duration-300",
                solid ? "bg-foreground text-card" : "bg-primary-foreground text-foreground"
              )}
            >
              Agendar cita
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
