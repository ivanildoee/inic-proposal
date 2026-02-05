
import React, { useState } from 'react';
import { APP_CONTENT } from '../constants';

export const Documents: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Regulamentos' | 'Estratégia e Planos' | 'Pareceres'>('All');

  const filteredDocs = filter === 'All' 
    ? APP_CONTENT.documents 
    : APP_CONTENT.documents.filter(d => d.category === filter);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-inic py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Repositório de Documentos</h1>
          <p className="text-xl text-gray-300">Aceda à base legal e estratégica do Instituto.</p>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['All', 'Regulamentos', 'Estratégia e Planos', 'Pareceres'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                filter === cat ? 'bg-inic text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat === 'All' ? 'Todos os Documentos' : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-inic hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-inic/5 rounded-xl flex items-center justify-center">
                  <img src="https://inic.gov.st/img/global/7_PDF_Marquee_1.png" alt="PDF Icon" className="h-6 w-auto" />
                </div>
                <span className="text-[10px] font-bold text-inic/50 uppercase bg-inic/5 px-2 py-1 rounded">ID: {doc.id}</span>
              </div>
              <h3 className="text-lg font-bold mb-4 line-clamp-3 min-h-[4.5rem] group-hover:text-inic transition-colors">{doc.title}</h3>
              <p className="text-xs text-gray-400 mb-6 font-bold uppercase tracking-widest">{doc.category}</p>
              <a 
                href={`viewdoc.php?id=${doc.id}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-inic/5 text-inic py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-inic group-hover:text-white transition-all"
              >
                <i className="fa-solid fa-file-pdf"></i> Visualizar Documento
              </a>
            </div>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-24">
            <i className="fa-solid fa-folder-open text-gray-200 text-6xl mb-4"></i>
            <p className="text-gray-400">Nenhum documento encontrado nesta categoria.</p>
          </div>
        )}
      </section>
    </div>
  );
};
