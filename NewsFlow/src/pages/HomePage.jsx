import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import ArticleGrid from '@/components/news/ArticleGrid';
import CategoryFilters from '@/components/news/CategoryFilters';
import { useLocation } from 'react-router-dom';

const PAGE_SIZE = 10;

// Mock articles for fallback display
const mockArticles = [
  {
    id: '1',
    title: 'Welcome to NewsFlow!',
    description: 'This is a sample article. Please set your News API key to fetch real news.',
    url: '#',
    urlToImage: '',
    category: 'all',
  },
];

const HomePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchParam = queryParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedArticles, setSavedArticles] = useState([]);
  const [articles, setArticles] = useState(mockArticles);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [apiKey, setApiKey] = useState(''); // Add state for API key
  const loader = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('savedArticles');
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    setSearchQuery(searchParam);
  }, [searchParam]);

  const fetchArticles = useCallback(async (pageNum, category, query) => {
    if (!apiKey) {
      toast({
        title: 'API Key Missing',
        description: 'Please set your News API key in the HomePage component to fetch real news.',
      });
      setArticles(mockArticles);
      setHasMore(false);
      return;
    }

    const preferredGenres = JSON.parse(localStorage.getItem('preferredGenres')) || [];
    const genreFilter = category === 'all' ? preferredGenres.join(',') : category;
    const url = `https://newsapi.org/v2/top-headlines?category=${genreFilter}&pageSize=${PAGE_SIZE}&page=${pageNum}&q=${encodeURIComponent(query)}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.articles) {
        if (pageNum === 1) {
          setArticles(data.articles);
        } else {
          setArticles(prev => [...prev, ...data.articles]);
        }
        setHasMore(data.articles.length === PAGE_SIZE);
      } else {
        setHasMore(false);
        toast({
          title: 'No articles found',
          description: 'No news articles were found for your query.',
        });
      }
    } catch (error) {
      toast({
        title: 'Error fetching news',
        description: error.message,
      });
    }
  }, [apiKey]);

  useEffect(() => {
    setPage(1);
    fetchArticles(1, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery, fetchArticles]);

  useEffect(() => {
    if (page === 1) return;
    fetchArticles(page, selectedCategory, searchQuery);
  }, [page, selectedCategory, searchQuery, fetchArticles]);

  const handleSaveArticle = (article) => {
    const isAlreadySaved = savedArticles.some(saved => saved.id === article.id);
    
    if (isAlreadySaved) {
      const updated = savedArticles.filter(saved => saved.id !== article.id);
      setSavedArticles(updated);
      localStorage.setItem('savedArticles', JSON.stringify(updated));
      toast({
        title: "Article removed",
        description: "Article removed from your saved list",
      });
    } else {
      const updated = [...savedArticles, article];
      setSavedArticles(updated);
      localStorage.setItem('savedArticles', JSON.stringify(updated));
      toast({
        title: "Article saved",
        description: "Article added to your reading list",
      });
    }
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (article.description && article.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [hasMore]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  return (
    <div className="container mx-auto px-4 py-4">
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-4"
      >
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20 w-full"
            />
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4"
      >
        <CategoryFilters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key="discover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.3 }}
        >
          <ArticleGrid 
            articles={filteredArticles} 
            savedArticles={savedArticles} 
            handleSaveArticle={handleSaveArticle} 
            onClearFilters={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
          />
          <div ref={loader} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
