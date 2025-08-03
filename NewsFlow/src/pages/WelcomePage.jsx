import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = ({ onContinue }) => {
  const navigate = useNavigate();

  const handlePreference = () => {
    navigate('/preferences');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-700 to-indigo-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to NewsFlow</h1>
      <p className="mb-6 text-center max-w-md">
        Your personalized news reader. Stay informed with the latest news tailored to your preferences.
      </p>
      <button
        onClick={handlePreference}
        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded shadow hover:bg-purple-100 transition mb-4"
      >
        Set Preferences
      </button>
      <button
        onClick={onContinue}
        className="bg-purple-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-purple-700 transition"
      >
        Skip and Continue
      </button>
    </div>
  );
};

export default WelcomePage;
