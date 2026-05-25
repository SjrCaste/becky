import Link from "next/link"
import { Instagram, Phone, MapPin, Clock } from "lucide-react"

const WA_NUMBER = "5491100000000"

const links = {
  navegacion: [
    { href: "/", label: "Inicio" },
    { href: "/colecciones", label: "Colecciones" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
    { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  ],
  colecciones: [
    { href: "/colecciones", label: "Vestidos de 15" },
    { href: "/colecciones", label: "Moda de fiesta" },
    { href: "/colecciones", label: "Sederia premium" },
    { href: "/colecciones", label: "Accesorios" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="font-serif text-3xl block">E &amp; T</span>
              <span className="text-xs font-sans font-light tracking-[0.35em] uppercase text-primary-foreground/60 block mt-0.5">
                Modas
              </span>
            </Link>
            <p className="mt-5 text-sm text-primary-foreground/65 leading-relaxed max-w-xs">
              Boutique de moda de fiesta y sederia premium en CABA. Mas de 30 anos acompanando
              momentos especiales.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <Link
                href="https://instagram.com/eytmodas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Navegacion */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-primary-foreground/50 mb-5">
              Navegacion
            </h3>
            <ul className="space-y-3">
              {links.navegacion.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colecciones */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-primary-foreground/50 mb-5">
              Colecciones
            </h3>
            <ul className="space-y-3">
              {links.colecciones.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-primary-foreground/50 mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-sm text-primary-foreground/75">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-foreground/50" />
                <span>Paso 481, Ciudad Autonoma de Buenos Aires</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-primary-foreground/75">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-foreground/50" />
                <span>
                  Lun–Vie: 10:00–19:00 hs
                  <br />
                  Sab: 10:00–14:00 hs
                </span>
              </li>
              <li>
                <Link
                  href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quisiera%20agendar%20una%20cita`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-5 py-2.5 bg-primary-foreground text-foreground text-xs tracking-widest uppercase hover:bg-primary-foreground/90 transition-colors duration-300"
                >
                  Agendar cita
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/40">
          <span>© {new Date().getFullYear()} E &amp; T Modas. Todos los derechos reservados.</span>
          <span>Paso 481, CABA · Argentina</span>
        </div>
      </div>
    </footer>
  )
}
