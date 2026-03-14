import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <ServicesSection />
      <DifferentialsSection />
      <LocationMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
