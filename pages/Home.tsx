
import React, { useState, useEffect } from 'react';
import { APP_CONTENT } from '../constants';
import { ServiceDetail } from '../types';
import { useApp } from '../App';

interface HomeProps {
  onNavigate: (page: any, data?: any) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const { t } = useApp();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % APP_CONTENT.slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const featuredNews = APP_CONTENT.news[0];
  const sidebarNews = APP_CONTENT.news.slice(1, 5);

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
              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Lado Esquerdo: Conteúdo de Texto */}
                <div className="max-w-3xl animate-in fade-in slide-in-from-left-12 duration-1000">
                  <span className="inline-block px-4 py-1.5 bg-inic-accent text-inic text-[10px] font-black uppercase tracking-[0.2em] rounded mb-6 shadow-xl">
                    {t('innovation')}
                  </span>
                  <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium">
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

                {/* Lado Direito: Subimagem (Opcional) */}
                {slide.subimage && (
                  <div className="hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-white/5 backdrop-blur-sm rounded-3xl -rotate-3 border border-white/10"></div>
                      <img 
                        src={slide.subimage} 
                        alt="Slide Feature" 
                        className="relative max-h-[450px] w-auto mx-auto rounded-2xl shadow-2xl brightness-110 grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                )}
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

      {/* 2ª Seção: Serviços */}
      <section className="py-32 bg-gray-50 dark:bg-inic-dark/50 relative overflow-hidden transition-colors">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-inic/5 dark:bg-white/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <span className="text-inic dark:text-inic-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Portfólio Digital</span>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white leading-tight">Serviços que Transformam</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {APP_CONTENT.serviceDetails.slice(0, 3).map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group bg-white dark:bg-inic-dark p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-inic/5 dark:bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-inic/5 dark:bg-white/10 rounded-2xl flex items-center justify-center text-inic dark:text-inic-accent text-2xl mb-10 group-hover:bg-inic dark:group-hover:bg-inic-accent group-hover:text-white dark:group-hover:text-inic transition-all duration-500 shadow-lg">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3 className="text-2xl font-black mb-6 group-hover:text-inic dark:group-hover:text-inic-accent transition-colors">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mb-10 line-clamp-3">{service.description}</p>
                <div className="flex items-center gap-3 text-inic dark:text-inic-accent font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                  Explorar Planos <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3ª Seção: Notícias */}
      <section className="py-32 bg-white dark:bg-inic-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-xl">
              <span className="text-inic dark:text-inic-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">{t('pressRoom')}</span>
              <h2 className="text-5xl font-black text-gray-900 dark:text-white leading-tight">Últimas do INIC</h2>
            </div>
            <button onClick={() => onNavigate('news')} className="bg-inic/5 dark:bg-white/5 text-inic dark:text-inic-accent px-10 py-4 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-inic hover:text-white dark:hover:bg-inic-accent dark:hover:text-inic transition-all">
              {t('allNews')}
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div 
                className="group cursor-pointer bg-white dark:bg-inic-dark rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5"
                onClick={() => onNavigate('news-detail', featuredNews)}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-8 right-8 bg-inic text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                    Destaque
                  </div>
                </div>
                <div className="p-12">
                  <span className="text-inic dark:text-inic-accent font-bold text-sm mb-4 block">
                    {new Date(featuredNews.date).toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' })}
                  </span>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 group-hover:text-inic dark:group-hover:text-inic-accent transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10">
                    {featuredNews.summary}
                  </p>
                  <div className="flex items-center gap-3 text-inic dark:text-inic-accent font-black text-xs uppercase tracking-widest">
                    {t('readMore')} <i className="fa-solid fa-arrow-right-long group-hover:translate-x-3 transition-transform"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              {sidebarNews.map((item) => (
                <div 
                  key={item.id}
                  className="group cursor-pointer flex gap-6 p-6 rounded-[2rem] bg-gray-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl border border-transparent hover:border-gray-100 dark:hover:border-white/10 transition-all duration-300"
                  onClick={() => onNavigate('news-detail', item)}
                >
                  <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-inner">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-inic/60 dark:text-white/40 font-bold text-[10px] uppercase mb-1">
                       {new Date(item.date).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short' })}
                    </span>
                    <h4 className="font-bold text-gray-900 dark:text-white leading-snug group-hover:text-inic dark:group-hover:text-inic-accent transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4ª Seção: Nossos Parceiros */}
      <section className="py-24 bg-gray-50 dark:bg-inic-dark/30 border-y border-gray-100 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <h4 className="text-center text-gray-400 font-black uppercase tracking-[0.4em] text-[9px] mb-16">{t('partnersTitle')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center text-center">
            {APP_CONTENT.partners.map(p => (
              <div key={p.id} className="flex flex-col items-center gap-4 group">
                <div className="w-full h-20 flex items-center justify-center grayscale opacity-50 dark:opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  <img src={p.logo} alt={p.name} className="max-h-full max-w-full object-contain dark:brightness-110" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5ª Seção: Nossa Localização */}
      <section className="py-32 bg-white dark:bg-inic-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border-8 border-gray-50 dark:border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.088365115286!2d6.725!3d0.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106f366050e185c1%3A0xe544976451e7a688!2sCidade%20de%20S%C3%A3o%20Tom%C3%A9%2C%20S%C3%A3o%20Tom%C3%A9%20e%20Pr%C3%ADncipe!5e0!3m2!1spt!2spt!4v1715000000000!5m2!1spt!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="dark:invert dark:hue-rotate-180 dark:opacity-80"
              ></iframe>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <span className="text-inic dark:text-inic-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Onde Estamos</span>
              <h2 className="text-5xl font-black text-gray-900 dark:text-white leading-tight">{t('visitSede')}</h2>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-inic dark:text-inic-accent text-xl shadow-sm shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-1">Endereço Físico</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Rua Salustino da Graça, Edifício do Gabinete do Primeiro Ministro, São Tomé</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-inic dark:text-inic-accent text-xl shadow-sm shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-1">Contacto Telefónico</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">(+239) 2242650</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-inic dark:bg-inic-accent dark:text-inic text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-inic-light transition-all shadow-xl shadow-inic/20"
              >
                {t('getDirections')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
