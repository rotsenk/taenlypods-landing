import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CheckIcon } from '@/components/icons/Icons';
import { PricingPlan } from '@/types';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  return (
    <Card
      className={`p-8 relative animate-fade-in-up ${
        plan.popular ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl scale-105' : 'border-2 border-gray-200'
      }`}
      style={{ animationDelay: `${(index + 1) * 100}ms`, opacity: 0 }}
      hover={!plan.popular}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge variant="primary">MÁS POPULAR</Badge>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
          {plan.name}
        </h3>
        <p className={`text-sm mb-4 ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
          {plan.description}
        </p>
        <div className="mb-4">
          <span className="text-5xl font-bold">${plan.price}</span>
          <span className={`text-lg ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}> USD</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <div className={`mr-3 mt-1 ${plan.popular ? 'text-yellow-300' : 'text-purple-600'}`}>
              <CheckIcon />
            </div>
            <span className={plan.popular ? 'text-purple-50' : 'text-gray-700'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Button
        variant={plan.popular ? 'secondary' : 'primary'}
        size="lg"
        className="w-full"
      >
        Comprar {plan.name}
      </Button>
    </Card>
  );
};
