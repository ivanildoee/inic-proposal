
import React from 'react';
import { APP_CONTENT } from '../constants';

export const Projects: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-inic py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Projetos & Iniciativas</h1>
          <p className="text-xl text-gray-300">Acompanhe as ações que estão a mudar a face tecnológica de São Tomé e Príncipe.</p>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 space-y-16">
        {APP_CONTENT.projects.map((project, idx) => (
          <div key={project.id} className="relative">
            <div className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img src={project.image} alt={project.title} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${project.status === 'Em curso' ? 'bg-green-500 text-white' : 'bg-inic-accent text-inic'}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-inic font-bold text-sm">{project.date}</span>
                <h2 className="text-3xl font-bold leading-tight">{project.title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                {project.funder && (
                  <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase text-gray-400 mb-1">Financiador</h4>
                      <p className="text-inic font-bold">{project.funder}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase text-gray-400 mb-1">Valor Total</h4>
                      <p className="text-inic font-bold">{project.value}</p>
                    </div>
                    <div className="col-span-2">
                      <h4 className="text-[10px] font-bold uppercase text-gray-400 mb-1">Beneficiários</h4>
                      <p className="text-sm text-gray-600">{project.beneficiaries}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {idx < APP_CONTENT.projects.length - 1 && (
              <div className="hidden lg:block absolute bottom-[-4rem] left-1/2 -translate-x-1/2 h-16 w-px bg-gray-200"></div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};
