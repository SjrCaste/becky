"use client"

import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    slug: "novias",
    title: "Novias",
    tagline: "Bridal Couture",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
    subcategories: ["Clásicos", "Modernos", "Princesa", "Sirena", "Minimalistas", "Alta Costura"],
    description: "Cada vestido es una obra de arte. Diseñados a mano para reflejar tu luz interior en el gran día."
  },
  {
    slug: "15-anos",
    title: "15 Años",
    tagline: "Debutante Elegance",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    subcategories: ["Princesa", "Modernos", "Brillantes", "Exclusivos"],
    description: "Creaciones de ensueño con faldas mágicas, corsetería fina y el brillo estelar que tu noche soñada merece."
  },
  {
    slug: "fiesta",
    title: "Fiesta",
    tagline: "Gala & Nightwear",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    subcategories: ["Vestidos Largos", "Vestidos Cortos", "Diseños de Gala", "Elegancia Pura"],
    description: "Una silueta para cada celebración importante. Alta costura para brillar como invitada de gala."
  },
  {
    slug: "mitzvah",
    title: "Bat & Bar Mitzvá",
    tagline: "Ceremonial Tradición",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80",
    subcategories: ["Bat Mitzvá (Mujeres)", "Bar Mitzvá (Hombres)", "Looks Ceremoniales", "Juvenil Premium"],
    description: "Sección premium especializada en diseños ceremoniales y sastrería para jóvenes y familias de la comunidad."
  }
]

export function CollectionCategories() {
  return (
    <section id="colecciones" className="py-24 md:py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-semibold block mb-4">
            Nuestras Líneas de Confección
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-wide text-balance">
            Colecciones Exclusivas
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-6" />
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              href={`/catalogo?categoria=${cat.slug}`}
              className="group relative block aspect-[3/4] md:aspect-[4/5] lg:aspect-[4/3] overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-all duration-700"
            >
              {/* Image with zoom on hover */}
              <div className="absolute inset-0">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Elegant gradients: dark bottom overlay, subtle top glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/50 transition-all duration-700" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.5)_0%,transparent_70%)]" />
              </div>

              {/* Top metadata tags */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10 pointer-events-none">
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold">
                  {cat.tagline}
                </span>
                <span className="text-[10px] tracking-widest text-primary-foreground/50 uppercase border border-primary-foreground/20 px-2 py-0.5 backdrop-blur-sm">
                  Atelier
                </span>
              </div>

              {/* Bottom Main Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-primary-foreground flex flex-col justify-end transition-transform duration-700">
                <h3 className="font-serif text-3xl lg:text-4xl tracking-wider mb-2 group-hover:text-accent transition-colors duration-300">
                  {cat.title}
                </h3>
                
                {/* Expandable sub-categories and description */}
                <p className="text-xs md:text-sm text-primary-foreground/75 font-light leading-relaxed max-w-md opacity-90 group-hover:opacity-100 mb-4 transition-opacity duration-500">
                  {cat.description}
                </p>

                {/* Subcategories badge row */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-primary-foreground/15 mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.subcategories.map((sub, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] md:text-[10px] tracking-wider text-primary-foreground/90 bg-white/5 backdrop-blur-sm border border-white/10 px-2 py-0.5 hover:border-accent hover:text-accent transition-colors duration-300"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Frame outline showing on hover */}
              <div className="absolute inset-4 border border-accent/0 group-hover:border-accent/30 pointer-events-none transition-all duration-700 scale-98 group-hover:scale-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
