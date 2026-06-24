"use client"

import { Banner } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PromotionalBanners({ banners }: { banners: Banner[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto slide
  useEffect(() => {
    if (!banners || banners.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [banners])

  if (!banners || banners.length === 0) return null;

  const current = banners[activeIndex]

  const BannerContent = () => (
    <div className="relative w-full h-32 md:h-48 lg:h-64 overflow-hidden group">
      <Image 
        src={current.image}
        alt={current.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
      {/* Opcional: Oscurecer un poco si tiene texto integrado */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )

  return (
    <section className="w-full bg-background border-b border-border/50 relative">
      {current.link_url ? (
        <Link href={current.link_url} className="block w-full">
          <BannerContent />
        </Link>
      ) : (
        <BannerContent />
      )}

      {/* Controles solo si hay más de 1 banner */}
      {banners.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.preventDefault(); setActiveIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-background/50 hover:bg-background border border-border flex items-center justify-center backdrop-blur-sm transition-colors z-10"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); setActiveIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1)); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-background/50 hover:bg-background border border-border flex items-center justify-center backdrop-blur-sm transition-colors z-10"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {banners.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === idx ? "w-6 bg-white" : "w-2 bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
