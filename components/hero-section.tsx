"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { HomeSetting } from "@/lib/data"

export function HeroSection({ homeSetting }: { homeSetting?: HomeSetting | null }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const { clientWidth, clientHeight } = sectionRef.current
      const x = (e.clientX / clientWidth - 0.5) * 15 // Max 15px displacement
      const y = (e.clientY / clientHeight - 0.5) * 15
      setMousePosition({ x, y })
    }

    const currentSection = sectionRef.current
    if (currentSection) {
      currentSection.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (currentSection) {
        currentSection.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground"
    >
      {/* Background Image with subtle Parallax Zoom */}
      <div 
        className="absolute inset-0 transition-transform duration-700 ease-out scale-105"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.08)`,
          backgroundImage: `url("${homeSetting?.background_image || 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1920&q=90'}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Luxury Radial/Linear Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-foreground" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.4)_80%)]" />

      {/* Golden Floating Particles (Luxury Sparkles) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 4 + 2
          const delay = Math.random() * 10
          const duration = Math.random() * 15 + 10
          const left = Math.random() * 100
          return (
            <div
              key={i}
              className="absolute rounded-full bg-accent/40 blur-[1px] animate-float"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                bottom: `-10px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          )
        })}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtitle / Trajectory badge */}
        <div className="inline-flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          <span className="h-[1px] w-6 bg-accent" />
          <span className="text-accent text-xs md:text-sm tracking-[0.4em] uppercase font-light">
            84 años vistiendo bodas y fiestas
          </span>
          <span className="h-[1px] w-6 bg-accent" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 tracking-wide">
          {homeSetting?.title || "Sedería Becky"}
        </h1>

        {/* Subtext */}
        <p className="text-primary-foreground/80 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          {homeSetting?.subtitle || "Alta costura, vestidos de novia, 15 años y ceremonias únicas confeccionadas con dedicación artesanal en Buenos Aires."}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
          <Link
            href="/catalogo"
            className="w-full sm:w-auto px-8 py-4 bg-accent text-foreground text-xs tracking-[0.2em] font-semibold uppercase hover:bg-accent/90 transition-all duration-500 shadow-md hover:shadow-accent/20 border border-accent"
          >
            Ver Colección
          </Link>
          <a
            href="#reserva"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-primary-foreground/30 text-primary-foreground text-xs tracking-[0.2em] uppercase hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-500"
          >
            Reservar cita
          </a>
          <a
            href="https://wa.me/5491100000000?text=Hola%20Seder%C3%ADa%20Becky%2C%20quisiera%20consultar%20por%20un%20vestido"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-accent/40 text-accent text-xs tracking-[0.2em] uppercase hover:bg-accent/10 transition-all duration-500 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Fine Vertical Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 transition-opacity duration-300 hover:opacity-100 cursor-pointer z-20">
        <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-primary-foreground/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 w-full bg-accent animate-scroll-line" />
        </div>
      </div>

      {/* Floating particles style */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-105vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        @keyframes scrollLine {
          0% {
            height: 0%;
            top: 0;
          }
          50% {
            height: 100%;
            top: 0;
          }
          100% {
            height: 0%;
            top: 100%;
          }
        }
        .animate-scroll-line {
          animation: scrollLine 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  )
}
