
import React, { useState } from 'react';
import { APP_CONTENT } from '../constants';
import { ServiceDetail } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-inic py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 bg-inic-accent text-inic text-[10px] font-black uppercase tracking-[0.2em] rounded mb-6">Nosso Portfólio</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Soluções Digitais</h1>
          <p className="text-xl text-gray-300 font-medium">Infraestrutura robusta para modernizar a administração pública e o setor privado.</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {APP_CONTENT.serviceDetails.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col items-start"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-20 h-20 bg-inic/5 rounded-2xl flex items-center justify-center text-inic text-3xl mb-8 group-hover:bg-inic group-hover:text-white transition-all shadow-lg">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3 className="text-3xl font-black mb-6 group-hover:text-inic transition-colors">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-10 text-lg">
                {service.description}
              </p>
              <button className="bg-inic text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[11px] group-hover:bg-inic-light transition-all shadow-xl shadow-inic/20">
                Ver Planos e Preços
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Modal - Updated for Light/Transparent Look */}
      {selectedService && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-white/20 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="relative bg-white/70 backdrop-blur-2xl w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl border border-white/40 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all z-10 border border-white/20 shadow-sm"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 bg-inic/10 backdrop-blur-sm p-12 md:p-16 text-inic flex flex-col justify-center border-r border-white/20">
                <div className="w-20 h-20 bg-white/50 rounded-3xl flex items-center justify-center text-4xl mb-10 border border-white/30 shadow-sm">
                  <i className={`fa-solid ${selectedService.icon}`}></i>
                </div>
                <h2 className="text-4xl font-black mb-8 leading-tight">{selectedService.title}</h2>
                <p className="text-inic/70 text-base leading-relaxed mb-10">{selectedService.description}</p>
                <div className="pt-10 border-t border-inic/10">
                   <p className="text-[11px] font-black uppercase tracking-widest text-inic/40 mb-2">Unidade Monetária</p>
                   <p className="text-lg font-bold text-inic">Dobra de São Tomé (STN)</p>
                </div>
              </div>
              
              <div className="lg:col-span-8 p-12 md:p-16 bg-white/30">
                <h3 className="text-2xl font-black mb-12 flex items-center gap-4 text-gray-800">
                  <i className="fa-solid fa-layer-group text-inic"></i> Pacotes Disponíveis
                </h3>
                
                <div className="grid grid-cols-1 gap-8">
                  {selectedService.packages.map((pkg, idx) => (
                    <div key={idx} className="bg-white/40 backdrop-blur-md p-10 rounded-3xl hover:bg-white/60 border border-white/40 transition-all group relative overflow-hidden shadow-sm">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
                        <div>
                          <h4 className="text-xl font-black text-inic uppercase tracking-tight mb-2">{pkg.name}</h4>
                          <div className="text-4xl font-black text-gray-900">{pkg.price}</div>
                        </div>
                        <button className="w-full sm:w-auto bg-inic text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-transform shadow-xl shadow-inic/20">Aderir Agora</button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/40">
                        {pkg.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-3 text-sm text-gray-600 font-bold">
                            <i className="fa-solid fa-circle-check text-green-500 text-lg"></i> {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 flex gap-6 items-center shadow-sm">
                   <div className="w-12 h-12 bg-inic/10 rounded-2xl flex items-center justify-center text-inic">
                      <i className="fa-solid fa-circle-info text-2xl"></i>
                   </div>
                   <p className="text-sm text-inic font-semibold leading-relaxed">
                     Os preços apresentados são indicativos. Para necessidades customizadas ou projectos de larga escala, entre em contacto para uma análise técnica detalhada.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
