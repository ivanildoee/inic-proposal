
import React, { useState } from 'react';
import { APP_CONTENT } from '../constants';

export const Structure: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('Actual');

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-inic py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Estrutura Organizacional</h1>
          <p className="text-xl text-gray-300">Entenda como o INIC está organizado e conheça os seus órgãos sociais.</p>
        </div>
      </div>

      {/* Organigram */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Organigrama</h2>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <img src="https://inic.gov.st/img/estrutura/organigrama.png" alt="INIC Organigrama" className="max-w-full h-auto mx-auto" />
        </div>
      </section>

      {/* Board Administration */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Conselho de Administração</h2>
            <div className="flex flex-col items-center gap-4">
              <label htmlFor="year-select" className="text-gray-500 font-bold uppercase tracking-widest text-xs">Consultar Histórico</label>
              <select 
                id="year-select" 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-white border-2 border-inic/10 rounded-xl px-6 py-3 text-inic font-bold focus:border-inic outline-none cursor-pointer transition-all shadow-sm"
              >
                {Object.keys(APP_CONTENT.boards).map(year => (
                  <option key={year} value={year}>{year === 'Actual' ? 'Conselho Atual' : year}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APP_CONTENT.boards[selectedYear].map((member) => (
              <div key={member.id} className="bg-white rounded-3xl overflow-hidden shadow-md group border border-gray-100">
                <div className="h-64 bg-inic/5 flex items-center justify-center relative overflow-hidden">
                  <i className="fa-solid fa-user-tie text-inic/10 text-9xl"></i>
                  <div className="absolute inset-0 bg-inic/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                     <p className="text-white text-center font-bold">{member.role}</p>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-inic transition-colors">{member.name}</h3>
                  <p className="text-inic/60 text-xs font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
