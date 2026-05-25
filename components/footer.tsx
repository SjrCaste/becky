import Link from "next/link"
import { Instagram, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

const WA_NUMBER = "5491100000000"

const links = {
  navegacion: [
    { href: "/", label: "Inicio" },
    { href: "/catalogo", label: "Colecciones" },
    { href: "/nosotros", label: "Nuestra Historia" },
    { href: "/contacto", label: "Contacto" },
    { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  ],
  colecciones: [
    { href: "/catalogo?categoria=novias", label: "Novias" },
    { href: "/catalogo?categoria=15-anos", label: "15 Años" },
    { href: "/catalogo?categoria=fiesta", label: "Fiesta / Gala" },
    { href: "/catalogo?categoria=mitzvah", label: "Bat & Bar Mitzvá" },
    { href: "/catalogo?categoria=padrinos-y-madrinas", label: "Padrinos y Madrinas" },
    { href: "/catalogo?categoria=telas", label: "Telas Premium" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground border-t border-white/5 relative z-10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand & Socials */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <Link href="/" className="group flex flex-col">
                <span className="font-serif text-3xl tracking-widest uppercase block">Sedería Becky</span>
                <span className="text-[9px] font-sans font-light tracking-[0.4em] uppercase text-accent block mt-0.5">
                  Alta Costura &amp; Sedería
                </span>
              </Link>
              <p className="mt-6 text-xs text-primary-foreground/65 leading-relaxed max-w-xs font-light">
                Boutique e importadores de textiles finos con más de 45 años de trayectoria familiar en Buenos Aires. Acompañamos tus momentos inolvidables.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://instagram.com/sederiabecky"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary-foreground/80 hover:text-accent hover:border-accent transition-all duration-300 bg-white/5"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quisiera%20agendar%20una%20cita`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary-foreground/80 hover:text-accent hover:border-accent transition-all duration-300 bg-white/5"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navegacion */}
          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-accent font-semibold mb-6">
              Navegación
            </h3>
            <ul className="space-y-4">
              {links.navegacion.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-xs text-primary-foreground/70 hover:text-accent transition-colors duration-300 font-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colecciones */}
          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-accent font-semibold mb-6">
              Líneas Couture
            </h3>
            <ul className="space-y-4">
              {links.colecciones.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-xs text-primary-foreground/70 hover:text-accent transition-colors duration-300 font-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto & Ubicación */}
          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-accent font-semibold mb-6">
              Visitanos en Once
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 items-start text-xs text-primary-foreground/75 font-light">
                <MapPin className="w-4 h-4 flex-shrink-0 text-accent" />
                <span>Azcuénaga 410, Ciudad Autónoma de Buenos Aires, Argentina</span>
              </li>
              <li className="flex gap-3 items-start text-xs text-primary-foreground/75 font-light">
                <Clock className="w-4 h-4 flex-shrink-0 text-accent" />
                <span>
                  Lunes a Viernes: 10:00 – 19:00 hs
                  <br />
                  Sábados: 10:00 – 14:00 hs
                </span>
              </li>
            </ul>
            {/* Interactive embedded maps preview */}
            <div className="w-full h-32 relative border border-white/10 overflow-hidden bg-muted group">
              <iframe
                title="Sedería Becky Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.992226252988!2d-58.404284523467645!3d-34.604351657529434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaee4071ecab%3A0xe5a3bb45f9e9cf2f!2sAzcu%C3%A9naga%20410%2C%20C1021%20CABA!5e0!3m2!1ses-419!2sar!4v1716631820492!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-transparent transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-foreground">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-primary-foreground/50 tracking-wider">
          <span>© {new Date().getFullYear()} SEDERÍA BECKY. Todos los derechos reservados.</span>
          <span className="text-accent italic font-serif">“45 años vistiendo momentos inolvidables.”</span>
        </div>
      </div>
    </footer>
  )
}
