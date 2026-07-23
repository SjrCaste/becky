"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FABRICS } from "@/lib/data"
import { SearchCode, HelpCircle, Scissors } from "lucide-react"

export function FabricsSection() {
  const [activeFabric, setActiveFabric] = useState<string | null>(null)
  const [hoverCoord, setHoverCoord] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, fabricId: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setHoverCoord({ x, y })
    setActiveFabric(fabricId)
  }

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-semibold block mb-4">
            Texturas de Alta Costura
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-wide text-balance">
            Telas Importadas &amp; Sedería Premium
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm mt-4 tracking-widest font-light leading-relaxed max-w-xl mx-auto uppercase">
            Encajes de Chantilly, Satén Duchesse y detalles de pedrería fina traídos de los ateliers europeos más prestigiosos.
          </p>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-6" />
        </div>

        {/* Fabrics Interactive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FABRICS.map((fabric) => (
            <div 
              key={fabric.id}
              className="flex flex-col bg-card border border-border/60 hover:border-accent/40 hover:shadow-lg transition-all duration-500 group"
            >
              {/* Interactive Image zoom container */}
              <div 
                className="relative aspect-square overflow-hidden cursor-crosshair bg-muted select-none"
                onMouseMove={(e) => handleMouseMove(e, fabric.id)}
                onMouseLeave={() => setActiveFabric(null)}
              >
                {/* Standard image showing */}
                <Image
                  src={fabric.image}
                  alt={fabric.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                {/* Macro Magnifier Effect */}
                {activeFabric === fabric.id && (
                  <div 
                    className="absolute inset-0 bg-no-repeat pointer-events-none transition-opacity duration-300 z-10 border border-accent/40"
                    style={{
                      backgroundImage: `url(${fabric.image})`,
                      backgroundPosition: `${hoverCoord.x}% ${hoverCoord.y}%`,
                      backgroundSize: '250%', // 2.5x macro zoom
                    }}
                  />
                )}

                {/* Micro zoom interaction hint */}
                <div className="hidden md:flex absolute bottom-4 right-4 bg-foreground/75 backdrop-blur-sm text-primary-foreground text-[9px] tracking-wider uppercase px-2.5 py-1 z-20 items-center gap-1.5 pointer-events-none group-hover:bg-accent group-hover:text-foreground transition-all duration-300">
                  <SearchCode className="w-3.5 h-3.5" />
                  <span>Zoom Macro</span>
                </div>
              </div>

              {/* Fabric details card */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] tracking-[0.2em] text-accent uppercase font-semibold mb-1">
                  {fabric.type} · {fabric.origin}
                </span>
                
                <h3 className="font-serif text-lg text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {fabric.name}
                </h3>
                
                <p className="text-xs text-muted-foreground leading-relaxed font-light mb-6 flex-grow">
                  {fabric.description}
                </p>

                {/* Bullets */}
                <div className="border-t border-border pt-4 mt-auto">
                  <ul className="space-y-1.5">
                    {fabric.details.slice(0, 3).map((detail, index) => (
                      <li key={index} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom request CTA */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-sm text-muted-foreground font-light mb-6">
            ¿Buscás una tela específica o asesoramiento para confección a medida?
          </p>
          <a
            href="https://wa.me/5491100000000?text=Hola%20Seder%C3%ADa%20Becky%2C%20quisiera%20consultar%20por%20disponibilidad%20de%20telas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground text-xs tracking-[0.2em] uppercase transition-all duration-500"
          >
            <Scissors className="w-4 h-4" />
            Consultar con Sastre / Diseñadora
          </a>
        </div>
      </div>
    </section>
  )
}
