
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-inic py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Sobre o INIC</h1>
          <p className="text-xl text-gray-300">Conheça a história e os valores da instituição que lidera a transformação digital em São Tomé e Príncipe.</p>
        </div>
      </div>

      {/* History */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-inic font-bold uppercase text-sm tracking-widest">A Nossa História</span>
            <h2 className="text-4xl font-bold leading-tight">Um compromisso com a Sociedade da Informação</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                O <strong>Instituto de Inovação e Conhecimento – INIC</strong> foi criado em 2008 com o objetivo de promover a Sociedade da Informação e do Conhecimento em São Tomé e Príncipe, além de fomentar a Investigação Científica e Inovação Tecnológica.
              </p>
              <p>
                Desde sua criação, o INIC tem desempenhado um papel fundamental na modernização do setor público, buscando integrar novas tecnologias da informação para melhorar serviços em diversas áreas, como educação, saúde e administração pública.
              </p>
              <p>
                Buscamos mitigar a falta de uma política de coordenação centralizada de todo o processo de implementação de governação eletrónica, evitando a multiplicidade de infraestruturas e promovendo a eficiência na utilização dos recursos.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-inic/5 rounded-3xl -rotate-2" />
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              <img src="https://inic.gov.st/img/global/inic_logo.png" alt="Logo INIC Grande" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-inic text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg shadow-inic/20">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3 className="text-3xl font-bold mb-6">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Prover serviços para implantação de um estado menos dispendioso, mais produtivo e cooperativo, articulando em rede, que desenvolve processos de integração política e económica orientados para um maior pluralismo e envolvimento da sociedade civil.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-inic text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg shadow-inic/20">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="text-3xl font-bold mb-6">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Pretendemos ser uma organização do governo que proporcionará mudanças nas normas, crenças e práticas dos dirigentes e trabalhadores públicos, que serão estimulados a adotar novos métodos de trabalho mais colaborativos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Os pilares que sustentam a nossa cultura organizacional e orientam a nossa missão.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Comunidade', icon: 'fa-users', desc: 'Capacidade de imaginar novas estruturas e práticas que permitam fazer melhor o que hoje não é feito.' },
              { title: 'Conhecimento', icon: 'fa-lightbulb', desc: 'Acreditamos que o nosso maior recurso é o conhecimento, dedicando-nos à investigação constante.' },
              { title: 'Colaboração', icon: 'fa-handshake', desc: 'Trabalho cooperativo em equipa, independentemente da raça, cor ou religião de cada membro.' },
              { title: 'Partilha', icon: 'fa-share-nodes', desc: 'Disponibilidade total para partilhar conhecimentos, valores e recursos com toda a comunidade.' }
            ].map((v, i) => (
              <div key={i} className="text-center p-8 rounded-2xl border border-gray-100 hover:border-inic hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-full border-2 border-inic/10 flex items-center justify-center mx-auto mb-6 text-inic text-xl group-hover:bg-inic group-hover:text-white transition-all">
                  <i className={`fa-solid ${v.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">O Nosso Logotipo</h2>
          <div className="bg-white p-12 rounded-3xl shadow-sm mb-8 inline-block">
             <img src="https://inic.gov.st/img/global/logo_medio.png" alt="INIC Identity" className="h-32 w-auto mx-auto mb-8" />
             <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
                "A imagem do homem de braços abertos simboliza o ser humano como o centro do conhecimento e inovação, promovendo soluções tecnológicas para a sociedade."
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};
