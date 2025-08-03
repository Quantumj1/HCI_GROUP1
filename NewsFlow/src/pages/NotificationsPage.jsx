import React, { useState } from 'react';

const NotificationsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [emailAddress, setEmailAddress] = useState('');
  const [pushNotifications, setPushNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [frequency, setFrequency] = useState('instant');
  const [soundNotification, setSoundNotification] = useState('none');

  const [showPopup, setShowPopup] = useState(false);

  const playSound = (sound) => {
    const sounds = {
      chime: new Audio('/sounds/chime.mp3'),
      ding: new Audio('/sounds/ding.mp3'),
      alert: new Audio('/sounds/alert.mp3'),
      beep: new Audio('/sounds/beep.mp3'),
      buzz: new Audio('/sounds/buzz.mp3'),
      ring: new Audio('/sounds/ring.mp3'),
      notify: new Audio('/sounds/notify.mp3'),
    };
    if (sound !== 'none' && sounds[sound]) {
      sounds[sound].play();
    }
  };

  const handleSave = () => {
    // Save notification settings logic here (e.g., API call or localStorage)
    alert('Notification settings saved!');
    playSound(soundNotification);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Notification settings saved!
        </div>
      )}
      <div className="container mx-auto px-4 py-6 text-white max-w-md">
        <h1 className="text-3xl font-bold mb-6">Notifications</h1>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            id="notificationsEnabled"
            className="mr-2"
          />
          <label htmlFor="notificationsEnabled" className="font-semibold">
            Enable Notifications
          </label>
        </div>

      {notificationsEnabled && (
        <>
          <div className="mb-4">
            <p className="font-semibold mb-2">Notification Types</p>
            <div className="flex flex-col space-y-2">
          <label className="flex flex-col">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="mr-2"
              />
              Email Notifications
            </div>
            {emailNotifications && (
              <input
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 p-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
              />
            )}
          </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={pushNotifications}
                  onChange={() => setPushNotifications(!pushNotifications)}
                  className="mr-2"
                />
                Push Notifications
              </label>
              <label className="flex flex-col">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={smsNotifications}
                    onChange={() => setSmsNotifications(!smsNotifications)}
                    className="mr-2"
                  />
                  SMS Notifications
                </div>
                {smsNotifications && (
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-1 p-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                  />
                )}
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="frequency" className="block font-semibold mb-2">
              Notification Frequency
            </label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-2 rounded bg-violet-200 border border-white/30 text-black focus:outline-none"
            >
              <option value="instant">Instant</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="hourly">Hourly</option>
              <option value="monthly">Monthly</option>
              <option value="never">Never</option>
            </select>
          </div>
        </>
      )}

          <div className="mb-6">
            <label htmlFor="soundNotification" className="block font-semibold mb-2">
              Sound Notification
            </label>
            <select
              id="soundNotification"
              value={soundNotification}
              onChange={(e) => setSoundNotification(e.target.value)}
              className="w-full p-2 rounded bg-violet-200 border border-white/30 text-black focus:outline-none mb-4"
            >
              <option value="none">None</option>
              <option value="chime">Chime</option>
              <option value="ding">Ding</option>
              <option value="alert">Alert</option>
              <option value="beep">Beep</option>
              <option value="buzz">Buzz</option>
              <option value="ring">Ring</option>
              <option value="notify">Notify</option>
            </select>
          </div>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
          >
            Save Settings
          </button>
      </div>
    </>
  );
};

export default NotificationsPage;
