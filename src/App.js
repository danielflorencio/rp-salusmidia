import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import IconsAndDescriptionSection from './components/IconsAndDescriptionSection/IconsAndDescriptionSection';
import StepByStepSection from './components/StepByStepSection/StepByStepSection';
import CtaSection from './components/CtaSection/CtaSection';
import FaqSection from './components/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';
import PortfolioFooter from './components/portfolioFooter/PortfolioFooter';
export default function App() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IconsAndDescriptionSection/>
      <StepByStepSection/>
      <CtaSection/>
      <FaqSection/>
      <Footer/>
      <PortfolioFooter/>
    </>
    );
}