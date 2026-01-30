import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

export const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
    </div>
  );
};
