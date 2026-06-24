"use client"

import { MapPin, Clock, Phone, Instagram } from "lucide-react"
import Link from "next/link"

const WA_NUMBER = "5491100000000"

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-foreground text-primary-foreground relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left panel: CTA */}
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-accent font-semibold block mb-4">
              Atelier de Costura
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mt-4 mb-6 tracking-wide leading-tight text-balance">
              Tu vestido ideal te está esperando
            </h2>
            <p className="text-primary-foreground/75 leading-relaxed mb-8 max-w-lg font-light text-sm md:text-base">
              Agendá tu visita exclusiva hoy. Nuestro equipo de modistas y diseñadores te guiará para elegir y confeccionar la pieza perfecta para tu celebración más importante.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%20Seder%C3%ADa%20Becky%2C%20quisiera%20consultar%20por%20un%20turno`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-foreground text-xs tracking-widest font-semibold uppercase hover:bg-accent/90 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/sederiabecky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-xs tracking-widest uppercase hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Right panel: Details */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-white/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-primary-foreground mb-2">Ubicación Boutique</h3>
                <p className="text-primary-foreground/75 font-light text-sm">
                  Azcuénaga 410<br />
                  Ciudad Autónoma de Buenos Aires, Argentina
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-white/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-primary-foreground mb-2">Horarios de Asesoría</h3>
                <p className="text-primary-foreground/75 font-light text-sm">
                  Lunes a Viernes: 10:00 - 19:00 hs<br />
                  Sábados: 10:00 - 14:00 hs
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-primary-foreground/50 italic tracking-wider font-light">
                &ldquo;84 años vistiendo bodas y fiestas. La excelencia está en la dedicación de cada puntada.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
