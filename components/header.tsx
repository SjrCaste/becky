"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, MapPin, Clock, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Colecciones" },
  { href: "/nosotros", label: "Historia" },
  { href: "/contacto", label: "Contacto" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
]

const WA_NUMBER = "5491166317921"

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

  // Header is solid white/beige on non-home pages, or when scrolled
  const solid = !isHome || isScrolled

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        solid ? "bg-card/95 backdrop-blur-md shadow-sm py-3 border-b border-border/60" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top bar — only visible when transparent at home */}
        <div
          className={cn(
            "flex justify-between items-center text-xs transition-all duration-300",
            solid ? "opacity-0 h-0 mb-0 overflow-hidden" : "opacity-100 mb-3 border-b border-primary-foreground/10 pb-3"
          )}
        >
          <div className="flex items-center gap-6 text-primary-foreground/80 font-light tracking-wider">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Azcuénaga 410, CABA
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              Lun–Jue 10–19 · Vie 10–15:30
            </span>
          </div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold hidden sm:inline">
            Atelier de alta costura
          </span>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex flex-col">
            <span
              className={cn(
                "font-serif text-xl md:text-2xl tracking-[0.15em] transition-colors duration-300 uppercase",
                solid ? "text-foreground" : "text-primary-foreground"
              )}
            >
              Sedería Becky
            </span>
            <span
              className={cn(
                "block text-[8px] font-sans font-light tracking-[0.4em] uppercase transition-colors duration-300 -mt-0.5",
                solid ? "text-accent" : "text-accent"
              )}
            >
              Alta Costura &amp; Sedería
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300 relative pb-1 font-light",
                  solid 
                    ? "text-foreground/85 hover:text-accent" 
                    : "text-primary-foreground/85 hover:text-accent",
                  pathname === link.href && "text-accent font-medium"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent" />
                )}
              </Link>
            ))}
            
            <a
              href="#reserva"
              className={cn(
                "px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-500 font-semibold border",
                solid
                  ? "bg-foreground text-primary-foreground border-foreground hover:bg-transparent hover:text-foreground"
                  : "bg-accent text-foreground border-accent hover:bg-transparent hover:text-primary-foreground hover:border-primary-foreground/40"
              )}
            >
              Reservar cita
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors duration-300 hover:text-accent",
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
            "md:hidden transition-all duration-500 overflow-hidden",
            isMobileMenuOpen ? "max-h-[350px] opacity-100 mt-4 border-t border-border/40 pt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300 py-1",
                  solid ? "text-foreground/90 hover:text-accent" : "text-primary-foreground/90 hover:text-accent",
                  pathname === link.href && "text-accent font-medium pl-2 border-l border-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#reserva"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "px-6 py-3 text-xs tracking-widest uppercase text-center mt-2 transition-all duration-300 border font-semibold",
                solid 
                  ? "bg-foreground text-primary-foreground border-foreground" 
                  : "bg-accent text-foreground border-accent"
              )}
            >
              Reservar cita
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
