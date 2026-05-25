const features = [
  "Envios a todo el pais",
  "Cambios y devoluciones",
  "Pago en cuotas sin interes",
  "Atencion personalizada",
  "Stock permanente",
  "30 anos de experiencia",
]

export function HomeBrands() {
  return (
    <section className="py-12 bg-muted border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {features.map((f) => (
            <span
              key={f}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground"
            >
              <span className="w-1 h-1 rounded-full bg-foreground/40 inline-block" aria-hidden="true" />
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
