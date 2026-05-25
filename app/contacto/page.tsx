import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { ContactSection } from "@/components/contact-section"
import { ContactMap } from "@/components/contact-map"
import { AppointmentBanner } from "@/components/appointment-banner"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | E & T Modas",
  description:
    "Visitanos en Paso 481, CABA. Lunes a Viernes 10–19 hs, Sabados 10–14 hs. Consultanos por WhatsApp.",
}

export default function ContactoPage() {
  return (
    <main>
      <Header />
      <PageHero
        label="Encontranos"
        title="Estamos para ayudarte"
        description="Veni a visitarnos, escribinos por WhatsApp o seguinos en Instagram. Siempre hay alguien listo para asesorarte."
      />
      <ContactSection />
      <ContactMap />
      <AppointmentBanner />
      <Footer />
    </main>
  )
}
