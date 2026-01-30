import React from 'react';
import { Button } from '@/components/ui/Button';
import { ChevronRightIcon } from '@/components/icons/Icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sumérgete en el Futuro del Audio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Tecnología de cancelación de ruido cuántica + Audio espacial 360° + Diseño ergonómico perfecto
            </p>
            <Link to={ROUTES.FEATURES}>
              <Button variant="secondary" size="lg" className="group">
                <span>Descubre Más</span>
                <ChevronRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="animate-fade-in-up flex justify-center" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center overflow-hidden">
                  {/* <HeadphonesIcon className="w-32 h-32" /> */}
                  <img
                    src="/headphones.jpg"
                    alt="Headphones"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
