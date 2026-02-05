
export interface ServicePackage {
  name: string;
  price: string;
  features: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  packages: ServicePackage[];
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  date: string;
  description: string;
  funder?: string;
  beneficiaries?: string;
  value?: string;
  status: 'Em curso' | 'Finalizado';
  image: string;
}

export interface BoardMember {
  id: number;
  name: string;
  role: string;
  image?: string;
}

export interface DocumentItem {
  id: number;
  title: string;
  category: 'Regulamentos' | 'Estratégia e Planos' | 'Pareceres';
}

export interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface PartnerItem {
  id: number;
  name: string;
  logo: string;
}

export interface AppContent {
  slides: SlideItem[];
  news: NewsItem[];
  partners: PartnerItem[];
  projects: ProjectItem[];
  documents: DocumentItem[];
  boards: {
    [key: string]: BoardMember[];
  };
  serviceDetails: ServiceDetail[];
}
