# TaenlyPods Landing Page

Una landing page profesional para auriculares futuristas, construida con React, TypeScript y Tailwind CSS.

## Características

- **Arquitectura Modular**: Componentes separados por dominio y responsabilidad
- **TypeScript**: Tipado estricto para mayor seguridad y mantenibilidad
- **Responsive Design**: Funciona perfectamente en móvil, tablet y desktop
- **Animaciones Fluidas**: Transiciones y efectos visuales profesionales
- **Routing**: Navegación SPA con React Router
- **Custom Hooks**: Lógica reutilizable extraída en hooks personalizados
- **Separación de Datos**: Datos separados de la presentación para fácil mantenimiento

## Inicio Rápido

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repo-url>

# Navegar al directorio
cd TaenlyPods-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:5173
```

## Estructura del Proyecto

```
src/
  components/
    layout/           # Navbar, Footer, Layout wrapper
    home/             # Componentes específicos de Home
    features/         # Componentes específicos de Features
    pricing/          # Componentes específicos de Pricing
    ui/               # Componentes reutilizables (Button, Card, etc.)
    icons/            # Componentes de íconos SVG
  pages/              # Páginas principales (HomePage, FeaturesPage, etc.)
  hooks/              # Custom hooks (useScrollPosition, useToggle)
  data/               # Datos estáticos separados
  types/              # Definiciones TypeScript
  constants/          # Constantes de la aplicación
  styles/             # Estilos globales
  App.tsx             # Router principal
  main.tsx            # Entry point
```

## Componentes Principales

### Layout
- **Navbar**: Navegación responsive con menú móvil
- **Footer**: Footer con links y información de la empresa
- **Layout**: Wrapper que combina Navbar + contenido + Footer

### UI Components
- **Button**: Botón con variants (primary, secondary, outline)
- **Card**: Tarjeta con hover effects opcionales
- **Badge**: Badge para destacar información
- **Accordion**: Acordeón interactivo para FAQ

### Custom Hooks
- **useScrollPosition**: Detecta la posición del scroll
- **useToggle**: Maneja estados booleanos de manera simple

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## Tecnologías Utilizadas

- **React 18**: Librería UI
- **TypeScript**: Tipado estático
- **Vite**: Build tool y dev server
- **Tailwind CSS**: Framework CSS utility-first
- **React Router**: Routing para SPA
- **ESLint**: Linting de código

## Características de Calidad

### Separación de Concerns
- Componentes de presentación puros
- Datos separados en archivos `data/`
- Lógica extraída en custom hooks
- Tipos TypeScript centralizados

### Performance
- Componentes optimizados
- Lazy loading preparado
- Animaciones con CSS
- Bundle size optimizado

### Mantenibilidad
- Estructura de carpetas clara
- Componentes pequeños y enfocados
- Constantes centralizadas
- Tipos TypeScript reutilizables

### Accesibilidad
- HTML semántico
- ARIA labels donde es necesario
- Navegación por teclado
- Contraste de colores apropiado

## Licencia

Este proyecto es un portfolio/demo. Siéntete libre de usarlo como referencia.

## Autor

Proyecto creado como demostración de habilidades frontend profesionales

---
