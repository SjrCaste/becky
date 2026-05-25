"use client"

import { Sparkles, Heart, Star, Users } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Calidad Premium",
    description: "Selección exclusiva de telas y diseños de alta costura",
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description: "Asesoramiento experto para encontrar tu vestido ideal",
  },
  {
    icon: Star,
    title: "+30 Años de Experiencia",
    description: "Trayectoria y confianza que respaldan cada elección",
  },
  {
    icon: Users,
    title: "Momentos Únicos",
    description: "Acompañamos miles de celebraciones inolvidables",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-4 mb-6 text-balance">
              Más de 30 años acompañando momentos únicos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En <strong className="text-foreground">E & T Modas</strong>, cada vestido cuenta una historia. 
              Desde nuestra boutique en Paso 481, CABA, hemos vestido a miles de quinceañeras, 
              novias e invitadas que buscan algo más que ropa: buscan sentirse especiales.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestra curaduría combina tradición y tendencia, ofreciendo piezas exclusivas 
              de sedería premium y moda de fiesta que no encontrarás en otro lugar. 
              Porque sabemos que los momentos importantes merecen estar acompañados de elegancia.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="font-serif text-4xl text-foreground">30+</span>
                <p className="text-sm text-muted-foreground">Años</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-serif text-4xl text-foreground">5K+</span>
                <p className="text-sm text-muted-foreground">Clientas felices</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-serif text-4xl text-foreground">100%</span>
                <p className="text-sm text-muted-foreground">Exclusividad</p>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-lg hover:border-foreground/20 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-foreground/70 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
