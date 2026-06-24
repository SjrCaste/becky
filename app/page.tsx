import { Header } from "@/components/header"
import { getTestimonials, getTimelineEvents } from "@/lib/supabase-services"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CollectionCategories } from "@/components/collection-categories"
import { GodparentsSection } from "@/components/godparents-section"
import { FabricsSection } from "@/components/fabrics-section"
import { BookingForm } from "@/components/booking-form"
import { HomeTestimonials } from "@/components/home-testimonials"
import { EditorialGallery } from "@/components/editorial-gallery"
import { Footer } from "@/components/footer"

export default async function Home() {
  const testimonials = await getTestimonials();
  const timelineEvents = await getTimelineEvents();

  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      {/* Navigation Header */}
      <Header />

      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Nuestra Historia Section */}
      <AboutSection timelineEvents={timelineEvents} />

      {/* 3. Categorías Principales */}
      <CollectionCategories />

      {/* 4. Padrinos y Madrinas */}
      <GodparentsSection />

      {/* 5. Telas Premium */}
      <FabricsSection />

      {/* 7. Experiencia Premium de Reserva */}
      <BookingForm />

      {/* 8. Testimonios */}
      <HomeTestimonials testimonials={testimonials} />

      {/* 9. Galería Editorial */}
      <EditorialGallery />

      {/* 10. Footer Premium */}
      <Footer />
    </main>
  )
}
