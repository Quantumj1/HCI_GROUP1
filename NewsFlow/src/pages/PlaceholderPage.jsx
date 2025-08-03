import React from 'react';
import { motion } from 'framer-motion';
import { Inbox } from 'lucide-react';

const PlaceholderPage = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center h-full text-center text-white p-8"
    >
      <Inbox className="w-24 h-24 text-purple-300 mb-6" />
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-purple-200 max-w-sm">This page is under construction. Come back soon!</p>
    </motion.div>
  );
};

export default PlaceholderPage;