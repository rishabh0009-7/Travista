import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/service-section"
import DestinationsSection from "@/components/destination-section"
import TestimonialsSection from "@/components/testimonial-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <DestinationsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
