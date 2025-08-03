import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import MobileLayout from '@/components/layout/MobileLayout';
import PlaceholderPage from '@/pages/PlaceholderPage';
import CategoriesPage from '@/pages/CategoriesPage';
import NotificationsPage from '@/pages/NotificationsPage';
import BookmarkPage from '@/pages/BookmarkPage';
import WelcomePage from '@/pages/WelcomePage';
import PreferencePage from '@/pages/PreferencePage';
import ProfilePage from '@/pages/ProfilePage';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      setShowWelcome(false);
    }
  }, []);

  const handleWelcomeComplete = () => {
    localStorage.setItem('hasSeenWelcome', 'true');
    setShowWelcome(false);
  };

  return (
    <div className="bg-slate-900 flex items-center justify-center min-h-screen">
      <Helmet>
        <title>NewsFlow - Your Personalized News Reader</title>
        <meta name="description" content="Stay informed with NewsFlow, your personalized news reader." />
      </Helmet>

      <div className="w-full max-w-sm h-screen sm:h-[95vh] sm:max-h-[800px] bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex flex-col shadow-2xl rounded-lg overflow-hidden">
        <Router>
          <MobileLayout>
            <Routes>
              {showWelcome ? (
                <Route path="*" element={<WelcomePage onContinue={handleWelcomeComplete} />} />
              ) : (
                <>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/preferences" element={<PreferencePage />} />
                  <Route path="/bookmarks" element={<BookmarkPage />} />
                   <Route path="/categories" element={<CategoriesPage />} />
                   <Route path="/notifications" element={<NotificationsPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </>
              )}
            </Routes>
          </MobileLayout>
        </Router>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
