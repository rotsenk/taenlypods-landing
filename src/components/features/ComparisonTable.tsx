import React from 'react';
import { CheckIcon } from '@/components/icons/Icons';
import { comparisonData } from '@/data/comparison';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TaenlyPods vs Competencia
          </h2>
          <p className="text-xl text-gray-600">
            La comparación habla por sí sola
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Característica</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold">TaenlyPods</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold">Otros Auriculares</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((item, index) => (
                  <tr key={index} className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {item.nebula === true ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <CheckIcon className="text-green-600" />
                        </div>
                      ) : (
                        <span className="font-semibold text-purple-600">{item.nebula}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.competitors === true ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <CheckIcon className="text-green-600" />
                        </div>
                      ) : item.competitors === false ? (
                        <span className="text-red-500 font-semibold">✗</span>
                      ) : (
                        <span className="text-gray-600">{item.competitors}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
