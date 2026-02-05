
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Structure } from './pages/Structure';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { Documents } from './pages/Documents';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Services } from './pages/Services';
import { NewsItem } from './types';
import { Language, TRANSLATIONS } from './translations';

type Page = 'home' | 'about' | 'structure' | 'contact' | 'projects' | 'documents' | 'news' | 'services' | 'news-detail';

interface AppContextType {
  language: Language;
  setLanguage: (l: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  t: (key: keyof typeof TRANSLATIONS['pt']) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState<Language>('pt');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const t = (key: keyof typeof TRANSLATIONS['pt']): string => {
    return TRANSLATIONS[language][key] || TRANSLATIONS['pt'][key];
  };

  const navigate = (page: Page, data?: any) => {
    if (page === 'news-detail' && data) {
      setSelectedNews(data);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'about': return <About />;
      case 'structure': return <Structure />;
      case 'contact': return <Contact />;
      case 'projects': return <Projects />;
      case 'documents': return <Documents />;
      case 'news': return <News onNavigate={navigate} />;
      case 'news-detail': return selectedNews ? <NewsDetail news={selectedNews} onBack={() => navigate('news')} /> : <News onNavigate={navigate} />;
      case 'services': return <Services />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, t }}>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 bg-white text-gray-900 dark:bg-inic-dark dark:text-gray-100`}>
        <Navbar onNavigate={navigate} isScrolled={isScrolled} currentPage={currentPage} />
        
        <main className="flex-grow pt-[80px]">
          {renderPage()}
        </main>

        <Footer onNavigate={navigate} />

        {/* Floating Scroll Top Button */}
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-[150] w-14 h-14 bg-inic text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:bg-inic-light hover:-translate-y-2 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up text-xl"></i>
        </button>
      </div>
    </AppContext.Provider>
  );
};

export default App;
