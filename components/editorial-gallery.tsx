"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn, Eye } from "lucide-react"

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  gridClass: string; // Tailored classes for asymmetry
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
    title: "Velo Chantilly & Boda Imperial",
    category: "Novias Couture",
    gridClass: "md:col-span-1 md:row-span-2 aspect-[3/4]"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    title: "Seda Salvaje & Bordado Richelieu",
    category: "Madrinas Royale",
    gridClass: "md:col-span-1 aspect-square"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    title: "Tul Celestial & Corset Swarovski",
    category: "15 Años Glamour",
    gridClass: "md:col-span-1 md:row-span-2 aspect-[3/4]"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80",
    title: "Detalle de Encaje de Autor",
    category: "Telas de Alta Costura",
    gridClass: "md:col-span-1 aspect-video"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518049368264-ee3cbd155f30?auto=format&fit=crop&w=800&q=80",
    title: "Pedrería en Organza Translúcida",
    category: "Couture Detalle",
    gridClass: "md:col-span-1 aspect-square"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    title: "Vestido Asimétrico en Crepe doble",
    category: "Gala & Fiesta",
    gridClass: "md:col-span-2 md:row-span-1 aspect-[16/9]"
  }
]

export function EditorialGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  return (
    <section className="py-24 md:py-32 bg-muted/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Block */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-semibold block mb-4">
            Editorial Vogue Style
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-wide">
            Galería Cinematográfica
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm mt-4 tracking-widest font-light leading-relaxed max-w-xl mx-auto uppercase">
            Instantes capturados que expresan el romance, la elegancia y la meticulosidad en cada puntada.
          </p>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-6" />
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`relative overflow-hidden group cursor-pointer border border-border/40 shadow-sm transition-all duration-700 hover:shadow-2xl ${item.gridClass}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Elegant overlay (Luxury filter) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 z-10" />

                {/* Top zoom indicator */}
                <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 z-20">
                  <ZoomIn className="w-5 h-5 text-accent" />
                </div>

                {/* Bottom Title info */}
                <div className="absolute bottom-6 left-6 right-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[10px] group-hover:translate-y-0 z-20">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-1 block">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg leading-snug tracking-wider">
                    {item.title}
                  </h4>
                </div>

                {/* Subtle border outline */}
                <div className="absolute inset-3 border border-white/0 group-hover:border-white/20 pointer-events-none transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-primary-foreground hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedItem(null)}
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content Box */}
          <div 
            className="relative max-w-4xl w-full h-[80vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()} // Prevent closing
          >
            {/* Fullscreen Image */}
            <div className="relative w-full h-full max-h-[70vh] border border-white/10 shadow-2xl">
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Subtext info */}
            <div className="text-center mt-6 text-primary-foreground max-w-lg px-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-1 block">
                {selectedItem.category}
              </span>
              <h3 className="font-serif text-xl tracking-wider">{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
