import Image from "next/image"

const categories = [
  {
    title: "Vestidos de 15",
    description:
      "La noche mas especial merece el vestido perfecto. Coleccion amplia en volumen, tules y encajes con bordados artesanales.",
    image: "/images/vestido-15-1.jpg",
    tag: "Quinceañeras",
  },
  {
    title: "Moda de Fiesta",
    description:
      "Para bodas, grados, egresadas y eventos formales. Modelos en tafeta, satén y chiffon en una amplia paleta de colores.",
    image: "/images/vestido-15-2.jpg",
    tag: "Eventos",
  },
  {
    title: "Sedería Premium",
    description:
      "Telas de alta gama vendidas por metro: organza, encaje francés, satén, chiffon y terciopelo. Ideales para modistas y proyectos a medida.",
    image: "/images/vestido-15-3.jpg",
    tag: "Telas",
  },
  {
    title: "Accesorios",
    description:
      "Completá tu look con tiaras, guantes, pashminas y bijouterie de fiesta seleccionados para acompañar cada vestido.",
    image: "/images/vestido-15-4.jpg",
    tag: "Complementos",
  },
]

export function CollectionCategories() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
            Explorá por categoria
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-4 text-balance">
            Categorias
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="group relative overflow-hidden aspect-[4/3] cursor-default"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Tag */}
              <span className="absolute top-5 left-5 bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground text-xs tracking-widest uppercase px-3 py-1">
                {cat.tag}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 text-primary-foreground">
                <h3 className="font-serif text-2xl mb-2">{cat.title}</h3>
                <p className="text-sm text-primary-foreground/75 leading-relaxed max-w-md">
                  {cat.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
