import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { ContactSection } from "@/components/contact-section"
import { ContactMap } from "@/components/contact-map"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto & Showroom | Sedería Becky",
  description:
    "Visitanos en Azcuénaga 410, CABA. Lunes a Jueves 10–19 hs, Viernes 10–15:30 hs. Agendá tu cita exclusiva de alta costura.",
}

export default function ContactoPage() {
  return (
    <main>
      <Header />
      <PageHero
        label="Ubicación & Citas"
        title="Estamos para asesorarte"
        description="Vení a conocer nuestro showroom en el barrio de Once, escribinos por WhatsApp o seguinos en Instagram. Siempre hay alguien listo para guiarte."
      />
      <ContactSection />
      <ContactMap />
      <Footer />
    </main>
  )
}
