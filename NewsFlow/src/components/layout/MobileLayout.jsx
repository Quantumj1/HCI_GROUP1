
import React from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';

const MobileLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-grow overflow-y-auto scrollbar-hide">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default MobileLayout;
