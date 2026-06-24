import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { AboutSection } from "@/components/about-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { NosotrosValues } from "@/components/nosotros-values"
import { getTimelineEvents } from "@/lib/supabase-services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuestra Historia | Sedería Becky",
  description:
    "Conocé la historia de Sedería Becky, 84 años de legado familiar de los Abad, tradición y confección de vestidos a medida en Once, Buenos Aires.",
}

export default async function NosotrosPage() {
  const timelineEvents = await getTimelineEvents()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero
        label="Legado & Trayectoria"
        title="Nuestra Historia"
        description="Una sedería familiar fundada en 1942 por José Abad, con pasión por los hilados nobles, la sastrería artesanal y la atención de alta costura."
      />
      <AboutSection timelineEvents={timelineEvents} />
      <NosotrosValues />
      <BookingForm />
      <Footer />
    </main>
  )
}
