import Link from "next/link"
import { CalendarDays } from "lucide-react"

const WA_NUMBER = "5491100000000"
const WA_MESSAGE =
  "Hola%2C%20quisiera%20agendar%20una%20cita%20para%20asesorarme%20sobre%20vestidos."

export function AppointmentBanner() {
  return (
    <section className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <CalendarDays className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-1 text-balance">
              Agendá tu cita de asesoramiento
            </h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-lg">
              Visitanos en Paso 481, CABA y dejate guiar por nuestra asesora
              especializada. Sin cargo, sin compromiso. Solo el placer de
              encontrar el vestido ideal.
            </p>
          </div>
        </div>

        <Link
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-8 py-4 bg-primary-foreground text-foreground text-xs tracking-widest uppercase font-medium hover:bg-primary-foreground/90 transition-colors duration-300 whitespace-nowrap"
        >
          Reservar por WhatsApp
        </Link>
      </div>
    </section>
  )
}
