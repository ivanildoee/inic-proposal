
import React, { useState, useEffect } from 'react';
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

type Page = 'home' | 'about' | 'structure' | 'contact' | 'projects' | 'documents' | 'news' | 'services' | 'news-detail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: Page, data?: any) => {
    if (page === 'news-detail' && data) {
      setSelectedNews(data);
    }
    setCurrentPage(page);
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
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar onNavigate={navigate} isScrolled={isScrolled} currentPage={currentPage} />
      <main className="flex-grow pt-[80px]">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
