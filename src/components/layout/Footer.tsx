import React from 'react';
import { Link } from 'react-router-dom';
import { HeadphonesIcon } from '@/components/icons/Icons';
import { COMPANY_INFO, ROUTES } from '@/constants';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Producto',
      links: [
        { name: 'Características', path: ROUTES.FEATURES },
        { name: 'Precios', path: ROUTES.PRICING },
        { name: 'Especificaciones', path: '#' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { name: 'Centro de Ayuda', path: '#' },
        { name: 'Contacto', path: '#' },
        { name: 'Garantía', path: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacidad', path: '#' },
        { name: 'Términos', path: '#' },
        { name: 'Cookies', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center text-purple-600">
                <HeadphonesIcon />
              </div>
              <span className="text-2xl font-bold">{COMPANY_INFO.NAME}</span>
            </div>
            <p className="text-purple-100">
              Revolucionando la experiencia de audio desde 2024
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2 text-purple-100">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-400 pt-8 text-center text-purple-100">
          <p>&copy; {COMPANY_INFO.YEAR} {COMPANY_INFO.NAME}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
