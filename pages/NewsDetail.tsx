
import React from 'react';
import { NewsItem } from '../types';

interface NewsDetailProps {
  news: NewsItem;
  onBack: () => void;
}

export const NewsDetail: React.FC<NewsDetailProps> = ({ news, onBack }) => {
  return (
    <div className="pb-24">
      <div className="bg-inic py-12">
        <div className="max-w-4xl mx-auto px-4">
          <button 
            onClick={onBack}
            className="text-white/70 hover:text-white flex items-center gap-2 mb-8 transition-colors font-bold text-sm"
          >
            <i className="fa-solid fa-arrow-left"></i> Voltar para Notícias
          </button>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <img src={news.image} alt={news.title} className="w-full h-[400px] object-cover" />
          <div className="p-8 md:p-16">
            <div className="flex items-center gap-4 text-sm text-gray-400 font-bold uppercase tracking-widest mb-6">
              <span>{new Date(news.date).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-inic">Inovação</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-gray-900">
              {news.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p className="text-xl font-medium text-gray-700 italic border-l-4 border-inic pl-6 mb-8">
                {news.summary}
              </p>
              
              {/* Simulando conteúdo completo com parágrafos fictícios baseados no tema */}
              <p>
                O anúncio oficial foi realizado esta manhã pelo Conselho de Administração do INIC, sublinhando que esta iniciativa faz parte de um plano mais abrangente de modernização do Estado. O projeto, que já estava em fase de testes piloto nos últimos meses, demonstrou uma redução significativa no tempo de espera para processos administrativos simples.
              </p>
              <p>
                "O nosso objetivo é aproximar o cidadão do Estado, eliminando barreiras físicas e burocráticas através do poder transformador das tecnologias digitais", afirmou a presidência durante a cerimónia de apresentação. Espera-se que, até ao final do ano, mais de 50 serviços públicos estejam integrados nesta nova infraestrutura centralizada.
              </p>
              <p>
                Além da facilidade de acesso, o novo sistema incorpora padrões de cibersegurança de última geração, garantindo que os dados pessoais dos utilizadores sejam protegidos de acordo com as diretivas nacionais e internacionais de privacidade. Este avanço coloca São Tomé e Príncipe na vanguarda tecnológica da região, servindo de exemplo para outros estados insulares em desenvolvimento.
              </p>
              <p>
                A equipa técnica do INIC continuará a monitorizar o desempenho da plataforma e a recolher feedback dos utilizadores para implementar melhorias contínuas. Workshops de capacitação para os funcionários públicos responsáveis pela gestão do sistema também estão agendados para as próximas semanas.
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-inic hover:text-white transition-all">
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-inic hover:text-white transition-all">
                  <i className="fa-brands fa-twitter"></i>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-inic hover:text-white transition-all">
                  <i className="fa-solid fa-link"></i>
                </button>
              </div>
              <button 
                onClick={onBack}
                className="bg-inic text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-inic/20 hover:bg-inic-light transition-all"
              >
                Ler mais notícias
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
