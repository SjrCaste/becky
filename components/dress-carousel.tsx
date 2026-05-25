"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

const dresses = [
  {
    id: 1,
    src: "/images/vestido-15-1.jpg",
    title: "Sueño Rosa",
    description: "Vestido de tul con bordados en pedrería",
    likes: 248,
  },
  {
    id: 2,
    src: "/images/vestido-15-2.jpg",
    title: "Dorado Imperial",
    description: "Encaje francés con detalles en oro",
    likes: 312,
  },
  {
    id: 3,
    src: "/images/vestido-15-3.jpg",
    title: "Lavanda Encantada",
    description: "Corset con cristales y falda voluminosa",
    likes: 189,
  },
  {
    id: 4,
    src: "/images/vestido-15-4.jpg",
    title: "Blanco Celestial",
    description: "Bordado en plata con perlas naturales",
    likes: 276,
  },
  {
    id: 5,
    src: "/images/vestido-15-5.jpg",
    title: "Rosa Coral",
    description: "Aplicaciones florales 3D artesanales",
    likes: 203,
  },
]

export function DressCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  )
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [likedDresses, setLikedDresses] = useState<number[]>([])
  const [hoveredDress, setHoveredDress] = useState<number | null>(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const toggleLike = (id: number) => {
    setLikedDresses(prev => 
      prev.includes(id) 
        ? prev.filter(dressId => dressId !== id)
        : [...prev, id]
    )
  }

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Colección Quinceañeras
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-4 text-balance">
            Vestidos que hacen historia
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Cada vestido cuenta una historia única. Descubrí nuestra colección exclusiva de vestidos de 15 años.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {dresses.map((dress, index) => (
                <div
                  key={dress.id}
                  className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0 pl-4 first:pl-0"
                >
                  <div
                    className={cn(
                      "relative group cursor-pointer transition-all duration-500",
                      selectedIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-70"
                    )}
                    onMouseEnter={() => setHoveredDress(dress.id)}
                    onMouseLeave={() => setHoveredDress(null)}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <Image
                        src={dress.src}
                        alt={dress.title}
                        fill
                        className={cn(
                          "object-cover transition-transform duration-700",
                          hoveredDress === dress.id && "scale-110"
                        )}
                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
                      />
                      
                      {/* Overlay gradiente */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-300",
                        hoveredDress === dress.id ? "opacity-100" : "opacity-60"
                      )} />

                      {/* Contenido sobre la imagen */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                        <h3 className="font-serif text-xl md:text-2xl mb-1">{dress.title}</h3>
                        <p className="text-sm text-primary-foreground/80 mb-4">{dress.description}</p>
                        
                        {/* Botones de interacción */}
                        <div className={cn(
                          "flex items-center gap-4 transition-all duration-300",
                          hoveredDress === dress.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleLike(dress.id)
                            }}
                            className={cn(
                              "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                              likedDresses.includes(dress.id)
                                ? "bg-red-500 text-white"
                                : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                            )}
                          >
                            <Heart 
                              className={cn(
                                "w-4 h-4 transition-transform duration-300",
                                likedDresses.includes(dress.id) && "scale-125 fill-current"
                              )} 
                            />
                            <span className="text-sm">
                              {dress.likes + (likedDresses.includes(dress.id) ? 1 : 0)}
                            </span>
                          </button>
                          
                          <button
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                          >
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">Ver más</span>
                          </button>
                        </div>
                      </div>

                      {/* Badge de favorito */}
                      {likedDresses.includes(dress.id) && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-in fade-in zoom-in duration-300">
                          ♥ Favorito
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles de navegación */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors duration-300 shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors duration-300 shadow-lg"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicadores de navegación */}
        <div className="flex justify-center gap-2 mt-8">
          {dresses.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                selectedIndex === index 
                  ? "bg-foreground w-8" 
                  : "bg-foreground/30 hover:bg-foreground/50"
              )}
              aria-label={`Ir al vestido ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
