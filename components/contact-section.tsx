"use client"

import { MapPin, Clock, Phone, Instagram } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* CTA */}
          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70">
              Visitanos
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mt-4 mb-6 text-balance">
              Tu vestido ideal te está esperando
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
              Agendá tu visita y dejate asesorar por nuestro equipo. 
              Te ayudamos a encontrar la pieza perfecta para tu momento especial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-foreground text-sm tracking-wider uppercase hover:bg-primary-foreground/90 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </Link>
              <Link
                href="https://instagram.com/eytmodas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/50 text-sm tracking-wider uppercase hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </Link>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Ubicación</h3>
                <p className="text-primary-foreground/80">
                  Paso 481<br />
                  Ciudad Autónoma de Buenos Aires
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Horarios</h3>
                <p className="text-primary-foreground/80">
                  Lunes a Viernes: 10:00 - 19:00<br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/60 italic">
                &ldquo;La diferencia está en los detalles. Elegancia pensada para cada ocasión.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
