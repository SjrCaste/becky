"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-boutique.jpg"
          alt="E & T Modas Boutique"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block text-primary-foreground/80 text-sm tracking-[0.4em] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Más de 30 años de elegancia
        </span>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 text-balance">
          Elegancia que trasciende el tiempo
        </h1>
        
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Descubrí una selección exclusiva de sedería premium y moda de fiesta para los momentos más especiales de tu vida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <Link
            href="#colecciones"
            className="px-8 py-4 bg-primary-foreground text-foreground text-sm tracking-wider uppercase hover:bg-primary-foreground/90 transition-all duration-300"
          >
            Descubrir Colección
          </Link>
          <Link
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-primary-foreground text-primary-foreground text-sm tracking-wider uppercase hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Solicitar Asesoramiento
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  )
}
