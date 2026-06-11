import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  // Ambil tema awal dari localStorage atau default ke 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Sinkronisasikan tema dengan dokumen saat state berubah
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Ubah ke mode ${theme === 'light' ? 'gelap' : 'terang'}`}
    >
      {theme === 'light' ? (
        <Moon className="icon-theme" size={20} />
      ) : (
        <Sun className="icon-theme" size={20} />
      )}
    </button>
  );
}
