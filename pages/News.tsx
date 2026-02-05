
import React from 'react';
import { APP_CONTENT } from '../constants';
import { NewsItem } from '../types';

interface NewsProps {
  onNavigate: (page: any, data?: NewsItem) => void;
}

export const News: React.FC<NewsProps> = ({ onNavigate }) => {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-inic py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Sala de Imprensa</h1>
          <p className="text-xl text-gray-300">As últimas notícias, comunicados e eventos do INIC.</p>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {APP_CONTENT.news.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col group cursor-pointer"
              onClick={() => onNavigate('news-detail', item)}
            >
              <div className="relative h-64 overflow-hidden rounded-3xl mb-6 shadow-md">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-inic text-white px-4 py-1 rounded-full text-xs font-bold">
                  {new Date(item.date).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short' })}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold leading-tight group-hover:text-inic transition-colors">{item.title}</h3>
                <p className="text-gray-500 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
                <button className="flex items-center gap-2 text-inic font-bold group-hover:gap-4 transition-all">
                  Ler tudo <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-24 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-inic text-white flex items-center justify-center font-bold">1</button>
          <button className="w-10 h-10 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center font-bold">2</button>
          <button className="w-10 h-10 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center font-bold"><i className="fa-solid fa-chevron-right text-xs"></i></button>
        </div>
      </section>
    </div>
  );
};
