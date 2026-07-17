import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CombinedCalculator from "@/components/CombinedCalculator";
import HowItWorksSection from "@/components/HowItWorksSection";
import AdvisorSection from "@/components/AdvisorSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import ComparisonSection from "@/components/ComparisonSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CombinedCalculator />
      <HowItWorksSection />
      <AdvisorSection />
      <WhatYouGetSection />
      <ComparisonSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}
