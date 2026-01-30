import React from 'react';
import { ChevronDownIcon } from '@/components/icons/Icons';

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  title, 
  content, 
  isOpen, 
  onToggle 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-lg text-gray-900 pr-4">
          {title}
        </span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDownIcon />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
};
