import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { FaqAccordion } from "@/components/faq-accordion"
import { AppointmentBanner } from "@/components/appointment-banner"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | E & T Modas",
  description:
    "Respuestas a las dudas mas comunes sobre vestidos de 15, talles, envios, cambios y mas en E & T Modas.",
}

export default function FaqPage() {
  return (
    <main>
      <Header />
      <PageHero
        label="Preguntas frecuentes"
        title="Resolvemos tus dudas"
        description="Encontra respuesta a las preguntas mas comunes. Si no encontras lo que buscas, escribinos por WhatsApp."
      />
      <FaqAccordion />
      <AppointmentBanner />
      <Footer />
    </main>
  )
}
