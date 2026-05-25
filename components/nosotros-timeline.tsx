const milestones = [
  {
    year: "1993",
    title: "Los comienzos",
    description:
      "E & T Modas abre sus puertas en Paso 481, CABA, con una pequena seleccion de sedas y vestidos de fiesta artesanales.",
  },
  {
    year: "2000",
    title: "Expansion de colecciones",
    description:
      "Incorporamos la linea de vestidos de 15 anos y accesorios, convirtiéndonos en referentes del barrio para celebraciones especiales.",
  },
  {
    year: "2010",
    title: "Renovacion de la boutique",
    description:
      "Remodelamos el local para ofrecer una experiencia de compra mas intima y exclusiva, con salon de prueba privado.",
  },
  {
    year: "2018",
    title: "Presencia digital",
    description:
      "Llegamos a Instagram y comenzamos a mostrar nuestras colecciones al pais entero, ampliando el alcance de nuestro trabajo.",
  },
  {
    year: "2024",
    title: "Hoy",
    description:
      "Mas de 5.000 clientas vestidas. Seguimos fieles a nuestra esencia: calidad, calidez y elegancia en cada pieza.",
  },
]

export function NosotrosTimeline() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
            Nuestra trayectoria
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-4">Historia</h2>
        </div>

        <ol className="relative border-l border-border ml-4">
          {milestones.map((m) => (
            <li key={m.year} className="mb-10 ml-8 last:mb-0">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-foreground ring-4 ring-card">
                <span className="sr-only">{m.year}</span>
              </span>
              <time className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">
                {m.year}
              </time>
              <h3 className="font-serif text-xl text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
