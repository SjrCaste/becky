"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Product } from "@/lib/data"
import { MessageCircle, Calendar, ChevronLeft, ShieldCheck, Heart, Sparkles } from "lucide-react"

interface Props {
  product: Product;
  recommendations: Product[];
}

const STOCK_LABELS: Record<string, string> = {
  disponible: "Disponible",
  reservado: "Reservado",
  vendido: "Sin Stock",
}

const STOCK_COLORS: Record<string, string> = {
  disponible: "bg-emerald-600",
  reservado: "bg-amber-500",
  vendido: "bg-red-600",
}

export default function ProductDetailClient({ product, recommendations }: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [zoomStyle, setZoomStyle] = useState({ display: 'none', backgroundPosition: '0% 0%' })
  const [isLiked, setIsLiked] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`
    })
  }

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none', backgroundPosition: '0% 0%' })
  }

  // Pre-fill WhatsApp message
  const waText = `Hola Sedería Becky! Estoy interesada/o en recibir asesoramiento sobre el diseño "${product.name}" (ID: ${product.id}).`
  const waUrl = `https://wa.me/5491166317921?text=${encodeURIComponent(waText)}`

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Link */}
        <Link 
          href="/catalogo"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-accent mb-8 transition-colors duration-300"
        >
          <ChevronLeft className="w-4 h-4" />
          Volver al Catálogo
        </Link>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-border">
          
          {/* LEFT: Image Gallery (5 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Active image with zoom */}
            <div 
              className="relative aspect-[3/4] overflow-hidden border border-border/80 bg-muted cursor-zoom-in group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={product.images[activeImageIndex]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300"
                priority
              />

              {/* Magnifier container */}
              <div 
                className="absolute inset-0 bg-no-repeat pointer-events-none transition-opacity duration-300 z-10"
                style={{
                  ...zoomStyle,
                  backgroundImage: `url(${product.images[activeImageIndex]})`,
                  backgroundSize: '200%', // 2x Zoom scale
                }}
              />

              {/* Like / Wishlist Button */}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-border/55 flex items-center justify-center text-foreground hover:text-red-500 hover:scale-105 transition-all duration-300 z-20"
                aria-label="Añadir a favoritos"
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              </button>
            </div>

            {/* Thumbnails list */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-20 aspect-[3/4] overflow-hidden border transition-all duration-300 bg-muted ${
                      activeImageIndex === index ? "border-accent scale-102" : "border-border/60 hover:border-accent/40"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} miniatura ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Specs & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              {/* Category tags */}
              <span className="text-[10px] tracking-[0.25em] uppercase text-accent font-semibold block mb-2">
                Atelier · {product.category === '15-anos' ? '15 Años' : product.category.replace("-", " ")}
              </span>
              
              <h1 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide mb-3">
                {product.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted-foreground uppercase tracking-widest border border-border px-3 py-1 bg-muted/30">
                  {product.subCategory}
                </span>
                <span className={`inline-flex items-center gap-1.5 text-[10px] tracking-widest text-white font-semibold px-3 py-1 uppercase ${STOCK_COLORS[product.status || "disponible"]}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  {STOCK_LABELS[product.status || "disponible"]}
                </span>
              </div>
            </div>

            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              {product.description}
            </p>

            {/* Bullet list of details */}
            <div className="space-y-3 bg-muted/40 border border-border/50 p-6">
              <h4 className="text-[11px] tracking-widest uppercase font-semibold text-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                Características del Diseño
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 pt-2">
                {product.features.map((feat, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications (Colors & Sizes) */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-border">
              {/* Colors */}
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-muted-foreground">Tonalidades Sugeridas</span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="text-xs border border-border px-3 py-1.5 font-light bg-card text-foreground">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-muted-foreground">Tallas Disponibles</span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span key={size} className="text-xs border border-border px-3 py-1.5 font-light bg-card text-foreground">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: Whatsapp & Appointment */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow py-4 bg-accent text-foreground hover:bg-accent/90 text-xs tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-accent/25"
              >
                <MessageCircle className="w-4.5 h-4.5" />
                Consultar por WhatsApp
              </a>
              <Link
                href="/#reserva"
                className="flex-grow py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground text-xs tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4.5 h-4.5" />
                Reservar Cita en Local
              </Link>
            </div>

            {/* Trust disclaimer */}
            <div className="flex gap-3 items-center text-xs text-muted-foreground border-t border-border pt-6 font-light">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span>Garantía de Sedería Becky: 84 años de excelencia sastrera respaldan tu vestido.</span>
            </div>
          </div>
        </div>

        {/* Recomendados Relacionados */}
        <div className="pt-20 space-y-10">
          <div className="text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">Inspiraciones Adicionales</span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-2">Recomendados para vos</h2>
            <div className="w-8 h-[1px] bg-accent mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recommendations.map((rec) => (
              <Link
                key={rec.id}
                href={`/catalogo/${rec.id}`}
                className="flex flex-col border border-border/60 bg-card group hover:shadow-lg transition-all duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={rec.images[0]}
                    alt={rec.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[9px] tracking-widest text-accent uppercase font-bold mb-1">
                    {rec.category.replace("-", " ")}
                  </span>
                  <h4 className="font-serif text-base text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                    {rec.name}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-light">
                    {rec.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
