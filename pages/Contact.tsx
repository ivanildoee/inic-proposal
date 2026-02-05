
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="pb-24">
       {/* Header */}
       <div className="bg-inic py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Fale Connosco</h1>
          <p className="text-xl text-gray-300">Estamos aqui para apoiar a sua jornada digital. Entre em contacto pelos nossos canais oficiais.</p>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Info & Form */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Informações de Contacto</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-inic/5 rounded-xl flex items-center justify-center text-inic">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Telefone</h4>
                    <p className="text-gray-500 text-sm">+239-224-2650</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-inic/5 rounded-xl flex items-center justify-center text-inic">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Emails Oficiais</h4>
                    <p className="text-gray-500 text-sm">inic@inic.gov.st</p>
                    <p className="text-gray-500 text-sm">suporte@inic.gov.st</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:col-span-2">
                  <div className="w-12 h-12 bg-inic/5 rounded-xl flex items-center justify-center text-inic">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Endereço</h4>
                    <p className="text-gray-500 text-sm">Rua Salustino da Graça, Edifício do Gabinete do Primeiro Ministro, C.P. n.º 302, Cidade de São Tomé</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8">Envie-nos uma mensagem</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400">Seu Email</label>
                    <input type="email" placeholder="exemplo@email.com" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-inic transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400">Assunto</label>
                    <input type="text" placeholder="Como podemos ajudar?" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-inic transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Mensagem</label>
                  <textarea rows={6} placeholder="Descreva o seu pedido ou dúvida..." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-inic transition-all resize-none"></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <input type="checkbox" id="captcha" className="accent-inic" />
                    <label htmlFor="captcha">Não sou um robô (reCAPTCHA)</label>
                  </div>
                  <button type="submit" className="bg-inic text-white px-10 py-4 rounded-xl font-bold hover:bg-inic-light transition-all shadow-lg shadow-inic/20">
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Social Media & Widget */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Redes Sociais</h2>
              <a href="https://www.facebook.com/inicstp/" target="_blank" className="bg-[#1877F2] text-white p-8 rounded-3xl flex items-center justify-between hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-4">
                  <i className="fa-brands fa-facebook text-4xl"></i>
                  <div>
                    <h4 className="font-bold">Facebook</h4>
                    <p className="text-white/80 text-sm">Siga a nossa página oficial</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">1.2K</p>
                  <p className="text-[10px] font-bold uppercase">Seguidores</p>
                </div>
              </a>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-100 text-center">
               <img src="https://inic.gov.st/img/global/logo_menor.png" alt="INIC Identity" className="h-24 mx-auto mb-6" />
               <p className="text-sm text-gray-500 leading-relaxed mb-6">
                 O INIC é o seu parceiro na inovação. Explore os nossos serviços e contribua para um futuro mais digital.
               </p>
               <hr className="mb-6 border-gray-100" />
               <p className="text-xs font-bold text-inic">Disponíveis de Segunda a Sexta: 08:00 - 15:30</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
