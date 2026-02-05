
import React, { useState, useEffect } from 'react';
import { APP_CONTENT } from '../constants';
import { ServiceDetail } from '../types';

interface HomeProps {
  onNavigate: (page: any, data?: any) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % APP_CONTENT.slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const featuredNews = APP_CONTENT.news[0];
  const sidebarNews = APP_CONTENT.news.slice(1, 5); // Alterado de 6 para 5 para mostrar exatamente 4 notícias

  return (
    <div className="w-full">
      {/* 1ª Seção: Slide de Apresentação */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {APP_CONTENT.slides.map((slide, idx) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-inic-dark/90 via-inic/30 to-transparent z-20" />
            <img 
              src={slide.image} 
              alt={slide.title} 
              className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${idx === activeSlide ? 'scale-110' : 'scale-100'}`} 
            />
            <div className="absolute inset-0 z-30 flex items-center px-4 md:px-24">
              <div className="max-w-3xl animate-in fade-in slide-in-from-left-12 duration-1000">
                <span className="inline-block px-4 py-1.5 bg-inic-accent text-inic text-[10px] font-black uppercase tracking-[0.2em] rounded mb-6 shadow-xl">
                  Inovação & Conhecimento
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-xl text-white/80 mb-10 leading-relaxed font-medium">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <button 
                    onClick={() => onNavigate('about')}
                    className="bg-inic text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-inic-light transition-all shadow-2xl hover:-translate-y-1"
                  >
                    Nossa Missão
                  </button>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-white/20 transition-all hover:-translate-y-1"
                  >
                    Falar com Especialista
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4">
          {APP_CONTENT.slides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1 rounded-full transition-all duration-500 bg-white/30 hover:bg-white/60 ${idx === activeSlide ? 'w-16 bg-inic-accent' : 'w-4'}`}
            />
          ))}
        </div>
      </section>

      {/* 2ª Seção: Serviços (Top 3 Principais) */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-inic/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <span className="text-inic font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Portfólio Digital</span>
            <h2 className="text-5xl font-black text-gray-900 leading-tight">Serviços que Transformam</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {APP_CONTENT.serviceDetails.slice(0, 3).map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-inic/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-inic/5 rounded-2xl flex items-center justify-center text-inic text-2xl mb-10 group-hover:bg-inic group-hover:text-white transition-all duration-500 shadow-lg">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3 className="text-2xl font-black mb-6 group-hover:text-inic transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-10 line-clamp-3">{service.description}</p>
                <div className="flex items-center gap-3 text-inic font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                  Explorar Planos <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal Popup */}
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

      {/* 3ª Seção: Notícias (Destaque + Lista Lateral) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-xl">
              <span className="text-inic font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Sala de Imprensa</span>
              <h2 className="text-5xl font-black text-gray-900 leading-tight">Últimas do INIC</h2>
            </div>
            <button onClick={() => onNavigate('news')} className="bg-inic/5 text-inic px-10 py-4 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-inic hover:text-white transition-all">
              Ver Todas as Notícias
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Coluna 1: Notícia Destaque */}
            <div className="lg:col-span-7">
              <div 
                className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                onClick={() => onNavigate('news-detail', featuredNews)}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-8 right-8 bg-inic text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                    Destaque
                  </div>
                </div>
                <div className="p-12">
                  <span className="text-inic font-bold text-sm mb-4 block">
                    {new Date(featuredNews.date).toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' })}
                  </span>
                  <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-inic transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-10">
                    {featuredNews.summary}
                  </p>
                  <div className="flex items-center gap-3 text-inic font-black text-xs uppercase tracking-widest">
                    Ler Artigo Completo <i className="fa-solid fa-arrow-right-long group-hover:translate-x-3 transition-transform"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 2: Lista de Notícias (Agora com 4 itens) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {sidebarNews.map((item) => (
                <div 
                  key={item.id}
                  className="group cursor-pointer flex gap-6 p-6 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300"
                  onClick={() => onNavigate('news-detail', item)}
                >
                  <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-inner">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-inic/60 font-bold text-[10px] uppercase mb-1">
                       {new Date(item.date).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short' })}
                    </span>
                    <h4 className="font-bold text-gray-900 leading-snug group-hover:text-inic transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="mt-4 p-8 rounded-[2rem] bg-inic-accent/10 border border-inic-accent/20">
                <h5 className="font-black text-inic text-sm mb-2">Newsletter Institucional</h5>
                <p className="text-inic/70 text-xs mb-4">Receba as atualizações do governo digital diretamente no seu email.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="Seu email" className="bg-white px-4 py-2 rounded-xl text-xs w-full outline-none focus:ring-1 focus:ring-inic" />
                  <button className="bg-inic text-white p-2 rounded-xl"><i className="fa-solid fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4ª Seção: Nossos Parceiros */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h4 className="text-center text-gray-400 font-black uppercase tracking-[0.4em] text-[9px] mb-16">Instituições e Organizações Parceiras</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center text-center">
            {APP_CONTENT.partners.map(p => (
              <div key={p.id} className="flex flex-col items-center gap-4 group">
                <div className="w-full h-20 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  <img src={p.logo} alt={p.name} className="max-h-full max-w-full object-contain" />
                </div>
                <span className="text-[10px] font-bold text-gray-500 max-w-[150px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5ª Seção: Nossa Localização */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border-8 border-gray-50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.088365115286!2d6.725!3d0.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106f366050e185c1%3A0xe544976451e7a688!2sCidade%20de%20S%C3%A3o%20Tom%C3%A9%2C%20S%C3%A3o%20Tom%C3%A9%20e%20Pr%C3%ADncipe!5e0!3m2!1spt!2spt!4v1715000000000!5m2!1spt!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <span className="text-inic font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Onde Estamos</span>
              <h2 className="text-5xl font-black text-gray-900 leading-tight">Visite a nossa Sede</h2>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-inic text-xl shadow-sm shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-1">Endereço Físico</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Rua Salustino da Graça, Edifício do Gabinete do Primeiro Ministro, São Tomé</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-inic text-xl shadow-sm shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-1">Contacto Telefónico</h4>
                  <p className="text-gray-500 text-sm">(+239) 2242650</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-inic text-xl shadow-sm shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-1">Email Geral</h4>
                  <p className="text-gray-500 text-sm">suporte@inic.gov.st</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-inic text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-inic-light transition-all shadow-xl shadow-inic/20"
              >
                Obter Direções
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
