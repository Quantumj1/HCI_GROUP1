
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import SettingsPanel from '@/components/layout/SettingsPanel';

const Header = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    setSearchInput('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== '') {
      if (location.pathname !== '/') {
        navigate(`/?search=${encodeURIComponent(searchInput.trim())}`);
      } else {
        // If already on home page, update URL with search param
        navigate({
          pathname: '/',
          search: `?search=${encodeURIComponent(searchInput.trim())}`,
        });
      }
      setShowSearch(false);
    }
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20"
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-white">NewsFlow</span>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSearchToggle}
              className="text-white hover:bg-white/20"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleProfile}
              className="text-white hover:bg-white/20"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSettings}
              className="text-white hover:bg-white/20"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
        {showSearch && (
          <form onSubmit={handleSearchSubmit} className="p-4 bg-white/10 backdrop-blur-md">
            <input
              type="text"
              autoFocus
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search articles..."
              className="w-full p-2 rounded bg-white/20 text-white placeholder:text-gray-300 focus:outline-none"
            />
          </form>
        )}
      </motion.header>
      {showSettings && <SettingsPanel onClose={() => setShowSettings(false)} />}
    </>
  );
};

export default Header;
