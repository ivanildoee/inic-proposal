
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: any) => void;
  isScrolled: boolean;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, isScrolled, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ label, page, dropdown }: { label: string, page?: string, dropdown?: React.ReactNode }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div 
        className="relative group h-full flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          onClick={() => page && onNavigate(page)}
          className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 ${
            currentPage === page ? 'text-inic' : 'text-gray-700 hover:text-inic'
          }`}
        >
          {label}
          {dropdown && <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`}></i>}
        </button>
        {dropdown && isHovered && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] bg-white shadow-2xl border-t-2 border-inic py-6 px-8 z-50 animate-in fade-in slide-in-from-top-4 duration-300 rounded-b-2xl">
            {dropdown}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top Bar Moderna */}
      <div className={`bg-inic-dark text-white py-2 px-4 transition-all duration-500 hidden md:block ${isScrolled ? 'h-0 opacity-0 py-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-globe text-inic-accent"></i> www.inic.gov.st
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-inic-accent"></i> suporte@inic.gov.st
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-inic-accent"></i> +239 2242650
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com/inicstp/" target="_blank" className="hover:text-inic-accent transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="hover:text-inic-accent transition-colors"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-inic-accent transition-colors"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
            <img src="https://inic.gov.st/img/global/logo_medio.png" alt="INIC Logo" className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full">
            <NavItem label="Início" page="home" />
            
            <NavItem label="INIC" dropdown={
              <div className="grid grid-cols-1 gap-1">
                <button onClick={() => onNavigate('about')} className="flex items-center gap-4 w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors group">
                  <div className="w-10 h-10 rounded bg-inic/5 flex items-center justify-center text-inic group-hover:bg-inic group-hover:text-white transition-all">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold">Sobre nós</div>
                    <div className="text-[10px] text-gray-400">Nossa história e missão</div>
                  </div>
                </button>
                <button onClick={() => onNavigate('structure')} className="flex items-center gap-4 w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors group">
                   <div className="w-10 h-10 rounded bg-inic/5 flex items-center justify-center text-inic group-hover:bg-inic group-hover:text-white transition-all">
                    <i className="fa-solid fa-sitemap"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold">Estrutura</div>
                    <div className="text-[10px] text-gray-400">Órgãos Sociais e Organigrama</div>
                  </div>
                </button>
                <button onClick={() => onNavigate('contact')} className="flex items-center gap-4 w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors group">
                   <div className="w-10 h-10 rounded bg-inic/5 flex items-center justify-center text-inic group-hover:bg-inic group-hover:text-white transition-all">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold">Contacto</div>
                    <div className="text-[10px] text-gray-400">Fale com as nossas equipas</div>
                  </div>
                </button>
              </div>
            } />

            <NavItem label="Serviços" dropdown={
              <div className="grid grid-cols-12 gap-8">
                {/* Datacenter Group */}
                <div className="col-span-8">
                  <div className="px-2 py-1 text-[10px] font-black text-inic/40 uppercase tracking-widest border-b border-gray-100 mb-4">Datacenter</div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Backup", icon: "fa-cloud-arrow-up" },
                      { title: "Pasta Partilhada", icon: "fa-folder-tree" },
                      { title: "Alojamento & VPS", icon: "fa-server" },
                      { title: "Domínio gov.st", icon: "fa-globe" },
                      { title: "Email Institucional", icon: "fa-envelope-open-text" },
                      { title: "VPN", icon: "fa-shield-halved" }
                    ].map((s, i) => (
                      <button key={i} onClick={() => onNavigate('services')} className="flex items-center gap-3 p-3 hover:bg-inic/5 rounded-xl transition-all group">
                        <div className="w-10 h-10 shrink-0 rounded-lg bg-inic/5 flex items-center justify-center text-inic group-hover:bg-inic group-hover:text-white transition-all">
                          <i className={`fa-solid ${s.icon}`}></i>
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold group-hover:text-inic">{s.title}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                {/* Other Services */}
                <div className="col-span-4 border-l border-gray-100 pl-8">
                  <div className="px-2 py-1 text-[10px] font-black text-inic/40 uppercase tracking-widest border-b border-gray-100 mb-4">Outros</div>
                  <div className="flex flex-col gap-2">
                    <button onClick={() => onNavigate('services')} className="flex items-center gap-3 p-3 hover:bg-inic/5 rounded-xl transition-all group">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-inic/5 flex items-center justify-center text-inic group-hover:bg-inic group-hover:text-white transition-all">
                        <i className="fa-solid fa-graduation-cap"></i>
                      </div>
                      <div className="text-left font-bold text-xs">Capacitação</div>
                    </button>
                    <button onClick={() => onNavigate('services')} className="flex items-center gap-3 p-3 hover:bg-inic/5 rounded-xl transition-all group">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-inic/5 flex items-center justify-center text-inic group-hover:bg-inic group-hover:text-white transition-all">
                        <i className="fa-solid fa-briefcase"></i>
                      </div>
                      <div className="text-left font-bold text-xs">Consultoria</div>
                    </button>
                  </div>
                </div>
              </div>
            } />

            <NavItem label="Notícias" page="news" />
            <NavItem label="Documentações" page="documents" />
            <NavItem label="Projetos" page="projects" />
          </div>

          <div className="hidden lg:block">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-inic text-white px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-inic-light transition-all shadow-lg shadow-inic/20"
            >
              Falar Connosco
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-inic text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-80px)] overflow-y-auto pb-8 shadow-2xl">
            <div className="flex flex-col p-6 space-y-6">
              <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="text-left font-black text-inic text-xl uppercase">Início</button>
              <div className="space-y-4">
                <div className="font-bold text-gray-400 text-xs uppercase tracking-widest">Institucional</div>
                <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="block pl-4 text-gray-700 font-bold">Sobre nós</button>
                <button onClick={() => { onNavigate('structure'); setIsOpen(false); }} className="block pl-4 text-gray-700 font-bold">Estrutura</button>
              </div>
              <button onClick={() => { onNavigate('news'); setIsOpen(false); }} className="text-left font-black text-inic text-xl uppercase">Notícias</button>
              <button onClick={() => { onNavigate('services'); setIsOpen(false); }} className="text-left font-black text-inic text-xl uppercase">Serviços</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
