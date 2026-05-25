import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { FaqAccordion } from "@/components/faq-accordion"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Sedería Becky",
  description:
    "Respuestas a las dudas más comunes sobre vestidos de novia, 15 años, Bat Mitzvá, talles y telas importadas en Sedería Becky.",
}

export default function FaqPage() {
  return (
    <main>
      <Header />
      <PageHero
        label="Dudas Comunes"
        title="Resolvemos tus preguntas"
        description="Encontrá respuestas sobre confecciones a medida, pruebas de vestidos, telas por metro e importaciones."
      />
      <FaqAccordion />
      <Footer />
    </main>
  )
}
