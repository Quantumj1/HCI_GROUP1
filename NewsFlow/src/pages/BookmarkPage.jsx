import React, { useState, useEffect } from 'react';
import ArticleGrid from '@/components/news/ArticleGrid';
import { toast } from '@/components/ui/use-toast';

const BookmarkPage = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedArticles');
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }
  }, []);

  const handleSaveArticle = (article) => {
    const isAlreadySaved = savedArticles.some(saved => saved.id === article.id);

    if (isAlreadySaved) {
      const updated = savedArticles.filter(saved => saved.id !== article.id);
      setSavedArticles(updated);
      localStorage.setItem('savedArticles', JSON.stringify(updated));
      toast({
        title: "Bookmark removed",
        description: "Article removed from your bookmarks",
      });
    } else {
      const updated = [...savedArticles, article];
      setSavedArticles(updated);
      localStorage.setItem('savedArticles', JSON.stringify(updated));
      toast({
        title: "Bookmark added",
        description: "Article added to your bookmarks",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold text-white mb-6">Your Bookmarks</h1>
      {savedArticles.length === 0 ? (
        <p className="text-gray-400">You have no bookmarked articles.</p>
      ) : (
        <ArticleGrid
          articles={savedArticles}
          savedArticles={savedArticles}
          handleSaveArticle={handleSaveArticle}
          isSavedList={true}
        />
      )}
    </div>
  );
};

export default BookmarkPage;
