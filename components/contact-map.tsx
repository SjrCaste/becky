import { MapPin, Clock, Phone, Instagram } from "lucide-react"
import Link from "next/link"

const WA_NUMBER = "5491100000000"

const info = [
  {
    icon: MapPin,
    title: "Direccion",
    lines: ["Paso 481", "Ciudad Autonoma de Buenos Aires"],
  },
  {
    icon: Clock,
    title: "Horarios de atencion",
    lines: ["Lunes a Viernes: 10:00 – 19:00 hs", "Sabados: 10:00 – 14:00 hs", "Domingos y feriados: cerrado"],
  },
  {
    icon: Phone,
    title: "WhatsApp",
    lines: ["Consultas, pedidos y turnos"],
  },
]

export function ContactMap() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map embed placeholder — styled iframe */}
          <div className="aspect-[4/3] w-full bg-muted border border-border overflow-hidden">
            <iframe
              title="Ubicacion E & T Modas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1!2d-58.3925!3d-34.6083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzMwLjAiUyA1OMKwMjMnMzMuMCJX!5e0!3m2!1ses!2sar!4v1"
              className="w-full h-full grayscale contrast-110"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-6">
            {info.map((item) => (
              <div key={item.title} className="flex gap-5 p-6 bg-card border border-border">
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-foreground/70" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quisiera%20consultar`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-card text-xs tracking-widest uppercase hover:bg-foreground/85 transition-colors duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                Escribir por WhatsApp
              </Link>
              <Link
                href="https://instagram.com/eytmodas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-xs tracking-widest uppercase hover:bg-muted transition-colors duration-300"
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
