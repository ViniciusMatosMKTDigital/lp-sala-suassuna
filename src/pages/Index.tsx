import HeroSection from "@/components/landing/01HeroSection";
import PromoSection from "@/components/landing/02PromoSection";
import GalerySection from "@/components/landing/03GalerySection";
import StructureSection from "@/components/landing/04StructureSection";
import IdealForSection from "@/components/landing/05IdealForSection";
import ReviewsSection from "@/components/landing/06ReviewsSection";
import LocationSection from "@/components/landing/07LocationSection";
import FooterCTA from "@/components/landing/08FooterCTA";
import WhatsAppFloat from "@/components/landing/09WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter', sans-serif]">
      <HeroSection />
      <PromoSection />
      <GalerySection />
      <StructureSection />
      <IdealForSection />
      <ReviewsSection />
      <LocationSection />
      <FooterCTA />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;