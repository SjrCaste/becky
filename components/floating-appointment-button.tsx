"use client"

import { usePathname } from "next/navigation"
import { CalendarDays } from "lucide-react"

const WA_NUMBER = "5491166317921"
const WA_MESSAGE =
  "Hola%2C%20quisiera%20agendar%20una%20cita%20para%20asesorarme%20sobre%20vestidos."

export function FloatingAppointmentButton() {
  const pathname = usePathname()
  if (pathname?.startsWith("/admin")) return null

  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-4 py-3 shadow-lg hover:bg-[#1fbd5a] hover:pr-5 transition-all duration-300 rounded-l-full"
      aria-label="Agendar cita por WhatsApp"
    >
      <CalendarDays className="w-5 h-5 flex-shrink-0" />
      <span className="text-xs tracking-widest uppercase font-semibold whitespace-nowrap">
        Reservar cita
      </span>
    </a>
  )
}
