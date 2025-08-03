
import { Globe, TrendingUp, BookOpen, Cpu, HeartPulse } from 'lucide-react';

export const categories = [
  { id: 'all', name: 'For You', icon: Globe },
  { id: 'technology', name: 'Technology', icon: Cpu },
  { id: 'business', name: 'Business', icon: BookOpen },
  { id: 'science', name: 'Science', icon: TrendingUp },
  { id: 'health', name: 'Health', icon: HeartPulse },
];

export const mockArticles = [
  {
    id: 1,
    title: "Revolutionary AI Breakthrough Changes Everything",
    summary: "Scientists have developed a new AI system that can understand and generate human-like responses with unprecedented accuracy.",
    category: "technology",
    source: "Tech Today",
    publishedAt: "2h ago",
    readTime: "5 min",
    trending: true
  },
  {
    id: 2,
    title: "Global Markets Surge on Economic Recovery",
    summary: "Stock markets worldwide are experiencing significant gains as economic indicators point to a strong recovery.",
    category: "business",
    source: "Financial Times",
    publishedAt: "4h ago",
    readTime: "3 min",
    trending: false
  },
  {
    id: 3,
    title: "New Space Mission Discovers Potentially Habitable Planet",
    summary: "NASA's latest space exploration mission has identified a planet that could potentially support human life.",
    category: "science",
    source: "Space News",
    publishedAt: "6h ago",
    readTime: "7 min",
    trending: true
  },
  {
    id: 4,
    title: "Breakthrough in Cancer Treatment Shows Promise",
    summary: "Researchers have developed a new treatment method that shows remarkable success rates in early trials.",
    category: "health",
    source: "Medical Journal",
    publishedAt: "8h ago",
    readTime: "6 min",
    trending: false
  },
  {
    id: 5,
    title: "Climate Change Solutions Gain Momentum",
    summary: "New renewable energy technologies are being deployed at an unprecedented scale across the globe.",
    category: "science",
    source: "Environmental Today",
    publishedAt: "10h ago",
    readTime: "4 min",
    trending: true
  },
  {
    id: 6,
    title: "Tech Giants Announce Major Partnership",
    summary: "Leading technology companies have formed an alliance to develop next-generation computing solutions.",
    category: "technology",
    source: "Tech Insider",
    publishedAt: "12h ago",
    readTime: "5 min",
    trending: false
  }
];
