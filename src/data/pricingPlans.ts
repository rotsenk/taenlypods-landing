import { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Básico',
    price: '149',
    description: 'Perfecto para comenzar tu experiencia TaenlyPods',
    features: [
      'TaenlyPods Estándar',
      'Estuche de carga básico',
      'Cancelación de ruido activa',
      'Batería 24 horas',
      'Garantía 1 año',
      '3 pares de almohadillas',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '229',
    description: 'La opción favorita de nuestros usuarios',
    features: [
      'TaenlyPods Pro',
      'Estuche de carga inalámbrica',
      'Cancelación de ruido cuántica',
      'Batería 48 horas',
      'Garantía 2 años',
      '5 pares de almohadillas premium',
      'Audio espacial 360°',
      'Resistencia IPX7',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '349',
    description: 'La experiencia definitiva para audiófilos',
    features: [
      'TaenlyPods Premium Edition',
      'Estuche de carga solar + inalámbrica',
      'Cancelación de ruido adaptativa IA',
      'Batería 72 horas',
      'Garantía 3 años',
      '8 pares de almohadillas de memoria',
      'Audio espacial 360° HD',
      'Resistencia IPX8',
      'Personalización por app',
      'Soporte prioritario 24/7',
    ],
    popular: false,
  },
];
