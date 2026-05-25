import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { AboutSection } from "@/components/about-section"
import { AppointmentBanner } from "@/components/appointment-banner"
import { Footer } from "@/components/footer"
import { NosotrosValues } from "@/components/nosotros-values"
import { NosotrosTimeline } from "@/components/nosotros-timeline"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nosotros | E & T Modas",
  description:
    "Conoce la historia de E & T Modas, mas de 30 años vistiendo momentos especiales en el corazon de Buenos Aires.",
}

export default function NosotrosPage() {
  return (
    <main>
      <Header />
      <PageHero
        label="Quienes somos"
        title="Mas de 30 años de elegancia"
        description="Una boutique familiar fundada con pasion por la moda y el servicio personalizado, en el corazon de CABA."
      />
      <AboutSection />
      <NosotrosTimeline />
      <NosotrosValues />
      <AppointmentBanner />
      <Footer />
    </main>
  )
}
