interface PageHeroProps {
  label: string
  title: string
  description?: string
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-xs tracking-[0.4em] uppercase text-primary-foreground/60 mb-4 block">
          {label}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-balance">{title}</h1>
        {description && (
          <p className="mt-5 text-primary-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
