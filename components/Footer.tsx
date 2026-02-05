
import React from 'react';
import { useApp } from '../App';

interface FooterProps {
  onNavigate: (page: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useApp();
  return (
    <footer className="bg-inic dark:bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <img src="https://inic.gov.st/img/global/logo_menor.png" alt="INIC Logo" className="h-16 w-auto mb-6 brightness-0 invert" />
          <p className="text-gray-300 text-sm leading-relaxed">
            {t('footerAbout')}
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-inic-light pb-2 inline-block uppercase">{t('usefulLinks')}</h4>
          <ul className="space-y-4">
            <li><a href="https://efactura.financas.gov.st/" target="_blank" className="text-gray-300 hover:text-white transition-colors text-sm">e-Factura | Finanças</a></li>
            <li><a href="https://inss.gov.st/" target="_blank" className="text-gray-300 hover:text-white transition-colors text-sm">Instituto de Segurança Social</a></li>
            <li><a href="https://dgrn.gov.st/" target="_blank" className="text-gray-300 hover:text-white transition-colors text-sm">DGRN - Registos e Notariado</a></li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-inic-light pb-2 inline-block uppercase">{t('location')}</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><i className="fa-solid fa-location-dot mr-2"></i> Rua Salustino da Graça, Edifício do Gabinete do Primeiro Ministro</li>
            <li><i className="fa-solid fa-map-pin mr-2"></i> C.P. n.º 302, Cidade de São Tomé</li>
            <li><i className="fa-solid fa-phone mr-2"></i> (+239) 2242650</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-inic-light pb-2 inline-block uppercase">{t('social')}</h4>
          <div className="flex gap-4 mb-6">
            <a href="https://www.facebook.com/inicstp/" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
          <div className="bg-white/5 p-4 rounded-lg border border-white/5">
            <span className="text-xs text-inic-accent font-bold uppercase block mb-1">Facebook Live</span>
            <p className="text-xs text-gray-400">1.2K Seguidores</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>Copyright © {new Date().getFullYear()} {t('copyright')} - INIC</p>
        <div className="flex gap-4">
          <button onClick={() => onNavigate('contact')} className="hover:text-white">Políticas de Privacidade</button>
          <button onClick={() => onNavigate('contact')} className="hover:text-white">Termos de Uso</button>
        </div>
      </div>
    </footer>
  );
};
