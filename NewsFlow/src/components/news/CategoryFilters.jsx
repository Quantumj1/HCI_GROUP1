
import React from 'react';
import { categories } from '@/data/newsData';
import { motion } from 'framer-motion';

const CategoryFilters = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="relative">
      <div className="flex space-x-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {categories.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="relative px-3 py-1.5 text-sm font-medium text-white whitespace-nowrap focus:outline-none"
            >
              <span className={`relative z-10 ${isActive ? 'text-purple-900' : 'text-purple-200'}`}>
                {category.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilters;
