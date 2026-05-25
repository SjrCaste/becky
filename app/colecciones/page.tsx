import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { DressCarousel } from "@/components/dress-carousel"
import { AppointmentBanner } from "@/components/appointment-banner"
import { CollectionCategories } from "@/components/collection-categories"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Colecciones | E & T Modas",
  description:
    "Descubrí nuestra colección de vestidos de 15, moda de fiesta y sedería premium en Paso 481, CABA.",
}

export default function ColeccionesPage() {
  return (
    <main>
      <Header />
      <PageHero
        label="Nuestras colecciones"
        title="Moda pensada para cada momento"
        description="Desde vestidos de quinceañera hasta piezas de alta gama para cualquier evento. Encontrá la tuya."
      />
      <CollectionCategories />
      <DressCarousel />
      <AppointmentBanner />
      <Footer />
    </main>
  )
}
