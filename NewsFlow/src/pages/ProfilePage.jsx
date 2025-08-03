import React, { useState } from 'react';

const ProfilePage = () => {
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNotificationsToggle = () => setNotificationsEnabled(!notificationsEnabled);

  const handleSave = () => {
    // Save profile settings logic here (e.g., API call or localStorage)
    alert('Profile settings saved!');
  };

  return (
    <div className="container mx-auto px-4 py-6 text-white max-w-md">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="w-full p-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
        />
      </div>
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={handleNotificationsToggle}
          id="notifications"
          className="mr-2"
        />
        <label htmlFor="notifications" className="font-semibold">
          Enable Notifications
        </label>
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
      >
        Save Settings
      </button>
    </div>
  );
};

export default ProfilePage;
