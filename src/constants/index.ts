export const ROUTES = {
  HOME: '/',
  FEATURES: '/features',
  PRICING: '/pricing',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Inicio', path: ROUTES.HOME },
  { name: 'Características', path: ROUTES.FEATURES },
  { name: 'Precios', path: ROUTES.PRICING },
] as const;

export const COLORS = {
  PRIMARY: 'from-purple-600 to-pink-600',
  SECONDARY: 'from-purple-50 to-pink-50',
  GRADIENT_TEXT: 'from-purple-600 to-pink-600',
} as const;

export const ANIMATION_DELAYS = {
  DELAY_100: 'delay-100',
  DELAY_200: 'delay-200',
  DELAY_300: 'delay-300',
  DELAY_400: 'delay-400',
} as const;

export const COMPANY_INFO = {
  NAME: 'TaenlyPods',
  TAGLINE: 'Auriculares del Futuro',
  YEAR: '2025',
  EMAIL: 'contact@TaenlyPods.com',
} as const;
