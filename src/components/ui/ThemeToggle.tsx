import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'site-theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light' || currentTheme === 'dark') {
      setTheme(currentTheme);
    }
  }, []);

  function toggleTheme() {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme === 'light'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className={`theme-toggle__track theme-toggle__track--${theme}`}>
        <span className="theme-toggle__icon theme-toggle__icon--light" aria-hidden="true">
          <img src="/assets/icons/theme/light-mode.png" alt="" />
        </span>
        <span className="theme-toggle__thumb" aria-hidden="true" />
        <span className="theme-toggle__icon theme-toggle__icon--dark" aria-hidden="true">
          <img src="/assets/icons/theme/night-mode.png" alt="" />
        </span>
      </span>
    </button>
  );
}