"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Product } from "@/lib/data"
import { getProducts } from "@/lib/supabase-services"
import { Search, SlidersHorizontal, Sliders, ChevronDown, Check, X } from "lucide-react"

const CATEGORY_LABELS: Record<string, string> = {
  all: "Todas las líneas",
  novias: "Novias",
  "15-anos": "15 Años",
  fiesta: "Fiesta",
  mitzvah: "Mitzvá",
  "padrinos-y-madrinas": "Padrinos y Madrinas"
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

// Client-side catalog component that reads SearchParams
function CatalogContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // States for search and filters
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedColor, setSelectedColor] = useState<string>("all")
  const [selectedSize, setSelectedSize] = useState<string>("all")
  const [selectedStyle, setSelectedStyle] = useState<string>("all")
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await getProducts()
      setProducts(data)
      setLoading(false)
    }
    load()
  }, [])

  // Sync category state with search query param on load
  useEffect(() => {
    const catParam = searchParams.get("categoria")
    if (catParam) {
      setSelectedCategory(catParam)
    }
  }, [searchParams])

  // Extract unique filter options from data dynamically
  const colors = Array.from(new Set(products.flatMap(p => p.colors)))
  const sizes = Array.from(new Set(products.flatMap(p => p.sizes)))
  const styles = Array.from(new Set(products.flatMap(p => p.styles)))

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesColor = selectedColor === "all" || product.colors.includes(selectedColor)
    const matchesSize = selectedSize === "all" || product.sizes.includes(selectedSize)
    const matchesStyle = selectedStyle === "all" || product.styles.includes(selectedStyle)

    return matchesSearch && matchesCategory && matchesColor && matchesSize && matchesStyle
  })

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedColor("all")
    setSelectedSize("all")
    setSelectedStyle("all")
    router.push("/catalogo")
  }

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-background relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-rose-300/10 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("/images/IMAGES2/detalle-encaje-novia.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Banner editorial */}
        <div className="border-b border-border/80 pb-10 mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-semibold block mb-2">
            Colección Completa Sedería Becky
          </span>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            Catálogo de Alta Costura
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm mt-3 font-light leading-relaxed max-w-xl">
            Explorá nuestra curaduría de vestidos de novia, quinceañeras, gala y prendas de etiqueta familiar. Filtrá y descubrí tu modelo soñado.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-10 items-start">
          
          {/* LEFT: Sidebar Filters (Desktop only) */}
          <aside className="hidden lg:block space-y-8 bg-card border border-border/60 p-8 shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="font-serif text-lg text-foreground font-semibold flex items-center gap-2">
                <Sliders className="w-4 h-4 text-accent" />
                Filtros Avanzados
              </span>
              <button 
                onClick={handleClearFilters}
                className="text-[10px] tracking-wider uppercase text-muted-foreground hover:text-accent font-medium transition-colors"
              >
                Limpiar todo
              </button>
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h4 className="text-[11px] tracking-widest uppercase font-semibold text-foreground/80">Categoría</h4>
              <div className="flex flex-col gap-2">
                {["all", "novias", "15-anos", "fiesta", "mitzvah", "padrinos-y-madrinas"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left text-xs py-1.5 px-3 transition-all duration-300 flex items-center justify-between border ${
                      selectedCategory === cat 
                        ? "border-accent text-accent bg-accent/5 font-medium" 
                        : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <span>{CATEGORY_LABELS[cat]}</span>
                    {selectedCategory === cat && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="space-y-3">
              <h4 className="text-[11px] tracking-widest uppercase font-semibold text-foreground/80">Color</h4>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full p-2.5 border border-border bg-background text-xs text-foreground focus:outline-none focus:border-accent cursor-pointer"
              >
                <option value="all">Cualquier Color</option>
                {colors.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Size Filter */}
            <div className="space-y-3">
              <h4 className="text-[11px] tracking-widest uppercase font-semibold text-foreground/80">Talle</h4>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2.5 border border-border bg-background text-xs text-foreground focus:outline-none focus:border-accent cursor-pointer"
              >
                <option value="all">Todos los Talles</option>
                {sizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Style Filter */}
            <div className="space-y-3">
              <h4 className="text-[11px] tracking-widest uppercase font-semibold text-foreground/80">Estilo</h4>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full p-2.5 border border-border bg-background text-xs text-foreground focus:outline-none focus:border-accent cursor-pointer"
              >
                <option value="all">Todos los Estilos</option>
                {styles.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </aside>

          {/* RIGHT: Search + Product List */}
          <section className="lg:col-span-3 space-y-8">
            
            {/* Search and Mobile filter trigger */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              {/* Search Bar */}
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Buscar vestido, tela, detalles..."
                  className="w-full pl-12 pr-4 py-3 border border-border focus:outline-none focus:border-accent bg-card text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground" />
              </div>

              {/* Mobile Filter Trigger */}
              <button
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden px-5 py-3 border border-border bg-card flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-medium hover:border-accent text-foreground transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-accent" />
                Filtros
              </button>
            </div>

            {/* Active filters pill list */}
            {(selectedCategory !== "all" || selectedColor !== "all" || selectedSize !== "all" || selectedStyle !== "all" || searchQuery !== "") && (
              <div className="flex flex-wrap gap-2 items-center text-xs">
                <span className="text-muted-foreground mr-1">Filtros activos:</span>
                {selectedCategory !== "all" && (
                  <span className="bg-accent/10 border border-accent/25 text-accent px-2 py-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                    Categoría: {CATEGORY_LABELS[selectedCategory]}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory("all")} />
                  </span>
                )}
                {selectedColor !== "all" && (
                  <span className="bg-accent/10 border border-accent/25 text-accent px-2 py-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                    Color: {selectedColor}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedColor("all")} />
                  </span>
                )}
                {selectedSize !== "all" && (
                  <span className="bg-accent/10 border border-accent/25 text-accent px-2 py-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                    Talle: {selectedSize}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedSize("all")} />
                  </span>
                )}
                {selectedStyle !== "all" && (
                  <span className="bg-accent/10 border border-accent/25 text-accent px-2 py-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                    Estilo: {selectedStyle}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedStyle("all")} />
                  </span>
                )}
                {searchQuery !== "" && (
                  <span className="bg-accent/10 border border-accent/25 text-accent px-2 py-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                    Búsqueda: {searchQuery}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                  </span>
                )}
              </div>
            )}

            {/* Product Grid */}
            {loading ? (
              <div className="text-center py-20 bg-card border border-border/60">
                <p className="font-serif text-lg text-muted-foreground">Cargando catálogo...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-card border border-border/60">
                <p className="font-serif text-lg text-muted-foreground">No encontramos vestidos que coincidan con los filtros seleccionados.</p>
                <button 
                  onClick={handleClearFilters}
                  className="mt-6 px-6 py-3 bg-accent text-foreground text-xs tracking-widest uppercase font-semibold hover:bg-accent/90 transition-all duration-300"
                >
                  Ver todos los modelos
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((p) => (
                  <Link 
                    key={p.id} 
                    href={`/catalogo/${p.id}`}
                    className="flex flex-col bg-card border border-border/60 group hover:shadow-xl transition-all duration-500"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      
                      {/* Premium labels overlay */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                        {p.isFeatured && (
                          <span className="text-[8px] tracking-widest text-foreground font-semibold bg-accent px-2 py-0.5 uppercase border border-accent shadow-sm animate-pulse">
                            Destacado
                          </span>
                        )}
                        <span className="text-[8px] tracking-widest text-primary-foreground font-medium bg-black/40 px-2 py-0.5 uppercase border border-white/10 backdrop-blur-sm">
                          {p.subCategory}
                        </span>
                      </div>

                      {/* Stock status badge */}
                      <div className="absolute top-4 right-4 z-10 pointer-events-none">
                        <span className={`flex items-center gap-1.5 text-[8px] tracking-widest text-white font-semibold px-2 py-1 uppercase shadow-sm ${STOCK_COLORS[p.status || "disponible"]}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                          {STOCK_LABELS[p.status || "disponible"]}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Card */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-[9px] tracking-[0.2em] text-accent uppercase font-bold mb-1">
                        {CATEGORY_LABELS[p.category]}
                      </span>
                      <h3 className="font-serif text-base md:text-lg text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                        {p.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed font-light line-clamp-2 mb-4 flex-grow">
                        {p.description}
                      </p>
                      
                      {/* Technical specifications (Talles, Colors) */}
                      <div className="border-t border-border pt-3 mt-auto flex justify-between items-center">
                        <span className="text-[10px] text-muted-foreground uppercase font-light">
                          {p.sizes.includes('A medida') ? 'Confección a medida' : `Talles: ${p.sizes.slice(0, 2).join(", ")}`}
                        </span>
                        <span className="text-[10px] font-semibold text-foreground tracking-widest uppercase">
                          {p.priceEstimate}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* MOBILE FILTER MODAL/DRAWER */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] bg-foreground/50 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="bg-card w-full max-w-xs h-full p-6 overflow-y-auto flex flex-col justify-between border-l border-border animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="font-serif text-lg text-foreground font-semibold flex items-center gap-2">
                  Filtros
                </span>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="p-1 text-muted-foreground hover:text-foreground"
                  aria-label="Cerrar filtros"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <h4 className="text-[10px] tracking-widest uppercase font-semibold text-muted-foreground">Categoría</h4>
                <div className="flex flex-col gap-1.5">
                  {["all", "novias", "15-anos", "fiesta", "mitzvah", "padrinos-y-madrinas"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat)
                        setShowMobileFilters(false)
                      }}
                      className={`text-left text-xs py-1.5 px-3 border ${
                        selectedCategory === cat 
                          ? "border-accent text-accent bg-accent/5" 
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span>{CATEGORY_LABELS[cat]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div className="space-y-2">
                <h4 className="text-[10px] tracking-widest uppercase font-semibold text-muted-foreground">Color</h4>
                <select
                  value={selectedColor}
                  onChange={(e) => {
                    setSelectedColor(e.target.value)
                    setShowMobileFilters(false)
                  }}
                  className="w-full p-2.5 border border-border bg-background text-xs text-foreground focus:outline-none"
                >
                  <option value="all">Cualquier Color</option>
                  {colors.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Size */}
              <div className="space-y-2">
                <h4 className="text-[10px] tracking-widest uppercase font-semibold text-muted-foreground">Talle</h4>
                <select
                  value={selectedSize}
                  onChange={(e) => {
                    setSelectedSize(e.target.value)
                    setShowMobileFilters(false)
                  }}
                  className="w-full p-2.5 border border-border bg-background text-xs text-foreground focus:outline-none"
                >
                  <option value="all">Todos los Talles</option>
                  {sizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={() => {
                handleClearFilters()
                setShowMobileFilters(false)
              }}
              className="w-full py-3 bg-muted text-foreground text-xs tracking-widest uppercase font-semibold border border-border hover:bg-background transition-colors mt-8"
            >
              Limpiar filtros
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function CatalogPage() {
  return (
    <main>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <CatalogContent />
      </Suspense>
      <Footer />
    </main>
  )
}
