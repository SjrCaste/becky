"use client"

import Image from "next/image"
import Link from "next/link"

const members = [
  {
    role: "Madrinas",
    tag: "Sophisticated Elegance",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    description: "Vestidos sofisticados con sobre-sacos de encajes importados, seda salvaje y drapeados hechos para estilizar y deslumbrar con distinción.",
    link: "/catalogo?categoria=padrinos-y-madrinas&sub=madrinas"
  },
  {
    role: "Padrinos",
    tag: "Italian Tailoring",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Trajes de etiqueta impecables, trajes de tres piezas y chaqués a medida. Sastrería premium en lana fría y cortes modernos.",
    link: "/catalogo?categoria=padrinos-y-madrinas&sub=padrinos"
  },
  {
    role: "Cortejos y Familia",
    tag: "Ceremonial Coordination",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    description: "Vestidos infantiles y looks juveniles para el cortejo nupcial. Diseños coordinados con la estética general de la ceremonia.",
    link: "/catalogo?categoria=padrinos-y-madrinas&sub=cortejos"
  }
]

export function GodparentsSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-semibold block mb-4">
            Familia Ceremonial
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-wide text-balance">
            Padrinos, Madrinas & Cortejos
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm mt-4 tracking-widest font-light leading-relaxed uppercase">
            Acompañando a quienes guían el camino en las ceremonias más importantes.
          </p>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-6" />
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {members.map((member, index) => (
            <div 
              key={member.role}
              className="flex flex-col bg-card border border-border/60 hover:shadow-xl transition-all duration-500 group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.role}
                  fill
                  className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Tag Overlay */}
                <span className="absolute bottom-4 left-4 text-[9px] tracking-[0.25em] uppercase text-primary-foreground font-semibold bg-foreground/30 backdrop-blur-sm px-2 py-1 border border-white/10">
                  {member.tag}
                </span>
              </div>

              {/* Text Card */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {member.role}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light mb-6 flex-grow">
                  {member.description}
                </p>
                <Link
                  href={member.link}
                  className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground hover:text-accent border-b border-foreground/20 hover:border-accent pb-1 w-fit transition-all duration-300"
                >
                  Ver Diseños
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
