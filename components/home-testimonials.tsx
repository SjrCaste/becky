const testimonials = [
  {
    name: "Valentina M.",
    event: "Quinceañera 2024",
    quote:
      "Encontre el vestido de mis suenos en E&T Modas. La atencion fue increible, me asesoraron en todo y el resultado fue magico. Todas mis amigas me preguntaron donde lo compre.",
  },
  {
    name: "Marcela G.",
    event: "Casamiento 2023",
    quote:
      "Llevo anos comprando en la boutique. La calidad de sus telas y el trato personalizado no tienen comparacion en el barrio. Es mi primer lugar cuando tengo un evento importante.",
  },
  {
    name: "Florencia R.",
    event: "Egresada 2024",
    quote:
      "Me sorprendio la variedad y la elegancia de los modelos. La asesora entendio exactamente lo que buscaba y me ayudo a elegir algo que me hizo sentir segura y hermosa.",
  },
]

export function HomeTestimonials() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
            Lo que dicen nuestras clientas
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-4 text-balance">
            Testimonios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="p-8 bg-background border border-border flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-foreground/70"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer>
                <span className="font-serif text-foreground block">{t.name}</span>
                <span className="text-xs tracking-wider text-muted-foreground uppercase">
                  {t.event}
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
