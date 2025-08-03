
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { categories } from '@/data/newsData';

const ArticleCard = ({ article, index, isSaved, handleSaveArticle, isSavedList }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border-purple-300/30"
            >
              {categories.find(cat => cat.id === article.category)?.name}
            </Badge>
            {isSavedList ? (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Saved
              </Badge>
            ) : article.trending && (
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            )}
          </div>

          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
            {article.title}
          </h3>

          <p className="text-gray-300 text-sm mb-3 flex-1 line-clamp-3">
            {article.summary}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
            <span>{article.source}</span>
            <div className="flex items-center space-x-3">
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {article.readTime}
              </span>
              <span>{article.publishedAt}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast({
                title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
              })}
              className="border-white/20 text-white hover:bg-white/20 text-xs px-2 h-8"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Read More
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSaveArticle(article)}
              className={`w-8 h-8 ${
                isSaved
                  ? 'text-yellow-400 hover:text-yellow-300'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Star className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ArticleCard;
