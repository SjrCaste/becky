import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FabricsSection } from "@/components/fabrics-section"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Telas de Alta Costura | Sedería Becky",
  description: "Selección premium de sedería importada de Italia, Francia y Suiza. Encajes, tules, satenes duchesse y telas bordadas por metro.",
}

export default function TelasCategoryPage() {
  return (
    <main>
      <Header />
      <div className="pt-28 md:pt-36 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Banner */}
          <div className="relative aspect-[16/6] w-full overflow-hidden border border-border/60 flex items-center justify-center group bg-foreground">
            <Image
              src="https://images.unsplash.com/photo-1584290860588-4f8150a6b107?auto=format&fit=crop&w=1600&q=90"
              alt="Línea Telas Sedería Becky"
              fill
              className="object-cover opacity-50 transition-transform duration-1000 group-hover:scale-102"
              priority
            />
            <div className="relative z-10 text-center px-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-semibold block mb-2">
                Hilados Finos &amp; Sedería
              </span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary-foreground tracking-widest uppercase">
                Telas de Alta Costura
              </h1>
              <div className="w-12 h-[1px] bg-accent mx-auto mt-4" />
            </div>
          </div>
        </div>
      </div>
      {/* Re-use interactive Fabrics Section with Zoom Magnifiers */}
      <FabricsSection />
      <Footer />
    </main>
  )
}
