import React from 'react';
import { Card } from '@/components/ui/Card';
import { benefits } from '@/data/benefits';
import { iconMap, IconName } from '@/components/icons/Icons';

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por Qué TaenlyPods?
          </h2>
          <p className="text-xl text-gray-600">
            Tecnología que transforma tu experiencia auditiva
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as IconName];
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-200 to-pink-100 p-8 border border-purple-100 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms`, opacity: 0 }}
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
