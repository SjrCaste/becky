"use client"

import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    slug: "novias",
    title: "Vestidos de Novia",
    tagline: "Bridal Couture",
    image: "/images/coleccion-real/novia-encaje-floral-1.jpg",
    subcategories: ["En Stock", "A Medida", "Diseño Personalizado"],
    description: "Diseños únicos para cada novia. Contamos con vestidos en stock y opciones personalizadas para crear el vestido que siempre soñaste."
  },
  {
    slug: "15-anos",
    title: "Vestidos de 15 Años",
    tagline: "Debutante Elegance",
    image: "/images/coleccion-real/esmeralda-dorado-1.jpg",
    subcategories: ["Asesoramiento Personalizado", "Confección a Medida", "Modelos Exclusivos"],
    description: "Modelos exclusivos para una noche inolvidable, con asesoramiento personalizado y confección a medida."
  },
  {
    slug: "fiesta",
    title: "Vestidos de Fiesta",
    tagline: "Gala & Eventos",
    image: "/images/coleccion-real/rosa-encaje-capas-1.jpg",
    subcategories: ["Graduaciones", "Eventos Sociales", "Galas"],
    description: "Opciones elegantes y modernas para graduaciones, eventos sociales, galas y celebraciones especiales."
  },
  {
    slug: "padrinos-y-madrinas",
    title: "Madrinas y Cortejos",
    tagline: "Cortejo & Damas de Honor",
    image: "/images/coleccion-real/madrina-marfil-sirena-1.jpg",
    subcategories: ["Madrinas", "Damas de Honor", "Cortejos"],
    description: "Diseños sofisticados para madrinas, damas de honor y cortejos, adaptados a cada estilo y evento."
  },
  {
    slug: "alta-costura-a-medida",
    title: "Alta Costura y Confección a Medida",
    tagline: "Atelier Personalizado",
    image: "/images/coleccion-real/verde-azulado-manga-larga-1.jpg",
    subcategories: ["Atención Personalizada", "Confección Exclusiva", "Terminaciones de Calidad"],
    description: "Prendas confeccionadas especialmente para cada clienta, con atención personalizada y terminaciones de calidad."
  },
  {
    slug: "vestidos-en-stock",
    title: "Vestidos en Stock",
    tagline: "Entrega Inmediata",
    image: "/images/coleccion-real/beige-encaje-par-1.jpg",
    subcategories: ["Disponibilidad Inmediata", "Pruebas en el Local", "Amplia Variedad"],
    description: "Amplia variedad de modelos disponibles para entrega inmediata y pruebas en el local."
  },
  {
    slug: "etiqueta-masculina",
    title: "Etiqueta Masculina",
    tagline: "Alquiler de Trajes",
    image: "/images/IMAGES2/detalle-costuras-novia.jpg",
    subcategories: ["Novios", "Padrinos", "Eventos Formales"],
    description: "Alquiler de trajes y prendas de etiqueta para novios, padrinos y eventos formales."
  },
  {
    slug: "telas-y-sederia",
    title: "Telas y Sedería",
    tagline: "Importadas de Lujo",
    image: "/images/IMAGES2/detalle-encaje-novia.jpg",
    subcategories: ["Encajes", "Tul y Satén", "Brillos y Piedras"],
    description: "Gran variedad de encajes, tul, satén, brillos, piedras y telas importadas disponibles para confección."
  },
  {
    slug: "accesorios",
    title: "Accesorios",
    tagline: "Complementos Selectos",
    image: "/images/IMAGES2/novia-azulado-piedras.jpg",
    subcategories: ["Tocados", "Joyería", "Complementos"],
    description: "Complementos seleccionados para completar cada look y acompañar cada ocasión especial."
  }
]

const FILTERABLE_SLUGS = ["novias", "15-anos", "fiesta", "padrinos-y-madrinas"]

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
          {categories.map((cat, index) => (
            <Link 
              key={cat.slug}
              href={FILTERABLE_SLUGS.includes(cat.slug) ? `/catalogo?categoria=${cat.slug}` : "/catalogo"}
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
                  priority={index < 2}
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
                <p className="text-xs md:text-sm text-primary-foreground/75 font-light leading-relaxed max-w-md opacity-100 md:opacity-90 md:group-hover:opacity-100 mb-4 transition-opacity duration-500">
                  {cat.description}
                </p>

                {/* Subcategories badge row */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-primary-foreground/15 mt-2 opacity-100 md:opacity-80 md:group-hover:opacity-100 transition-opacity duration-500">
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
