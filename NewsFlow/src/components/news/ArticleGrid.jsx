
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArticleCard from './ArticleCard';

const ArticleGrid = ({ articles, savedArticles, handleSaveArticle, onClearFilters, isSavedList = false }) => {
  if (articles.length === 0 && !isSavedList) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">No Articles Found</h3>
        <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
        <Button
          onClick={onClearFilters}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
        >
          Clear Filters
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {articles.map((article, index) => (
        <ArticleCard
          key={article.id}
          article={article}
          index={index}
          isSaved={savedArticles.some(saved => saved.id === article.id)}
          handleSaveArticle={handleSaveArticle}
          isSavedList={isSavedList}
        />
      ))}
    </div>
  );
};

export default ArticleGrid;
