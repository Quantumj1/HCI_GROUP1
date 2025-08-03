import React, { useState } from 'react';

const genresList = [
  'Business',
  'Entertainment',
  'General',
  'Health',
  'Science',
  'Sports',
  'Technology',
];

const SettingsPanel = ({ onClose }) => {
  const [font, setFont] = useState('sans-serif');
  const [color, setColor] = useState('#ffffff');
  const [theme, setTheme] = useState('light');
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleFontChange = (e) => {
    setFont(e.target.value);
    document.body.style.fontFamily = e.target.value;
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    document.body.style.color = e.target.value;
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    if (e.target.value === 'dark') {
      document.body.style.backgroundColor = '#1e293b'; // slate-900
    } else {
      document.body.style.backgroundColor = '#ffffff';
    }
  };

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-slate-800 p-6 rounded-lg w-80 text-white max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <div className="mb-4">
          <label className="block mb-1">Font</label>
          <select value={font} onChange={handleFontChange} className="w-full p-2 rounded bg-slate-700">
            <option value="sans-serif">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Text Color</label>
          <input type="color" value={color} onChange={handleColorChange} className="w-full h-10 p-1 rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Theme</label>
          <select value={theme} onChange={handleThemeChange} className="w-full p-2 rounded bg-slate-700">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold">Preferred News Genres</label>
          <div className="flex flex-col space-y-1 max-h-40 overflow-y-auto">
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
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
