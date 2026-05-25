import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { AboutSection } from "@/components/about-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { NosotrosValues } from "@/components/nosotros-values"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuestra Historia | Sedería Becky",
  description:
    "Conocé la historia de Sedería Becky, más de 45 años de legado, tradición y confección de vestidos a medida en Once, Buenos Aires.",
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero
        label="Legado & Trayectoria"
        title="Nuestra Historia"
        description="Una boutique familiar fundada en 1981 con pasión por los hilados nobles, la sastrería artesanal y la atención de alta costura."
      />
      <AboutSection />
      <NosotrosValues />
      <BookingForm />
      <Footer />
    </main>
  )
}
