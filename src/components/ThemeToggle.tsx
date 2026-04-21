import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Read state from DOM — FOUC script already applied the class before hydration
    setIsLight(document.documentElement.classList.contains('light-mode'));
  }, []);

  const toggle = () => {
    const newIsLight = !isLight;
    setIsLight(newIsLight);
    if (newIsLight) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('website-theme-preference', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('website-theme-preference', 'dark');
    }
  };

  return (
    <button
      id="theme-toggle-btn"
      className="theme-toggle-btn"
      aria-label="Toggle light/dark mode"
      onClick={toggle}
    >
      {isLight ? '🌙' : '☀️'}
    </button>
  );
}
