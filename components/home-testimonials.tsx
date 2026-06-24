"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Testimonial } from "@/lib/data"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

export function HomeTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[activeIndex]

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-border/20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-border/20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-semibold block mb-4">
            Reseñas &amp; Testimonios
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-wide">
            Voces de Nuestras Clientas
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-6" />
        </div>

        {/* Editorial Quote Box */}
        <div className="relative min-h-[400px] md:min-h-[300px] flex flex-col md:flex-row items-center gap-8 md:gap-16 border border-border/80 p-8 md:p-12 bg-background/50 shadow-md">
          {/* Quote mark icon */}
          <div className="absolute -top-6 left-12 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-foreground">
            <Quote className="w-5 h-5" />
          </div>

          {/* Client Portrait image */}
          <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent/25 flex-shrink-0 bg-muted">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 112px, 160px"
            />
          </div>

          {/* Quote Text */}
          <div className="flex-grow text-center md:text-left flex flex-col justify-between">
            <div>
              <p className="font-serif text-lg md:text-2xl text-foreground leading-relaxed italic mb-6">
                “{current.quote}”
              </p>
            </div>
            
            <div className="border-t border-border/60 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
              <div>
                <h4 className="font-serif text-base font-semibold text-foreground">{current.name}</h4>
                <p className="text-xs text-accent tracking-widest uppercase mt-0.5">{current.role}</p>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-muted-foreground font-light">
                {current.date}
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-8">
          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  activeIndex === i ? "bg-accent w-8" : "bg-muted-foreground/30 w-2"
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
