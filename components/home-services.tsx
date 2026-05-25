import Link from "next/link"
import { Sparkles, Shirt, Gem, Scissors } from "lucide-react"

const services = [
  {
    icon: Shirt,
    title: "Vestidos de 15",
    description:
      "Colección exclusiva de vestidos de quinceañera en tul, encaje y sedas premium. Desde estilos clásicos hasta diseños contemporáneos.",
    href: "/colecciones",
  },
  {
    icon: Gem,
    title: "Moda de Fiesta",
    description:
      "Para bodas, casamientos, egresadas y eventos formales. Piezas de alto impacto con confección de primera calidad.",
    href: "/colecciones",
  },
  {
    icon: Sparkles,
    title: "Sedería Premium",
    description:
      "Telas de alta gama: satén, chiffon, organza, encaje francés y más. Vendemos por metro para proyectos a medida.",
    href: "/colecciones",
  },
  {
    icon: Scissors,
    title: "Asesoramiento Personalizado",
    description:
      "Nuestra asesora te acompaña en cada paso: estilo, talles, accesorios y combinaciones para que luzcas perfecta.",
    href: "/contacto",
  },
]

export function HomeServices() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
            Lo que ofrecemos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-4 text-balance">
            Nuestros servicios
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group block p-7 bg-card border border-border hover:border-foreground/25 transition-all duration-300"
            >
              <s.icon className="w-7 h-7 text-foreground/60 mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              <span className="block mt-5 text-xs tracking-widest uppercase text-foreground/50 group-hover:text-foreground transition-colors duration-300">
                Ver mas &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Info strip */}
        <div className="mt-14 grid sm:grid-cols-3 gap-0 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            { value: "30+", label: "Anos de trayectoria" },
            { value: "5.000+", label: "Clientas vestidas" },
            { value: "100%", label: "Atencion personalizada" },
          ].map((stat) => (
            <div key={stat.label} className="px-8 py-8 text-center">
              <span className="font-serif text-4xl text-foreground block">{stat.value}</span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground mt-2 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
