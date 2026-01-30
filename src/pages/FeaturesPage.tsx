import React from 'react';
import { FeaturesList } from '@/components/features/FeaturesList';
import { ComparisonTable } from '@/components/features/ComparisonTable';

export const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Características Revolucionarias
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Cada detalle diseñado para ofrecerte la experiencia de audio definitiva
          </p>
        </div>
      </section>

      <FeaturesList />
      <ComparisonTable />
    </div>
  );
};
