import { Heart, Shield, Star, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Pasion por la moda",
    description:
      "Cada coleccion es curada con amor y criterio estetico. No vendemos ropa: contamos historias a traves de las prendas.",
  },
  {
    icon: Shield,
    title: "Calidad garantizada",
    description:
      "Trabajamos solo con proveedores que cumplen nuestros estandares de confeccion y durabilidad. Tu inversion vale.",
  },
  {
    icon: Users,
    title: "Trato personalizado",
    description:
      "Cada clienta es unica. Nuestro equipo te escucha, te asesora y te acompana hasta que encontres lo que buscas.",
  },
  {
    icon: Star,
    title: "Exclusividad real",
    description:
      "Seleccionamos piezas que no vas a encontrar en cualquier tienda. Apostamos por modelos con identidad propia.",
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
            <div key={v.title} className="p-7 bg-card border border-border">
              <v.icon className="w-7 h-7 text-foreground/60 mb-5" />
              <h3 className="font-serif text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
