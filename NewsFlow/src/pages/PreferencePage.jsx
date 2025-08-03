import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const genresList = [
  'Business',
  'Entertainment',
  'General',
  'Health',
  'Science',
  'Sports',
  'Technology',
];

const PreferencePage = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const handleSave = () => {
    localStorage.setItem('preferredGenres', JSON.stringify(selectedGenres));
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-700 to-indigo-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Select Your Preferred News Genres</h1>
      <div className="flex flex-col space-y-2 mb-6 max-h-60 overflow-y-auto w-full max-w-xs">
        {genresList.map((genre) => (
          <label key={genre} className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedGenres.includes(genre)}
              onChange={() => toggleGenre(genre)}
              className="form-checkbox h-5 w-5 text-purple-600"
            />
            <span>{genre}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleSave}
        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded shadow hover:bg-purple-100 transition"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default PreferencePage;

