import { Heart, Shield, Star, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Pasion por la moda",
    description:
      "Cada coleccion es curada con amor y criterio estetico. No vendemos ropa: contamos historias a traves de las prendas.",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-500/10",
  },
  {
    icon: Shield,
    title: "Calidad garantizada",
    description:
      "Trabajamos solo con proveedores que cumplen nuestros estandares de confeccion y durabilidad. Tu inversion vale.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-600/10",
  },
  {
    icon: Users,
    title: "Trato personalizado",
    description:
      "Cada clienta es unica. Nuestro equipo te escucha, te asesora y te acompana hasta que encontres lo que buscas.",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-600/10",
  },
  {
    icon: Star,
    title: "Exclusividad real",
    description:
      "Seleccionamos piezas que no vas a encontrar en cualquier tienda. Apostamos por modelos con identidad propia.",
    iconColor: "text-accent",
    iconBg: "bg-accent/15",
  },
]

export function NosotrosValues() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
            Lo que nos define
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-4">Nuestros valores</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-7 bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-500">
              <div className={`w-12 h-12 rounded-full ${v.iconBg} flex items-center justify-center mb-5`}>
                <v.icon className={`w-6 h-6 ${v.iconColor}`} />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
