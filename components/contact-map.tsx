import { MapPin, Clock, Phone, Instagram } from "lucide-react"

const WA_NUMBER = "5491166317921"

const info = [
  {
    icon: MapPin,
    title: "Dirección Boutique",
    lines: ["Azcuénaga 410", "Once, Ciudad Autónoma de Buenos Aires, Argentina"],
  },
  {
    icon: Clock,
    title: "Horarios de Atención",
    lines: ["Lunes a Jueves: 10:00 – 19:00 hs", "Viernes: 10:00 – 15:30 hs", "Sábados, Domingos y Feriados: Cerrado"],
  },
  {
    icon: Phone,
    title: "Atención Digital",
    lines: ["Consultas de stock, pedidos a medida y turnos boutique."],
  },
]

export function ContactMap() {
  return (
    <section className="py-24 md:py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Map embed iframe */}
          <div className="aspect-[4/3] w-full bg-muted border border-border/80 overflow-hidden shadow-sm relative">
            <iframe
              title="Ubicación Sedería Becky"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.992226252988!2d-58.404284523467645!3d-34.604351657529434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaee4071ecab%3A0xe5a3bb45f9e9cf2f!2sAzcu%C3%A9naga%20410%2C%20C1021%20CABA!5e0!3m2!1ses-419!2sar!4v1716631820492!5m2!1ses-419!2sar"
              className="w-full h-full grayscale contrast-[1.05]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-6">
            {info.map((item) => (
              <div key={item.title} className="flex gap-5 p-6 bg-card border border-border/60 shadow-sm hover:border-accent/40 transition-colors duration-500">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-accent border border-accent/10">
                  <item.icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%20Seder%C3%ADa%20Becky%2C%20quisiera%20agendar%20una%20visita`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-foreground text-xs tracking-widest uppercase font-semibold hover:bg-accent/90 transition-all duration-300 shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                Escribir por WhatsApp
              </a>
              <a
                href="https://instagram.com/sederiabecky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-foreground text-xs tracking-widest uppercase hover:bg-muted transition-colors duration-300 font-light"
              >
                <Instagram className="w-3.5 h-3.5" />
                Seguir en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
