import Image from "next/image"
import { TimelineEvent } from "@/lib/data"
import { Sparkles, Scissors, Users2, Award } from "lucide-react"

export function AboutSection({ timelineEvents }: { timelineEvents: TimelineEvent[] }) {
  if (!timelineEvents || timelineEvents.length === 0) return null;

  return (
    <section id="historia" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Heading */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-semibold block mb-4">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wide leading-tight text-balance">
              84 Años de Tradición y <br className="hidden md:inline" /> Alta Costura Artesanal
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Desde 1942 acompañando bodas y fiestas en Buenos Aires. Un legado familiar de los Abad, forjado en la atención íntima, el respeto por las telas nobles y la excelencia de sastrería.
            </p>
          </div>
        </div>

        {/* History Intro and Stats */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden border border-border/80 group">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
              alt="Atelier Sedería Becky"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant thin frame */}
            <div className="absolute inset-4 border border-white/20 pointer-events-none" />
            <div className="absolute bottom-6 left-6 bg-foreground/90 backdrop-blur-md px-6 py-4 text-primary-foreground border-l-2 border-accent">
              <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">Fundada en</p>
              <p className="font-serif text-2xl tracking-wider">Buenos Aires, 1942</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-accent/40 pl-6 py-2">
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Confección hecha para durar en el recuerdo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cada costura es una promesa. Trabajamos en estrecha colaboración con novias y familias ceremoniales para materializar su visión, garantizando que cada detalle sea digno de alta costura europea.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <Scissors className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base text-foreground font-semibold">Taller Artesanal</h4>
                  <p className="text-xs text-muted-foreground mt-1">Confecciones hechas a mano y a medida por modistas expertas.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base text-foreground font-semibold">Telas Importadas</h4>
                  <p className="text-xs text-muted-foreground mt-1">Sedería premium importada desde Italia, Francia y Suiza.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Users2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base text-foreground font-semibold">Atención Íntima</h4>
                  <p className="text-xs text-muted-foreground mt-1">Salones privados para pruebas exclusivas con cita previa.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base text-foreground font-semibold">84 Años de Fe</h4>
                  <p className="text-xs text-muted-foreground mt-1">Larga trayectoria de confianza y compromiso familiar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Layout - Editorial Horizontal Grid */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
              Nuestra Trayectoria Editorial
            </span>
            <h3 className="font-serif text-2xl md:text-3xl mt-2 text-foreground">El Paso del Tiempo</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting golden line on desktop */}
            <div className="hidden lg:block absolute top-[110px] left-8 right-8 h-[1px] bg-gradient-to-r from-accent/10 via-accent/50 to-accent/10 pointer-events-none" />

            {timelineEvents.map((item, index) => (
              <div key={item.year} className="group flex flex-col items-center text-center">
                {/* Year Badge */}
                <div className="relative w-16 h-16 rounded-full bg-muted border border-border/80 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 z-10">
                  <span className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-500">
                    {item.year}
                  </span>
                </div>

                {/* Timeline Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden border border-border/80 mb-6 bg-muted group-hover:shadow-lg transition-shadow duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-accent/10 opacity-30 group-hover:opacity-0 transition-opacity duration-500" />
                </div>

                {/* Text Content */}
                <h4 className="font-serif text-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
