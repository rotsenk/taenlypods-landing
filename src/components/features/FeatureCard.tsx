import React from 'react';
import { Feature } from '@/types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      {/* Texto + Imagen pequeña */}
      <div
        className={`animate-fade-in-up ${isEven ? '' : 'md:order-2'}`}
        style={{ animationDelay: '0.1s', opacity: 0 }}
      >
        {/* Aquí antes estaba el emoji */}
        <img
          src={feature.image}
          alt={feature.title}
          className="w-24 h-24 object-cover rounded-full mb-4"
        />

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {feature.title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Imagen grande decorativa */}
      <div
        className={`animate-fade-in-up ${isEven ? '' : 'md:order-1'}`}
        style={{ animationDelay: '0.2s', opacity: 0 }}
      >
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 aspect-square flex items-center justify-center">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
