import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/EventsSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import BrandSection from "@/components/BrandSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <main
      className={cn(
        "min-h-screen bg-background overflow-x-hidden transition-all duration-300 ease-in-out",
        isNavExpanded ? "lg:pl-72" : "lg:pl-20"
      )}
    >
      <Navigation isExpanded={isNavExpanded} onToggle={() => setIsNavExpanded(!isNavExpanded)} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection />
      <BrandSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
