import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProducts } from "@/lib/supabase-services"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vestidos de 15 Años | Sedería Becky",
  description: "Diseños de vestidos de 15 años de ensueño. Corsets estructurados bordados a mano en cristales de Swarovski y faldas mágicas de tul glitter.",
}

export default async function QuinceanosCategoryPage() {
  const allProducts = await getProducts()
  const quince = allProducts.filter(p => p.category === "15-anos")

  return (
    <main>
      <Header />
      <div className="pt-28 md:pt-36 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Banner */}
          <div className="relative aspect-[16/6] w-full overflow-hidden border border-border/60 mb-12 flex items-center justify-center group bg-foreground">
            <Image
              src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1600&q=90"
              alt="Línea 15 Años Sedería Becky"
              fill
              className="object-cover opacity-50 transition-transform duration-1000 group-hover:scale-102"
              priority
            />
            <div className="relative z-10 text-center px-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-semibold block mb-2">
                Noche Soñada
              </span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary-foreground tracking-widest uppercase">
                Vestidos de 15 Años
              </h1>
              <div className="w-12 h-[1px] bg-accent mx-auto mt-4" />
            </div>
          </div>

          {/* Intro Text */}
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <p className="font-serif text-lg md:text-xl text-foreground">
              “La magia de tu debut en sociedad con brillo propio.”
            </p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
              Nuestros diseños de 15 años están pensados para que brilles con luz propia. Desde corsets joya estructurados y bordados artesanalmente en pedrería fina hasta imponentes faldas de tul francés, creamos el look de tus sueños con exclusividad absoluta.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quince.map((p) => (
              <Link 
                key={p.id} 
                href={`/catalogo/${p.id}`}
                className="flex flex-col bg-card border border-border/60 group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 text-[8px] tracking-widest text-primary-foreground font-medium bg-black/40 px-2 py-0.5 uppercase border border-white/10">
                    {p.subCategory}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-base md:text-lg text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                    {p.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 font-light leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="border-t border-border pt-3 mt-auto flex justify-between items-center text-[10px]">
                    <span className="text-muted-foreground">Exclusivo</span>
                    <span className="font-semibold text-foreground uppercase tracking-widest">{p.priceEstimate}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 border-t border-border pt-12">
            <Link 
              href="/catalogo"
              className="inline-flex px-8 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground text-xs tracking-widest uppercase transition-all duration-500 font-semibold"
            >
              Ver Todo el Catálogo
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
