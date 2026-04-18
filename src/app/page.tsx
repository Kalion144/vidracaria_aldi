import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import AboutSection from "@/components/About";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen b">
      <Header />
      <HeroCarousel />
      <ServicesSection />
      <DifferentialsSection />
      <AboutSection />
      <LocationMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
