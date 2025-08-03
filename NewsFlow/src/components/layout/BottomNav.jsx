
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Bookmark, LayoutGrid, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/bookmarks', icon: Bookmark, label: 'Bookmarks' },
  { to: '/categories', icon: LayoutGrid, label: 'Categories' },
  { to: '/notifications', icon: Bell, label: 'Notifications' },
  { to: '/profile', icon: User, label: 'Profile' },
];

const BottomNav = () => {
  return (
    <nav className="sticky bottom-0 bg-white/10 backdrop-blur-lg border-t border-white/20">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center w-full h-full text-purple-300 transition-colors duration-300 hover:text-white',
                { 'text-white': isActive }
              )
            }
          >
            {({ isActive }) => (
              <div className="relative flex flex-col items-center">
                <item.icon className="w-6 h-6" />
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute -bottom-1 h-1 w-1 bg-white rounded-full"
                  />
                )}
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
