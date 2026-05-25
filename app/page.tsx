import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DressCarousel } from "@/components/dress-carousel"
import { AboutSection } from "@/components/about-section"
import { AppointmentBanner } from "@/components/appointment-banner"
import { HomeServices } from "@/components/home-services"
import { HomeTestimonials } from "@/components/home-testimonials"
import { HomeBrands } from "@/components/home-brands"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HomeServices />
      <section id="colecciones">
        <DressCarousel />
      </section>
      <AppointmentBanner />
      <AboutSection />
      <HomeTestimonials />
      <HomeBrands />
      <ContactSection />
      <Footer />
    </main>
  )
}
